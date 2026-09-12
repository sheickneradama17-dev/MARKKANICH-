/**
 * Utility for downloading plain text, markdown, CSV, or JSON files.
 * Works seamlessly across all desktop and mobile browsers.
 */
export function downloadTextFile(
  content: string,
  fileName: string,
  mimeType: string = 'text/plain;charset=utf-8'
): boolean {
  try {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1500);
    return true;
  } catch (error) {
    console.error('[Download Text File Error]:', error);
    return false;
  }
}
