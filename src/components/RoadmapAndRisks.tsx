import { useState } from 'react';
import { DEPLOYMENT_ROADMAP, RISKS_AND_MITIGATION, FINANCING_STRATEGIES } from '../data/businessPlanData';
import { Compass, AlertTriangle, Building2, CheckCircle2, ShieldAlert } from 'lucide-react';
import { DocumentPrintBar } from './DocumentPrintBar';
import { PrintHeader } from './PrintHeader';

export function RoadmapAndRisks() {
  const [section, setSection] = useState<'roadmap' | 'risks' | 'financing'>('roadmap');
  const [printMode, setPrintMode] = useState<'all' | 'active'>('all');

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Document Print & Action Bar */}
      <DocumentPrintBar
        title="Gouvernance, Risques &amp; Roadmap d'Exécution CIE"
        subtitle="Chronologie de déploiement (M1 à M36), matrice d'analyse des risques &amp; plans de mitigation, et scénarios de financement."
        badgeText="Gouvernance &amp; Risques A4"
        onPrint={() => {
          setPrintMode('all');
          setTimeout(() => window.print(), 100);
        }}
        printOptions={[
          {
            label: 'Imprimer le Dossier Complet (3 Sections)',
            action: () => {
              setPrintMode('all');
              setTimeout(() => window.print(), 100);
            },
            active: printMode === 'all'
          },
          {
            label: `Imprimer ${
              section === 'roadmap'
                ? 'Roadmap (4 Phases)'
                : section === 'risks'
                ? 'Matrice des Risques'
                : 'Scénarios de Financement'
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
        documentTitle="Dossier de Gouvernance : Roadmap, Gestion des Risques &amp; Ingénierie Financière"
        documentSubtitle="Cadre d'exécution opérationnelle pour le partenariat technologique VoltaSync CI &amp; CIE"
        referenceNumber="DOC-GOV-RISKS-2026"
      />

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              Exécution &amp; Gouvernance
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
              Roadmap, Matrice des Risques &amp; Financement
            </h2>
            <p className="text-xs text-slate-600">
              Chronologie de déploiement (M1 à M36), gestion des syndicats et options de levée de fonds.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setSection('roadmap')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                section === 'roadmap'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Roadmap (4 Phases)
            </button>
            <button
              onClick={() => setSection('risks')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                section === 'risks'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Risques &amp; Mitigation
            </button>
            <button
              onClick={() => setSection('financing')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                section === 'financing'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              4 Options Financement
            </button>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-8">
          {/* Section 1: Roadmap */}
          <div className={`${section === 'roadmap' ? 'block' : printMode === 'all' ? 'hidden print:block' : 'hidden'}`}>
            <div className="space-y-4">
              <div className="hidden print:block border-b border-slate-200 pb-2 mb-3">
                <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider">Section 1 : Planification Pluriannuelle</span>
                <h3 className="text-base font-bold text-slate-900">Roadmap de Déploiement Industriel (Mois 1 à Mois 36)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DEPLOYMENT_ROADMAP.map((phase) => (
                  <div
                    key={phase.phase}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-xs uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {phase.timeframe}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-400">Phase 0{phase.phase}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base font-display mb-1">{phase.title}</h3>
                      <p className="text-xs text-slate-600 mb-3 italic">{phase.description}</p>
                      
                      <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
                        {phase.milestones.map((m, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Risks Matrix */}
          <div className={`${section === 'risks' ? 'block' : printMode === 'all' ? 'hidden print:block pdf-page-break pt-4' : 'hidden'}`}>
            <div className="space-y-4">
              <div className="hidden print:block border-b border-slate-200 pb-2 mb-3">
                <span className="text-xs font-bold uppercase text-amber-800 tracking-wider">Section 2 : Gestion Stratégique des Risques</span>
                <h3 className="text-base font-bold text-slate-900">Matrice de Mitigation des Risques Humains, Techniques &amp; Opérationnels</h3>
              </div>

              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  <strong>Principe d&apos;or :</strong> La résistance des syndicats et agents est le risque N°1. Le succès dépend de votre capacité à prouver que le smartphone les protège contre les contestations d&apos;abonnés.
                </span>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-3 w-1/4">Risque</th>
                      <th className="p-3 text-center w-1/12">Probabilité</th>
                      <th className="p-3 text-center w-1/12">Impact</th>
                      <th className="p-3 w-7/12">Stratégie de Mitigation Concrète</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {RISKS_AND_MITIGATION.map((r) => (
                      <tr key={r.id}>
                        <td className="p-3 font-bold text-slate-900">{r.risk}</td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            r.probability === 'Haute' ? 'bg-red-100 text-red-800' :
                            r.probability === 'Moyenne' ? 'bg-amber-100 text-amber-800' :
                            'bg-slate-100 text-slate-700'
                          }`}>
                            {r.probability}
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            r.impact === 'Élevé' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {r.impact}
                          </span>
                        </td>
                        <td className="p-3 text-slate-600 leading-relaxed">{r.mitigation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 3: Financing */}
          <div className={`${section === 'financing' ? 'block' : printMode === 'all' ? 'hidden print:block pdf-page-break pt-4' : 'hidden'}`}>
            <div className="space-y-4">
              <div className="hidden print:block border-b border-slate-200 pb-2 mb-3">
                <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider">Section 3 : Ingénierie Financière</span>
                <h3 className="text-base font-bold text-slate-900">4 Modèles de Financement du Déploiement &amp; de la Flotte</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {FINANCING_STRATEGIES.map((opt) => (
                  <div key={opt.optionNumber} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-slate-900 text-base font-display">{opt.title}</h3>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                          {opt.type}
                        </span>
                      </div>
                      {opt.amount && (
                        <p className="text-emerald-800 font-bold font-mono text-sm mb-3">
                          Enveloppe : {opt.amount} {opt.dilution ? `(${opt.dilution})` : ''}
                        </p>
                      )}

                      <div className="space-y-2 text-xs text-slate-600">
                        <p><strong className="text-slate-900">Avantage :</strong> {opt.advantage}</p>
                        {opt.disadvantage && (
                          <p><strong className="text-slate-900">Inconvénient :</strong> {opt.disadvantage}</p>
                        )}
                        <p><strong className="text-slate-900">Cibles / Modalités :</strong> {opt.feasibilityOrTarget}</p>
                      </div>
                    </div>

                    {opt.argument && (
                      <div className="mt-4 p-2.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-800">
                        <strong className="text-emerald-800">Argument d&apos;appel :</strong> {opt.argument}
                      </div>
                    )}
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
