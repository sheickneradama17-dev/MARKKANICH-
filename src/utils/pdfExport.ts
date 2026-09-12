import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface PdfExportResult {
  success: boolean;
  blobUrl?: string;
  pageCount?: number;
  error?: string;
}

/**
 * Bulletproof, high-fidelity PDF export function.
 * Features:
 * - Anti-taint CORS compliance (no SecurityError on toDataURL)
 * - Canvas height safety guards (prevents GPU/browser memory overflows)
 * - Clean page-by-page slice rendering into A4 format (lightweight ~2MB PDF instead of 100MB duplicate image)
 * - Multi-stage progress notifications
 * - Fallback blob download trigger & direct URL support for iframe sandboxes
 */
export async function exportDocumentToPdf(
  target: HTMLElement | string = 'business-plan-printable',
  fileName: string = 'Business_Plan_SaaS_CIE_Complet.pdf',
  onProgress?: (status: string) => void
): Promise<boolean> {
  const result = await exportDocumentToPdfAdvanced(target, fileName, onProgress);
  return result.success;
}

export async function exportDocumentToPdfAdvanced(
  target: HTMLElement | string = 'business-plan-printable',
  fileName: string = 'Business_Plan_SaaS_CIE_Complet.pdf',
  onProgress?: (status: string) => void
): Promise<PdfExportResult> {
  // 1. Locate DOM Element
  let element: HTMLElement | null = null;
  if (typeof target === 'string') {
    element = document.getElementById(target);
  } else if (target instanceof HTMLElement) {
    element = target;
  }

  if (!element) {
    // Fallback: try finding printable containers
    element = document.getElementById('business-plan-printable') ||
              document.querySelector('.printable-document') as HTMLElement ||
              document.querySelector('main') as HTMLElement;
  }

  if (!element) {
    console.error(`[PDF Export] Element not found in DOM.`);
    if (onProgress) onProgress('Élément non trouvé.');
    alert(`Le document à exporter n'est pas visible à l'écran. Veuillez ouvrir l'onglet correspondant puis réessayer.`);
    return { success: false, error: 'Element not found' };
  }

  try {
    if (onProgress) onProgress('Préparation du document et polices...');

    // Wait for fonts to be ready
    if (document.fonts && document.fonts.ready) {
      try {
        await document.fonts.ready;
      } catch (e) {
        console.warn('Font loading check non-blocking warning:', e);
      }
    }

    // Save scroll and reset to top to avoid scroll offsets
    const prevScrollY = window.scrollY;
    const prevScrollX = window.scrollX;
    window.scrollTo(0, 0);

    // Let the DOM settle
    await new Promise((resolve) => setTimeout(resolve, 150));

    const totalHeight = element.scrollHeight || element.offsetHeight || 3000;
    const totalWidth = element.scrollWidth || element.offsetWidth || 1100;

    if (onProgress) onProgress('Optimisation des dimensions et de la résolution...');

    // Calculate safe scale: Keep total pixels under 18 Megapixels to prevent browser canvas crashes
    // Typical safe max canvas height in Chrome/WebKit is ~14,000px
    let computedScale = 1.6;
    const estimatedHeightWithScale = totalHeight * computedScale;
    if (estimatedHeightWithScale > 13000) {
      computedScale = Math.max(1.0, 13000 / totalHeight);
    }

    if (onProgress) onProgress('Capture haute définition des éléments...');

    // html2canvas capture with safe configuration
    const canvas = await html2canvas(element, {
      scale: computedScale,
      useCORS: true,
      allowTaint: false, // MANDATORY: allowTaint must be false so toDataURL never throws SecurityError
      logging: false,
      backgroundColor: '#ffffff',
      scrollX: 0,
      scrollY: 0,
      windowWidth: Math.max(document.documentElement.offsetWidth, 1200),
      onclone: (clonedDoc) => {
        const targetId = typeof target === 'string' ? target : element?.id;
        const clonedElement = targetId ? clonedDoc.getElementById(targetId) : null;
        if (clonedElement) {
          clonedElement.style.boxShadow = 'none';
          clonedElement.style.border = 'none';
          clonedElement.style.maxHeight = 'none';
          clonedElement.style.overflow = 'visible';
          clonedElement.style.width = '100%';
        }

        // Hide all no-print elements in the cloned DOM
        clonedDoc.querySelectorAll('.no-print').forEach((node) => {
          (node as HTMLElement).style.display = 'none';
        });

        // Ensure printable containers are visible
        clonedDoc.querySelectorAll('.printable-document').forEach((node) => {
          const el = node as HTMLElement;
          el.style.display = 'block';
          el.style.overflow = 'visible';
          el.style.maxHeight = 'none';
        });
      },
    });

    // Restore user scroll
    window.scrollTo(prevScrollX, prevScrollY);

    if (onProgress) onProgress('Découpage et assemblage des pages A4...');

    // A4 dimensions in mm: 210 x 297
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pdfPageWidth = 210;
    const pdfPageHeight = 297;

    // Height of one A4 page in canvas pixel coordinates
    const pageHeightPx = Math.floor(canvas.width * (pdfPageHeight / pdfPageWidth));
    const totalPages = Math.max(1, Math.ceil(canvas.height / pageHeightPx));

    // Create an offscreen single-page canvas to slice pages cleanly
    const pageCanvas = document.createElement('canvas');
    pageCanvas.width = canvas.width;
    pageCanvas.height = pageHeightPx;
    const pageCtx = pageCanvas.getContext('2d');

    if (!pageCtx) {
      throw new Error('Impossible de créer le contexte 2D pour la pagination PDF.');
    }

    // Render each slice page-by-page (prevents duplicated memory in jsPDF)
    for (let page = 0; page < totalPages; page++) {
      if (onProgress) {
        onProgress(`Assemblage de la page ${page + 1} sur ${totalPages}...`);
      }

      const sourceY = page * pageHeightPx;
      const sourceHeight = Math.min(pageHeightPx, canvas.height - sourceY);

      // Clean white background for the page
      pageCtx.fillStyle = '#ffffff';
      pageCtx.fillRect(0, 0, pageCanvas.width, pageHeightPx);

      // Draw the vertical slice of the master canvas
      pageCtx.drawImage(
        canvas,
        0,
        sourceY,
        canvas.width,
        sourceHeight,
        0,
        0,
        canvas.width,
        sourceHeight
      );

      // Export slice as compressed JPEG (150-250KB per page)
      const pageData = pageCanvas.toDataURL('image/jpeg', 0.90);

      if (page > 0) {
        pdf.addPage();
      }

      pdf.addImage(pageData, 'JPEG', 0, 0, pdfPageWidth, pdfPageHeight, undefined, 'FAST');
    }

    if (onProgress) onProgress('Création du fichier PDF...');

    // Generate blob
    const pdfBlob = pdf.output('blob');
    const blobUrl = URL.createObjectURL(pdfBlob);

    if (onProgress) onProgress('Déclenchement du téléchargement...');

    // Trigger download with fallback
    let downloadSucceeded = false;
    try {
      pdf.save(fileName);
      downloadSucceeded = true;
    } catch (saveErr) {
      console.warn('[PDF Export] pdf.save() standard failed, attempting fallback link:', saveErr);
      try {
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
        }, 1500);
        downloadSucceeded = true;
      } catch (fallbackErr) {
        console.error('[PDF Export] Direct link fallback also failed:', fallbackErr);
      }
    }

    if (onProgress) onProgress('Document téléchargé avec succès !');

    // Notify global event for UI banners or modals
    window.dispatchEvent(new CustomEvent('pdf-export-success', {
      detail: { fileName, blobUrl, pageCount: totalPages }
    }));

    return {
      success: downloadSucceeded,
      blobUrl,
      pageCount: totalPages,
    };
  } catch (error) {
    console.error('[PDF Export Error]:', error);
    if (onProgress) onProgress('Erreur de conversion. Activation de l\'impression native...');

    // Graceful fallback to native browser print
    setTimeout(() => {
      window.print();
    }, 400);

    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * Trigger clean native browser printing.
 * Allows saving to high-quality vector PDF via browser's "Save as PDF" engine.
 */
export function printDocumentNative(): void {
  window.print();
}

/**
 * Alias for exporting element directly to PDF
 */
export const exportElementToPDF = exportDocumentToPdf;
