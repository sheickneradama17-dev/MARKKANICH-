import { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Palette, 
  Printer, 
  FileText, 
  Smartphone, 
  ShieldAlert, 
  TrendingUp, 
  Cloud, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Award, 
  MapPin, 
  Cpu, 
  Radio, 
  Building2, 
  Mail, 
  Phone, 
  Globe, 
  Sparkles,
  Camera,
  Layers,
  Lock,
  BatteryCharging,
  MessageSquare,
  HelpCircle,
  Share2,
  Copy,
  Check
} from 'lucide-react';
import { BUSINESS_INFO, CIE_CURRENT_PROBLEM } from '../data/businessPlanData';
import { DocumentPrintBar } from './DocumentPrintBar';
import { PrintHeader } from './PrintHeader';

export function PitchDeckCIE() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [theme, setTheme] = useState<'cie' | 'modern'>('cie');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [printMode, setPrintMode] = useState<'all' | 'single'>('all');

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.getElementById('pitch-deck-container')?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handlePrintSlides = () => {
    window.print();
  };

  const slides = [
    // SLIDE 1 : Couverture
    {
      number: 1,
      id: "slide-1",
      title: "Modernisation Digitale du Relevé de Compteurs",
      subtitle: "Solution SaaS sécurisée pour éliminer les pertes et optimiser la facturation",
      speakerNotes: "Commencez par remercier la Direction de la CIE. Présentez la genèse : une solution 100% adaptée aux réalités du terrain ivoirien (intempéries, zones sans réseau, contestations d'abonnés). Annoncez immédiatement l'enjeu : un potentiel de 24 milliards FCFA de pertes à récupérer.",
      render: (isCie: boolean) => (
        <div className="flex flex-col justify-between h-full min-h-[460px] py-4">
          <div className="flex items-center justify-between border-b pb-4 border-slate-200">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl shadow-sm ${
                isCie ? 'bg-[#003399] text-white' : 'bg-emerald-700 text-white'
              }`}>
                CIE
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest font-extrabold text-slate-500 block">
                  Dossier Stratégique Exécutif
                </span>
                <span className="text-sm font-bold text-slate-900">
                  VoltaSync CI x Direction Générale CIE
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                isCie ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
              }`}>
                Confidentiel • Septembre 2026
              </span>
            </div>
          </div>

          <div className="my-auto py-8 text-center max-w-3xl mx-auto space-y-4">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
              isCie ? 'bg-blue-50 text-[#003399] border border-blue-200' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              Proposé à la Direction Générale de la CIE
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display leading-tight">
              Modernisation Digitale du <br/>
              <span className={isCie ? 'text-[#003399]' : 'text-emerald-700'}>
                Relevé de Compteurs
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Solution SaaS sécurisée pour éliminer les pertes, éradiquer la fraude et optimiser le recouvrement de la facturation.
            </p>

            {/* Visual preview mockup */}
            <div className="pt-6 flex flex-wrap justify-center items-center gap-4 text-left">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isCie ? 'bg-blue-100 text-[#003399]' : 'bg-emerald-100 text-emerald-800'}`}>
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Flotte Équipée</span>
                  <strong className="text-xs text-slate-900">500 - 800 Agents Mobiles</strong>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-800">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Périmètre National</span>
                  <strong className="text-xs text-slate-900">2,5 Millions de Compteurs</strong>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-100 text-red-800">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Objectif Majeur</span>
                  <strong className="text-xs text-slate-900">+24 Mrds FCFA Récupérés</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 border-t pt-3 border-slate-200">
            <span>Présenté par : <strong>{BUSINESS_INFO.founder}</strong> (Fondateur &amp; CEO — {BUSINESS_INFO.company})</span>
            <span>Abidjan, Côte d&apos;Ivoire</span>
          </div>
        </div>
      )
    },

    // SLIDE 2 : Le Problème (La Douleur)
    {
      number: 2,
      id: "slide-2",
      title: "Des pertes estimées à 30-50 milliards FCFA/an",
      subtitle: "Le diagnostic sans concession du système actuel de relevé",
      speakerNotes: "Ne pointez pas du doigt les agents. Insistez sur le fait que le système papier actuel est obsolète et place tout le monde en difficulté : les agents n'ont pas de preuve quand un client conteste, la DSI doit attendre des semaines la ressaisie, et la fraude prospère dans l'ombre.",
      render: (isCie: boolean) => (
        <div className="space-y-6 py-2">
          {/* Shock statistic banner */}
          <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-300 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-red-700 block">
                  Constat d&apos;Urgence Financière
                </span>
                <p className="text-sm sm:text-base font-bold text-red-950 font-display">
                  &ldquo;Chaque mois de retard dans la détection d&apos;une fraude = 2,5 milliards FCFA perdus pour la CIE.&rdquo;
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 bg-red-600 text-white font-mono text-xs font-bold rounded-lg shrink-0">
              30 - 50 Mrds / an
            </span>
          </div>

          {/* 3 Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">❌</span>
                <span className="text-[10px] font-bold uppercase bg-red-100 text-red-800 px-2 py-0.5 rounded">
                  10 - 15% du parc
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base font-display">
                Fraude &amp; Sous-évaluation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                10 à 15% des compteurs sont mal relevés ou sous-évalués (collusions ponctuelles, manipulations de cadrans, branchements anarchiques indétectables sans photo).
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">❌</span>
                <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                  2 à 3 semaines de délai
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base font-display">
                Processus Papier Obsolète
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Carnets manuscrits volumineux → transport physique → ressaisie manuelle par le personnel administratif → erreurs de frappe → retards de facturation massifs.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">❌</span>
                <span className="text-[10px] font-bold uppercase bg-slate-100 text-slate-800 px-2 py-0.5 rounded">
                  Contentieux permanent
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base font-display">
                Manque Total de Traçabilité
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Impossible de prouver juridiquement qu&apos;un agent est bien passé devant le compteur. Contestations d&apos;abonnés quotidiennes qui encombrent les agences CIE.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 3 : Notre Solution
    {
      number: 3,
      id: "slide-3",
      title: "Une solution digitale de bout en bout",
      subtitle: "La plateforme complète qui réconcilie le terrain et la direction",
      speakerNotes: "Soulignez l'aspect clé-en-main : la CIE ne doit pas développer elle-même ou assembler des briques disparates. Nous couvrons l'agent avec son terminal durci jusqu'à la notification SMS du client final.",
      render: (isCie: boolean) => (
        <div className="space-y-6 py-2">
          {/* Slogan */}
          <div className={`p-4 rounded-xl text-center font-bold text-lg sm:text-xl font-display text-white shadow-xs ${
            isCie ? 'bg-[#003399]' : 'bg-emerald-800'
          }`}>
            &ldquo;Zéro fraude, zéro perte, 100% traçabilité.&rdquo;
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <span className="text-2xl">📱</span>
                <span>App Mobile Rugged</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Relevé tout-terrain avec geofencing GPS (10m), photo obligatoire horodatée incrustée et fonctionnement 100% autonome en mode hors-ligne.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <span className="text-2xl">💻</span>
                <span>Dashboard de Pilotage</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supervision temps réel sur carte, file de validation des anomalies avec zoom haute définition et analytics complets pour la DSI et la Direction.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <span className="text-2xl">🔒</span>
                <span>Anti-Fraude Intelligent</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Détection automatique des baisses suspectes de consommation (±50%), vérification matérielle des coordonnées satellites et audit trail inaltérable.
              </p>
            </div>
          </div>

          {/* Visual flow diagram */}
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3 text-center">
              Flux Opérationnel Intégré en Temps Réel
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200">
                <span className="font-bold text-[#003399] block">1. Agent Terrain</span>
                <span className="text-[10px] text-slate-600">Scan QR + Photo + GPS</span>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                <span className="font-bold text-emerald-800 block">2. Cloud Sécurisé</span>
                <span className="text-[10px] text-slate-600">Sync instantanée ou différée</span>
              </div>
              <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-200">
                <span className="font-bold text-purple-800 block">3. Dashboard Manager</span>
                <span className="text-[10px] text-slate-600">Validation des anomalies</span>
              </div>
              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200">
                <span className="font-bold text-amber-900 block">4. Client Final</span>
                <span className="text-[10px] text-slate-600">SMS avec index &amp; photo</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 4 : Comment ça marche (En 4 étapes)
    {
      number: 4,
      id: "slide-4",
      title: "Un processus simplifié et sécurisé",
      subtitle: "4 étapes infaillibles pour garantir l'intégrité de chaque index relevé",
      speakerNotes: "Détaillez le verrou GPS de 10 mètres : l'agent ne peut pas être au bistrot ou sous un arbre à inventer des chiffres. La photo est obligatoire et l'application bloque toute tentative d'importer une photo de la galerie.",
      render: (isCie: boolean) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs flex gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-black text-lg ${
              isCie ? 'bg-[#003399] text-white' : 'bg-emerald-700 text-white'
            }`}>
              🎯
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Étape 01</span>
              <h3 className="font-bold text-slate-900 text-sm">L&apos;agent arrive sur site</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Le GPS vérifie automatiquement sa position physique dans un <strong>rayon strict de 10 mètres</strong> autour du compteur. Si hors zone : blocage immédiat avec alerte.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 font-black text-lg">
              📸
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Étape 02</span>
              <h3 className="font-bold text-slate-900 text-sm">Il scanne et photographie</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Scan du <strong>QR code / code-barres</strong> du compteur et prise de vue obligatoire de l&apos;index. Horodatage, coordonnées GPS et ID agent incrustés directement dans l&apos;image.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 font-black text-lg">
              📊
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Étape 03</span>
              <h3 className="font-bold text-slate-900 text-sm">L&apos;application analyse</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Calcul instantané de la consommation par rapport aux 6 derniers mois. En cas d&apos;index inférieur ou de variation anormale (±50%), l&apos;agent doit justifier avec une 2nde photo.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-black text-lg">
              ✅
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Étape 04</span>
              <h3 className="font-bold text-slate-900 text-sm">Le manager valide &amp; SMS client</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Le superviseur valide en un clic sur le dashboard. Un SMS automatique est envoyé à l&apos;abonné avec sa consommation et le lien de la photo : contestations éradiquées.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 5 : Le ROI pour la CIE (LA SLIDE LA PLUS IMPORTANTE)
    {
      number: 5,
      id: "slide-5",
      title: "Un retour sur investissement de 960% la première année",
      subtitle: "LA SLIDE LA PLUS IMPORTANTE : L'équation financière imparable",
      speakerNotes: "Ralentissez sur cette slide. Prenez le temps de faire lire le chiffre choc : 'Pour 1 FCFA investi, la CIE récupère 10 FCFA'. Même si la CIE ne récupère que la moitié des 24 milliards, le bénéfice net reste supérieur à 10 milliards de FCFA !",
      render: (isCie: boolean) => (
        <div className="space-y-4 py-1">
          {/* Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs text-xs">
            <table className="w-full text-left">
              <thead className={isCie ? 'bg-[#003399] text-white' : 'bg-slate-900 text-white'}>
                <tr>
                  <th className="p-2.5 font-bold">Gain pour la CIE</th>
                  <th className="p-2.5 text-right font-bold">Montant Annuel Estimé</th>
                  <th className="p-2.5 font-normal text-[11px] hidden sm:table-cell">Origine de l&apos;Économie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono">
                <tr className="hover:bg-slate-50">
                  <td className="p-2 font-sans font-semibold text-slate-900">Récupération de fraudes détectées</td>
                  <td className="p-2 text-right font-bold text-emerald-700">+15 milliards FCFA</td>
                  <td className="p-2 font-sans text-slate-500 text-[11px] hidden sm:table-cell">Suppression des sous-évaluations de complaisance</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2 font-sans font-semibold text-slate-900">Réduction des impayés (facturation rapide)</td>
                  <td className="p-2 text-right font-bold text-emerald-700">+5 milliards FCFA</td>
                  <td className="p-2 font-sans text-slate-500 text-[11px] hidden sm:table-cell">Cycle d&apos;émission ramené de 21 jours à 48 heures</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2 font-sans font-semibold text-slate-900">Économies opérationnelles (papier, saisie)</td>
                  <td className="p-2 text-right font-bold text-emerald-700">+1,2 milliard FCFA</td>
                  <td className="p-2 font-sans text-slate-500 text-[11px] hidden sm:table-cell">Suppression des carnets et de la ressaisie</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2 font-sans font-semibold text-slate-900">Amélioration productivité agents (+20%)</td>
                  <td className="p-2 text-right font-bold text-emerald-700">+3 milliards FCFA</td>
                  <td className="p-2 font-sans text-slate-500 text-[11px] hidden sm:table-cell">Optimisation GPS des tournées journalières</td>
                </tr>
                <tr className="bg-emerald-50/70 border-t-2 border-emerald-300 font-bold">
                  <td className="p-2.5 font-sans text-emerald-950 uppercase font-black">TOTAL GAINS ANNUELS</td>
                  <td className="p-2.5 text-right text-emerald-900 text-sm font-black">~24 milliards FCFA/an</td>
                  <td className="p-2.5 font-sans text-emerald-800 text-[11px] hidden sm:table-cell">Impact consolidé sur la trésorerie</td>
                </tr>
                <tr className="bg-slate-100">
                  <td className="p-2 font-sans text-slate-700">Coût annuel de notre solution</td>
                  <td className="p-2 text-right text-slate-900 font-bold">2,5 milliards FCFA/an</td>
                  <td className="p-2 font-sans text-slate-500 text-[11px] hidden sm:table-cell">Abonnement SaaS + Terminaux durcis + Support</td>
                </tr>
                <tr className={`text-white font-bold ${isCie ? 'bg-[#003399]' : 'bg-slate-900'}`}>
                  <td className="p-2.5 font-sans text-sm font-black uppercase">BÉNÉFICE NET ANNUEL CIE</td>
                  <td className="p-2.5 text-right text-amber-300 text-base font-black">+21,5 milliards FCFA/an</td>
                  <td className="p-2.5 font-sans text-slate-200 text-xs hidden sm:table-cell">Gain net garanti dès la 1ère année</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Punchline Card */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-900 block">
                La Règle d&apos;Or Décisionnelle
              </span>
              <p className="text-base sm:text-lg font-black text-amber-950 font-display">
                &ldquo;Pour 1 FCFA investi dans notre plateforme, la CIE récupère 10 FCFA de cash.&rdquo;
              </p>
            </div>
            <div className={`px-4 py-2 rounded-xl text-white font-black text-xl font-display shrink-0 ${
              isCie ? 'bg-[#003399]' : 'bg-emerald-700'
            }`}>
              ROI : 960%
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 6 : Fonctionnalités Clés
    {
      number: 6,
      id: "slide-6",
      title: "Conçu pour le terrain ivoirien",
      subtitle: "6 innovations technologiques adaptées aux contraintes d'Abidjan et de l'intérieur",
      speakerNotes: "Mettez en avant le mode hors-ligne : dans les quartiers précaires ou à l'intérieur du pays, la 4G est souvent coupée. Notre app stocke tout localement en SQLite et se synchronise en toute transparence.",
      render: (isCie: boolean) => (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 py-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
            <span className="text-2xl">📶</span>
            <h4 className="font-bold text-slate-900 text-xs font-display">Mode Hors-Ligne</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Fonctionne sans réseau internet. Base SQLite locale et synchronisation automatique dès retour réseau.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
            <span className="text-2xl">🛰️</span>
            <h4 className="font-bold text-slate-900 text-xs font-display">GPS Dual Band (L1+L5)</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Précision submétrique et anti-spoofing pour interdire tout faux relevé à distance du compteur.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
            <span className="text-2xl">📸</span>
            <h4 className="font-bold text-slate-900 text-xs font-display">Photo Horodatée</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Preuve visuelle infalsifiable incrustée avec date, heure, coordonnées GPS et identifiant de l&apos;agent.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
            <span className="text-2xl">🤖</span>
            <h4 className="font-bold text-slate-900 text-xs font-display">Détection IA d&apos;Anomalies</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Algorithme d&apos;alerte instantanée en cas de chute anormale de consommation ou d&apos;inversion d&apos;index.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
            <span className="text-2xl">🔋</span>
            <h4 className="font-bold text-slate-900 text-xs font-display">Smartphones Rugged</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Batterie 8000 mAh (48h d&apos;autonomie), étanches IP68, résistant aux chutes de 1,5m et à la poussière.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
            <span className="text-2xl">💬</span>
            <h4 className="font-bold text-slate-900 text-xs font-display">SMS Client Automatique</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Notification directe au client après validation, réduisant de 80% les contestations en agence.
            </p>
          </div>
        </div>
      )
    },

    // SLIDE 7 : Sécurité & Conformité
    {
      number: 7,
      id: "slide-7",
      title: "Données protégées, conformité totale",
      subtitle: "Un niveau de sécurité bancaire conforme à la réglementation ivoirienne",
      speakerNotes: "Rassurez la DSI sur l'hébergement souverain. Toutes les données clients de la CIE restent sur le territoire national, en conformité totale avec l'ARTCI et la loi sur la protection des données personnelles.",
      render: (isCie: boolean) => (
        <div className="space-y-4 py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3 shadow-xs">
              <div className={`p-2.5 rounded-lg shrink-0 ${isCie ? 'bg-blue-100 text-[#003399]' : 'bg-emerald-100 text-emerald-800'}`}>
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Chiffrement de Bout en Bout</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Données clients et index chiffrés en transit (TLS 1.3) et au repos (AES-256). Base locale mobile inviolable (SQLCipher).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3 shadow-xs">
              <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Audit Trail Complet</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Chaque action est tracée de manière inaltérable : qui a relevé, qui a validé, à quelle seconde exacte et avec quelles modifications.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3 shadow-xs">
              <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">🇨🇮 Hébergement Souverain</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Données hébergées en Côte d&apos;Ivoire (datacenter local) en parfaite conformité avec les exigences strictes de l&apos;ARTCI.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3 shadow-xs">
              <div className="p-2.5 rounded-lg bg-purple-100 text-purple-800 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Anti-Spoofing &amp; Anti-Root</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Détection automatique des applications de faux GPS, interdiction des terminaux rootés et validation matérielle de l&apos;appareil.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs text-slate-600 font-semibold">
            &ldquo;Conforme aux exigences de l&apos;ARTCI et de la loi ivoirienne N°2013-450 sur la protection des données à caractère personnel.&rdquo;
          </div>
        </div>
      )
    },

    // SLIDE 8 : Notre Offre (Modèle Économique)
    {
      number: 8,
      id: "slide-8",
      title: "Zéro investissement initial, paiement à l'usage",
      subtitle: "La CIE n'achète pas un logiciel, elle loue un service clé-en-main",
      speakerNotes: "Mettez en avant la formule Pilote : elle est GRATUITE sur 100 agents pendant 3 mois. La CIE ne prend absolument aucun risque financier pour démarrer.",
      render: (isCie: boolean) => (
        <div className="space-y-4 py-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Formule Pilote */}
            <div className="p-5 rounded-2xl border-2 border-amber-500 bg-amber-50/50 shadow-md flex flex-col justify-between relative">
              <span className="absolute -top-3 right-4 bg-amber-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                ⭐ Preuve de Concept
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-lg font-display">Pilote Gratuit</h3>
                <span className="text-xs text-slate-600 block mt-0.5">100 agents • 1 zone (ex: Cocody)</span>
                <div className="my-3">
                  <span className="text-3xl font-black text-amber-900 font-display">GRATUIT</span>
                  <span className="text-xs text-slate-500 block">3 mois d&apos;essai complet</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-amber-200">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-700" /> 100 smartphones durcis fournis</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-700" /> Formation complète agents &amp; superviseurs</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-700" /> Dashboard &amp; support dédié</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-700" /> Rapport chiffré du ROI réalisé</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-200 text-[10px] font-bold text-amber-950 uppercase">
                Zéro engagement requis
              </div>
            </div>

            {/* Pack Complet */}
            <div className={`p-5 rounded-2xl border-2 flex flex-col justify-between ${
              isCie ? 'border-[#003399] bg-white shadow-md' : 'border-emerald-600 bg-white shadow-md'
            }`}>
              <div>
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded block w-fit mb-1 ${
                  isCie ? 'bg-blue-100 text-[#003399]' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  Modèle Recommandé
                </span>
                <h3 className="font-bold text-slate-900 text-lg font-display">Pack Complet</h3>
                <span className="text-xs text-slate-600 block mt-0.5">Smartphone + App + Support</span>
                <div className="my-3">
                  <span className="text-2xl font-black text-slate-900 font-display">7 500 FCFA</span>
                  <span className="text-xs text-slate-500"> / agent / mois</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Smartphone durci IP68 garanti</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Remplacement J+1 en cas de panne</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Moteur IA anti-fraude inclus</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Engagement : 36 mois</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-500">
                Couverture nationale 500-800 agents
              </div>
            </div>

            {/* Pack Premium */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg font-display">Pack Premium</h3>
                <span className="text-xs text-slate-600 block mt-0.5">Pack Complet + Formation + API</span>
                <div className="my-3">
                  <span className="text-2xl font-black text-slate-900 font-display">10 000 FCFA</span>
                  <span className="text-xs text-slate-500"> / agent / mois</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-500" /> Tout le Pack Complet inclus</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-500" /> Intégration API temps réel avec SAP CIE</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-500" /> Formations continues sur site</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-slate-500" /> Support DSI 24/7 prioritaire</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[10px] text-slate-500">
                Engagement : 36 mois
              </div>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 9 : Notre Équipe & Références
    {
      number: 9,
      id: "slide-9",
      title: "Une expertise locale et internationale",
      subtitle: "Une alliance d'ingénierie logicielle, d'expertise hardware et de proximité terrain",
      speakerNotes: "Présentez-vous avec confiance. Mettez en avant votre compréhension intime des problématiques de la CIE, vos partenariats avec les fabricants de terminaux durcis et la conformité avec l'écosystème institutionnel ivoirien.",
      render: (isCie: boolean) => (
        <div className="space-y-4 py-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Fondateur */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 shadow-xs">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                  isCie ? 'bg-[#003399]' : 'bg-emerald-800'
                }`}>
                  SA
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{BUSINESS_INFO.founder}</h4>
                  <span className="text-[11px] text-slate-500 font-semibold block">{BUSINESS_INFO.title}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Vision stratégique, expertise terrain des utilities ouest-africaines et pilotage de solutions logicielles B2B/B2G à fort impact économique.
              </p>
            </div>

            {/* Équipe Technique */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Cpu className="w-5 h-5 text-emerald-700" />
                <span>Pôle Technique &amp; IA</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ingénieurs seniors Flutter (mobile offline-first), architectes backend Cloud (NestJS/PostgreSQL) et spécialistes OCR &amp; vision par ordinateur pour la reconnaissance des compteurs.
              </p>
            </div>

            {/* Partenaires Industriels */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Building2 className="w-5 h-5 text-amber-700" />
                <span>Partenaires Industriels</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Partenariats directs avec les fabricants de smartphones durcis certifiés IP68 (Shenzhen), hébergement souverain conforme ARTCI et opérateurs télécoms (Orange CI, MTN).
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs text-slate-700">
            <span className="font-semibold">Atout Différenciant Majeur :</span>
            <span className="italic">Nous maîtrisons l&apos;intégralité de la chaîne : du silicium du smartphone jusqu&apos;à l&apos;écran du superviseur CIE.</span>
          </div>
        </div>
      )
    },

    // SLIDE 10 : Prochaines Étapes (Call to Action)
    {
      number: 10,
      id: "slide-10",
      title: "Lançons le pilote ensemble",
      subtitle: "Notre plan de déploiement en 5 mois pour valider les gains sur le terrain",
      speakerNotes: "Terminez sur la phrase choc finale avec assurance : 'Messieurs les directeurs, êtes-vous prêts à transformer 30 milliards de pertes en 30 milliards de profits ?'. Proposez une réunion technique de 30 minutes avec la DSI dès la semaine prochaine.",
      render: (isCie: boolean) => (
        <div className="space-y-4 py-2">
          {/* Timeline 5 mois */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
              <span className="font-bold text-[#003399] uppercase text-[10px] block">Semaine 1-2</span>
              <h4 className="font-bold text-slate-900 mt-1">Réunion Technique</h4>
              <p className="text-slate-600 text-[11px] mt-1">Atelier de cadrage avec la DSI et la Direction du Relevé.</p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
              <span className="font-bold text-amber-700 uppercase text-[10px] block">Semaine 3-4</span>
              <h4 className="font-bold text-slate-900 mt-1">Périmètre Pilote</h4>
              <p className="text-slate-600 text-[11px] mt-1">Sélection de la zone (100 agents, ex: Cocody) et configuration.</p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-emerald-50 shadow-xs">
              <span className="font-bold text-emerald-800 uppercase text-[10px] block">Mois 2-4</span>
              <h4 className="font-bold text-slate-900 mt-1">Déploiement Pilote</h4>
              <p className="text-slate-600 text-[11px] mt-1">Relevés en conditions réelles, mesure de la fraude détectée.</p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-purple-50 shadow-xs">
              <span className="font-bold text-purple-800 uppercase text-[10px] block">Mois 5</span>
              <h4 className="font-bold text-slate-900 mt-1">Bilan &amp; Contrat</h4>
              <p className="text-slate-600 text-[11px] mt-1">Présentation des résultats chiffrés et extension nationale.</p>
            </div>
          </div>

          {/* Contact Box & Punchline */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-amber-400 font-bold uppercase text-[10px] tracking-widest block">
                Contact Direction de Projet
              </span>
              <h3 className="text-lg font-bold font-display mt-0.5">{BUSINESS_INFO.founder}</h3>
              <p className="text-xs text-slate-300">{BUSINESS_INFO.title} • {BUSINESS_INFO.company} ({BUSINESS_INFO.name})</p>
              
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-300">
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-amber-400 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-amber-400 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>{BUSINESS_INFO.website}</span>
                </span>
              </div>
            </div>

            <div className="text-center sm:text-right shrink-0">
              <span className="text-xs text-slate-400 block mb-1">Prêts pour l&apos;action ?</span>
              <p className="text-sm sm:text-base font-extrabold text-amber-300 font-display max-w-xs">
                &ldquo;Prêts à transformer 30 milliards de pertes en 30 milliards de profits ?&rdquo;
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const current = slides[currentSlide];

  return (
    <div id="pitch-deck-container" className="space-y-6 max-w-5xl mx-auto">
      {/* Document Print & Action Bar */}
      <DocumentPrintBar
        title="Livrable 1 : Pitch Deck Exécutif CIE (10 Slides)"
        subtitle="Présentation stratégique haute définition conçue pour la Direction Générale et la DSI de la CIE."
        badgeText="10 Slides Imprimables A4"
        onPrint={() => {
          setPrintMode('all');
          setTimeout(() => window.print(), 100);
        }}
        printOptions={[
          {
            label: 'Imprimer les 10 Slides',
            action: () => {
              setPrintMode('all');
              setTimeout(() => window.print(), 100);
            },
            active: printMode === 'all'
          },
          {
            label: `Imprimer Slide ${current.number} seule`,
            action: () => {
              setPrintMode('single');
              setTimeout(() => window.print(), 100);
            },
            active: printMode === 'single'
          }
        ]}
      />

      {/* Top Controls Bar */}
      <div className="no-print bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              theme === 'cie' ? 'bg-blue-100 text-[#003399]' : 'bg-emerald-100 text-emerald-900'
            }`}>
              Navigation Slides
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-bold text-slate-700">Slide {current.number} / {slides.length}</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-display mt-0.5">
            {current.title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === 'cie' ? 'modern' : 'cie')}
            className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            title="Basculer entre les couleurs officielles de la CIE et le thème corporate moderne"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>{theme === 'cie' ? 'Couleurs CIE' : 'Thème Émeraude'}</span>
          </button>

          {/* Speaker notes toggle */}
          <button
            onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              showSpeakerNotes
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700'
            }`}
            title="Afficher les conseils d'élocution et arguments pour l'orateur"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Notes Orateur</span>
          </button>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700"
            title="Mode plein écran (Appuyez sur Échap pour quitter)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Slide Card (Interactive Screen View, Hidden in Print) */}
      <div className={`print:hidden rounded-3xl border-2 transition-all p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[560px] bg-white ${
        theme === 'cie' ? 'border-[#003399]/30' : 'border-slate-200'
      }`}>
        
        {/* Slide Header */}
        <div className="border-b border-slate-100 pb-4 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm ${
              theme === 'cie' ? 'bg-[#003399] text-white' : 'bg-emerald-700 text-white'
            }`}>
              {current.number}
            </span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                Slide {current.number} sur {slides.length}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                {current.title}
              </h2>
            </div>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-xs font-medium text-slate-500 italic">
              {current.subtitle}
            </span>
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 my-auto">
          {current.render(theme === 'cie')}
        </div>

        {/* Slide Footer Navigation */}
        <div className="border-t border-slate-100 pt-4 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
          
          {/* Thumbnails */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-md py-1">
            {slides.map((s, idx) => (
              <button
                key={s.number}
                onClick={() => setCurrentSlide(idx)}
                className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all ${
                  idx === currentSlide
                    ? theme === 'cie'
                      ? 'bg-[#003399] text-white shadow-xs scale-105'
                      : 'bg-emerald-700 text-white shadow-xs scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                title={`Slide ${s.number}: ${s.title}`}
              >
                {s.number}
              </button>
            ))}
          </div>

          {/* Nav buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Précédente</span>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
              disabled={currentSlide === slides.length - 1}
              className={`px-4 py-1.5 rounded-xl text-white text-xs font-bold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 ${
                theme === 'cie' ? 'bg-[#003399]' : 'bg-emerald-700'
              }`}
            >
              <span>Suivante</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Complete Slides View for Print / Save as PDF */}
      <div className="hidden print:block space-y-8">
        <PrintHeader
          documentTitle="Présentation Exécutive Direction Générale CIE (Pitch Deck 10 Slides)"
          documentSubtitle="Proposition commerciale, stratégie de déploiement et modèle financier du pilote VoltaSync CI"
          referenceNumber="DOC-PITCH-CIE-10"
        />

        {(printMode === 'all' ? slides : [current]).map((s) => (
          <div
            key={`print-${s.id}`}
            className="p-8 bg-white border-2 border-slate-300 rounded-2xl min-h-[640px] flex flex-col justify-between avoid-break pdf-page-break"
          >
            <div className="border-b border-slate-200 pb-3 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm ${
                  theme === 'cie' ? 'bg-[#003399] text-white' : 'bg-emerald-700 text-white'
                }`}>
                  {s.number}
                </span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                    Slide {s.number} sur {slides.length} — VoltaSync CI x CIE
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 font-display">
                    {s.title}
                  </h2>
                </div>
              </div>
              <span className="text-xs text-slate-500 italic">
                {s.subtitle}
              </span>
            </div>

            <div className="flex-1 my-auto">
              {s.render(theme === 'cie')}
            </div>

            <div className="border-t border-slate-200 pt-3 mt-4 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>VoltaSync CI (Markkanich Global) — Présentation Confidentielle CIE</span>
              <span>Septembre 2026 • Adama F. Sheickner, Fondateur &amp; CEO ({BUSINESS_INFO.phone})</span>
            </div>
          </div>
        ))}
      </div>

      {/* Speaker Notes Box (Collapsible) */}
      {showSpeakerNotes && (
        <div className="no-print bg-amber-50 border border-amber-200 rounded-2xl p-5 text-xs text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-900 uppercase tracking-wider text-[11px]">
            <HelpCircle className="w-4 h-4 text-amber-700" />
            Conseils pour l&apos;Orateur (Présentation en 10-15 minutes) : Slide {current.number}
          </div>
          <p className="leading-relaxed">
            {current.speakerNotes}
          </p>
          <p className="text-[11px] text-amber-800/80 italic pt-1 border-t border-amber-200/60">
            Astuce : Utilisez les touches [← Flèche Gauche] et [→ Flèche Droite] ou [Espace] de votre clavier pour naviguer d&apos;une slide à l&apos;autre sans toucher à la souris.
          </p>
        </div>
      )}

      {/* PowerPoint / Canva Export Advice Box */}
      <div className="no-print bg-white rounded-2xl border border-slate-200 p-5 text-xs text-slate-700 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Recommandations de Production (Canva, PowerPoint &amp; Google Slides)
          </span>
          <span className="text-[10px] bg-slate-100 text-slate-600 font-mono px-2 py-0.5 rounded">
            Format 16:9 Recommandé
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">1. Charte Couleurs CIE</strong>
            <p className="text-slate-600 text-[11px]">
              Bleu institutionnel (`#003399`), Jaune or/énergie (`#F5A623`), Rouge sécurité (`#E53935`). Évitez les dégradés superflus.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">2. Règle des 10-15 Minutes</strong>
            <p className="text-slate-600 text-[11px]">
              Passez 1 minute sur les slides 1-4, puis <strong>5 minutes entières sur la Slide 5 (ROI)</strong> et 2 minutes sur le pilote gratuit (Slide 8).
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">3. Exemplaire Imprimé</strong>
            <p className="text-slate-600 text-[11px]">
              Apportez 3 exemplaires papier reliés de haute qualité pour les remettre en main propre au Directeur Général et au DSI lors du rendez-vous.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
