import { useState } from 'react';
import { PRICING_OPTION_A, PRICING_OPTION_B, UPSELL_SERVICES } from '../data/businessPlanData';
import { Smartphone, Server, Check, Star, Zap, DollarSign, Printer } from 'lucide-react';
import { DocumentPrintBar } from './DocumentPrintBar';
import { PrintHeader } from './PrintHeader';

export function PricingTable() {
  const [activeTab, setActiveTab] = useState<'recommended' | 'saas_only' | 'upsell'>('recommended');
  const [printMode, setPrintMode] = useState<'all' | 'active'>('all');

  return (
    <div id="pricing-container" className="printable-document space-y-6 max-w-5xl mx-auto">
      {/* Document Print & Action Bar */}
      <DocumentPrintBar
        title="Grille Tarifaire B2B / B2G VoltaSync CI"
        subtitle="Barème commercial officiel : Option Pack Clé-en-main (SaaS + Hardware), Option SaaS pur et Services d'intégration sur-mesure."
        badgeText="Grille Tarifaire A4"
        downloadFileName="VoltaSync_CIE_Grille_Tarifaire_Finances.pdf"
        targetElementId="pricing-container"
        onPrint={() => {
          setPrintMode('all');
          setTimeout(() => window.print(), 100);
        }}
        printOptions={[
          {
            label: 'Imprimer la Grille Complète (3 Options)',
            action: () => {
              setPrintMode('all');
              setTimeout(() => window.print(), 100);
            },
            active: printMode === 'all'
          },
          {
            label: `Imprimer ${
              activeTab === 'recommended'
                ? 'Option B (SaaS + Hardware)'
                : activeTab === 'saas_only'
                ? 'Option A (SaaS Seul)'
                : 'Option C (Services Upsell)'
            }`,
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
        documentTitle="Grille Tarifaire Officielle & Modèles de Facturation VoltaSync CI"
        documentSubtitle="Conditions financières pour le déploiement national de la flotte de télé-relevé CIE"
        referenceNumber="DOC-PRICING-2026"
      />

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <DollarSign className="w-4 h-4" />
              Grille Tarifaire B2B / B2G
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
              Formules d&apos;Abonnement &amp; Services
            </h2>
            <p className="text-xs text-slate-600">
              Comparatif détaillé des options avec ou sans terminaux durcis et services additionnels.
            </p>
          </div>

          {/* Tab switch */}
          <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('recommended')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'recommended'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Option B (SaaS + Hardware ⭐)
            </button>
            <button
              onClick={() => setActiveTab('saas_only')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'saas_only'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Option A (SaaS Seul)
            </button>
            <button
              onClick={() => setActiveTab('upsell')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'upsell'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Option C (Upsell &amp; Services)
            </button>
          </div>
        </div>

        {/* Content depending on active tab & print mode */}
        <div className="space-y-8">
          {/* OPTION B : RECOMMENDED */}
          <div className={`${activeTab === 'recommended' ? 'block' : printMode === 'all' ? 'hidden print:block' : 'hidden'}`}>
            <div className="space-y-4">
              <div className="hidden print:block border-b border-slate-200 pb-2 mb-3">
                <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider">Option B : Modèle Clé-en-main Recommandé</span>
                <h3 className="text-base font-bold text-slate-900">Abonnement SaaS + Fourniture Matérielle Flotte Durcie</h3>
              </div>

              <div className="no-print p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-emerald-700 fill-emerald-600 shrink-0" />
                  <span>
                    <strong>Modèle Recommandé pour la CIE :</strong> Fournir les téléphones durcis élimine 100% des prétextes de panne, de vol ou d&apos;incompatibilité technique.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {PRICING_OPTION_B.map((plan) => (
                  <div
                    key={plan.id}
                    className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                      plan.recommended
                        ? 'border-2 border-emerald-600 bg-white shadow-md relative'
                        : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    {plan.recommended && (
                      <span className="absolute -top-3 right-6 bg-emerald-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                        ⭐ Recommandé Clé-en-main
                      </span>
                    )}
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 font-display">{plan.name}</h3>
                          <p className="text-xs text-slate-500 mt-0.5">Engagement : {plan.commitment}</p>
                        </div>
                        <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                          <Smartphone className="w-5 h-5" />
                        </span>
                      </div>

                      <div className="mt-4 mb-6">
                        <span className="text-3xl font-extrabold text-slate-900 font-display">
                          {plan.priceFormatted}
                        </span>
                        <span className="text-xs text-slate-500 font-medium"> / agent / mois</span>
                      </div>

                      <div className="space-y-2.5 pt-4 border-t border-slate-100">
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                          Ce qui est inclus :
                        </span>
                        {plan.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                      Idéal pour sécuriser les 500 à 800 agents de la CIE avec garantie SAV J+1.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OPTION A : SAAS ONLY */}
          <div className={`${activeTab === 'saas_only' ? 'block' : printMode === 'all' ? 'hidden print:block pdf-page-break pt-4' : 'hidden'}`}>
            <div className="space-y-4">
              <div className="hidden print:block border-b border-slate-200 pb-2 mb-3">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Option A : Logiciel Pur (BYOD)</span>
                <h3 className="text-base font-bold text-slate-900">Abonnement Logiciel Seul (Smartphones Fournis par la CIE)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {PRICING_OPTION_A.map((plan) => (
                  <div
                    key={plan.id}
                    className={`rounded-xl p-5 border flex flex-col justify-between ${
                      plan.recommended
                        ? 'border-emerald-600 bg-emerald-50/20 shadow-sm relative'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute -top-2.5 right-4 bg-emerald-700 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                        {plan.badge}
                      </span>
                    )}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-slate-900 text-base font-display">{plan.name}</h3>
                        <Server className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-slate-900 font-display">{plan.priceFormatted}</span>
                        <span className="text-xs text-slate-500"> / mois</span>
                      </div>
                      <div className="space-y-2 pt-3 border-t border-slate-100">
                        {plan.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-100 text-[10px] text-slate-400">
                      La CIE fournit les smartphones existants.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OPTION C : UPSELL SERVICES */}
          <div className={`${activeTab === 'upsell' ? 'block' : printMode === 'all' ? 'hidden print:block pt-4' : 'hidden'}`}>
            <div className="space-y-4">
              <div className="hidden print:block border-b border-slate-200 pb-2 mb-3">
                <span className="text-xs font-bold uppercase text-amber-700 tracking-wider">Option C : Services à Valeur Ajoutée</span>
                <h3 className="text-base font-bold text-slate-900">Intégrations DSI, Formation &amp; Supervision Anti-Fraude Dédiée</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {UPSELL_SERVICES.map((s) => (
                  <div key={s.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-900 text-sm">{s.service}</h4>
                        <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded">
                          Haute Marge
                        </span>
                      </div>
                      <p className="text-emerald-800 font-bold font-mono text-sm mb-2">{s.price}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200/80 text-[11px] text-slate-500">
                      Modèle de facturation : {s.unit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
