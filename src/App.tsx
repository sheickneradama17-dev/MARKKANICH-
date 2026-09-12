import { useState, useEffect } from 'react';
import { ExecutiveHeader } from './components/ExecutiveHeader';
import { ExecutiveKpiBanner } from './components/ExecutiveKpiBanner';
import { DocumentPDFView } from './components/DocumentPDFView';
import { RoiCalculator } from './components/RoiCalculator';
import { PricingTable } from './components/PricingTable';
import { FinancialProjections } from './components/FinancialProjections';
import { RoadmapAndRisks } from './components/RoadmapAndRisks';
import { PitchDeckCIE } from './components/PitchDeckCIE';
import { TechnicalSpecsView } from './components/TechnicalSpecsView';
import { EmailAndStrategyView } from './components/EmailAndStrategyView';
import { ActionPlanTracker } from './components/ActionPlanTracker';
import { MockupGuideView } from './components/MockupGuideView';
import { Download, FileText, Printer, Building2, CheckCircle2, Mail, Phone, Globe, ExternalLink, X } from 'lucide-react';
import { printDocumentNative, exportDocumentToPdf } from './utils/pdfExport';
import { BUSINESS_INFO } from './data/businessPlanData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('pitch');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<{ fileName: string; blobUrl: string } | null>(null);

  useEffect(() => {
    const handlePdfSuccess = (e: Event) => {
      const customEvent = e as CustomEvent<{ fileName: string; blobUrl: string }>;
      if (customEvent.detail) {
        setDownloadSuccessToast(customEvent.detail);
        setTimeout(() => setDownloadSuccessToast(null), 8000);
      }
    };
    window.addEventListener('pdf-export-success', handlePdfSuccess);
    return () => window.removeEventListener('pdf-export-success', handlePdfSuccess);
  }, []);

  const handleQuickDownload = async () => {
    setActiveTab('document');
    setIsExporting(true);
    let checks = 0;
    while (!document.getElementById('business-plan-printable') && checks < 25) {
      await new Promise((resolve) => setTimeout(resolve, 40));
      checks++;
    }
    await new Promise((resolve) => setTimeout(resolve, 150));
    try {
      await exportDocumentToPdf('business-plan-printable', 'Business_Plan_SaaS_CIE_Complet.pdf');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Top Sticky Header */}
      <ExecutiveHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* KPI Highlight Strip */}
      <ExecutiveKpiBanner />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        
        {/* Tab 1: Deliverable 1 - Pitch Deck (10 Slides CIE) */}
        {activeTab === 'pitch' && (
          <div className="space-y-6">
            <PitchDeckCIE />
          </div>
        )}

        {/* Tab 2: Deliverable 2 - Technical Specifications (Software & Chinese Hardware RFQ) */}
        {activeTab === 'specs' && (
          <div className="space-y-6">
            <TechnicalSpecsView />
          </div>
        )}

        {/* Tab 3: Deliverable 3 - Outreach Email, Follow-Up & Strategy */}
        {activeTab === 'email' && (
          <div className="space-y-6">
            <EmailAndStrategyView />
          </div>
        )}

        {/* Tab 4: Deliverable 4 - Complete UI/UX Mockups & Figma Guide */}
        {activeTab === 'mockups' && (
          <div className="space-y-6">
            <MockupGuideView />
          </div>
        )}

        {/* Tab 5: Document Tab - Complete Official Dossier ready for PDF download */}
        {activeTab === 'document' && (
          <div className="space-y-6">
            {/* Action Bar helper above document */}
            <div className="no-print bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <FileText className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  <strong>Format Dossier Officiel :</strong> Ce document intègre l&apos;intégralité des 9 sections, tableaux financiers et annexes de validation.
                </span>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={printDocumentNative}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimer / PDF Navigateur</span>
                </button>
                <button
                  onClick={handleQuickDownload}
                  disabled={isExporting}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isExporting ? 'Génération...' : 'Télécharger le PDF (.pdf)'}</span>
                </button>
              </div>
            </div>

            {/* The Document */}
            <DocumentPDFView />
          </div>
        )}

        {/* Tab 5: Interactive ROI Simulator */}
        {activeTab === 'simulator' && (
          <div className="space-y-6">
            <RoiCalculator />
          </div>
        )}

        {/* Tab 6: Pricing Table & Financial Projections */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">
            <PricingTable />
            <FinancialProjections />
          </div>
        )}

        {/* Tab 7: Action Plan & Strategic Roadmap */}
        {activeTab === 'action' && (
          <div className="space-y-8">
            <ActionPlanTracker />
            <RoadmapAndRisks />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="no-print bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              VS
            </div>
            <div>
              <p className="font-bold text-slate-200">
                {BUSINESS_INFO.name} — Solution SaaS de Relevé &amp; Anti-Fraude CIE
              </p>
              <p className="text-[11px] text-slate-400">
                Proposé par {BUSINESS_INFO.founder} ({BUSINESS_INFO.title}) • {BUSINESS_INFO.email} • {BUSINESS_INFO.phone} • {BUSINESS_INFO.website}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setActiveTab('pitch')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Pitch Deck (10 Slides)
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => setActiveTab('mockups')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Maquettes UI/UX
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => setActiveTab('document')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Document PDF
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={handleQuickDownload}
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              Télécharger en PDF
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Download Success Toast */}
      {downloadSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-emerald-500/30 flex items-center justify-between gap-4 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                Fichier prêt !
              </p>
              <p className="text-[11px] text-slate-300 truncate max-w-[200px]">
                {downloadSuccessToast.fileName}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={downloadSuccessToast.blobUrl}
              download={downloadSuccessToast.fileName}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Ouvrir</span>
            </a>
            <button
              onClick={() => setDownloadSuccessToast(null)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
