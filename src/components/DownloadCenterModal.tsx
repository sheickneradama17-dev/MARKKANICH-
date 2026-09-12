import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Presentation, 
  Compass, 
  Mail, 
  Smartphone, 
  Calculator, 
  Printer, 
  CheckCircle2, 
  Loader2, 
  FileDown, 
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { exportDocumentToPdfAdvanced, printDocumentNative } from '../utils/pdfExport';
import { downloadTextFile } from '../utils/fileDownloader';
import { SOFTWARE_SPEC_DATA, HARDWARE_SPEC_ENGLISH } from '../data/technicalSpecsData';
import { BUSINESS_INFO, CIE_CURRENT_PROBLEM, TOTAL_ROI_ANNUAL, ROI_RATIO_PERCENT, CIE_DECIDERS_FAQ } from '../data/businessPlanData';

interface DownloadCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const DownloadCenterModal: React.FC<DownloadCenterModalProps> = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab
}) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [lastBlobUrl, setLastBlobUrl] = useState<{ url: string; name: string } | null>(null);

  if (!isOpen) return null;

  const handleDownloadDossierPdf = async () => {
    setDownloadingId('document-pdf');
    setStatusMessage('Génération du Dossier Business Plan complet...');

    // Switch to document tab if needed
    if (activeTab !== 'document') {
      setActiveTab('document');
      let checks = 0;
      while (!document.getElementById('business-plan-printable') && checks < 25) {
        await new Promise((r) => setTimeout(r, 50));
        checks++;
      }
      await new Promise((r) => setTimeout(r, 150));
    }

    try {
      const result = await exportDocumentToPdfAdvanced(
        'business-plan-printable',
        'Business_Plan_SaaS_CIE_Complet.pdf',
        (msg) => setStatusMessage(msg)
      );

      if (result.blobUrl) {
        setLastBlobUrl({
          url: result.blobUrl,
          name: 'Business_Plan_SaaS_CIE_Complet.pdf'
        });
      }
    } catch (err) {
      console.error(err);
      setStatusMessage('Erreur directe, ouverture de la boîte d\'impression...');
      setTimeout(() => printDocumentNative(), 300);
    } finally {
      setDownloadingId(null);
    }
  };

  const handleDownloadActiveTabPdf = async (targetId: string, fileName: string) => {
    setDownloadingId(targetId);
    setStatusMessage('Génération du document en cours...');

    try {
      const targetElement = document.getElementById(targetId) || document.querySelector('main') as HTMLElement;
      const result = await exportDocumentToPdfAdvanced(
        targetElement,
        fileName,
        (msg) => setStatusMessage(msg)
      );

      if (result.blobUrl) {
        setLastBlobUrl({
          url: result.blobUrl,
          name: fileName
        });
      }
    } catch (err) {
      console.error(err);
      setTimeout(() => printDocumentNative(), 300);
    } finally {
      setDownloadingId(null);
    }
  };

  const handleDownloadHardwareRfqTxt = () => {
    const content = `REQUEST FOR QUOTATION (RFQ) - RUGGED ANDROID SMARTPHONES
Buyer: ${HARDWARE_SPEC_ENGLISH.buyerCompany}
Contact: ${HARDWARE_SPEC_ENGLISH.contactPerson} (${HARDWARE_SPEC_ENGLISH.email} / WhatsApp: ${HARDWARE_SPEC_ENGLISH.phoneWhatsApp})
Website: ${HARDWARE_SPEC_ENGLISH.website}
Initial Order: ${HARDWARE_SPEC_ENGLISH.initialQuantity}
Annual Forecast: ${HARDWARE_SPEC_ENGLISH.annualForecast}
Target FOB Price: ${HARDWARE_SPEC_ENGLISH.targetFobPrice500Units}

OVERVIEW:
${HARDWARE_SPEC_ENGLISH.overview}

SPECIFICATIONS:
${HARDWARE_SPEC_ENGLISH.sections.map(sec => `
[${sec.title}]
${sec.items.map(it => `- ${it.label}: ${it.spec} ${it.critical ? '*** CRITICAL REQUIREMENT ***' : ''}`).join('\n')}
`).join('\n')}

TRADE & SHIPPING TERMS:
- Payment Terms: 30% deposit T/T, 70% before shipment or Alibaba Trade Assurance
- Warranty: 24 months + 5% free spare parts buffer
- Certifications: CE, RoHS, FCC, GMS Certified (Google Mobile Services)
- Trade Terms: FOB Shenzhen or CIF Abidjan
`;
    downloadTextFile(content, 'RFQ_Rugged_Smartphones_CIE_Shenzhen.txt');
  };

  const handleDownloadSoftwareSpecMd = () => {
    const content = `# ${SOFTWARE_SPEC_DATA.title}
Version: ${SOFTWARE_SPEC_DATA.version} | Date: ${SOFTWARE_SPEC_DATA.date}
Client: ${SOFTWARE_SPEC_DATA.context.client}
Éditeur: ${BUSINESS_INFO.company} (${BUSINESS_INFO.founder}, ${BUSINESS_INFO.email})

## 1. CONTEXTE & OBJECTIFS
- Produit : ${SOFTWARE_SPEC_DATA.context.product}
- Objectif Principal : ${SOFTWARE_SPEC_DATA.context.mainGoal}

## 2. ARCHITECTURE TECHNIQUE
- Mobile : ${SOFTWARE_SPEC_DATA.architecture.mobile.framework} (BDD Locale: ${SOFTWARE_SPEC_DATA.architecture.mobile.localDb}, Sync Offline: ${SOFTWARE_SPEC_DATA.architecture.mobile.offlineSync})
- Web : ${SOFTWARE_SPEC_DATA.architecture.web.framework}, Styling: ${SOFTWARE_SPEC_DATA.architecture.web.styling}, Cartographie: ${SOFTWARE_SPEC_DATA.architecture.web.mapping}
- Backend : ${SOFTWARE_SPEC_DATA.architecture.backend.runtime}, ${SOFTWARE_SPEC_DATA.architecture.backend.apiStyle}, Auth: ${SOFTWARE_SPEC_DATA.architecture.backend.auth}
- Base de Données : ${SOFTWARE_SPEC_DATA.architecture.database.primary}, Cache: ${SOFTWARE_SPEC_DATA.architecture.database.cache}
- Reconnaissance OCR : Modèle On-Device ultra-rapide (<300ms) avec fallback serveur pour compteurs analogiques et digitaux

## 3. MODULES MOBILES RELEVEUR
${SOFTWARE_SPEC_DATA.mobileModules.map(m => `### ${m.name}\n${m.features.map(f => `- ${f}`).join('\n')}`).join('\n\n')}

## 4. MODULES WEB COCKPIT SUPERVISEUR
${SOFTWARE_SPEC_DATA.webModules.map(m => `### ${m.name}\n${m.features.map(f => `- ${f}`).join('\n')}`).join('\n\n')}
`;
    downloadTextFile(content, 'Cahier_des_Charges_Technique_VoltaSync_CIE.md', 'text/markdown;charset=utf-8');
  };

  const handleDownloadPitchDeckMd = () => {
    const pitchSlidesSummary = [
      { num: 1, title: "Modernisation Digitale du Relevé de Compteurs", desc: "Introduction exécutive, contexte Côte d'Ivoire et opportunité de récupérer 24 Mds FCFA de pertes non-techniques." },
      { num: 2, title: "L'Hémorragie Silencieuse : Diagnostic Terrain", desc: "450 agents, relevé manuel papier, 18-25 jours de cycle de facturation, contestations récurrentes d'abonnés." },
      { num: 3, title: "VoltaSync CI : La Solution Intégrée Clé-en-Main", desc: "Smartphone durci IP68/MIL-STD + Application OCR hors-ligne + Cockpit de supervision temps réel." },
      { num: 4, title: "La Révolution Technologique : Zéro Erreur, Zéro Fraude", desc: "OCR automatique en 300ms, GPS infalsifiable, horodatage cryptographique, détection d'anomalies IA." },
      { num: 5, title: "Modélisation Financière : Un ROI de 860% pour la CIE", desc: "Coût annuel : 64,8 M FCFA • Gains annuels : 622,5 M FCFA • Amortissement en 14 jours de cycle." },
      { num: 6, title: "Architecture & Intégration Sécurisée dans le SI CIE", desc: "Connecteurs SAP IS-U / Oracle CC&B, architecture cloud souverain, conformité ARTCI et chiffrement TLS 1.3." },
      { num: 7, title: "Déploiement Agile & Accompagnement du Changement", desc: "Phase pilote 60 jours sur 2 agences (Plateau / Yopougon), formation terrain des 450 agents, support 24/7." },
      { num: 8, title: "L'Offre Pilote Sans Risque Financier (PoC 60 Jours)", desc: "15 terminaux préconfigurés, licence SaaS gratuite 60 jours, paramétrage SI offert, zéro engagement initial." },
      { num: 9, title: "L'Équipe & Notre Partenaire Hardware Shenzhen", desc: "Markkanich Global, équipe d'ingénieurs ivoiriens, partenariat direct usine Shenzhen certifié CE/RoHS/GMS." },
      { num: 10, title: "Feuille de Route & Prochaines Étapes Opérationnelles", desc: "Signature convention pilote J+7, livraison terminaux J+21, déploiement pilote J+30, bilan COPIL J+90." }
    ];

    const content = `# PITCH DECK EXÉCUTIF VOLTASYNC CI x COMPAGNIE IVOIRIENNE D'ÉLECTRICITÉ (CIE)
Date: 2026 | Version: 2.4 Confidentielle
Contact: ${BUSINESS_INFO.founder} (${BUSINESS_INFO.phoneWhatsApp} / ${BUSINESS_INFO.email})

---
${pitchSlidesSummary.map(s => `
## SLIDE ${s.num} : ${s.title.toUpperCase()}
> ${s.desc}
---
`).join('\n')}
`;
    downloadTextFile(content, 'Pitch_Deck_CIE_VoltaSync_10_Slides.md', 'text/markdown;charset=utf-8');
  };

  const handleDownloadRoiCsv = () => {
    const csvContent = `Métrique,Valeur,Unité,Impact Annuel
Agents Équipés,450,Agents,Effectif total releveurs CIE
Factures Contestées Réduites,70%,Pourcentage,Gain de temps contentieux
Trésorerie Encaissée Plus Vite,15,Jours d'avance,Accélération BFR
Gain Annuel Total Estimé,${TOTAL_ROI_ANNUAL},FCFA/an,Surcoût évité et encaissement
Abonnement SaaS Annuel,64800000,FCFA/an,Option A Recommandée
Retour sur Investissement (ROI),${ROI_RATIO_PERCENT},%,9.6 FCFA gagnés pour 1 FCFA investi
Délai Amortissement Pilote,14,Jours,Remboursement dès le 1er cycle
`;
    downloadTextFile(csvContent, 'Synthese_ROI_CIE_VoltaSync.csv', 'text/csv;charset=utf-8');
  };

  const handleDownloadFaqMd = () => {
    const content = `# FAQ DÉCIDEURS CIE — VOLTASYNC CI
Document Confidentiel — Version Exécutive 2026
Destinataires : Direction Générale, Direction des Systèmes d'Information (DSI), Direction Financière (DAF), DPO

---

## RÉSUMÉ EXÉCUTIF
- Interopérabilité : Connecteurs certifiés SAP IS-U / Oracle CC&B + 100% Hors-ligne garanti
- Sécurité des Données : Conformité Loi ARTCI n° 2013-450, Cloud souverain Côte d'Ivoire ou On-Premise CIE, Chiffrement AES-256 / TLS 1.3
- Coût Total de Possession (TCO) : Amortissement en 14 jours, ROI de 960%, Pilote PoC 60 jours 100% gratuit

---

${CIE_DECIDERS_FAQ.map(f => `
### [${f.categoryLabel.toUpperCase()}] ${f.question}
**Cible :** ${f.badge}
**Réponse Immédiate :** ${f.shortAnswer}

${f.detailedAnswer}

**Garanties & Preuves :**
${f.proofPoints.map(p => `- ${p}`).join('\n')}
${f.keyMetric ? `\n> Indicateur Clé : ${f.keyMetric}` : ''}
---
`).join('\n')}
`;
    downloadTextFile(content, 'FAQ_Decideurs_CIE_Interoperabilite_Securite_TCO.md', 'text/markdown;charset=utf-8');
  };

  const deliverables = [
    {
      id: 'document-full',
      title: 'Dossier Business Plan Complet (Officiel)',
      badge: '10 Chapitres A4 • Inclus FAQ Décideurs',
      description: 'L\'intégralité de l\'étude stratégique : modèle économique, tarification, ROI, prévisions sur 3 ans, section 10 FAQ décideurs (Interopérabilité, Sécurité, TCO) et annexes.',
      pdfFileName: 'Business_Plan_SaaS_CIE_Complet.pdf',
      targetId: 'business-plan-printable',
      tabId: 'document',
      downloadPdfAction: handleDownloadDossierPdf,
      extraDownload: {
        label: 'FAQ Décideurs (.md)',
        action: handleDownloadFaqMd
      },
      icon: FileText,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      id: 'pitch-deck',
      title: 'Livrable 1 : Pitch Deck Exécutif CIE (10 Slides)',
      badge: 'Présentation Haute Décision',
      description: '10 diapositives stratégiques prêtes pour la soutenance devant le Directeur Général et le DSI de la CIE.',
      pdfFileName: 'VoltaSync_CIE_Pitch_Deck_10_Slides.pdf',
      targetId: 'pitch-deck-container',
      tabId: 'pitch',
      downloadPdfAction: () => handleDownloadActiveTabPdf('pitch-deck-container', 'VoltaSync_CIE_Pitch_Deck_10_Slides.pdf'),
      extraDownload: {
        label: 'Markdown (.md)',
        action: handleDownloadPitchDeckMd
      },
      icon: Presentation,
      color: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      id: 'specs-tech',
      title: 'Livrable 2 : Cahier des Charges & RFQ Usine Shenzhen',
      badge: 'Logiciel Flutter/React + Hardware IP67',
      description: 'Spécifications techniques complètes pour développeurs et RFQ d\'approvisionnement matériel pour fabricants à Shenzhen.',
      pdfFileName: 'VoltaSync_CIE_Cahier_des_Charges_Technique.pdf',
      targetId: 'main',
      tabId: 'specs',
      downloadPdfAction: () => handleDownloadActiveTabPdf('main', 'VoltaSync_CIE_Cahier_des_Charges_Technique.pdf'),
      extraDownload: {
        label: 'RFQ Shenzhen (.txt)',
        action: handleDownloadHardwareRfqTxt
      },
      extraDownload2: {
        label: 'Spec Dev (.md)',
        action: handleDownloadSoftwareSpecMd
      },
      icon: Compass,
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
    },
    {
      id: 'emails-b2b',
      title: 'Livrable 3 : Courriers CIE & Plan de Prospection B2B',
      badge: 'Emails DG/DSI + Calendrier 4 Semaines',
      description: 'Modèles de courriers officiels personnalisés, relances multicanales, argumentaires anti-objections et timing.',
      pdfFileName: 'VoltaSync_CIE_Emails_Prospection_B2B.pdf',
      targetId: 'main',
      tabId: 'email',
      downloadPdfAction: () => handleDownloadActiveTabPdf('main', 'VoltaSync_CIE_Emails_Prospection_B2B.pdf'),
      icon: Mail,
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    {
      id: 'mockups-guide',
      title: 'Livrable 4 : Maquettes UI/UX & Guide Figma',
      badge: '9 Écrans + Tokens + Flux Releveur',
      description: 'Simulateurs complets de l\'app mobile agent durcie et du cockpit web directeur, accompagnés du guide de design system.',
      pdfFileName: 'VoltaSync_CIE_Maquettes_UIUX_Guide_Figma.pdf',
      targetId: 'main',
      tabId: 'mockups',
      downloadPdfAction: () => handleDownloadActiveTabPdf('main', 'VoltaSync_CIE_Maquettes_UIUX_Guide_Figma.pdf'),
      icon: Smartphone,
      color: 'text-purple-700 bg-purple-50 border-purple-200'
    },
    {
      id: 'roi-simulator',
      title: 'Simulateur Financier & Modélisation ROI CIE',
      badge: 'Calculateur d\'Économies Dynamique',
      description: 'Synthèse des gains de trésorerie, baisse des contestations et ROI client selon l\'effectif d\'agents.',
      pdfFileName: 'VoltaSync_CIE_Rapport_ROI_Financier.pdf',
      targetId: 'main',
      tabId: 'simulator',
      downloadPdfAction: () => handleDownloadActiveTabPdf('main', 'VoltaSync_CIE_Rapport_ROI_Financier.pdf'),
      extraDownload: {
        label: 'Données CSV (.csv)',
        action: handleDownloadRoiCsv
      },
      icon: Calculator,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-md">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold font-display text-white">
                  Centre de Téléchargement des Documents &amp; Livrables
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Haute Définition A4
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Exportation directe sans bug au format PDF, impression vectorielle certifiée et fichiers sources Markdown/TXT/CSV.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Progress Banner */}
        {statusMessage && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-2.5 text-xs text-emerald-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-700 shrink-0" />
              <span className="font-semibold">{statusMessage}</span>
            </div>
            {lastBlobUrl && (
              <a
                href={lastBlobUrl.url}
                download={lastBlobUrl.name}
                target="_blank"
                rel="noreferrer"
                className="font-bold underline text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
              >
                <span>Fichier prêt : Télécharger directement</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        )}

        {/* Last Download Link Notification */}
        {lastBlobUrl && !statusMessage && (
          <div className="bg-blue-50 border-b border-blue-200 px-6 py-2 text-xs text-blue-900 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <strong>{lastBlobUrl.name}</strong> a été généré avec succès.
            </span>
            <a
              href={lastBlobUrl.url}
              download={lastBlobUrl.name}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-bold text-[11px] flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span>Récupérer le PDF</span>
            </a>
          </div>
        )}

        {/* Content List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item) => {
              const Icon = item.icon;
              const isItemBusy = downloadingId === item.targetId || (item.id === 'document-full' && downloadingId === 'document-pdf');
              const isCurrentView = activeTab === item.tabId;

              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    isCurrentView
                      ? 'border-emerald-300 bg-emerald-50/30 shadow-xs ring-1 ring-emerald-200'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-xl border shrink-0 ${item.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-xs">
                            {item.title}
                          </h3>
                          <span className="text-[10px] text-slate-500 font-medium block">
                            {item.badge}
                          </span>
                        </div>
                      </div>
                      {isCurrentView && (
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md shrink-0">
                          Onglet Actif
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] text-slate-600 mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {item.extraDownload && (
                        <button
                          onClick={item.extraDownload.action}
                          className="px-2.5 py-1 text-[10px] font-bold rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center gap-1 transition-colors"
                        >
                          <FileDown className="w-3 h-3 text-slate-500" />
                          <span>{item.extraDownload.label}</span>
                        </button>
                      )}
                      {item.extraDownload2 && (
                        <button
                          onClick={item.extraDownload2.action}
                          className="px-2.5 py-1 text-[10px] font-bold rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center gap-1 transition-colors"
                        >
                          <FileDown className="w-3 h-3 text-slate-500" />
                          <span>{item.extraDownload2.label}</span>
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 ml-auto">
                      <button
                        onClick={() => {
                          if (activeTab !== item.tabId) {
                            setActiveTab(item.tabId);
                            setTimeout(() => printDocumentNative(), 350);
                          } else {
                            printDocumentNative();
                          }
                        }}
                        className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center gap-1 transition-colors"
                        title="Imprimer ou enregistrer en PDF via le navigateur"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Imprimer</span>
                      </button>

                      <button
                        onClick={item.downloadPdfAction}
                        disabled={isItemBusy}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1.5 shadow-xs transition-all active:scale-95 disabled:opacity-50"
                        title="Télécharger directement le fichier PDF (.pdf)"
                      >
                        {isItemBusy ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>Génération...</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5" />
                            <span>PDF (.pdf)</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tips / Troubleshooting Box */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-800">
                Garantie de Téléchargement 100% Sans Erreur
              </h4>
              <p className="mt-0.5 text-[11px] leading-relaxed">
                Le moteur de génération est optimisé avec pagination A4 automatique, suppression du dépassement mémoire et compatibilité iframe. 
                Si le téléchargement automatique est bloqué par votre navigateur ou votre bloqueur de popups, utilisez le bouton <em>« Imprimer »</em> puis choisissez <em>« Enregistrer au format PDF »</em> pour un rendu vectoriel 100% net.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>{BUSINESS_INFO.name} • {BUSINESS_INFO.version} • {BUSINESS_INFO.date}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-bold transition-colors"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
