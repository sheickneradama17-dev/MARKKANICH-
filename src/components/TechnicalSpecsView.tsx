import { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Copy, 
  Check, 
  Download, 
  Layers, 
  Smartphone, 
  Globe, 
  Server, 
  Database, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  FileText,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  HelpCircle,
  Award,
  Printer
} from 'lucide-react';
import { 
  SOFTWARE_SPEC_DATA, 
  HARDWARE_SPEC_ENGLISH 
} from '../data/technicalSpecsData';
import { BUSINESS_INFO } from '../data/businessPlanData';
import { DocumentPrintBar } from './DocumentPrintBar';
import { PrintHeader } from './PrintHeader';

export function TechnicalSpecsView() {
  const [activeTab, setActiveTab] = useState<'software' | 'hardware'>('software');
  const [copiedSoftware, setCopiedSoftware] = useState<boolean>(false);
  const [copiedHardware, setCopiedHardware] = useState<boolean>(false);
  const [printMode, setPrintMode] = useState<'active' | 'both'>('both');

  const handleCopySoftwareSpec = () => {
    const text = `
# ${SOFTWARE_SPEC_DATA.title}
Version: ${SOFTWARE_SPEC_DATA.version} | Date: ${SOFTWARE_SPEC_DATA.date}
Client Cible: ${SOFTWARE_SPEC_DATA.context.client}
Contact: ${BUSINESS_INFO.founder}, ${BUSINESS_INFO.title} • ${BUSINESS_INFO.company} (${BUSINESS_INFO.email} / WhatsApp: ${BUSINESS_INFO.phoneWhatsApp})

## 1. CONTEXTE & OBJECTIFS
- Produit : ${SOFTWARE_SPEC_DATA.context.product}
- Objectif : ${SOFTWARE_SPEC_DATA.context.mainGoal}

## 2. STACK TECHNIQUE RECOMMANDÉE
- Mobile : ${SOFTWARE_SPEC_DATA.architecture.mobile.framework} (Cache: ${SOFTWARE_SPEC_DATA.architecture.mobile.localDb}, Sync: ${SOFTWARE_SPEC_DATA.architecture.mobile.offlineSync})
- Web : ${SOFTWARE_SPEC_DATA.architecture.web.framework}, ${SOFTWARE_SPEC_DATA.architecture.web.styling}, Cartographie: ${SOFTWARE_SPEC_DATA.architecture.web.mapping}
- Backend : ${SOFTWARE_SPEC_DATA.architecture.backend.runtime}, ${SOFTWARE_SPEC_DATA.architecture.backend.apiStyle}, Auth: ${SOFTWARE_SPEC_DATA.architecture.backend.auth}
- BDD : ${SOFTWARE_SPEC_DATA.architecture.database.primary}, Cache: ${SOFTWARE_SPEC_DATA.architecture.database.cache}, Search: ${SOFTWARE_SPEC_DATA.architecture.database.search}
- Cloud : ${SOFTWARE_SPEC_DATA.architecture.infrastructure.cloud}, CDN: ${SOFTWARE_SPEC_DATA.architecture.infrastructure.cdn}

## 3. MODULES MOBILES (FLUTTER)
${SOFTWARE_SPEC_DATA.mobileModules.map(m => `### ${m.name}\n${m.features.map(f => `- ${f}`).join('\n')}`).join('\n\n')}

## 4. MODULES WEB MANAGER (REACT)
${SOFTWARE_SPEC_DATA.webModules.map(m => `### ${m.name}\n${m.features.map(f => `- ${f}`).join('\n')}`).join('\n\n')}

## 5. API REST ENDPOINTS
${SOFTWARE_SPEC_DATA.apiEndpoints.map(e => `- [${e.method}] ${e.path} : ${e.desc} (Auth: ${e.auth})`).join('\n')}

## 6. EXIGENCES NON-FONCTIONNELLES
${SOFTWARE_SPEC_DATA.nonFunctionalReqs.map(r => `- ${r.title}: ${r.value}`).join('\n')}

## 7. BUDGET ESTIMÉ (DÉVELOPPEMENT & INFRA)
Budget optimisé : 25 000 000 FCFA
`;
    navigator.clipboard.writeText(text.trim());
    setCopiedSoftware(true);
    setTimeout(() => setCopiedSoftware(false), 2500);
  };

  const handleCopyHardwareSpec = () => {
    const text = `
REQUEST FOR QUOTATION (RFQ) - RUGGED ANDROID SMARTPHONES
Buyer: ${HARDWARE_SPEC_ENGLISH.buyerCompany}
Contact: ${HARDWARE_SPEC_ENGLISH.contactPerson}
Email: ${HARDWARE_SPEC_ENGLISH.email} | Phone/WhatsApp: ${HARDWARE_SPEC_ENGLISH.phoneWhatsApp}
Website: ${HARDWARE_SPEC_ENGLISH.website}
Initial Order: ${HARDWARE_SPEC_ENGLISH.initialQuantity}
Annual Forecast: ${HARDWARE_SPEC_ENGLISH.annualForecast}
Target FOB Price (500 units): ${HARDWARE_SPEC_ENGLISH.targetFobPrice500Units}

OVERVIEW:
${HARDWARE_SPEC_ENGLISH.overview}

SPECIFICATIONS:
${HARDWARE_SPEC_ENGLISH.sections.map(sec => `
${sec.title}
${sec.items.map(it => `- ${it.label}: ${it.spec} ${it.critical ? '[CRITICAL]' : ''}`).join('\n')}`).join('\n')}

TRADE & SHIPPING TERMS:
- Payment Terms: 30% deposit T/T, 70% before shipment or Alibaba Trade Assurance
- Warranty: 24 months + 5% free spare parts buffer
- Trade Terms: FOB Shenzhen or CIF Abidjan
`;
    navigator.clipboard.writeText(text.trim());
    setCopiedHardware(true);
    setTimeout(() => setCopiedHardware(false), 2500);
  };

  return (
    <div id="specs-container" className="printable-document space-y-6 max-w-5xl mx-auto">
      {/* Document Print & Action Bar */}
      <DocumentPrintBar
        title="Livrable 2 : Cahier des Charges Technique & RFQ Matériel"
        subtitle="Spécifications logicielles pour agence de développement et RFQ d'approvisionnement matériel pour fabricants à Shenzhen."
        badgeText="Format Dossier Technique A4"
        downloadFileName="VoltaSync_CIE_Cahier_des_Charges_Technique.pdf"
        targetElementId="specs-container"
        onPrint={() => {
          setPrintMode('both');
          setTimeout(() => window.print(), 100);
        }}
        printOptions={[
          {
            label: 'Imprimer Tout (Parties A + B)',
            action: () => {
              setPrintMode('both');
              setTimeout(() => window.print(), 100);
            },
            active: printMode === 'both'
          },
          {
            label: `Imprimer ${activeTab === 'software' ? 'Partie A (Logiciel)' : 'Partie B (Hardware)'}`,
            action: () => {
              setPrintMode('active');
              setTimeout(() => window.print(), 100);
            },
            active: printMode === 'active'
          }
        ]}
      />

      {/* Official Print Header */}
      <PrintHeader
        documentTitle={
          printMode === 'both'
            ? "Cahier des Charges Technique Intégral (Logiciel & Matériel)"
            : activeTab === 'software'
            ? "Cahier des Charges Partie A : Architecture Logiciel & Mobile"
            : "Procurement Specification Partie B : Request For Quotation Hardware (Shenzhen)"
        }
        documentSubtitle="Spécifications fonctionnelles, architecture cloud, exigences offline et RFQ matériel durci IP68"
        referenceNumber="DOC-TECH-SPEC-2026"
      />

      {/* Header Banner */}
      <div className="no-print bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-[#003399]">
              Livrable 2 : Cahier des Charges
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-bold text-slate-700">Développeurs Logiciel &amp; Fabricants Chine</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-display mt-1">
            Cahier des Charges Technique Intégral
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Dossier technique prêt à transmettre à votre agence de développement et aux fabricants OEM sur Alibaba.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl self-stretch md:self-auto">
          <button
            onClick={() => setActiveTab('software')}
            className={`flex-1 md:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'software'
                ? 'bg-white text-[#003399] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Partie A : Logiciel (Devs)</span>
          </button>

          <button
            onClick={() => setActiveTab('hardware')}
            className={`flex-1 md:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'hardware'
                ? 'bg-white text-[#003399] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Partie B : Hardware (Chine / RFQ)</span>
          </button>
        </div>
      </div>

      {/* PART A: SOFTWARE SPECIFICATIONS */}
      <div className={`space-y-6 ${activeTab === 'software' ? 'block' : printMode === 'both' ? 'hidden print:block' : 'hidden'}`}>
        <div className="space-y-6">
          {/* Action Bar */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#003399] font-medium">
              <Code2 className="w-5 h-5 shrink-0" />
              <span>
                Cahier des charges complet pour agences de développement ou développeurs Flutter / Node / React.
              </span>
            </div>
            <button
              onClick={handleCopySoftwareSpec}
              className="px-4 py-2 rounded-xl bg-[#003399] hover:bg-[#002266] text-white font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
            >
              {copiedSoftware ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedSoftware ? 'Copié dans le Presse-papier !' : 'Copier le Cahier des Charges Dev'}</span>
            </button>
          </div>

          {/* Architecture Matrix */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base font-display flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-700" />
                1. Architecture Technique &amp; Stack Recommandée
              </h3>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">
                100% Production-Ready
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Smartphone className="w-4 h-4 text-blue-700" />
                  <span>Frontend Mobile (Agents)</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Framework :</strong> {SOFTWARE_SPEC_DATA.architecture.mobile.framework}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Stockage local :</strong> {SOFTWARE_SPEC_DATA.architecture.mobile.localDb}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Moteur Offline :</strong> {SOFTWARE_SPEC_DATA.architecture.mobile.offlineSync}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Globe className="w-4 h-4 text-emerald-700" />
                  <span>Frontend Web (Managers &amp; DSI)</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Framework :</strong> {SOFTWARE_SPEC_DATA.architecture.web.framework}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Cartographie live :</strong> {SOFTWARE_SPEC_DATA.architecture.web.mapping}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Analytics :</strong> {SOFTWARE_SPEC_DATA.architecture.web.charts}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Server className="w-4 h-4 text-purple-700" />
                  <span>Backend &amp; Base de Données</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  <strong>API Runtime :</strong> {SOFTWARE_SPEC_DATA.architecture.backend.runtime}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Base Principale :</strong> {SOFTWARE_SPEC_DATA.architecture.database.primary}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Cache &amp; Queues :</strong> {SOFTWARE_SPEC_DATA.architecture.database.cache}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Modules Details */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base font-display flex items-center gap-2 border-b border-slate-100 pb-3">
              <Smartphone className="w-4 h-4 text-blue-700" />
              2. Spécifications Détaillées : Application Mobile Flutter (6 Modules)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SOFTWARE_SPEC_DATA.mobileModules.map((module) => (
                <div key={module.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs font-display">
                    {module.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 italic">
                    {module.description}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-700 pt-1">
                    {module.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold text-xs mt-0.5">•</span>
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Web Modules Details */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base font-display flex items-center gap-2 border-b border-slate-100 pb-3">
              <Globe className="w-4 h-4 text-emerald-700" />
              3. Spécifications Détaillées : Dashboard Web React (7 Modules)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SOFTWARE_SPEC_DATA.webModules.map((module) => (
                <div key={module.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs font-display">
                    {module.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 italic">
                    {module.description}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-700 pt-1">
                    {module.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold text-xs mt-0.5">•</span>
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* API Endpoints & NFRs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Endpoints Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm font-display flex items-center gap-2 border-b border-slate-100 pb-3">
                <Server className="w-4 h-4 text-purple-700" />
                4. Principaux Endpoints REST API
              </h3>
              <div className="space-y-2.5 text-xs font-mono">
                {SOFTWARE_SPEC_DATA.apiEndpoints.map((ep, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-black ${
                        ep.method === 'GET' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {ep.method}
                      </span>
                      <span className="text-slate-900 font-bold">{ep.path}</span>
                    </div>
                    <p className="font-sans text-[11px] text-slate-600 mt-1">
                      {ep.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Functional Requirements */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm font-display flex items-center gap-2 border-b border-slate-100 pb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                5. Exigences Non-Fonctionnelles (SLA &amp; ARTCI)
              </h3>
              <div className="space-y-2 text-xs">
                {SOFTWARE_SPEC_DATA.nonFunctionalReqs.map((req, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <strong className="text-slate-900">{req.title}</strong>
                    <span className="text-slate-600 text-[11px] sm:text-right">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Budget Breakdown Table */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base font-display flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-700" />
                  6. Budget Estimé de Développement &amp; Équipe
                </h3>
                <p className="text-xs text-slate-500">
                  Estimation détaillée pour la construction complète du MVP et de la version industrielle.
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Version Optimisée (Core Team) :</span>
                <span className="text-sm font-black text-emerald-800 font-mono">
                  ~25 000 000 FCFA
                </span>
              </div>
            </div>

            <div className="overflow-x-auto text-xs">
              <table className="w-full text-left font-mono">
                <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] tracking-wider border-b border-slate-200 font-sans">
                  <tr>
                    <th className="p-2.5">Poste / Rôle</th>
                    <th className="p-2.5 text-right">Tarif Mensuel (FCFA)</th>
                    <th className="p-2.5 text-center">Durée</th>
                    <th className="p-2.5 text-right">Total (FCFA)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {SOFTWARE_SPEC_DATA.budgetEstimate.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="p-2.5 font-sans font-semibold text-slate-800">{item.role}</td>
                      <td className="p-2.5 text-right text-slate-600">{item.monthlyRate > 0 ? item.monthlyRate.toLocaleString('fr-FR') : 'Forfait Annuel'}</td>
                      <td className="p-2.5 text-center text-slate-600">{item.durationMonths} mois</td>
                      <td className="p-2.5 text-right font-bold text-slate-900">{item.total.toLocaleString('fr-FR')} FCFA</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-100/80 font-bold border-t-2 border-slate-300">
                    <td className="p-3 font-sans uppercase">Total Général Standard</td>
                    <td colSpan={2}></td>
                    <td className="p-3 text-right text-sm text-slate-900">{SOFTWARE_SPEC_DATA.totalBudget.toLocaleString('fr-FR')} FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* PART B: HARDWARE RFQ (ENGLISH FOR CHINESE SUPPLIERS) */}
      <div className={`space-y-6 ${activeTab === 'hardware' ? 'block' : printMode === 'both' ? 'hidden print:block pdf-page-break' : 'hidden'}`}>
        <div className="space-y-6">
          {/* Action Bar */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-amber-950 font-medium">
              <Cpu className="w-5 h-5 text-amber-700 shrink-0" />
              <span>
                Standard English Request for Quotation (RFQ) formatted for Alibaba / Made-in-China manufacturers (Shenzhen).
              </span>
            </div>
            <button
              onClick={handleCopyHardwareSpec}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
            >
              {copiedHardware ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedHardware ? 'Copied to Clipboard!' : 'Copy RFQ for Alibaba / Suppliers'}</span>
            </button>
          </div>

          {/* Quick RFQ Summary Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Official Procurement Specification
                </span>
                <h3 className="font-bold text-slate-900 text-base font-display">
                  {HARDWARE_SPEC_ENGLISH.title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-100 text-emerald-800 self-start sm:self-auto">
                Ready for Sourcing
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Initial Order</span>
                <strong className="text-slate-900 text-sm font-display">{HARDWARE_SPEC_ENGLISH.initialQuantity}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Annual Forecast</span>
                <strong className="text-slate-900 text-sm font-display">{HARDWARE_SPEC_ENGLISH.annualForecast}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Target Price (500 pcs)</span>
                <strong className="text-emerald-700 text-sm font-display">{HARDWARE_SPEC_ENGLISH.targetFobPrice500Units}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Contact Person</span>
                <strong className="text-slate-900 text-sm font-display">{HARDWARE_SPEC_ENGLISH.contactPerson}</strong>
              </div>
            </div>

            <p className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200 leading-relaxed italic">
              &ldquo;{HARDWARE_SPEC_ENGLISH.overview}&rdquo;
            </p>
          </div>

          {/* Detailed Hardware Spec Sections */}
          <div className="space-y-4">
            {HARDWARE_SPEC_ENGLISH.sections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm font-display flex items-center justify-between border-b border-slate-100 pb-2">
                  <span>{section.title}</span>
                  <span className="text-[10px] text-slate-400 font-mono">Part 0{idx + 1}</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  {section.items.map((item, i) => (
                    <div key={i} className={`p-2.5 rounded-xl border flex flex-col justify-between ${
                      item.critical ? 'bg-amber-50/40 border-amber-200' : 'bg-slate-50/60 border-slate-200'
                    }`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-800">{item.label}</span>
                        {item.critical && (
                          <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-200 text-amber-900">
                            Critical
                          </span>
                        )}
                      </div>
                      <span className="text-slate-600 font-mono text-[11px] leading-relaxed">
                        {item.spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Supplier Advice & Negotiation Tips Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3 text-xs">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-700" />
              Conseils Stratégiques pour Négocier avec les Fournisseurs Chinois
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-slate-900 block">1. Exiger 2 Échantillons Test</strong>
                <p className="text-slate-600 text-[11px]">
                  Commandez 2 unités d&apos;évaluation avant toute production en masse pour tester la résistance à l&apos;eau à Abidjan et la batterie de 8000 mAh.
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-slate-900 block">2. Validation Certificats UN38.3</strong>
                <p className="text-slate-600 text-[11px]">
                  Assurez-vous que le fabricant dispose des certificats de transport aérien et maritime de batterie UN38.3 et CE pour éviter tout blocage en douane.
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-slate-900 block">3. Pièces Détachées Gratuites</strong>
                <p className="text-slate-600 text-[11px]">
                  Exigez systématiquement 5% de pièces de rechange gratuites (écrans, ports de charge, coques) incluses dans la commande initiale de 500 unités.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
