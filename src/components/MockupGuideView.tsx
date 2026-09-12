import { useState, useRef } from 'react';
import { 
  Layers, 
  Smartphone, 
  Monitor, 
  Palette, 
  Printer, 
  Download, 
  FileText, 
  Share2, 
  ExternalLink,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Clock
} from 'lucide-react';
import { PrintHeader } from './PrintHeader';
import { DocumentPrintBar } from './DocumentPrintBar';
import { MobileAppSimulator } from './mockups/MobileAppSimulator';
import { WebDashboardSimulator } from './mockups/WebDashboardSimulator';
import { FigmaCreationGuide } from './mockups/FigmaCreationGuide';
import { exportElementToPDF } from '../utils/pdfExport';

interface MockupGuideViewProps {
  printMode?: boolean;
}

export function MockupGuideView({ printMode = false }: MockupGuideViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<'mobile' | 'web' | 'figma'>('mobile');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = async () => {
    if (!containerRef.current) return;
    setIsExporting(true);
    try {
      await exportElementToPDF(
        containerRef.current,
        'CIE_VoltaSync_Maquettes_UIUX_Guide_Figma.pdf'
      );
    } catch (error) {
      console.error("Erreur d'exportation PDF :", error);
      alert("Une erreur s'est produite lors de la génération du PDF.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div id="mockup-guide-container" ref={containerRef} className="printable-document space-y-6 max-w-7xl mx-auto pb-16">
      
      {/* Official Standard Print Header */}
      <PrintHeader
        documentRef="MKG-CIE-UX-2026-009"
        version="1.0"
        title="Dossier Spécifications UI/UX & Guide de Conception Figma"
        subtitle="Maquettes de l'Application Mobile Agent & du Dashboard Web Directeur"
      />

      {/* Action Bar with Print / PDF (hidden during print) */}
      <div className="no-print">
        <DocumentPrintBar
          documentTitle="Maquettes UI/UX & Guide Figma"
          documentReference="MKG-CIE-UX-2026-009"
          onPrint={handlePrint}
          onDownloadPDF={handleExportPDF}
          isGeneratingPDF={isExporting}
        />
      </div>

      {/* Hero Header Section */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4 no-print">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0056A6] text-xs font-bold border border-blue-100">
              <Layers className="w-3.5 h-3.5" />
              <span>Cahier des Charges Design System &amp; Ergonomie CIE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Maquettes UI/UX &amp; Guide Figma — VoltaSync CI
            </h1>
            <p className="text-sm text-slate-600 max-w-3xl">
              Spécifications exhaustives et simulateurs haute fidélité pour les deux interfaces clés : l&apos;application smartphone durcie des 450 releveurs et le cockpit de supervision du Directeur Général de la CIE.
            </p>
          </div>

          {/* Metric Badges */}
          <div className="flex flex-row md:flex-col gap-2 shrink-0">
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Écrans Définis</span>
              <strong className="text-lg font-black text-[#0056A6] font-display">9 Écrans</strong>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Charte Graphique</span>
              <strong className="text-xs font-mono font-bold text-slate-900 block">#0056A6 CIE</strong>
            </div>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSubTab('mobile')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
              activeSubTab === 'mobile'
                ? 'bg-[#0056A6] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>1. App Mobile Agent (5 Écrans)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('web')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
              activeSubTab === 'web'
                ? 'bg-[#003D7A] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>2. Dashboard Web Directeur (4 Écrans)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('figma')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
              activeSubTab === 'figma'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>3. Guide Complet Création Figma (Tokens &amp; Flux)</span>
          </button>
        </div>
      </div>

      {/* Print View: When printing, render all 3 sections sequentially */}
      <div className="hidden print:block space-y-12">
        <section className="page-break-after">
          <h2 className="text-xl font-black text-[#0056A6] uppercase tracking-wider mb-4 pb-2 border-b-2 border-[#0056A6]">
            Partie 1 : Spécifications de l&apos;App Mobile Agent (5 Écrans)
          </h2>
          <MobileAppSimulator />
        </section>

        <section className="page-break-after pt-8">
          <h2 className="text-xl font-black text-[#003D7A] uppercase tracking-wider mb-4 pb-2 border-b-2 border-[#003D7A]">
            Partie 2 : Spécifications du Dashboard Web Directeur (4 Écrans)
          </h2>
          <WebDashboardSimulator />
        </section>

        <section className="pt-8">
          <h2 className="text-xl font-black text-purple-800 uppercase tracking-wider mb-4 pb-2 border-b-2 border-purple-800">
            Partie 3 : Guide Pas à Pas pour Créer Tes Maquettes dans Figma
          </h2>
          <FigmaCreationGuide />
        </section>
      </div>

      {/* Screen View: Render currently active sub-tab */}
      <div className="no-print">
        {activeSubTab === 'mobile' && <MobileAppSimulator />}
        {activeSubTab === 'web' && <WebDashboardSimulator />}
        {activeSubTab === 'figma' && <FigmaCreationGuide />}
      </div>

      {/* Signature & Legal Compliance Block */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-slate-900">
            Markkanich Global • Direction du Design &amp; Architecture Logicielle
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Document technique rédigé par Adama F. Sheickner • contact: sheicknerl@markkanich.com • +225 0504496944
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
            ✓ Conforme Charte CIE &amp; Normes RGPD / ARTCI
          </span>
        </div>
      </div>

    </div>
  );
}
