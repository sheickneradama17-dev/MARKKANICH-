import { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  RotateCcw,
  Sparkles,
  Zap,
  Building2,
  Printer
} from 'lucide-react';
import { DocumentPrintBar } from './DocumentPrintBar';
import { PrintHeader } from './PrintHeader';

export function RoiCalculator() {
  // Configurable parameters
  const [agentsCount, setAgentsCount] = useState<number>(300);
  const [subscriptionPrice, setSubscriptionPrice] = useState<number>(7500); // FCFA / agent / month
  const [fraudRecoveryPct, setFraudRecoveryPct] = useState<number>(5.0); // % of recovery
  const [additionalServicesAnnual, setAdditionalServicesAnnual] = useState<number>(30000000); // FCFA

  // Reference CIE numbers
  const TOTAL_FRAUD_BASE = 40_000_000_000; // 40 milliards FCFA base
  const UNPAID_BASE = 5_000_000_000;
  const PAPER_SAVINGS_BASE = 200_000_000;
  const TIME_SAVINGS_BASE = 1_000_000_000;
  const PRODUCTIVITY_BASE = 3_000_000_000;

  // Dynamic calculations
  const dynamicFraudRecovery = Math.round((TOTAL_FRAUD_BASE * (fraudRecoveryPct / 100)) * (agentsCount / 800));
  const dynamicUnpaidRecovery = Math.round(UNPAID_BASE * (agentsCount / 800));
  const dynamicPaperSavings = Math.round(PAPER_SAVINGS_BASE * (agentsCount / 800));
  const dynamicTimeSavings = Math.round(TIME_SAVINGS_BASE * (agentsCount / 800));
  const dynamicProductivity = Math.round(PRODUCTIVITY_BASE * (agentsCount / 800));

  const totalCieGains = dynamicFraudRecovery + dynamicUnpaidRecovery + dynamicPaperSavings + dynamicTimeSavings + dynamicProductivity;
  
  // SaaS revenues
  const monthlyRecurringRevenue = agentsCount * subscriptionPrice;
  const annualRecurringRevenue = monthlyRecurringRevenue * 12;
  const totalRevenue = annualRecurringRevenue + additionalServicesAnnual;

  // Cost estimates
  const hardwareUnitCost = 96000; // 96,000 FCFA
  const hardwareInitialCapex = agentsCount * hardwareUnitCost;
  const annualOpexEstimated = 60_000_000 + (agentsCount * 2500 * 12);
  const totalAnnualCost = (hardwareInitialCapex / 3) + annualOpexEstimated; // amortized hardware 3 years
  const netEstimatedMargin = totalRevenue - totalAnnualCost;
  const marginPercent = Math.round((netEstimatedMargin / totalRevenue) * 100);

  // Client ROI
  const cieSubscriptionCost = annualRecurringRevenue;
  const cieNetBenefit = totalCieGains - cieSubscriptionCost;
  const cieRoiRatio = cieSubscriptionCost > 0 ? Math.round((totalCieGains / cieSubscriptionCost) * 100) : 0;

  const formatFCFA = (val: number): string => {
    return new Intl.NumberFormat('fr-FR').format(val) + ' FCFA';
  };

  const formatShortBillions = (val: number): string => {
    if (val >= 1_000_000_000) {
      return (val / 1_000_000_000).toFixed(1) + ' Md FCFA';
    }
    if (val >= 1_000_000) {
      return (val / 1_000_000).toFixed(1) + ' M FCFA';
    }
    return formatFCFA(val);
  };

  const handleReset = () => {
    setAgentsCount(300);
    setSubscriptionPrice(7500);
    setFraudRecoveryPct(5.0);
    setAdditionalServicesAnnual(30000000);
  };

  return (
    <div id="roi-calculator-container" className="printable-document space-y-6 max-w-5xl mx-auto">
      {/* Document Print & Action Bar */}
      <DocumentPrintBar
        title="Simulateur Financier & Modélisation ROI CIE"
        subtitle={`Rapport de rentabilité instantané pour ${agentsCount} agents équipés — Gain CIE estimé : ${formatShortBillions(totalCieGains)}/an.`}
        badgeText="Rapport Financier A4"
        downloadFileName="VoltaSync_CIE_Rapport_ROI_Financier.pdf"
        targetElementId="roi-calculator-container"
      />

      {/* Official Print Header */}
      <PrintHeader
        documentTitle={`Rapport Financier & Modélisation ROI VoltaSync CI (${agentsCount} Agents)`}
        documentSubtitle={`Projection d'impact sur la trésorerie de la CIE : +${formatShortBillions(cieNetBenefit)} net/an • ROI client : ${cieRoiRatio}%`}
        referenceNumber="DOC-SIMUL-ROI-2026"
      />

      {/* Print-Only Executive Summary Table */}
      <div className="hidden print:block bg-white p-6 rounded-xl border border-slate-300 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
          Synthèse des Hypothèses &amp; Résultats de la Simulation
        </h3>
        <table className="w-full text-xs text-left">
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-2 text-slate-500 font-semibold">Agents équipés :</td>
              <td className="py-2 text-slate-900 font-bold">{agentsCount} agents de terrain</td>
              <td className="py-2 text-slate-500 font-semibold">Abonnement SaaS :</td>
              <td className="py-2 text-slate-900 font-bold">{formatFCFA(subscriptionPrice)} / agent / mois</td>
            </tr>
            <tr>
              <td className="py-2 text-slate-500 font-semibold">Taux de détection de fraudes :</td>
              <td className="py-2 text-slate-900 font-bold">{fraudRecoveryPct}% de la base estimée</td>
              <td className="py-2 text-slate-500 font-semibold">Services annexes (API/Supervision) :</td>
              <td className="py-2 text-slate-900 font-bold">{formatFCFA(additionalServicesAnnual)} / an</td>
            </tr>
            <tr className="bg-emerald-50/60 font-bold">
              <td className="py-2.5 text-emerald-900">Gains Bruts Annuels CIE :</td>
              <td className="py-2.5 text-emerald-900 font-mono">{formatFCFA(totalCieGains)}</td>
              <td className="py-2.5 text-emerald-900">Coût Annuel SaaS pour la CIE :</td>
              <td className="py-2.5 text-emerald-900 font-mono">{formatFCFA(cieSubscriptionCost)}</td>
            </tr>
            <tr className="bg-emerald-100/80 font-black text-sm">
              <td className="py-3 text-emerald-950" colSpan={2}>Bénéfice Net Annuel Récupéré par la CIE :</td>
              <td className="py-3 text-right text-emerald-950 font-mono" colSpan={2}>+{formatFCFA(cieNetBenefit)} / an (ROI: {cieRoiRatio}%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 font-semibold text-xs tracking-wider uppercase">
            <Calculator className="w-4 h-4" />
            Simulateur Financier & ROI en Temps Réel
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
            Simulation Personnalisée CIE
          </h2>
          <p className="text-sm text-slate-600">
            Ajustez les variables pour projeter instantanément les gains de la CIE et la rentabilité du SaaS.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors"
          title="Réinitialiser les valeurs par défaut"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Réinitialiser (Année 1)
        </button>
      </div>

      {/* Main Grid: Controls + Live Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Controls Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/80 space-y-5">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              Hypothèses Opérationnelles
            </h3>

            {/* Slider 1: Agents Count */}
            <div>
              <div className="flex justify-between items-center text-sm mb-1.5">
                <label htmlFor="agents-range" className="font-semibold text-slate-700">Nombre d'agents équipés :</label>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  {agentsCount} agents
                </span>
              </div>
              <input
                id="agents-range"
                type="range"
                min="50"
                max="1200"
                step="50"
                value={agentsCount}
                onChange={(e) => setAgentsCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>50 (Micro)</span>
                <span>100 (Pilote)</span>
                <span>300 (An 1)</span>
                <span>600 (An 2)</span>
                <span>1000 (National)</span>
              </div>
            </div>

            {/* Slider 2: Subscription Price */}
            <div>
              <div className="flex justify-between items-center text-sm mb-1.5">
                <label htmlFor="price-range" className="font-semibold text-slate-700">Formule SaaS + Hardware :</label>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  {formatFCFA(subscriptionPrice)} / mois
                </span>
              </div>
              <input
                id="price-range"
                type="range"
                min="3000"
                max="12000"
                step="500"
                value={subscriptionPrice}
                onChange={(e) => setSubscriptionPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>3k (Starter)</span>
                <span>5k (Pro)</span>
                <span>7.5k (Pack⭐)</span>
                <span>10k (Premium)</span>
              </div>
            </div>

            {/* Slider 3: Fraud Recovery Rate */}
            <div>
              <div className="flex justify-between items-center text-sm mb-1.5">
                <label htmlFor="fraud-range" className="font-semibold text-slate-700">Taux de récupération fraude :</label>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  {fraudRecoveryPct.toFixed(1)} %
                </span>
              </div>
              <input
                id="fraud-range"
                type="range"
                min="1.0"
                max="15.0"
                step="0.5"
                value={fraudRecoveryPct}
                onChange={(e) => setFraudRecoveryPct(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>1% (Pessimiste)</span>
                <span>5% (Hypothèse de base)</span>
                <span>10% (Optimal)</span>
              </div>
            </div>

            {/* Additional revenue */}
            <div>
              <div className="flex justify-between items-center text-sm mb-1.5">
                <label htmlFor="additional-rev-select" className="font-semibold text-slate-700">Revenus annexes (SMS, API, Formations) :</label>
              </div>
              <select
                id="additional-rev-select"
                value={additionalServicesAnnual}
                onChange={(e) => setAdditionalServicesAnnual(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value={10000000}>10 000 000 FCFA / an (Modéré)</option>
                <option value={30000000}>30 000 000 FCFA / an (Année 1 Standard)</option>
                <option value={35000000}>35 000 000 FCFA / an (Année 2)</option>
                <option value={65000000}>65 000 000 FCFA / an (Année 3 Plein Régime)</option>
              </select>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setAgentsCount(100); setSubscriptionPrice(7500); setAdditionalServicesAnnual(15000000); }}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              Scénario Pilote (100)
            </button>
            <button
              onClick={() => { setAgentsCount(300); setSubscriptionPrice(7500); setAdditionalServicesAnnual(30000000); }}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-emerald-100 hover:bg-emerald-200 text-emerald-800"
            >
              Scénario Année 1 (300)
            </button>
            <button
              onClick={() => { setAgentsCount(600); setSubscriptionPrice(7500); setAdditionalServicesAnnual(35000000); }}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              Scénario Année 2 (600)
            </button>
            <button
              onClick={() => { setAgentsCount(1000); setSubscriptionPrice(8000); setAdditionalServicesAnnual(65000000); }}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              Scénario National (1000)
            </button>
          </div>
        </div>

        {/* Live Output Dashboards (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Card 1: ROI pour la CIE */}
          <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-xl p-5 shadow-sm border border-emerald-800">
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                Impact Économique pour la CIE
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/30">
                ROI estimé : {cieRoiRatio}%
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 my-4">
              <div>
                <p className="text-xs text-slate-300">Gains annuels récupérés par la CIE</p>
                <p className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {formatShortBillions(totalCieGains)}
                </p>
                <p className="text-[11px] text-emerald-300 mt-0.5">
                  Dont {formatShortBillions(dynamicFraudRecovery)} de fraude récupérée
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-300">Coût abonnement SaaS pour la CIE</p>
                <p className="text-2xl sm:text-3xl font-bold text-amber-300 font-display">
                  {formatShortBillions(cieSubscriptionCost)}
                </p>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Bénéfice net CIE : {formatShortBillions(cieNetBenefit)} / an
                </p>
              </div>
            </div>

            {/* Pitch Callout */}
            <div className="bg-white/10 rounded-lg p-3 text-xs leading-relaxed text-slate-200 border border-white/10">
              <span className="font-bold text-amber-300">Argument choc pour le Directeur Général :</span> &ldquo;Pour un coût annuel de {formatShortBillions(cieSubscriptionCost)}, la CIE récupère {formatShortBillions(totalCieGains)} de manque à gagner. Chaque franc CFA investi dans notre solution en rapporte plus de {Math.round(totalCieGains / (cieSubscriptionCost || 1))} !&rdquo;
            </div>
          </div>

          {/* Card 2: Chiffre d'Affaires & Rentabilité SaaS */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              Performances Financières de Ton SaaS
            </h4>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 uppercase font-semibold">MRR (Mensuel)</span>
                <p className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  {formatFCFA(monthlyRecurringRevenue)}
                </p>
                <span className="text-[10px] text-slate-500">{agentsCount} abonnements</span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 uppercase font-semibold">ARR (Annuel)</span>
                <p className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  {formatFCFA(annualRecurringRevenue)}
                </p>
                <span className="text-[10px] text-slate-500">Abonnements récurrents</span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 uppercase font-semibold">Chiffre d'Affaires Total</span>
                <p className="text-base sm:text-lg font-bold text-emerald-700 font-display">
                  {formatFCFA(totalRevenue)}
                </p>
                <span className="text-[10px] text-emerald-600">SaaS + Services inclus</span>
              </div>
            </div>

            {/* Breakdown item list */}
            <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs">
              <div className="flex justify-between items-center text-slate-600">
                <span>Flotte matérielle à financer :</span>
                <span className="font-semibold text-slate-900">{formatFCFA(hardwareInitialCapex)}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Marge brute estimée :</span>
                <span className={`font-bold ${marginPercent >= 0 ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {marginPercent}% ({formatFCFA(netEstimatedMargin)})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
