import React from 'react';
import {
  ShieldAlert,
  Zap,
  TrendingUp,
  FileCheck2,
  PhoneCall,
  Calendar,
  AlertTriangle,
  Building2,
  DollarSign,
  Award,
  Layers,
  Clock,
  Compass,
  CheckCircle2,
  Smartphone,
  Server,
  Users,
  HelpCircle,
  Lock,
  Coins,
  Database,
  RefreshCw,
  FileKey,
  Network
} from 'lucide-react';
import {
  BUSINESS_INFO,
  CIE_CURRENT_PROBLEM,
  ROI_DATA,
  TOTAL_ROI_ANNUAL,
  CIE_SUBSCRIPTION_BENCHMARK,
  ROI_RATIO_PERCENT,
  PRICING_OPTION_A,
  PRICING_OPTION_B,
  UPSELL_SERVICES,
  DEPLOYMENT_HYPOTHESIS,
  STARTUP_COSTS,
  TOTAL_STARTUP_COSTS,
  MONTHLY_COSTS_YEAR_2,
  TOTAL_MONTHLY_COSTS_Y2,
  ANNUALIZED_COSTS_Y2_BASE,
  PROFITABILITY_SUMMARY,
  BREAK_EVEN_MONTH,
  DEPLOYMENT_ROADMAP,
  RISKS_AND_MITIGATION,
  FINANCING_STRATEGIES,
  ACTION_PLAN_STEPS,
  KEY_ADVICE,
  CIE_DECIDERS_FAQ
} from '../data/businessPlanData';

