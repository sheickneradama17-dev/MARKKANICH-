import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Presentation, 
  TrendingUp, 
  ShieldAlert, 
  DollarSign, 
  Smartphone, 
  Calendar, 
  Building2, 
  Award,
  Zap,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_INFO, CIE_CURRENT_PROBLEM, TOTAL_ROI_ANNUAL, ROI_RATIO_PERCENT } from '../data/businessPlanData';

export function PitchDeckSlides() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    {
      number: 1,
      title: "VISION & POSITIONNEMENT",
      tagline: "La Révolution Digitale du Relevé Électrique en Côte d'Ivoire",
      icon: Zap,
      content: (
        <div className="text-center py-8 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold uppercase tracking-wider">
            Partenariat Stratégique CIE x VoltaSync CI
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            ZÉRO FRAUDE. ZÉRO PERTE.<br/>
            <span className="text-emerald-700">100% TRAÇABILITÉ.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            La première plateforme SaaS africaine qui sécurise le relevé de 2,5 millions de compteurs électriques, stoppe les hémorragies financières et protège les agents de la CIE.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-6 text-left">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 block">Cible N°1</span>
              <strong className="text-sm text-slate-900">CIE Côte d&apos;Ivoire</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 block">Flotte</span>
              <strong className="text-sm text-slate-900">500 à 800 Agents</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 block">Modèle</span>
              <strong className="text-sm text-emerald-700">SaaS + Terminaux Durcis</strong>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: "LE DIAGNOSTIC : LE COÛT DU STATU QUO",
      tagline: "30 à 50 Milliards FCFA évaporés chaque année",
      icon: ShieldAlert,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 text-sm">
            Aujourd&apos;hui, la relève manuelle et sur carnets papier expose la CIE à des vulnérabilités systémiques majeures :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
              <span className="text-xs font-bold text-red-700 uppercase">Fraude & Sous-évaluation</span>
              <p className="text-3xl font-extrabold text-red-900 mt-2 font-display">10 - 15%</p>
              <p className="text-xs text-red-800 mt-2">Des compteurs sont manipulés ou relevés avec complaisance.</p>
            </div>
            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
              <span className="text-xs font-bold text-amber-800 uppercase">Pertes de Production</span>
              <p className="text-3xl font-extrabold text-amber-950 mt-2 font-display">20 - 25%</p>
              <p className="text-xs text-amber-900 mt-2">D&apos;électricité produite non facturée (pertes techniques et non-techniques).</p>
            </div>
            <div className="p-5 bg-slate-900 text-white rounded-xl">
              <span className="text-xs font-bold text-amber-400 uppercase">Impact Financier Net</span>
              <p className="text-3xl font-extrabold text-white mt-2 font-display">30 à 50 Md</p>
              <p className="text-xs text-slate-300 mt-2">FCFA / an de manque à gagner direct pour la trésorerie de la CIE.</p>
            </div>
          </div>
          <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-700 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>À cela s&apos;ajoutent la lourdeur des carnets papier (200M FCFA/an), les contestations judiciaires d&apos;index et les litiges avec les abonnés.</span>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "NOTRE SOLUTION : VOLTASYNC PLATFORM",
      tagline: "L'application mobile tout-terrain couplée à l'intelligence artificielle",
      icon: Smartphone,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">1</div>
            <h3 className="font-bold text-slate-900">App Agent 100% Offline-First</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fonctionne sans réseau 3G/4G. Prise de photo haute définition de l&apos;index, horodatage certifié et coordonnées GPS inviolables au mètre près.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">2</div>
            <h3 className="font-bold text-slate-900">Moteur Anti-Fraude IA</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Reconnaissance OCR automatique de l&apos;index sur la photo et détection immédiate des anomalies statistiques par rapport à l&apos;historique de consommation.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">3</div>
            <h3 className="font-bold text-slate-900">Console Supervision &amp; API</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cartographie en direct des tournées des 800 agents, alerte en cas de déviation d&apos;itinéraire et injection directe dans le progiciel de facturation CIE.
            </p>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: "LE ROI : 24 MILLIARDS FCFA RÉCUPÉRÉS",
      tagline: "Un retour sur investissement spectaculaire de 960% dès la 1ère année",
      icon: TrendingUp,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
              <span className="text-[11px] text-slate-600 block">Fraude Réduite</span>
              <strong className="text-base sm:text-lg font-bold text-emerald-800 font-display">+15 Md FCFA</strong>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
              <span className="text-[11px] text-slate-600 block">Moins d&apos;Impayés</span>
              <strong className="text-base sm:text-lg font-bold text-emerald-800 font-display">+5 Md FCFA</strong>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
              <span className="text-[11px] text-slate-600 block">Gain Productivité</span>
              <strong className="text-base sm:text-lg font-bold text-emerald-800 font-display">+3 Md FCFA</strong>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
              <span className="text-[11px] text-slate-600 block">Temps Traitement</span>
              <strong className="text-base sm:text-lg font-bold text-emerald-800 font-display">+1 Md FCFA</strong>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 col-span-2 sm:col-span-1">
              <span className="text-[11px] text-slate-600 block">Zéro Papier</span>
              <strong className="text-base sm:text-lg font-bold text-emerald-800 font-display">200 M FCFA</strong>
            </div>
          </div>
          <div className="p-5 bg-slate-900 text-white rounded-xl border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-amber-400 text-xs uppercase font-bold tracking-wider">L&apos;Équation Financière Imparable :</span>
              <p className="text-lg font-bold mt-1">
                Abonnement Annuel SaaS : <span className="text-amber-300">2,5 Milliards FCFA</span> ➔ Gains Nets : <span className="text-emerald-400">24 Milliards FCFA</span>
              </p>
            </div>
            <div className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-extrabold text-2xl font-display">
              ROI 960%
            </div>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: "L'OFFRE RECOMMANDEE : PACK COMPLET",
      tagline: "SaaS + Smartphones Durcis IP68 tout-inclus pour 7 500 FCFA/mois",
      icon: DollarSign,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-5 bg-emerald-50 border-2 border-emerald-600 rounded-2xl relative">
            <span className="absolute -top-3 right-4 bg-emerald-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase">
              ⭐ Recommandé CIE
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-display">Pack Complet Terrain</h3>
            <p className="text-3xl font-extrabold text-emerald-800 my-2 font-display">7 500 FCFA <span className="text-sm font-normal text-slate-600">/ agent / mois</span></p>
            <p className="text-xs text-slate-600 mb-4 font-semibold">Engagement 36 mois avec matériel garanti</p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Smartphone Durci IP68 (choc, eau, poussière)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Batterie haute capacité 5000 mAh (48h terrain)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Application mobile Pro + Détection anomalies IA</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Remplacement matériel J+1 & SAV intégral</li>
            </ul>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-900 font-display">Pack Premium Élite</h3>
            <p className="text-3xl font-extrabold text-slate-900 my-2 font-display">10 000 FCFA <span className="text-sm font-normal text-slate-600">/ agent / mois</span></p>
            <p className="text-xs text-slate-600 mb-4 font-semibold">Engagement 36 mois + Haute Disponibilité</p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500" /> Smartphone durci avec lecteur code-barre laser</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500" /> API temps réel intégrée au progiciel CIE</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500" /> SAV prioritaire sous 4h avec stock tampon</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500" /> Formations sur site et support 24/7 dédié</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      number: 6,
      title: "PROJECTIONS FINANCIÈRES (3 ANS)",
      tagline: "Montée en puissance de 300 à 1 000 agents sur le territoire national",
      icon: TrendingUp,
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span className="text-xs font-bold text-slate-500 uppercase">Année 1 (300 Agents)</span>
              <p className="text-2xl font-bold text-slate-900 mt-1 font-display">57 000 000</p>
              <span className="text-xs text-slate-600">FCFA de CA Total</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span className="text-xs font-bold text-slate-500 uppercase">Année 2 (600 Agents)</span>
              <p className="text-2xl font-bold text-slate-900 mt-1 font-display">89 000 000</p>
              <span className="text-xs text-slate-600">FCFA de CA Total</span>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-center">
              <span className="text-xs font-bold text-emerald-800 uppercase">Année 3 (1000 Agents)</span>
              <p className="text-2xl font-extrabold text-emerald-800 mt-1 font-display">161 000 000</p>
              <span className="text-xs font-bold text-emerald-700">FCFA de CA Total (+15,8% marge)</span>
            </div>
          </div>
          <div className="p-4 bg-slate-100 rounded-xl text-xs space-y-1.5 text-slate-700">
            <div className="flex justify-between font-semibold">
              <span>MRR Année 1 : 2 250 000 FCFA</span>
              <span>MRR Année 2 : 4 500 000 FCFA</span>
              <span className="text-emerald-800 font-bold">MRR Année 3 : 8 000 000 FCFA</span>
            </div>
            <p className="text-slate-500 text-[11px]">
              Le modèle bénéficie d&apos;un apport complémentaire stable en services à forte marge : SMS client (+50M FCFA An 3) et formations (+15M FCFA An 3).
            </p>
          </div>
        </div>
      )
    },
    {
      number: 7,
      title: "COÛTS & SEUIL DE RENTABILITÉ",
      tagline: "Break-even au Mois 28-30 avec un besoin initial maîtrisé de 79,8M FCFA",
      icon: DollarSign,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <h4 className="font-bold text-slate-900 text-sm uppercase">Investissement Initial (79,8M FCFA)</h4>
            <div className="space-y-1 text-xs text-slate-600">
              <div className="flex justify-between"><span>Achat 300 smartphones durcis :</span> <strong>28,8 M FCFA</strong></div>
              <div className="flex justify-between"><span>R&amp;D &amp; Développement logiciel :</span> <strong>25,0 M FCFA</strong></div>
              <div className="flex justify-between"><span>Fonds de roulement de sécurité :</span> <strong>10,0 M FCFA</strong></div>
              <div className="flex justify-between"><span>Marketing, relations CIE, juridique :</span> <strong>16,0 M FCFA</strong></div>
            </div>
          </div>
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3">
            <h4 className="font-bold text-emerald-900 text-sm uppercase">Point d&apos;Équilibre (Mois 28-30)</h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Dès la fin de la 2ème année, l&apos;amortissement des terminaux et le passage à 1 000 agents permettent de dégager un bénéfice net récurrent supérieur à <strong>25,4 Millions FCFA par an</strong>.
            </p>
            <div className="bg-white p-2.5 rounded-lg border border-emerald-200 text-xs text-emerald-800 font-bold">
              Base d&apos;exploitation mensuelle stabilisée : 11,3 M FCFA / mois
            </div>
          </div>
        </div>
      )
    },
    {
      number: 8,
      title: "ROADMAP : DÉPLOIEMENT EN 4 PHASES",
      tagline: "De la zone pilote de Cocody à la couverture nationale complète",
      icon: Calendar,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="font-bold text-emerald-700">Phase 1 (M1-M3)</span>
            <h4 className="font-bold text-slate-900 mt-1">Préparation</h4>
            <p className="text-slate-600 mt-1">Création de la société, développement MVP, commande des 100 smartphones.</p>
          </div>
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <span className="font-bold text-emerald-800">Phase 2 (M4-M6)</span>
            <h4 className="font-bold text-slate-900 mt-1">Pilote Terrain</h4>
            <p className="text-slate-600 mt-1">100 agents à Cocody. Preuve par les chiffres, mesure de la fraude éradiquée.</p>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="font-bold text-amber-700">Phase 3 (M7-M18)</span>
            <h4 className="font-bold text-slate-900 mt-1">Extension Abidjan</h4>
            <p className="text-slate-600 mt-1">Contrat national, montée à 300 puis 600 agents, support 24/7 structuré.</p>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="font-bold text-purple-700">Phase 4 (M19-M36)</span>
            <h4 className="font-bold text-slate-900 mt-1">National &amp; Régional</h4>
            <p className="text-slate-600 mt-1">1 000 agents CIE, extension à la SODE (eau) et export SENELEC / ENEO.</p>
          </div>
        </div>
      )
    },
    {
      number: 9,
      title: "MAÎTRISE DES RISQUES & ALLIANCE SYNDICALE",
      tagline: "Protéger l'agent pour garantir une adoption terrain enthousiaste",
      icon: ShieldAlert,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              Gestion de la Résistance Syndicale
            </h4>
            <p className="text-slate-600 leading-relaxed">
              L&apos;application protège formellement l&apos;agent : la photo inviolable prouve sa bonne foi lors des réclamations clients. Suppression de la corvée des carnets et primes d&apos;assiduité.
            </p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              Sécurisation des Délais de Paiement
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Facturation trimestrielle payable d&apos;avance ou garantie bancaire à première demande adossée au bon de commande de la CIE.
            </p>
          </div>
        </div>
      )
    },
    {
      number: 10,
      title: "L'APPEL À L'ACTION : PROCHAINES ÉTAPES",
      tagline: "Notre proposition pour la Direction Générale de la CIE",
      icon: Award,
      content: (
        <div className="text-center py-6 space-y-6">
          <div className="inline-block bg-amber-100 text-amber-950 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
            Offre de Lancement Exécutive
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">
            Lançons le Pilote Gratuit de 90 Jours sur la Zone Cocody
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Nous équipons gratuitement 100 agents avec nos terminaux durcis et notre logiciel. Si les gains et la réduction de fraude ne dépassent pas vos attentes, vous ne payez rien.
          </p>
          <div className="p-4 bg-emerald-800 text-white rounded-xl max-w-md mx-auto text-sm font-semibold">
            Contact Direction Projet : DG VoltaSync CI — Abidjan, Côte d&apos;Ivoire
          </div>
        </div>
      )
    },
  ];

  const current = slides[currentSlide];
  const IconComponent = current.icon;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 max-w-4xl mx-auto">
      {/* Slide Navigation Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Presentation className="w-5 h-5 text-emerald-700" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Pitch Deck Exécutif CIE (10 Slides)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-slate-600">
            Slide {current.number} / {slides.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
              title="Slide précédente"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
              disabled={currentSlide === slides.length - 1}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
              title="Slide suivante"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Presentation Frame */}
      <div className="min-h-[420px] flex flex-col justify-between py-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
              <IconComponent className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest block">
                Slide 0{current.number}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                {current.title}
              </h2>
            </div>
          </div>
          <p className="text-xs font-medium text-slate-500 italic pl-11 mb-6">
            {current.tagline}
          </p>

          <div className="pl-0 sm:pl-2">
            {current.content}
          </div>
        </div>

        {/* Slide Footer Thumbnails */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex gap-1.5 overflow-x-auto py-1 max-w-md">
            {slides.map((s, idx) => (
              <button
                key={s.number}
                onClick={() => setCurrentSlide(idx)}
                className={`w-6 h-6 rounded-md text-[11px] font-mono font-bold transition-all ${
                  idx === currentSlide
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {s.number}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-400 font-mono">
            Confidentiel CIE • Septembre 2026
          </div>
        </div>
      </div>
    </div>
  );
}
