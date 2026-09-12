import { useState } from 'react';
import { 
  DEPLOYMENT_HYPOTHESIS, 
  STARTUP_COSTS, 
  TOTAL_STARTUP_COSTS, 
  MONTHLY_COSTS_YEAR_2, 
  TOTAL_MONTHLY_COSTS_Y2,
  PROFITABILITY_SUMMARY,
  BREAK_EVEN_MONTH 
} from '../data/businessPlanData';
import { TrendingUp, DollarSign, PieChart, ArrowUpRight, CheckCircle } from 'lucide-react';

export function FinancialProjections() {
  const [subView, setSubView] = useState<'revenue' | 'costs' | 'profitability'>('profitability');

  const formatFCFA = (val: number): string => {
    return new Intl.NumberFormat('fr-FR').format(val) + ' FCFA';
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            Plan Financier &amp; Rentabilité
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
            Trajectoire Financière sur 3 Ans
          </h2>
          <p className="text-xs text-slate-600">
            Évolution du CA (57M ➔ 161M FCFA), amortissement du Capex et rentabilité nette.
          </p>
        </div>

        {/* Sub-navigation */}
        <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setSubView('profitability')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              subView === 'profitability'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Compte de Résultat
          </button>
          <button
            onClick={() => setSubView('revenue')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              subView === 'revenue'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Revenus (MRR/ARR)
          </button>
          <button
            onClick={() => setSubView('costs')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              subView === 'costs'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Coûts &amp; Capex
          </button>
        </div>
      </div>

      {/* Top 3 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            CA Total Année 3
          </span>
          <p className="text-2xl font-black text-slate-900 mt-1 font-display">161 000 000 FCFA</p>
          <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +182% de croissance vs Année 1
          </span>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Coût de Démarrage (Capex)
          </span>
          <p className="text-2xl font-black text-slate-900 mt-1 font-display">79 800 000 FCFA</p>
          <span className="text-[11px] text-slate-500 mt-1 block">
            Dont 28,8 M FCFA pour 300 smartphones durcis
          </span>
        </div>

        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
            Point d&apos;Équilibre (Break-even)
          </span>
          <p className="text-2xl font-black text-emerald-900 mt-1 font-display">{BREAK_EVEN_MONTH}</p>
          <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
            <CheckCircle className="w-3.5 h-3.5" /> Marge nette An 3 : +15,8% (+25,4M)
          </span>
        </div>
      </div>

      {/* View 1: Profitability */}
      <div className={`${subView === 'profitability' ? 'block' : 'hidden print:block'} space-y-6`}>
        <div className="hidden print:block border-b border-slate-200 pb-2">
          <h3 className="text-sm font-bold uppercase text-slate-800">1. Compte de Résultat Prévisionnel &amp; Rentabilité (3 Ans)</h3>
        </div>
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="bg-slate-900 text-white font-semibold">
              <tr>
                <th className="p-3">Exercice</th>
                <th className="p-3 text-center">Agents CIE</th>
                <th className="p-3 text-right">Chiffre d&apos;Affaires</th>
                <th className="p-3 text-right">Charges Totales</th>
                <th className="p-3 text-right">Marge Nette</th>
                <th className="p-3 text-center">Taux de Marge</th>
                <th className="p-3">Observations &amp; Trésorerie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono">
              {PROFITABILITY_SUMMARY.map((p) => (
                <tr key={p.year} className="hover:bg-slate-50">
                  <td className="p-3 font-sans font-bold text-slate-900">Année {p.year}</td>
                  <td className="p-3 text-center font-sans font-semibold">{p.agents}</td>
                  <td className="p-3 text-right font-bold text-slate-800">{formatFCFA(p.revenue)}</td>
                  <td className="p-3 text-right text-slate-600">{formatFCFA(p.costs)}</td>
                  <td className={`p-3 text-right font-bold ${p.netMargin >= 0 ? 'text-emerald-700 bg-emerald-50/50' : 'text-red-600'}`}>
                    {formatFCFA(p.netMargin)}
                  </td>
                  <td className={`p-3 text-center font-bold ${p.marginPercent >= 0 ? 'text-emerald-700' : 'text-red-600'}`}>
                    {p.marginPercent > 0 ? `+${p.marginPercent}%` : `${p.marginPercent}%`}
                  </td>
                  <td className="p-3 font-sans text-slate-600 text-[11px] leading-relaxed">{p.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-2">
          <h4 className="font-bold text-slate-800 uppercase tracking-wider">
            Analyse de Rentabilité &amp; Dynamique de Cash :
          </h4>
          <p className="text-slate-600 leading-relaxed">
            • <strong>Année 1 :</strong> Investissement initial lourd (79,8M FCFA) financé par levée de fonds ou fonds propres. L&apos;entreprise génère déjà 57M FCFA grâce aux frais d&apos;intégration API (15M) et au démarrage du contrat sur 300 agents.
          </p>
          <p className="text-slate-600 leading-relaxed">
            • <strong>Année 2 :</strong> Extension à 600 agents avec l&apos;achat d&apos;un 2ème lot de 300 smartphones (28,8M FCFA). Le CA atteint 89M FCFA. La trésorerie atteint son point d&apos;inflexion positif entre le mois 28 et le mois 30.
          </p>
          <p className="text-slate-600 leading-relaxed">
            • <strong>Année 3 :</strong> Couverture nationale de 1 000 agents. Le MRR SaaS atteint 8 000 000 FCFA/mois (96M/an). Avec les SMS et formations, le CA culmine à <strong>161 000 000 FCFA</strong> pour un bénéfice net de <strong>+25 400 000 FCFA (15,8%)</strong>.
          </p>
        </div>
      </div>

      {/* View 2: Revenue */}
      <div className={`${subView === 'revenue' ? 'block' : 'hidden print:block pdf-page-break pt-4'} space-y-6`}>
        <div className="hidden print:block border-b border-slate-200 pb-2">
          <h3 className="text-sm font-bold uppercase text-slate-800">2. Décomposition Prévisionnelle des Flux de Revenus (MRR &amp; ARR)</h3>
        </div>
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3">Exercice</th>
                <th className="p-3 text-center">Agents</th>
                <th className="p-3 text-right">MRR (Mois)</th>
                <th className="p-3 text-right">ARR (Abonnements)</th>
                <th className="p-3 text-right">Intégration API</th>
                <th className="p-3 text-right">Formations</th>
                <th className="p-3 text-right">SMS Automatiques</th>
                <th className="p-3 text-right font-extrabold">CA Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono">
              {DEPLOYMENT_HYPOTHESIS.map((d) => (
                <tr key={d.year}>
                  <td className="p-3 font-sans font-bold text-slate-900">Année {d.year}</td>
                  <td className="p-3 text-center font-sans">{d.agents}</td>
                  <td className="p-3 text-right">{formatFCFA(d.mrr)}</td>
                  <td className="p-3 text-right font-bold text-slate-800">{formatFCFA(d.arr)}</td>
                  <td className="p-3 text-right text-slate-600">{formatFCFA(d.additionalRevenue.apiIntegration)}</td>
                  <td className="p-3 text-right text-slate-600">{formatFCFA(d.additionalRevenue.training)}</td>
                  <td className="p-3 text-right text-slate-600">{formatFCFA(d.additionalRevenue.sms)}</td>
                  <td className="p-3 text-right font-extrabold text-emerald-800 bg-emerald-50/60">
                    {formatFCFA(d.totalRevenue)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View 3: Costs */}
      <div className={`${subView === 'costs' ? 'block' : 'hidden print:block pdf-page-break pt-4'} space-y-6`}>
        <div className="hidden print:block border-b border-slate-200 pb-2">
          <h3 className="text-sm font-bold uppercase text-slate-800">3. Structure des Dépenses (Capex Initial &amp; Opex Mensuel)</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-slate-800 text-sm uppercase mb-3 flex items-center justify-between">
              <span>Coûts de Démarrage (Année 1)</span>
              <span className="font-mono text-xs text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                {formatFCFA(TOTAL_STARTUP_COSTS)}
              </span>
            </h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <tbody className="divide-y divide-slate-200">
                  {STARTUP_COSTS.map((c) => (
                    <tr key={c.id}>
                      <td className="p-2.5 font-semibold text-slate-800">{c.poste}</td>
                      <td className="p-2.5 text-right font-mono font-bold text-slate-900">{c.montantFormatted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-sm uppercase mb-3 flex items-center justify-between">
              <span>Coûts Mensuels Récurrents (Année 2)</span>
              <span className="font-mono text-xs text-slate-700 font-bold bg-slate-100 px-2 py-0.5 rounded">
                {formatFCFA(TOTAL_MONTHLY_COSTS_Y2)} / mois
              </span>
            </h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <tbody className="divide-y divide-slate-200">
                  {MONTHLY_COSTS_YEAR_2.map((m) => (
                    <tr key={m.id}>
                      <td className="p-2.5 font-semibold text-slate-800">{m.poste}</td>
                      <td className="p-2.5 text-right font-mono font-bold text-slate-900">{m.montantFormatted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