export const DocumentPDFView: React.FC = () => {
  const formatFCFA = (val: number): string => {
    return new Intl.NumberFormat('fr-FR').format(val) + ' FCFA';
  };

  return (
    <div id="business-plan-printable" className="printable-document bg-white text-slate-900 mx-auto max-w-4xl p-6 sm:p-12 font-sans shadow-lg border border-slate-200 print:border-none print:shadow-none print:p-0 print:max-w-none">
      
      {/* =======================================================================
          PAGE DE COUVERTURE OFFICIELLE (COVER PAGE)
      ======================================================================= */}
      <div className="border-b-4 border-emerald-600 pb-12 mb-12">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-2xl tracking-tight shadow-md">
              VS
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-display">
                {BUSINESS_INFO.name}
              </h1>
              <p className="text-xs text-emerald-800 font-semibold tracking-wider uppercase">
                {BUSINESS_INFO.subtitle}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-300">
              {BUSINESS_INFO.version}
            </span>
            <p className="text-xs text-slate-500 mt-1 font-mono">{BUSINESS_INFO.date}</p>
          </div>
        </div>

        <div className="mt-14 mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-emerald-700" />
            Dossier d&apos;Affaires Stratégique & Partenariat Industriel
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight font-display">
            BUSINESS PLAN COMPLET & ÉTUDE DE RENTABILITÉ
          </h2>
          <p className="text-lg text-emerald-800 font-semibold mt-3">
            Déploiement National du SaaS de Relevé Intelligent pour la Compagnie Ivoirienne d&apos;Électricité (CIE)
          </p>
          <div className="mt-6 p-4 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-lg">
            <p className="text-sm font-semibold text-emerald-950 uppercase tracking-wide">
              Proposition de Valeur Unique :
            </p>
            <p className="text-xl font-extrabold text-emerald-800 mt-0.5 italic">
              &ldquo;{BUSINESS_INFO.valueProposition}&rdquo;
            </p>
          </div>
        </div>

        {/* Executive Meta Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 text-xs">
          <div>
            <span className="text-slate-500 font-medium">Client Cible Prioritaire :</span>
            <p className="font-bold text-slate-900 mt-0.5">CIE (B2G / B2B)</p>
          </div>
          <div>
            <span className="text-slate-500 font-medium">Potentiel Régional :</span>
            <p className="font-bold text-slate-900 mt-0.5">SODE, SENELEC, ENEO</p>
          </div>
          <div>
            <span className="text-slate-500 font-medium">Retour sur Investissement CIE :</span>
            <p className="font-bold text-emerald-700 mt-0.5">960% la Première Année</p>
          </div>
          <div>
            <span className="text-slate-500 font-medium">Seuil de Rentabilité :</span>
            <p className="font-bold text-slate-900 mt-0.5">{BREAK_EVEN_MONTH}</p>
          </div>
        </div>

        {/* Certification & NDA Notice Header */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900 text-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs border border-slate-800">
          <div>
            <p className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Document Établi &amp; Certifié Par :</p>
            <p className="text-sm font-bold text-white mt-0.5">{BUSINESS_INFO.certifiedBy}</p>
            <p className="text-xs text-emerald-300 font-semibold mt-0.5">{BUSINESS_INFO.location}</p>
            <p className="text-xs text-slate-200 font-semibold mt-1">
              {BUSINESS_INFO.founder}, {BUSINESS_INFO.title} • {BUSINESS_INFO.company}
            </p>
            <p className="text-[11px] text-slate-300 font-mono mt-0.5">
              Contact : {BUSINESS_INFO.contactPerson} | Email : {BUSINESS_INFO.email} | WhatsApp : {BUSINESS_INFO.phoneWhatsApp}
            </p>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">Site Web : {BUSINESS_INFO.website}</p>
          </div>
          <div className="sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800">
            <span className="inline-block px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-semibold text-[10px] border border-amber-500/30 uppercase tracking-wider">
              {BUSINESS_INFO.confidentialityNotice}
            </span>
            <p className="text-[11px] text-slate-400 mt-1 max-w-xs leading-relaxed">
              Dossier confidentiel sous clause de non-divulgation (NDA). Strictement réservé à la Direction Générale de la CIE.
            </p>
          </div>
        </div>
      </div>

      {/* =======================================================================
          TABLE DES MATIÈRES EXÉCUTIVE (SUMMARY)
      ======================================================================= */}
      <div className="mb-10 bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs">
        <h3 className="font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-700" />
          Sommaire du Document Stratégique
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-slate-700">
          <div><span className="font-bold text-emerald-700">1.</span> Le ROI pour la CIE (L&apos;Argument de Vente Principal)</div>
          <div><span className="font-bold text-emerald-700">2.</span> La Grille Tarifaire (SaaS &amp; Hardware)</div>
          <div><span className="font-bold text-emerald-700">3.</span> Les Projections Financières sur 3 ans</div>
          <div><span className="font-bold text-emerald-700">4.</span> La Structure des Coûts &amp; Analyse des Marges</div>
          <div><span className="font-bold text-emerald-700">5.</span> Le Plan de Déploiement Opérationnel (Roadmap)</div>
          <div><span className="font-bold text-emerald-700">6.</span> Matrice des Risques &amp; Stratégies de Mitigation</div>
          <div><span className="font-bold text-emerald-700">7.</span> La Stratégie de Financement (4 Options)</div>
          <div><span className="font-bold text-emerald-700">8.</span> Plan d&apos;Action Concret &amp; Prochaines Étapes</div>
          <div><span className="font-bold text-emerald-700">9.</span> Les 6 Conseils Clés pour Réussir</div>
          <div><span className="font-bold text-emerald-700">10.</span> FAQ Décideurs CIE (Interopérabilité, Sécurité, TCO)</div>
        </div>
      </div>

      {/* =======================================================================
          SECTION 1: LE ROI POUR LA CIE
      ======================================================================= */}
      <section className="mb-12 avoid-break">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs tracking-wider uppercase border-b border-emerald-200 pb-1">
          <span>Section 01</span>
          <span className="text-slate-300">|</span>
          <span>Analyse Financière Client</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-4 font-display flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-700" />
          1. LE ROI POUR LA CIE (Votre Argument de Vente Principal)
        </h2>

        {/* Le Problème Actuel de la CIE */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 mb-6">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2 mb-3">
            <ShieldAlert className="w-4 h-4 text-amber-700" />
            Diagnostic &amp; Pertes Actuelles de la CIE (Données Sectorielles)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-3 rounded-lg border border-amber-200">
              <span className="text-slate-500 block">Effectif agents releveurs</span>
              <span className="text-base font-bold text-slate-900">{CIE_CURRENT_PROBLEM.agentsCount}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-amber-200">
              <span className="text-slate-500 block">Parc abonnés sous gestion</span>
              <span className="text-base font-bold text-slate-900">{CIE_CURRENT_PROBLEM.metersCount}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-amber-200">
              <span className="text-slate-500 block">Pertes totales de production</span>
              <span className="text-base font-bold text-amber-800">{CIE_CURRENT_PROBLEM.technicalLosses}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-amber-200">
              <span className="text-slate-500 block">Taux de fraude estimé</span>
              <span className="text-base font-bold text-amber-800">{CIE_CURRENT_PROBLEM.fraudEstimatedRate}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-amber-200 sm:col-span-2">
              <span className="text-slate-500 block">Manque à gagner annuel direct</span>
              <span className="text-lg font-extrabold text-red-700">{CIE_CURRENT_PROBLEM.fraudCostAnnual}</span>
            </div>
          </div>
        </div>

        {/* Tableau des Gains Annuels */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl mb-6">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900 text-white font-semibold">
                <th className="p-3">Poste de Gain pour la CIE</th>
                <th className="p-3 text-right">Estimation Annuelle</th>
                <th className="p-3">Mécanisme d&apos;Impact Opérationnel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {ROI_DATA.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80">
                  <td className="p-3 font-bold text-slate-900">{item.gain}</td>
                  <td className="p-3 font-mono font-bold text-right text-emerald-800 whitespace-nowrap bg-emerald-50/50">
                    {item.estimation}
                  </td>
                  <td className="p-3 text-slate-600 leading-relaxed">{item.comment}</td>
                </tr>
              ))}
              <tr className="bg-emerald-900 text-white font-bold text-sm">
                <td className="p-4 uppercase tracking-wider">TOTAL DU RETOUR SUR INVESTISSEMENT (ROI CIE)</td>
                <td className="p-4 text-right font-mono text-amber-300 font-extrabold whitespace-nowrap">
                  ~24 milliards FCFA / an
                </td>
                <td className="p-4 text-xs font-normal text-emerald-100">
                  Gains consolidés mesurés dès le déploiement opérationnel complet
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pitch Choc pour la CIE */}
        <div className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white p-6 rounded-xl border border-emerald-700 shadow-md">
          <span className="text-amber-300 font-bold text-xs uppercase tracking-widest block mb-2">
            Ton Pitch Exécutif Incontournable pour la Direction Générale :
          </span>
          <blockquote className="text-lg sm:text-xl font-bold leading-relaxed italic text-white">
            &ldquo;{BUSINESS_INFO.pitchPrincipal}&rdquo;
          </blockquote>
          <div className="mt-4 flex flex-wrap gap-4 pt-3 border-t border-emerald-800/80 text-xs">
            <span className="text-emerald-300">Coût abonnement : ~2,5 Md FCFA/an</span>
            <span className="text-emerald-300">Gains récupérés : ~24 Md FCFA/an</span>
            <span className="text-amber-300 font-bold">Multiplicateur de valeur : 9,6x</span>
          </div>
        </div>
      </section>

      {/* =======================================================================
          SECTION 2: GRILLE TARIFAIRE (OPTIONS A, B, C)
      ======================================================================= */}
      <section className="mb-12 avoid-break pdf-page-break">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs tracking-wider uppercase border-b border-emerald-200 pb-1">
          <span>Section 02</span>
          <span className="text-slate-300">|</span>
          <span>Modèle Économique &amp; Pricing</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-4 font-display flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-emerald-700" />
          2. GRILLE TARIFAIRE (Modèle Hybride SaaS + Hardware)
        </h2>

        {/* Option A: SaaS Seul */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <Server className="w-4 h-4 text-slate-600" />
              Option A : SaaS Seul (Dans l&apos;hypothèse où la CIE fournit déjà les terminaux)
            </h3>
            <span className="text-xs text-slate-500">Facturation mensuelle par agent</span>
          </div>
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3 w-1/4">Formule</th>
                  <th className="p-3 text-right w-1/4">Prix par agent / mois</th>
                  <th className="p-3 w-1/2">Fonctionnalités &amp; Prestations Incluses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {PRICING_OPTION_A.map((plan) => (
                  <tr key={plan.id} className={plan.recommended ? 'bg-emerald-50/50' : ''}>
                    <td className="p-3 font-bold text-slate-900">
                      <div className="flex items-center gap-1.5">
                        {plan.name}
                        {plan.recommended && (
                          <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                            ⭐ Recommandé
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-3 font-mono font-bold text-right text-emerald-800 text-sm">
                      {plan.priceFormatted}
                    </td>
                    <td className="p-3 text-slate-600">
                      <ul className="list-disc list-inside space-y-0.5">
                        {plan.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Option B: SaaS + Hardware (Recommandé) */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-700" />
              Option B : SaaS + Hardware (Formule Recommandée Clé-en-Main)
            </h3>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-300">
              Garantie Zéro Friction
            </span>
          </div>
          <div className="overflow-x-auto border border-emerald-200 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-emerald-800 text-white font-semibold">
                <tr>
                  <th className="p-3 w-1/4">Formule</th>
                  <th className="p-3 text-right w-1/5">Prix agent / mois</th>
                  <th className="p-3 text-center w-1/6">Engagement</th>
                  <th className="p-3 w-2/5">Équipement &amp; Prestations Inclus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100">
                {PRICING_OPTION_B.map((plan) => (
                  <tr key={plan.id} className={plan.recommended ? 'bg-emerald-50/80 font-medium' : ''}>
                    <td className="p-3 font-bold text-slate-900">
                      <div className="flex items-center gap-1.5">
                        {plan.name}
                        {plan.recommended && (
                          <span className="bg-amber-500 text-slate-950 text-[10px] px-2 py-0.5 rounded-full font-extrabold">
                            ⭐ Choix n°1
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-3 font-mono font-bold text-right text-emerald-800 text-sm whitespace-nowrap">
                      {plan.priceFormatted}
                    </td>
                    <td className="p-3 text-center font-semibold text-slate-700">{plan.commitment}</td>
                    <td className="p-3 text-slate-600">
                      <ul className="list-disc list-inside space-y-0.5">
                        {plan.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Option C: Services Additionnels Upsell */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-600" />
            Option C : Services Additionnels &amp; Monétisation Haute Marge (Upsell)
          </h3>
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3 w-1/3">Service</th>
                  <th className="p-3 text-right w-1/4">Tarif Unitaire</th>
                  <th className="p-3 w-5/12">Description Opérationnelle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {UPSELL_SERVICES.map((s) => (
                  <tr key={s.id}>
                    <td className="p-3 font-bold text-slate-900">{s.service}</td>
                    <td className="p-3 font-mono font-bold text-right text-emerald-800 whitespace-nowrap">
                      {s.price}
                    </td>
                    <td className="p-3 text-slate-600">{s.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =======================================================================
          SECTION 3: PROJECTIONS FINANCIÈRES SUR 3 ANS
      ======================================================================= */}
      <section className="mb-12 avoid-break pdf-page-break">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs tracking-wider uppercase border-b border-emerald-200 pb-1">
          <span>Section 03</span>
          <span className="text-slate-300">|</span>
          <span>Trajectoire Financière &amp; Croissance</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-4 font-display flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-700" />
          3. PROJECTIONS FINANCIÈRES (Sur 3 Ans)
        </h2>

        {/* Hypothèses de déploiement */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {DEPLOYMENT_HYPOTHESIS.map((hyp) => (
            <div key={hyp.year} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                {hyp.label}
              </span>
              <p className="text-2xl font-black text-slate-900 mt-1 font-display">
                {hyp.agents} agents
              </p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{hyp.scope}</p>
            </div>
          ))}
        </div>

        {/* Tableau 1: MRR & ARR */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
            A. Revenus Récurrents Mensuels &amp; Annuels (MRR / ARR)
          </h3>
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Exercice</th>
                  <th className="p-3 text-center">Agents Actifs</th>
                  <th className="p-3 text-center">Formule Moyenne</th>
                  <th className="p-3 text-right">MRR (Mensuel)</th>
                  <th className="p-3 text-right">ARR (Annuel)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono">
                {DEPLOYMENT_HYPOTHESIS.map((d) => (
                  <tr key={d.year}>
                    <td className="p-3 font-sans font-bold text-slate-900">Année {d.year}</td>
                    <td className="p-3 text-center font-sans font-semibold">{d.agents}</td>
                    <td className="p-3 text-center font-sans">{formatFCFA(d.averagePlanPrice)}</td>
                    <td className="p-3 text-right font-bold text-slate-800">{formatFCFA(d.mrr)}</td>
                    <td className="p-3 text-right font-bold text-emerald-800 bg-emerald-50/50">
                      {formatFCFA(d.arr)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tableau 2: Revenus Additionnels */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
            B. Revenus Additionnels (One-shot, Intégrations &amp; Services Récurrents)
          </h3>
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Exercice</th>
                  <th className="p-3 text-right">Intégration API / SI</th>
                  <th className="p-3 text-right">Formations Agents</th>
                  <th className="p-3 text-right">SMS Automatiques (Est.)</th>
                  <th className="p-3 text-right font-bold">Total Additionnel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono">
                {DEPLOYMENT_HYPOTHESIS.map((d) => (
                  <tr key={d.year}>
                    <td className="p-3 font-sans font-bold text-slate-900">Année {d.year}</td>
                    <td className="p-3 text-right">{formatFCFA(d.additionalRevenue.apiIntegration)}</td>
                    <td className="p-3 text-right">{formatFCFA(d.additionalRevenue.training)}</td>
                    <td className="p-3 text-right">{formatFCFA(d.additionalRevenue.sms)}</td>
                    <td className="p-3 text-right font-bold text-slate-900 bg-slate-50">
                      {formatFCFA(d.additionalRevenue.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tableau 3: Chiffre d'Affaires Total */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
            C. Synthèse du Chiffre d&apos;Affaires Consolidé
          </h3>
          <div className="overflow-x-auto border border-emerald-300 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-emerald-800 text-white font-semibold">
                <tr>
                  <th className="p-3">Exercice</th>
                  <th className="p-3 text-right">Abonnements SaaS (ARR)</th>
                  <th className="p-3 text-right">Revenus Additionnels</th>
                  <th className="p-3 text-right font-extrabold text-sm">Chiffre d&apos;Affaires Total (CA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100 font-mono">
                {DEPLOYMENT_HYPOTHESIS.map((d) => (
                  <tr key={d.year} className="hover:bg-emerald-50/50">
                    <td className="p-3 font-sans font-bold text-slate-900">Année {d.year}</td>
                    <td className="p-3 text-right font-semibold text-slate-700">{formatFCFA(d.arr)}</td>
                    <td className="p-3 text-right font-semibold text-slate-700">{formatFCFA(d.additionalRevenue.total)}</td>
                    <td className="p-3 text-right font-black text-emerald-800 text-sm bg-emerald-50">
                      {formatFCFA(d.totalRevenue)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =======================================================================
          SECTION 4: COÛTS & MARGES
      ======================================================================= */}
      <section className="mb-12 avoid-break pdf-page-break">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs tracking-wider uppercase border-b border-emerald-200 pb-1">
          <span>Section 04</span>
          <span className="text-slate-300">|</span>
          <span>Dépenses, Capex / Opex &amp; Rentabilité</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-4 font-display flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-emerald-700" />
          4. COÛTS, CHARGES &amp; ANALYSE DES MARGES
        </h2>

        {/* Coûts de Démarrage (Année 1) */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              A. Coûts de Démarrage &amp; Investissement Initial (Année 1)
            </h3>
            <span className="font-mono font-bold text-xs text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              Total Capex : {formatFCFA(TOTAL_STARTUP_COSTS)}
            </span>
          </div>
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3 w-1/3">Poste de Dépense</th>
                  <th className="p-3 text-right w-1/4">Montant (FCFA)</th>
                  <th className="p-3 w-5/12">Justification &amp; Spécifications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {STARTUP_COSTS.map((c) => (
                  <tr key={c.id}>
                    <td className="p-3 font-bold text-slate-900">{c.poste}</td>
                    <td className="p-3 font-mono font-bold text-right text-slate-800">{c.montantFormatted}</td>
                    <td className="p-3 text-slate-600">{c.notes}</td>
                  </tr>
                ))}
                <tr className="bg-slate-900 text-white font-bold text-xs">
                  <td className="p-3 uppercase">TOTAL INVESTISSEMENT INITIAL</td>
                  <td className="p-3 text-right font-mono text-amber-300 font-extrabold">
                    {formatFCFA(TOTAL_STARTUP_COSTS)}
                  </td>
                  <td className="p-3 font-normal text-slate-300">
                    Besoins couverts par le tour d&apos;amorçage / financement de départ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Coûts Récurrents (Par mois, Année 2) */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              B. Coûts Récurrents Mensuels (Base d&apos;Exploitation Année 2)
            </h3>
            <span className="font-mono font-bold text-xs text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
              {formatFCFA(TOTAL_MONTHLY_COSTS_Y2)} / mois
            </span>
          </div>
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3 w-1/2">Poste de Dépense</th>
                  <th className="p-3 text-right w-1/4">Montant Mensuel</th>
                  <th className="p-3 w-1/4">Observations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {MONTHLY_COSTS_YEAR_2.map((m) => (
                  <tr key={m.id}>
                    <td className="p-3 font-bold text-slate-900">{m.poste}</td>
                    <td className="p-3 font-mono font-bold text-right text-slate-800">{m.montantFormatted}</td>
                    <td className="p-3 text-slate-500">{m.notes}</td>
                  </tr>
                ))}
                <tr className="bg-slate-800 text-white font-bold text-xs">
                  <td className="p-3 uppercase">TOTAL CHARGES D&apos;EXPLOITATION / MOIS</td>
                  <td className="p-3 text-right font-mono text-emerald-300 font-bold">
                    {formatFCFA(TOTAL_MONTHLY_COSTS_Y2)} / mois
                  </td>
                  <td className="p-3 text-slate-300 font-normal">Soit {formatFCFA(ANNUALIZED_COSTS_Y2_BASE)} / an</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Rentabilité & Marges */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
            C. Trajectoire de Rentabilité Nette &amp; Seuil d&apos;Équilibre
          </h3>
          <div className="overflow-x-auto border border-slate-200 rounded-xl mb-4">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead className="bg-slate-900 text-white font-sans font-semibold">
                <tr>
                  <th className="p-3">Exercice</th>
                  <th className="p-3 text-right">Chiffre d&apos;Affaires</th>
                  <th className="p-3 text-right">Charges Totales</th>
                  <th className="p-3 text-right font-bold">Marge Nette</th>
                  <th className="p-3 text-center font-bold">Marge %</th>
                  <th className="p-3 font-sans">Statut &amp; Dynamique</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {PROFITABILITY_SUMMARY.map((p) => (
                  <tr key={p.year} className="hover:bg-slate-50">
                    <td className="p-3 font-sans font-bold text-slate-900">Année {p.year}</td>
                    <td className="p-3 text-right font-semibold">{formatFCFA(p.revenue)}</td>
                    <td className="p-3 text-right text-slate-600">{formatFCFA(p.costs)}</td>
                    <td className={`p-3 text-right font-bold ${p.netMargin >= 0 ? 'text-emerald-700 bg-emerald-50/50' : 'text-red-600'}`}>
                      {formatFCFA(p.netMargin)}
                    </td>
                    <td className={`p-3 text-center font-bold ${p.marginPercent >= 0 ? 'text-emerald-700' : 'text-red-600'}`}>
                      {p.marginPercent > 0 ? `+${p.marginPercent}%` : `${p.marginPercent}%`}
                    </td>
                    <td className="p-3 font-sans text-slate-600 text-[11px]">{p.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-emerald-900 uppercase">Point d&apos;équilibre (Break-even) :</span>
              <p className="text-slate-700 mt-0.5">
                Atteint dès le <strong className="text-emerald-900">{BREAK_EVEN_MONTH}</strong> lors du basculement à plus de 500 agents actifs.
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-700 text-white font-bold text-xs uppercase tracking-wide">
              Mois 28 - 30
            </span>
          </div>
        </div>
      </section>

      {/* =======================================================================
          SECTION 5: PLAN DE DÉPLOIEMENT (ROADMAP)
      ======================================================================= */}
      <section className="mb-12 avoid-break pdf-page-break">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs tracking-wider uppercase border-b border-emerald-200 pb-1">
          <span>Section 05</span>
          <span className="text-slate-300">|</span>
          <span>Exécution Stratégique &amp; Calendrier</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-4 font-display flex items-center gap-2">
          <Compass className="w-6 h-6 text-emerald-700" />
          5. PLAN DE DÉPLOIEMENT (Roadmap Opérationnelle)
        </h2>

        <div className="space-y-4">
          {DEPLOYMENT_ROADMAP.map((p) => (
            <div key={p.phase} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="font-bold text-slate-900 text-sm font-display flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold">
                    {p.phase}
                  </span>
                  {p.title}
                </h3>
                <span className="inline-block font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 self-start">
                  {p.timeframe}
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3 italic">{p.description}</p>
              <ul className="space-y-1 text-xs text-slate-700">
                {p.milestones.map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* =======================================================================
          SECTION 6: RISQUES & MITIGATION
      ======================================================================= */}
      <section className="mb-12 avoid-break pdf-page-break">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs tracking-wider uppercase border-b border-emerald-200 pb-1">
          <span>Section 06</span>
          <span className="text-slate-300">|</span>
          <span>Gestion des Risques &amp; Continuité</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-4 font-display flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-600" />
          6. RISQUES MAJEURS &amp; PLANS DE MITIGATION
        </h2>

        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3 w-1/4">Risque Identifié</th>
                <th className="p-3 text-center w-1/12">Probabilité</th>
                <th className="p-3 text-center w-1/12">Impact</th>
                <th className="p-3 w-1/2">Stratégie de Mitigation Opérationnelle</th>
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
      </section>

      {/* =======================================================================
          SECTION 7: STRATÉGIE DE FINANCEMENT
      ======================================================================= */}
      <section className="mb-12 avoid-break pdf-page-break">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs tracking-wider uppercase border-b border-emerald-200 pb-1">
          <span>Section 07</span>
          <span className="text-slate-300">|</span>
          <span>Levée de Fonds &amp; Capitalisation</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-4 font-display flex items-center gap-2">
          <Building2 className="w-6 h-6 text-emerald-700" />
          7. STRATÉGIE DE FINANCEMENT (4 Options Arbitrées)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FINANCING_STRATEGIES.map((opt) => (
            <div key={opt.optionNumber} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-900 text-sm font-display">{opt.title}</h3>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                  {opt.type}
                </span>
              </div>
              {opt.amount && (
                <p className="text-emerald-800 font-bold font-mono mb-2">
                  Montant visé : {opt.amount} {opt.dilution ? `(${opt.dilution})` : ''}
                </p>
              )}
              <div className="space-y-1.5 text-slate-600">
                <p><strong className="text-slate-900">Avantage clé :</strong> {opt.advantage}</p>
                {opt.disadvantage && (
                  <p><strong className="text-slate-900">Inconvénient :</strong> {opt.disadvantage}</p>
                )}
                <p><strong className="text-slate-900">Cible / Faisabilité :</strong> {opt.feasibilityOrTarget}</p>
                {opt.argument && (
                  <p className="bg-white p-2 rounded border border-slate-200 text-slate-800 mt-2">
                    <strong className="text-emerald-700">Argument porteur :</strong> {opt.argument}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =======================================================================
          SECTION 8: PROCHAINES ÉTAPES (ACTION PLAN)
      ======================================================================= */}
      <section className="mb-12 avoid-break pdf-page-break">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs tracking-wider uppercase border-b border-emerald-200 pb-1">
          <span>Section 08</span>
          <span className="text-slate-300">|</span>
          <span>Feuille de Route Tactique</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-4 font-display flex items-center gap-2">
          <Calendar className="w-6 h-6 text-emerald-700" />
          8. PLAN D&apos;ACTION CONCRET &amp; PROCHAINES ÉTAPES (3 Mois)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {ACTION_PLAN_STEPS.map((step) => (
            <div key={step.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="font-bold text-emerald-800 text-xs uppercase tracking-wider block mb-2 font-display">
                ⏱️ {step.timeline}
              </span>
              <ul className="space-y-2">
                {step.tasks.map((task) => (
                  <li key={task.id} className="flex items-start gap-2 text-slate-700">
                    <span className="w-4 h-4 rounded border border-slate-400 flex items-center justify-center shrink-0 mt-0.5 bg-white">
                      {task.completed && <span className="w-2 h-2 rounded-sm bg-emerald-600"></span>}
                    </span>
                    <span>{task.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* =======================================================================
          SECTION 9: CONSEILS CLÉS POUR RÉUSSIR
      ======================================================================= */}
      <section className="mb-12 avoid-break pdf-page-break">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs tracking-wider uppercase border-b border-emerald-200 pb-1">
          <span>Section 09</span>
          <span className="text-slate-300">|</span>
          <span>Principes Directeurs d&apos;Excellence</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-4 font-display flex items-center gap-2">
          <Award className="w-6 h-6 text-emerald-700" />
          9. LES 6 CONSEILS CLÉS POUR RÉUSSIR
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {KEY_ADVICE.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-bold text-slate-900 font-display text-sm">{item.title}</span>
                <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-semibold">
                  {item.badge}
                </span>
              </div>
              <p className="font-bold text-emerald-800 mb-1 text-xs">{item.subtitle}</p>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =======================================================================
          SECTION 10: FAQ DÉCIDEURS CIE (INTEROPÉRABILITÉ, SÉCURITÉ, TCO)
      ======================================================================= */}
      <section className="mb-12 avoid-break pdf-page-break" id="pdf-section-faq">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs tracking-wider uppercase border-b border-emerald-200 pb-1">
          <span>Section 10</span>
          <span className="text-slate-300">|</span>
          <span>Gouvernance &amp; Réponses aux Décideurs Stratégiques</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2 mb-4">
          <h2 className="text-2xl font-extrabold text-slate-900 font-display flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-700 shrink-0" />
            10. FAQ DÉCIDEURS CIE : INTEROPÉRABILITÉ, SÉCURITÉ &amp; TCO
          </h2>
          <span className="text-[11px] font-bold px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full w-fit">
            3 Piliers Stratégiques • 9 Réponses Détaillées
          </span>
        </div>

        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          Cette section synthétise les réponses formelles aux exigences techniques, juridiques et économiques 
          soumises par le <strong>Comité de Direction (DG)</strong>, la <strong>Direction des Systèmes d&apos;Information (DSI)</strong>, 
          le <strong>Délégué à la Protection des Données (DPO)</strong> et la <strong>Direction Financière (DAF)</strong> de la CIE.
        </p>

        {/* Synthèse en 3 Piliers Clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 text-xs">
          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-950">
            <div className="flex items-center gap-2 font-bold mb-1 text-blue-900">
              <Network className="w-4 h-4 text-blue-700" />
              <span>1. Interopérabilité &amp; SI</span>
            </div>
            <p className="text-[11px] text-blue-800 leading-relaxed">
              Connecteurs certifiés <strong>SAP IS-U &amp; Oracle CC&B</strong>, fonctionnement <strong>100% hors-ligne</strong> (SQLite chiffré) et liberté matérielle Android agnostique.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950">
            <div className="flex items-center gap-2 font-bold mb-1 text-amber-900">
              <Lock className="w-4 h-4 text-amber-700" />
              <span>2. Sécurité &amp; Données</span>
            </div>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              Conformité <strong>Loi ARTCI n° 2013-450</strong>, hébergement souverain en Côte d&apos;Ivoire / On-Premise CIE, chiffrement <strong>AES-256 / TLS 1.3</strong> et anti-fraude matériel.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
            <div className="flex items-center gap-2 font-bold mb-1 text-emerald-900">
              <Coins className="w-4 h-4 text-emerald-700" />
              <span>3. Coût Total &amp; ROI</span>
            </div>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              <strong>9,6 FCFA récupérés pour 1 FCFA investi</strong>, retour sur investissement en 14 jours, <strong>PoC pilote 60 jours 100% gratuit</strong> et zéro coût masqué.
            </p>
          </div>
        </div>

        {/* Détail des Questions / Réponses classées par catégorie */}
        <div className="space-y-6">
          {/* Groupe 1: Interopérabilité */}
          <div>
            <div className="flex items-center gap-2 mb-3 pb-1 border-b border-slate-200">
              <Database className="w-4 h-4 text-blue-700" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Pilier I — Interopérabilité Système, Intégration ERP &amp; Réseau
              </h3>
            </div>
            <div className="space-y-3.5">
              {CIE_DECIDERS_FAQ.filter(f => f.category === 'interoperability').map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <span className="font-extrabold text-slate-900 text-xs sm:text-sm font-display flex-1">
                      {item.question}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 shrink-0">
                      {item.badge}
                    </span>
                  </div>

                  <div className="mb-2.5 p-2 rounded bg-white border-l-4 border-blue-600 border-slate-200 text-[11px] font-semibold text-slate-800">
                    <span className="text-blue-800 font-bold">Réponse Exécutive : </span>
                    {item.shortAnswer}
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-3">
                    {item.detailedAnswer}
                  </p>

                  <div className="pt-2.5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {item.proofPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {item.keyMetric && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-900 font-bold text-[10px] rounded-md border border-blue-200">
                      <RefreshCw className="w-3 h-3 text-blue-700" />
                      <span>Garantie Technique : {item.keyMetric}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Groupe 2: Sécurité & Protection des données */}
          <div>
            <div className="flex items-center gap-2 mb-3 pb-1 border-b border-slate-200">
              <Lock className="w-4 h-4 text-amber-700" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Pilier II — Sécurité des Données, Souveraineté ARTCI &amp; Intégrité Anti-Fraude
              </h3>
            </div>
            <div className="space-y-3.5">
              {CIE_DECIDERS_FAQ.filter(f => f.category === 'security').map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <span className="font-extrabold text-slate-900 text-xs sm:text-sm font-display flex-1">
                      {item.question}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 shrink-0">
                      {item.badge}
                    </span>
                  </div>

                  <div className="mb-2.5 p-2 rounded bg-white border-l-4 border-amber-600 border-slate-200 text-[11px] font-semibold text-slate-800">
                    <span className="text-amber-800 font-bold">Réponse Exécutive : </span>
                    {item.shortAnswer}
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-3">
                    {item.detailedAnswer}
                  </p>

                  <div className="pt-2.5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {item.proofPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {item.keyMetric && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-950 font-bold text-[10px] rounded-md border border-amber-200">
                      <FileKey className="w-3 h-3 text-amber-700" />
                      <span>Garantie Juridique &amp; Sécurité : {item.keyMetric}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Groupe 3: Coût Total de Possession (TCO) */}
          <div>
            <div className="flex items-center gap-2 mb-3 pb-1 border-b border-slate-200">
              <Coins className="w-4 h-4 text-emerald-700" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Pilier III — Coût Total de Possession (TCO), ROI &amp; Conditions Pilote
              </h3>
            </div>
            <div className="space-y-3.5">
              {CIE_DECIDERS_FAQ.filter(f => f.category === 'tco').map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <span className="font-extrabold text-slate-900 text-xs sm:text-sm font-display flex-1">
                      {item.question}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 shrink-0">
                      {item.badge}
                    </span>
                  </div>

                  <div className="mb-2.5 p-2 rounded bg-white border-l-4 border-emerald-600 border-slate-200 text-[11px] font-semibold text-slate-800">
                    <span className="text-emerald-800 font-bold">Réponse Exécutive : </span>
                    {item.shortAnswer}
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-3">
                    {item.detailedAnswer}
                  </p>

                  <div className="pt-2.5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {item.proofPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {item.keyMetric && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-950 font-bold text-[10px] rounded-md border border-emerald-200">
                      <TrendingUp className="w-3 h-3 text-emerald-700" />
                      <span>Indicateur Rentabilité : {item.keyMetric}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
          BLOC DE SIGNATURE & ENGAGEMENT
      ======================================================================= */}
      <div className="border-t-2 border-slate-300 pt-8 mt-12 text-xs avoid-break">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="space-y-1">
            <p className="font-bold text-slate-900 uppercase tracking-wider text-xs">Document Établi &amp; Certifié Par :</p>
            <p className="text-base font-extrabold text-emerald-800">{BUSINESS_INFO.certifiedBy}</p>
            <p className="text-xs text-slate-600 font-semibold">{BUSINESS_INFO.location}</p>
            <p className="font-bold text-slate-900 text-sm mt-1">{BUSINESS_INFO.contactPerson}</p>
            <p className="text-xs text-slate-700 font-medium">{BUSINESS_INFO.title} • {BUSINESS_INFO.company}</p>
            <p className="text-slate-600 font-mono text-xs">Email : {BUSINESS_INFO.email} | Tél/WhatsApp : {BUSINESS_INFO.phoneWhatsApp}</p>
            <p className="text-slate-500 font-mono text-xs">Site Web : {BUSINESS_INFO.website}</p>
            <div className="inline-block mt-2 px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded text-[11px] font-semibold">
              {BUSINESS_INFO.confidentialityNotice}
            </div>
          </div>
          <div className="text-left sm:text-right border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-200">
            <span className="text-slate-500 block font-semibold">Mention &amp; Visa de la Direction Générale CIE :</span>
            <div className="w-56 h-20 border-2 border-dashed border-slate-400 bg-slate-50 rounded-lg mt-2 flex flex-col items-center justify-center text-slate-400 font-mono text-[10px]">
              <span>Signature &amp; Cachet Officiel</span>
              <span className="text-[9px] text-slate-400 mt-1 font-sans">Compagnie Ivoirienne d&apos;Électricité</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
