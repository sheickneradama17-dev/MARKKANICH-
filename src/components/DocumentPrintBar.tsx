import React, { useState } from 'react';
import { Printer, FileText, Download, CheckCircle2, Loader2, FileDown } from 'lucide-react';
import { exportDocumentToPdf } from '../utils/pdfExport';

interface DocumentPrintBarProps {
  title?: string;
  documentTitle?: string;
  subtitle?: string;
  documentSubtitle?: string;
  badgeText?: string;
  documentReference?: string;
  onPrint?: () => void;
  onDownloadPDF?: () => void;
  isGeneratingPDF?: boolean;
  downloadFileName?: string;
  targetElementId?: string;
  printOptions?: {
    label: string;
    action: () => void;
    active?: boolean;
  }[];
  customAction?: React.ReactNode;
}

export const DocumentPrintBar: React.FC<DocumentPrintBarProps> = ({
  title,
  documentTitle,
  subtitle,
  documentSubtitle,
  badgeText = "Document Imprimable",
  documentReference,
  onPrint,
  onDownloadPDF,
  isGeneratingPDF = false,
  downloadFileName,
  targetElementId,
  printOptions,
  customAction
}) => {
  const [internalExporting, setInternalExporting] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<string>('');

  const displayTitle = title || documentTitle || "Document Officiel";
  const displaySubtitle = subtitle || documentSubtitle;

  const handleDefaultPrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  const handleDownload = async () => {
    if (onDownloadPDF) {
      onDownloadPDF();
      return;
    }

    // Auto export
    const safeName = downloadFileName || `${displayTitle.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    setInternalExporting(true);
    setExportProgress('Préparation du PDF...');

    try {
      // Find suitable target element
      let target: HTMLElement | string = targetElementId || 'business-plan-printable';
      if (targetElementId && document.getElementById(targetElementId)) {
        target = targetElementId;
      } else if (document.getElementById('business-plan-printable')) {
        target = 'business-plan-printable';
      } else {
        const main = document.querySelector('main');
        if (main) target = main as HTMLElement;
      }

      await exportDocumentToPdf(target, safeName, (msg) => {
        setExportProgress(msg);
      });
    } catch (err) {
      console.error('[Download Error]:', err);
      // Fallback to print
      window.print();
    } finally {
      setInternalExporting(false);
      setTimeout(() => setExportProgress(''), 3000);
    }
  };

  const isLoading = isGeneratingPDF || internalExporting;

  return (
    <div className="no-print bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
      {/* Left: Info */}
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-slate-900 text-sm">{displayTitle}</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
              {badgeText}
            </span>
            {documentReference && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200">
                Réf: {documentReference}
              </span>
            )}
          </div>
          {displaySubtitle && (
            <p className="text-slate-600 mt-0.5 text-xs">
              {displaySubtitle}
            </p>
          )}
          <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline shrink-0" />
            <span>Format A4 standardisé • Téléchargement direct en fichier PDF ou impression haute fidélité.</span>
          </p>
          {exportProgress && (
            <p className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1.5 animate-pulse">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>{exportProgress}</span>
            </p>
          )}
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 flex-wrap self-end md:self-auto shrink-0">
        {/* Optional Secondary Options */}
        {printOptions && printOptions.map((opt, idx) => (
          <button
            key={idx}
            onClick={opt.action}
            className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
              opt.active
                ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span>{opt.label}</span>
          </button>
        ))}

        {customAction}

        {/* Main PDF Download Button */}
        <button
          onClick={handleDownload}
          disabled={isLoading}
          className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95"
          title="Télécharger directement le document au format PDF"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Génération en cours...</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Télécharger le PDF</span>
            </>
          )}
        </button>

        {/* Browser Print / Vector Save as PDF */}
        <button
          onClick={handleDefaultPrint}
          className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors active:scale-95"
          title="Imprimer ou enregistrer via la boîte d'impression du navigateur (PDF vectoriel 100% net)"
        >
          <Printer className="w-4 h-4 text-slate-600" />
          <span>Imprimer</span>
        </button>
      </div>
    </div>
  );
};
