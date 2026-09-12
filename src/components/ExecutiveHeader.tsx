import { useState, useRef, useEffect } from 'react';
import { 
  Download, 
  Printer, 
  FileText, 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Compass, 
  Presentation, 
  Calendar,
  Loader2, 
  CheckCircle2, 
  Share2, 
  Mail, 
  ChevronDown,
  Smartphone,
  FolderDown,
  Sparkles
} from 'lucide-react';
import { exportDocumentToPdfAdvanced, printDocumentNative } from '../utils/pdfExport';
import { DownloadCenterModal } from './DownloadCenterModal';

interface ExecutiveHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function ExecutiveHeader({ activeTab, setActiveTab }: ExecutiveHeaderProps) {
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [showPrintMenu, setShowPrintMenu] = useState<boolean>(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowPrintMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'pitch', label: '1. Pitch Deck (10 Slides CIE)', icon: Presentation, file: 'VoltaSync_CIE_Pitch_Deck_10_Slides.pdf', target: 'pitch-deck-container' },
    { id: 'specs', label: '2. Cahier des Charges (Dev/Chine)', icon: Compass, file: 'VoltaSync_CIE_Cahier_des_Charges_Technique.pdf', target: 'specs-container' },
    { id: 'email', label: '3. Email CIE & Prospection', icon: Mail, file: 'VoltaSync_CIE_Emails_Prospection_B2B.pdf', target: 'email-container' },
    { id: 'mockups', label: '4. Maquettes UI/UX & Figma', icon: Smartphone, file: 'VoltaSync_CIE_Maquettes_UIUX_Guide_Figma.pdf', target: 'mockup-guide-container' },
    { id: 'document', label: 'Dossier Business Plan (PDF)', icon: FileText, file: 'Business_Plan_SaaS_CIE_Complet.pdf', target: 'business-plan-printable' },
    { id: 'simulator', label: 'Simulateur ROI', icon: Calculator, file: 'VoltaSync_CIE_Rapport_ROI_Financier.pdf', target: 'roi-calculator-container' },
    { id: 'pricing', label: 'Grille & Finances', icon: DollarSign, file: 'VoltaSync_CIE_Grille_Tarifaire_Finances.pdf', target: 'pricing-container' },
    { id: 'action', label: 'Plan d\'Action', icon: Calendar, file: 'VoltaSync_CIE_Plan_Action_Strategique.pdf', target: 'action-container' },
  ];

  const currentItem = navItems.find((n) => n.id === activeTab) || navItems[4];
  const currentTabLabel = currentItem.label;

  const handleDownloadPdf = async () => {
    setIsExporting(true);
    setStatusMessage('Préparation du document...');

    try {
      let target: HTMLElement | string = currentItem.target;
      let targetEl = document.getElementById(target);
      if (!targetEl) {
        // Fallback to printable document or main
        targetEl = document.getElementById('business-plan-printable') || 
                   document.querySelector('.printable-document') as HTMLElement ||
                   document.querySelector('main') as HTMLElement;
        if (targetEl) target = targetEl;
      }

      await exportDocumentToPdfAdvanced(target, currentItem.file, (status) => {
        setStatusMessage(status);
      });
    } catch (err) {
      console.error(err);
      setStatusMessage('Erreur, redirection vers l\'impression...');
      setTimeout(() => printDocumentNative(), 350);
    } finally {
      setIsExporting(false);
      setTimeout(() => setStatusMessage(''), 4000);
    }
  };

  const printSpecificDocument = async (tabId: string) => {
    setShowPrintMenu(false);
    if (activeTab !== tabId) {
      setActiveTab(tabId);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    setTimeout(() => {
      printDocumentNative();
    }, 150);
  };

  const handlePrintCurrent = () => {
    printDocumentNative();
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            
            {/* Logo & Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-lg tracking-tight shadow-sm">
                  CIE
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-slate-900 text-base font-display">
                      VOLTASYNC CI
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-200">
                      Markkanich Global
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                      Business Plan Pro
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    SaaS de Relevé &amp; Anti-Fraude Compteurs d&apos;Électricité
                  </p>
                </div>
              </div>

              {/* Mobile Export buttons */}
              <div className="flex md:hidden items-center gap-1.5">
                <button
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1"
                  title="Tous les fichiers et téléchargements"
                >
                  <FolderDown className="w-3.5 h-3.5" />
                  <span>Exports</span>
                </button>
                <button
                  onClick={handleDownloadPdf}
                  disabled={isExporting}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                >
                  {isExporting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
                  <span>PDF</span>
                </button>
              </div>
            </div>

            {/* Action Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-2.5">
              {statusMessage && (
                <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md flex items-center gap-1.5 animate-pulse border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  {statusMessage}
                </span>
              )}

              {/* Open Download Center Modal */}
              <button
                onClick={() => setIsDownloadModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors shadow-xs"
                title="Accéder au centre de téléchargement complet (Tous les PDF, Markdown, TXT, CSV)"
              >
                <FolderDown className="w-4 h-4 text-emerald-700" />
                <span>Centre de Téléchargement</span>
              </button>

              {/* Print Menu Dropdown */}
              <div className="relative" ref={menuRef}>
                <div className="inline-flex rounded-xl shadow-xs">
                  <button
                    onClick={handlePrintCurrent}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-l-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border-r border-slate-200"
                    title="Imprimer directement le document actuellement affiché (format vectoriel A4)"
                  >
                    <Printer className="w-4 h-4 text-slate-600" />
                    <span>Imprimer</span>
                  </button>
                  <button
                    onClick={() => setShowPrintMenu(!showPrintMenu)}
                    className="inline-flex items-center px-2 py-2 rounded-r-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    title="Choisir quel document imprimer"
                  >
                    <ChevronDown className="w-3.5 h-3.5 text-slate-600" />
                  </button>
                </div>

                {/* Dropdown Box */}
                {showPrintMenu && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-3 py-1.5 border-b border-slate-100">
                      <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                        Options d&apos;Impression &amp; PDF
                      </p>
                      <p className="text-[11px] font-semibold text-emerald-800">
                        Document actif : {currentTabLabel}
                      </p>
                    </div>

                    <div className="py-1">
                      <button
                        onClick={() => printSpecificDocument(activeTab)}
                        className="w-full text-left px-3 py-2 text-xs hover:bg-emerald-50 text-slate-900 font-bold flex items-center gap-2"
                      >
                        <Printer className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>Imprimer le document actuel ({currentTabLabel})</span>
                      </button>
                    </div>

                    <div className="border-t border-slate-100 my-1"></div>

                    <div className="px-3 py-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Sélectionner un livrable à imprimer :
                    </div>

                    <div className="max-h-60 overflow-y-auto">
                      {navItems.map((item) => {
                        const Icon = item.icon;
                        const isCurrent = activeTab === item.id;
                        return (
                          <button
                            key={`print-opt-${item.id}`}
                            onClick={() => printSpecificDocument(item.id)}
                            className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                              isCurrent ? 'text-emerald-800 font-semibold bg-emerald-50/50' : 'text-slate-700'
                            }`}
                          >
                            <span className="flex items-center gap-2 truncate">
                              <Icon className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                              <span className="truncate">{item.label}</span>
                            </span>
                            {isCurrent && (
                              <span className="text-[9px] font-bold uppercase bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded ml-2 shrink-0">
                                Actif
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Direct PDF Download Button for Active View */}
              <button
                onClick={handleDownloadPdf}
                disabled={isExporting}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm shadow-emerald-700/20 active:scale-95 transition-all disabled:opacity-50"
                title={`Télécharger le PDF du document actif (${currentTabLabel})`}
              >
                {isExporting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Traitement...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Télécharger en PDF</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Secondary Navigation Row: Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pt-3 pb-1 mt-2 border-t border-slate-100 scrollbar-none text-xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-emerald-700 text-white font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Download Center Modal */}
      <DownloadCenterModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
}
