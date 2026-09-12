import { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ExternalLink, 
  MessageSquare, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  FileText, 
  Linkedin,
  HelpCircle,
  TrendingUp,
  UserCheck,
  ShieldCheck,
  Award,
  Printer
} from 'lucide-react';
import { EMAIL_OUTREACH_DATA } from '../data/technicalSpecsData';
import { BUSINESS_INFO, KEY_ADVICE } from '../data/businessPlanData';
import { DocumentPrintBar } from './DocumentPrintBar';
import { PrintHeader } from './PrintHeader';

export function EmailAndStrategyView() {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedFollowUp, setCopiedFollowUp] = useState<boolean>(false);
  const [copiedLinkedIn, setCopiedLinkedIn] = useState<boolean>(false);
  const [activeSubTab, setActiveSubTab] = useState<'main' | 'followup' | 'linkedin' | 'strategy'>('main');
  const [printMode, setPrintMode] = useState<'active' | 'all'>('active');

  const fullEmailBody = `
Objet : ${EMAIL_OUTREACH_DATA.subject}

À l'attention de : Monsieur le Directeur Général de la CIE
Copie : Direction du Relevé et de la Facturation • Direction des Systèmes d'Information (DSI)

Monsieur le Directeur Général,

${EMAIL_OUTREACH_DATA.bodyParagraphs.intro}

1. LE CONSTAT : UNE HÉMORRAGIE FINANCIÈRE ÉVITABLE
${EMAIL_OUTREACH_DATA.bodyParagraphs.observationPoints.map(p => `• ${p}`).join('\n')}

2. NOTRE SOLUTION : LA PLATEFORME TOUT-EN-UN VOLTASYNC CI
${EMAIL_OUTREACH_DATA.bodyParagraphs.solutionPoints.map(p => `• ${p}`).join('\n')}

3. LE RETOUR SUR INVESTISSEMENT : 960% LA PREMIÈRE ANNÉE
"Pour 1 FCFA investi, la CIE récupère 10 FCFA de trésorerie."

RÉCAPITULATIF FINANCIER ESTIMÉ :
- Récupération fraudes détectées : +15 milliards FCFA
- Réduction impayés (facturation instantanée) : +5 milliards FCFA
- Économies opérationnelles (papier, logistique) : +1,2 milliard FCFA
- Gain productivité agents (+20%) : +3 milliards FCFA
-----------------------------------------------------------
TOTAL DES GAINS ANNUELS ESTIMÉS : ~24 milliards FCFA / an
Coût annuel de la solution : 2,5 milliards FCFA / an
BÉNÉFICE NET ANNUEL POUR LA CIE : +21,5 milliards FCFA / an

4. NOTRE PROPOSITION : UN PILOTE GRATUIT DE 90 JOURS SANS RISQUE
${EMAIL_OUTREACH_DATA.bodyParagraphs.pilotOfferText}

${EMAIL_OUTREACH_DATA.bodyParagraphs.closing}

PJ : ${EMAIL_OUTREACH_DATA.bodyParagraphs.attachmentName}

Respectueusement,

${BUSINESS_INFO.founder}
${BUSINESS_INFO.title} • ${BUSINESS_INFO.company} (${BUSINESS_INFO.name})
Email : ${BUSINESS_INFO.email}
Téléphone / WhatsApp : ${BUSINESS_INFO.phoneWhatsApp}
Site Web : ${BUSINESS_INFO.website}
Abidjan, Côte d'Ivoire
`.trim();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(fullEmailBody);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyFollowUp = () => {
    navigator.clipboard.writeText(EMAIL_OUTREACH_DATA.followUp7Days.body);
    setCopiedFollowUp(true);
    setTimeout(() => setCopiedFollowUp(false), 2500);
  };

  const handleCopyLinkedIn = () => {
    navigator.clipboard.writeText(EMAIL_OUTREACH_DATA.linkedInTemplate.text);
    setCopiedLinkedIn(true);
    setTimeout(() => setCopiedLinkedIn(false), 2500);
  };

  const mailtoLink = `mailto:contact@cie.ci?subject=${encodeURIComponent(EMAIL_OUTREACH_DATA.subject)}&body=${encodeURIComponent(fullEmailBody)}`;

  return (
    <div id="email-container" className="printable-document space-y-6 max-w-5xl mx-auto">
      {/* Document Print & Action Bar */}
      <DocumentPrintBar
        title="Livrable 3 : Stratégie de Prospection & Courriers Officiels CIE"
        subtitle="Dossier complet de correspondance haute direction, relances, argumentaires et calendrier d'exécution 4 semaines."
        badgeText="Courrier & Stratégie A4"
        downloadFileName="VoltaSync_CIE_Emails_Prospection_B2B.pdf"
        targetElementId="email-container"
        onPrint={() => {
          setPrintMode('active');
          setTimeout(() => window.print(), 100);
        }}
        printOptions={[
          {
            label: `Imprimer ${
              activeSubTab === 'main'
                ? 'Email DG (Lettre officielle)'
                : activeSubTab === 'followup'
                ? 'Relance J+7'
                : activeSubTab === 'linkedin'
                ? 'Message LinkedIn'
                : 'Plan d\'Action 4 Semaines'
            }`,
            action: () => {
              setPrintMode('active');
              setTimeout(() => window.print(), 100);
            },
            active: printMode === 'active'
          },
          {
            label: 'Imprimer Tout le Dossier (4 Sections)',
            action: () => {
              setPrintMode('all');
              setTimeout(() => window.print(), 100);
            },
            active: printMode === 'all'
          }
        ]}
      />

      {/* Official Print Header */}
      <PrintHeader
        documentTitle={
          printMode === 'all'
            ? "Dossier de Prospection & Correspondance Officielle CIE (4 Sections)"
            : activeSubTab === 'main'
            ? "Courrier Officiel de Proposition de Partenariat & Pilote 90 Jours"
            : activeSubTab === 'followup'
            ? "Courrier de Relance J+7 — Suivi Proposition Pilote CIE"
            : activeSubTab === 'linkedin'
            ? "Note de Prise de Contact Dirigeants CIE & DSI"
            : "Plan d'Action Opérationnel de Prospection CIE (4 Semaines)"
        }
        documentSubtitle="Proposition commerciale, stratégie de contact, relance et feuille de route opérationnelle"
        referenceNumber="DOC-OUTREACH-CIE-2026"
      />

      {/* Top Banner */}
      <div className="no-print bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">
              Livrable 3 : Communication &amp; Prospection
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-bold text-slate-700">Direction Générale CIE</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-display mt-1">
            Email de Prise de Contact &amp; Stratégie de Prospection
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Courriers prêts à l&apos;emploi, modèle de relance, messages LinkedIn et feuille de route opérationnelle.
          </p>
        </div>

        {/* Sub-tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl text-xs">
          <button
            onClick={() => setActiveSubTab('main')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeSubTab === 'main' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Email Principal DG
          </button>
          <button
            onClick={() => setActiveSubTab('followup')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeSubTab === 'followup' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Relance J+7
          </button>
          <button
            onClick={() => setActiveSubTab('linkedin')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeSubTab === 'linkedin' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Message LinkedIn
          </button>
          <button
            onClick={() => setActiveSubTab('strategy')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeSubTab === 'strategy' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Plan d&apos;Action 4 Semaines
          </button>
        </div>
      </div>

      {/* SUBTAB 1 : MAIN EMAIL TO DG */}
      <div className={`space-y-6 ${activeSubTab === 'main' ? 'block' : printMode === 'all' ? 'hidden print:block' : 'hidden'}`}>
        <div className="space-y-6">
          {/* Action Bar */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-emerald-950 font-medium">
              <Mail className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                Email percutant et argumenté, centré sur le gain de 24 milliards FCFA et le pilote gratuit de 90 jours.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copié !' : 'Copier l&apos;Email'}</span>
              </button>
              <a
                href={mailtoLink}
                className="px-4 py-2 rounded-xl border border-emerald-300 bg-white hover:bg-emerald-50 text-emerald-900 font-bold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Ouvrir dans ma Messagerie</span>
              </a>
            </div>
          </div>

          {/* Email Preview Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            {/* Metadata Header */}
            <div className="bg-slate-50 p-4 border-b border-slate-200 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-bold uppercase w-16">De :</span>
                <span className="font-semibold text-slate-900">
                  {BUSINESS_INFO.founder} &lt;{BUSINESS_INFO.email}&gt; ({BUSINESS_INFO.title}, {BUSINESS_INFO.name})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-bold uppercase w-16">À :</span>
                <span className="font-semibold text-slate-900">{EMAIL_OUTREACH_DATA.recipient}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-bold uppercase w-16">Copie :</span>
                <span className="text-slate-600">{EMAIL_OUTREACH_DATA.copyRecipients}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-bold uppercase w-16">Objet :</span>
                <span className="font-bold text-slate-900">{EMAIL_OUTREACH_DATA.subject}</span>
              </div>
            </div>

            {/* Email Body */}
            <div className="p-6 text-xs sm:text-sm text-slate-800 space-y-4 leading-relaxed font-sans">
              <p>Monsieur le Directeur Général,</p>

              <p>{EMAIL_OUTREACH_DATA.bodyParagraphs.intro}</p>

              {/* Problem */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <strong className="text-slate-900 text-xs uppercase font-display block">
                  1. Le constat : une hémorragie financière évitable
                </strong>
                <ul className="space-y-1 text-xs text-slate-700">
                  {EMAIL_OUTREACH_DATA.bodyParagraphs.observationPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 space-y-2">
                <strong className="text-blue-950 text-xs uppercase font-display block">
                  2. Notre solution : la plateforme tout-en-un VoltaSync CI
                </strong>
                <ul className="space-y-1 text-xs text-slate-700">
                  {EMAIL_OUTREACH_DATA.bodyParagraphs.solutionPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#003399] font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ROI Table */}
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <strong className="text-amber-950 text-xs uppercase font-display">
                    3. Le retour sur investissement pour la CIE : 960% la première année
                  </strong>
                  <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded">
                    Pour 1 FCFA investi = 10 FCFA récupérés
                  </span>
                </div>

                <table className="w-full text-xs font-mono">
                  <tbody className="divide-y divide-amber-200/60">
                    {EMAIL_OUTREACH_DATA.bodyParagraphs.roiSummary.table.map((row, i) => (
                      <tr key={i} className={row.highlight ? 'font-bold text-emerald-800' : row.bold ? 'font-black text-slate-900 text-sm' : 'text-slate-700'}>
                        <td className="py-1 font-sans">{row.label}</td>
                        <td className="py-1 text-right">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pilot Offer */}
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-2">
                <strong className="text-emerald-950 text-xs uppercase font-display block">
                  4. Notre proposition : un pilote gratuit de 90 jours sans risque
                </strong>
                <p className="text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                  {EMAIL_OUTREACH_DATA.bodyParagraphs.pilotOfferText}
                </p>
              </div>

              <p className="whitespace-pre-line leading-relaxed">
                {EMAIL_OUTREACH_DATA.bodyParagraphs.closing}
              </p>

              {/* Signature */}
              <div className="pt-4 border-t border-slate-200 space-y-0.5 text-xs text-slate-700">
                <strong className="text-slate-900 block text-sm">{BUSINESS_INFO.founder}</strong>
                <span>{BUSINESS_INFO.title} • {BUSINESS_INFO.company} ({BUSINESS_INFO.name})</span>
                <div className="text-slate-500 pt-1 space-x-3">
                  <span>{BUSINESS_INFO.email}</span>
                  <span>•</span>
                  <span>{BUSINESS_INFO.phoneWhatsApp}</span>
                  <span>•</span>
                  <span>{BUSINESS_INFO.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUBTAB 2 : FOLLOW-UP J+7 */}
      <div className={`space-y-6 ${activeSubTab === 'followup' ? 'block' : printMode === 'all' ? 'hidden print:block pdf-page-break' : 'hidden'}`}>
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-amber-950 font-medium">
              <Clock className="w-5 h-5 text-amber-700 shrink-0" />
              <span>
                Courrier de relance courtoise à envoyer 7 jours après le premier email en l&apos;absence de réponse.
              </span>
            </div>
            <button
              onClick={handleCopyFollowUp}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
            >
              {copiedFollowUp ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedFollowUp ? 'Relance Copiée !' : 'Copier le Message de Relance'}</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Objet du message</span>
              <strong className="text-slate-900 text-sm">{EMAIL_OUTREACH_DATA.followUp7Days.subject}</strong>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs whitespace-pre-line leading-relaxed text-slate-800">
              {EMAIL_OUTREACH_DATA.followUp7Days.body}
            </div>
          </div>
        </div>
      </div>

      {/* SUBTAB 3 : LINKEDIN MESSAGE */}
      <div className={`space-y-6 ${activeSubTab === 'linkedin' ? 'block' : printMode === 'all' ? 'hidden print:block pdf-page-break' : 'hidden'}`}>
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-blue-950 font-medium">
              <Linkedin className="w-5 h-5 text-blue-700 shrink-0" />
              <span>
                Message direct InMail / Connexion LinkedIn pour le Directeur Général, le DSI ou le Directeur Facturation de la CIE.
              </span>
            </div>
            <button
              onClick={handleCopyLinkedIn}
              className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
            >
              {copiedLinkedIn ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLinkedIn ? 'Message Copié !' : 'Copier le Message LinkedIn'}</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <strong className="text-slate-900 text-sm font-display">{EMAIL_OUTREACH_DATA.linkedInTemplate.title}</strong>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs whitespace-pre-line leading-relaxed text-slate-800">
              {EMAIL_OUTREACH_DATA.linkedInTemplate.text}
            </div>
          </div>
        </div>
      </div>

      {/* SUBTAB 4 : STRATEGY & 4-WEEK ROADMAP */}
      <div className={`space-y-6 ${activeSubTab === 'strategy' ? 'block' : printMode === 'all' ? 'hidden print:block pdf-page-break' : 'hidden'}`}>
        <div className="space-y-6">
          {/* Action roadmap */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-base font-display">
                Plan d&apos;Action de Prospection Opérationnelle (4 Semaines)
              </h3>
              <p className="text-xs text-slate-500">
                La méthode pas-à-pas pour décrocher le contrat du pilote CIE.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="font-bold uppercase text-[10px] text-blue-700 block">Semaine 1</span>
                <h4 className="font-bold text-slate-900 text-sm">Prise de Contact Multi-Canale</h4>
                <ul className="space-y-1 text-slate-600">
                  <li>• Envoi de l&apos;email principal au DG et copies aux directeurs métiers</li>
                  <li>• Connexions personnalisées sur LinkedIn avec le DSI et le Directeur Relevé</li>
                  <li>• Dépôt d&apos;un exemplaire papier relié du Pitch Deck au secrétariat DG à Treichville/Plateau</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="font-bold uppercase text-[10px] text-amber-700 block">Semaine 2-3</span>
                <h4 className="font-bold text-slate-900 text-sm">Relance &amp; Démonstration Live</h4>
                <ul className="space-y-1 text-slate-600">
                  <li>• Relance téléphonique ou WhatsApp courtoise</li>
                  <li>• Rendez-vous de présentation de 30 minutes avec démonstration de l&apos;app Flutter</li>
                  <li>• Simulation en direct du calcul de rentabilité avec le Simulateur ROI</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-emerald-50 space-y-2">
                <span className="font-bold uppercase text-[10px] text-emerald-800 block">Semaine 4</span>
                <h4 className="font-bold text-slate-900 text-sm">Signature de la Convention Pilote</h4>
                <ul className="space-y-1 text-slate-600">
                  <li>• Validation de la zone test (ex: Agence de Cocody ou Yopougon)</li>
                  <li>• Définition des 100 agents releveurs participants</li>
                  <li>• Signature de la convention d&apos;expérimentation gratuite de 90 jours</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-purple-50 space-y-2">
                <span className="font-bold uppercase text-[10px] text-purple-800 block">Mois 2 à 4</span>
                <h4 className="font-bold text-slate-900 text-sm">Exécution &amp; Bilan Chiffré</h4>
                <ul className="space-y-1 text-slate-600">
                  <li>• Livraison des 100 smartphones durcis configurés</li>
                  <li>• Formation sur site de 2 jours pour les agents et superviseurs</li>
                  <li>• Rapport hebdomadaire à la Direction Générale : kWh sauvés et fraudes stoppées</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strategic Advice Cards from KEY_ADVICE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {KEY_ADVICE.slice(0, 3).map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {item.badge}
                </span>
                <h4 className="font-bold text-slate-900 text-sm font-display mt-1">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
