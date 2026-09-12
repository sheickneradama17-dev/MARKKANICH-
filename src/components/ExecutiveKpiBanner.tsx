import { ShieldCheck, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { BREAK_EVEN_MONTH } from '../data/businessPlanData';

export function ExecutiveKpiBanner() {
  return (
    <div className="no-print bg-gradient-to-r from-emerald-900 via-slate-900 to-slate-950 text-white border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Pitch left */}
          <div className="max-w-xl">
            <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Argument Stratégique N°1
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display leading-tight">
              &ldquo;Pour 2,5 Mrds FCFA d&apos;abonnement, la CIE récupère 24 Mrds FCFA de pertes.&rdquo;
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Retour sur investissement net de <strong>960%</strong> la 1ère année pour la Compagnie Ivoirienne d&apos;Électricité.
            </p>
          </div>

          {/* 4 Mini KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
              <span className="text-[10px] text-emerald-300 font-semibold uppercase block">ROI Annuel CIE</span>
              <span className="text-lg sm:text-xl font-bold font-display text-white">+24 Mrds</span>
              <span className="text-[10px] text-slate-300 block">FCFA / an récupérés</span>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
              <span className="text-[10px] text-amber-300 font-semibold uppercase block">Rentabilité Client</span>
              <span className="text-lg sm:text-xl font-bold font-display text-amber-300">960%</span>
              <span className="text-[10px] text-slate-300 block">Dès la 1ère année</span>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
              <span className="text-[10px] text-emerald-300 font-semibold uppercase block">CA SaaS An 3</span>
              <span className="text-lg sm:text-xl font-bold font-display text-white">161 M</span>
              <span className="text-[10px] text-slate-300 block">FCFA (1 000 agents)</span>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
              <span className="text-[10px] text-slate-300 font-semibold uppercase block">Point d&apos;Équilibre</span>
              <span className="text-lg sm:text-xl font-bold font-display text-emerald-400">Mois 28-30</span>
              <span className="text-[10px] text-slate-300 block">Fin Année 2</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
