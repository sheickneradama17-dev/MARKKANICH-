import { useState } from 'react';
import { 
  Palette, 
  Copy, 
  Check, 
  Layers, 
  Smartphone, 
  Monitor, 
  Play, 
  Share2, 
  Puzzle, 
  FileDown, 
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  Clock,
  Sparkles,
  Zap,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { FIGMA_GUIDE_STEPS } from '../../data/mockupGuideData';

export function FigmaCreationGuide() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<number>(1);

  const colors = [
    { label: "Bleu CIE Officiel", hex: "#0056A6", desc: "Boutons CTA, titres principaux, marque", textDark: false },
    { label: "Bleu Marine Dashboard", hex: "#003D7A", desc: "Sidebar web, headers exécutifs", textDark: false },
    { label: "Bleu Clair Carte", hex: "#E3F2FD", desc: "Fond de carte tournée, surlignages", textDark: true },
    { label: "Vert Succès / En ligne", hex: "#28A745", desc: "Badge en ligne, validation relevé", textDark: false },
    { label: "Orange Alerte", hex: "#FF9800", desc: "Anomalies, mode hors-ligne, retard", textDark: false },
    { label: "Rouge Fraude / Alerte", hex: "#DC3545", desc: "Signalement fraude, rupture d'index", textDark: false },
    { label: "Gris Fond Dashboard", hex: "#F5F5F5", desc: "Fond général interface web", textDark: true },
    { label: "Blanc Pur", hex: "#FFFFFF", desc: "Cartes, inputs, fonds écrans mobiles", textDark: true, border: true }
  ];

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Introduction Banner */}
      <div className="bg-gradient-to-r from-[#003D7A] via-[#0056A6] to-blue-700 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Guide Officiel de Conception Figma • Spécification CIE 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight">
            Guide Complet pour Créer Tes Maquettes UI/UX
          </h2>
          <p className="text-sm text-blue-100 leading-relaxed">
            Ce tutoriel méthodologique pas à pas te donne toutes les dimensions exactes, la palette officielle, les composants et les flux de prototypage pour concevoir les maquettes Figma professionnelles à présenter au Directeur Général de la CIE.
          </p>
        </div>
      </div>

      {/* Palette de Couleurs Officielles CIE (Copie en 1 clic) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056A6] flex items-center justify-center font-bold">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Palette de Couleurs Officielles CIE (Design Tokens)
              </h3>
              <p className="text-xs text-slate-500">
                Clique sur n&apos;importe quelle nuance pour copier instantanément le code HEX pour Figma
              </p>
            </div>
          </div>
          {copiedHex && (
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1 animate-in fade-in">
              <Check className="w-3.5 h-3.5" /> Code {copiedHex} copié !
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {colors.map((c) => (
            <button
              key={c.hex}
              onClick={() => handleCopyHex(c.hex)}
              style={{ backgroundColor: c.hex }}
              className={`p-4 rounded-2xl text-left transition-transform hover:scale-102 active:scale-98 shadow-xs relative group ${
                c.textDark ? 'text-slate-900' : 'text-white'
              } ${c.border ? 'border border-slate-300' : ''}`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider block">
                  {c.label}
                </span>
                <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-sm font-black block tracking-wider">
                  {c.hex}
                </span>
                <span className="text-[10px] opacity-80 block leading-tight">
                  {c.desc}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Les 6 Étapes Méthodologiques */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Les 6 Étapes Clés pour Réaliser les Maquettes dans Figma
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Suis cette chronologie rigoureuse pour un rendu conforme au cahier des charges de la CIE.
            </p>
          </div>
        </div>

        {/* Step Navigation Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {FIGMA_GUIDE_STEPS.map((s) => {
            const isCurrent = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                  isCurrent
                    ? 'bg-[#0056A6] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isCurrent ? 'bg-white text-[#0056A6]' : 'bg-slate-100 text-slate-600'
                }`}>
                  {s.step}
                </span>
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        {(() => {
          const stepData = FIGMA_GUIDE_STEPS.find((s) => s.step === activeStep)!;
          return (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in duration-150">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-[#0056A6] font-bold text-xs">
                      Étape {stepData.step} / 6
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Phase : {stepData.badge}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-display mt-1">
                    {stepData.title}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Temps estimé : <strong>{stepData.timeEstimate}</strong></span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {stepData.description}
              </p>

              {/* Sub-steps detailed instructions */}
              <div className="space-y-4">
                {stepData.substeps.map((sub, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#0056A6] text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                        {idx + 1}
                      </span>
                      <h5 className="font-bold text-slate-900 text-sm">
                        {sub.label}
                      </h5>
                    </div>
                    <p className="text-slate-700 leading-relaxed pl-7 text-xs">
                      {sub.detail}
                    </p>
                    {sub.tip && (
                      <div className="ml-7 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-medium flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>Astuce Pro Figma :</strong> {sub.tip}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation Controls between steps */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeStep === 1
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  &larr; Étape précédente
                </button>

                <div className="text-xs text-slate-400 font-medium">
                  Étape {activeStep} sur 6
                </div>

                <button
                  disabled={activeStep === 6}
                  onClick={() => setActiveStep(prev => Math.min(6, prev + 1))}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeStep === 6
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'bg-[#0056A6] text-white hover:bg-blue-800'
                  }`}
                >
                  Étape suivante &rarr;
                </button>
              </div>

            </div>
          );
        })()}
      </div>

      {/* Figma Structure Reference Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="text-lg font-bold text-slate-900 font-display">
          Tableau Récapitulatif des 9 Écrans à Créer dans Figma
        </h3>
        <p className="text-xs text-slate-500">
          Ce récapitulatif synthétise l&apos;ensemble de l&apos;arborescence pour votre livrable final.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] border-y border-slate-200">
                <th className="py-3 px-4">Plateforme</th>
                <th className="py-3 px-4">Nom de la Frame Figma</th>
                <th className="py-3 px-4">Dimensions</th>
                <th className="py-3 px-4">Utilisateur Cible</th>
                <th className="py-3 px-4">Fonction Principale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-[#0056A6]">Mobile</td>
                <td className="py-2.5 px-4 font-mono font-semibold">Mobile / 01_Login</td>
                <td className="py-2.5 px-4 font-mono text-[11px]">393 × 852 px</td>
                <td className="py-2.5 px-4">Agent de terrain</td>
                <td className="py-2.5 px-4">Authentification matricule + mot de passe</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-[#0056A6]">Mobile</td>
                <td className="py-2.5 px-4 font-mono font-semibold">Mobile / 02_Tournees</td>
                <td className="py-2.5 px-4 font-mono text-[11px]">393 × 852 px</td>
                <td className="py-2.5 px-4">Agent de terrain</td>
                <td className="py-2.5 px-4">Progression tournée du jour (45/120) &amp; stats</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-blue-50/40">
                <td className="py-2.5 px-4 font-bold text-[#0056A6]">Mobile</td>
                <td className="py-2.5 px-4 font-mono font-extrabold text-[#0056A6]">Mobile / 03_Releve_Principal</td>
                <td className="py-2.5 px-4 font-mono text-[11px]">393 × 852 px</td>
                <td className="py-2.5 px-4 font-bold">Agent de terrain</td>
                <td className="py-2.5 px-4 font-bold">Photo compteur certifiée + Saisie index + GPS</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-[#0056A6]">Mobile</td>
                <td className="py-2.5 px-4 font-mono font-semibold">Mobile / 04_Mode_Offline</td>
                <td className="py-2.5 px-4 font-mono text-[11px]">393 × 852 px</td>
                <td className="py-2.5 px-4">Agent de terrain</td>
                <td className="py-2.5 px-4">File d&apos;attente locale des 12 relevés sans réseau</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-[#0056A6]">Mobile</td>
                <td className="py-2.5 px-4 font-mono font-semibold">Mobile / 05_Signalement_Incident</td>
                <td className="py-2.5 px-4 font-mono text-[11px]">393 × 852 px</td>
                <td className="py-2.5 px-4">Agent de terrain</td>
                <td className="py-2.5 px-4">Escalade immédiate : Fraude, Compteur brûlé...</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-[#003D7A]">Web</td>
                <td className="py-2.5 px-4 font-mono font-semibold">Web / 01_Dashboard_Principal</td>
                <td className="py-2.5 px-4 font-mono text-[11px]">1440 × 900 px</td>
                <td className="py-2.5 px-4">Directeur CIE / DSI</td>
                <td className="py-2.5 px-4">Carte GPS temps réel d&apos;Abidjan + 4 KPI Cards</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-[#003D7A]">Web</td>
                <td className="py-2.5 px-4 font-mono font-semibold">Web / 02_Gestion_Anomalies</td>
                <td className="py-2.5 px-4 font-mono text-[11px]">1440 × 900 px</td>
                <td className="py-2.5 px-4">Superviseur Fraude</td>
                <td className="py-2.5 px-4">Tableau d&apos;arbitrage + Modal zoom photo 400x300</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-[#003D7A]">Web</td>
                <td className="py-2.5 px-4 font-mono font-semibold">Web / 03_Profil_Agent</td>
                <td className="py-2.5 px-4 font-mono text-[11px]">1440 × 900 px</td>
                <td className="py-2.5 px-4">Directeur du Relevé</td>
                <td className="py-2.5 px-4">Fiche Kouadio Jean : productivité, Top 5%</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-[#003D7A]">Web</td>
                <td className="py-2.5 px-4 font-mono font-semibold">Web / 04_Rapports_Analytics</td>
                <td className="py-2.5 px-4 font-mono text-[11px]">1440 × 900 px</td>
                <td className="py-2.5 px-4">Direction Générale</td>
                <td className="py-2.5 px-4">Bilan financier, 1.25 Mrd FCFA préservés</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
