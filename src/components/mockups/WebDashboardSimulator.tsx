import { useState } from 'react';
import { 
  Monitor, 
  Layers, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  Users, 
  Zap, 
  Calendar, 
  ChevronDown, 
  Bell, 
  Search, 
  Filter, 
  Eye, 
  Check, 
  X, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download, 
  FileText, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  ShieldCheck, 
  Settings, 
  LogOut,
  ExternalLink,
  Award,
  Maximize2,
  Sparkles
} from 'lucide-react';
import { 
  WEB_SCREENS, 
  SAMPLE_ANOMALIES, 
  LIVE_ACTIVITY_STREAM, 
  AGENT_MAP_POINTS 
} from '../../data/mockupGuideData';

export function WebDashboardSimulator() {
  const [activeWebScreen, setActiveWebScreen] = useState<'dashboard' | 'anomalies' | 'agent' | 'reports'>('dashboard');
  const [selectedZone, setSelectedZone] = useState<string>("Toutes les zones");
  const [selectedAnomaly, setSelectedAnomaly] = useState<typeof SAMPLE_ANOMALIES[0] | null>(null);
  const [activeMarker, setActiveMarker] = useState<typeof AGENT_MAP_POINTS[0] | null>(AGENT_MAP_POINTS[0]);
  const [reportPeriod, setReportPeriod] = useState<'jour' | 'semaine' | 'mois' | 'trimestre'>('mois');
  const [anomalyFilter, setAnomalyFilter] = useState<'all' | 'drop' | 'gps' | 'photo'>('all');
  const [anomaliesList, setAnomaliesList] = useState(SAMPLE_ANOMALIES);
  const [decisionFeedback, setDecisionFeedback] = useState<string | null>(null);

  const handleValidateAnomaly = (id: string, action: 'validated' | 'rejected' | 'inspect') => {
    setAnomaliesList(prev => prev.filter(a => a.id !== id));
    setSelectedAnomaly(null);
    const actionLabel = action === 'validated' ? 'validé' : action === 'rejected' ? 'rejeté' : 'assigné pour contre-visite';
    setDecisionFeedback(`Dossier ${id} ${actionLabel} avec succès !`);
    setTimeout(() => setDecisionFeedback(null), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Interactive Controls & Screen Selector */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#003D7A] flex items-center justify-center font-bold">
            <Monitor className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Simulateur Dashboard Web Directeur CIE</h4>
            <p className="text-[11px] text-slate-500">
              Résolution Desktop 1440 × 900 px • 4 Vues exécutives conçues pour la Direction Générale &amp; DSI
            </p>
          </div>
        </div>

        {/* Screen Picker Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {WEB_SCREENS.map((sc) => {
            const isActive = activeWebScreen === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => setActiveWebScreen(sc.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#003D7A] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{sc.number}.</span>
                <span>{sc.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Container Wrapper */}
      <div className="bg-slate-900 p-2.5 sm:p-4 rounded-3xl shadow-2xl border-4 border-slate-800">
        
        {/* Browser Top Window Chrome */}
        <div className="bg-slate-800 text-slate-300 px-4 py-2.5 rounded-t-2xl flex items-center justify-between text-xs border-b border-slate-700 select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            </div>
            <span className="ml-4 font-mono text-[11px] text-slate-400 hidden sm:inline">
              https://supervision.cie.ci/direction-releve
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
            Serveur Central CIE • En Ligne (SSL 256-bit)
          </span>
        </div>

        {/* Inner Desktop Screen (1440x900 aspect layout) */}
        <div className="bg-[#F5F5F5] min-h-[700px] flex flex-col md:flex-row font-sans text-slate-900 rounded-b-2xl overflow-hidden shadow-inner">
          
          {/* =========================================================
              SIDEBAR GAUCHE (240px, #003D7A)
          ========================================================= */}
          <aside className="w-full md:w-60 bg-[#003D7A] text-white flex flex-col justify-between shrink-0 shadow-lg select-none">
            <div>
              {/* Logo CIE blanc en haut */}
              <div className="h-16 px-5 border-b border-blue-900/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#003D7A] flex flex-col items-center justify-center font-black tracking-tighter shadow-xs">
                  <span className="text-base leading-none font-display">CIE</span>
                  <span className="text-[7px] font-bold tracking-widest text-blue-800">SUPERVISOR</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide text-white font-display">VOLTASYNC CI</h3>
                  <p className="text-[10px] text-blue-200">Relevé &amp; Anti-Fraude</p>
                </div>
              </div>

              {/* Menu de navigation */}
              <nav className="p-3 space-y-1 text-xs">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, badge: null },
                  { id: 'agent', label: 'Agents (450)', icon: Users, badge: '450' },
                  { id: 'meters', label: 'Compteurs', icon: Zap, badge: '2.5M' },
                  { id: 'anomalies', label: 'Anomalies', icon: AlertTriangle, badge: '12' },
                  { id: 'reports', label: 'Rapports & KPI', icon: TrendingUp, badge: null },
                  { id: 'settings', label: 'Paramètres DSI', icon: Settings, badge: null }
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeWebScreen === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (['dashboard', 'anomalies', 'agent', 'reports'].includes(item.id)) {
                          setActiveWebScreen(item.id as any);
                        }
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl font-semibold flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-[#0056A6] text-white shadow-xs font-bold'
                          : 'text-blue-100 hover:bg-blue-800/40 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-200'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                          item.id === 'anomalies'
                            ? 'bg-amber-500 text-slate-950 animate-pulse'
                            : 'bg-blue-900/70 text-blue-200'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Profil utilisateur en bas */}
            <div className="p-4 border-t border-blue-900/50 bg-[#003468] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-blue-100 text-[#003D7A] flex items-center justify-center font-bold text-xs shadow-xs">
                  DG
                </div>
                <div>
                  <p className="font-bold text-white text-xs leading-none">Dir. Général CIE</p>
                  <span className="text-[10px] text-emerald-300 font-mono">Session Active</span>
                </div>
              </div>
              <button title="Déconnexion" className="p-1.5 text-blue-300 hover:text-white rounded-lg hover:bg-blue-800/50">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </aside>

          {/* =========================================================
              ZONE PRINCIPALE DE CONTENU
          ========================================================= */}
          <main className="flex-1 flex flex-col min-w-0 bg-[#F5F5F5] overflow-y-auto">
            
            {/* Header Blanc 64px */}
            <header className="h-16 bg-white px-6 border-b border-slate-200 flex items-center justify-between shrink-0 shadow-2xs">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-slate-900 font-display capitalize">
                  {activeWebScreen === 'dashboard' && 'Tableau de Bord & Supervision Temps Réel'}
                  {activeWebScreen === 'anomalies' && 'Centre de Validation des Anomalies & Fraudes'}
                  {activeWebScreen === 'agent' && 'Fiche de Performance Agent — Kouadio Jean'}
                  {activeWebScreen === 'reports' && 'Rapports Analytiques & Business Intelligence'}
                </h2>
              </div>

              {/* Filtres & Profil Header */}
              <div className="flex items-center gap-3 text-xs">
                {/* Sélecteur de date */}
                <div className="hidden sm:flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Aujourd&apos;hui (09 Septembre 2026)</span>
                </div>

                {/* Sélecteur de zone */}
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0056A6]"
                >
                  <option>Toutes les zones</option>
                  <option>Cocody (Zone 1-3)</option>
                  <option>Yopougon (Zone 1-4)</option>
                  <option>Plateau &amp; Centre</option>
                  <option>Marcory &amp; Koumassi</option>
                </select>

                {/* Cloche notification avec badge rouge 3 */}
                <button className="relative p-2 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg">
                  <Bell className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white rounded-full text-[9px] font-black flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </header>

            {/* Notification de décision si arbitré */}
            {decisionFeedback && (
              <div className="mx-6 mt-4 p-3 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md animate-in slide-in-from-top duration-200 flex items-center justify-between">
                <span>✓ {decisionFeedback}</span>
                <button onClick={() => setDecisionFeedback(null)} className="text-white hover:text-slate-200">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* CONTENU SELON L'ÉCRAN SÉLECTIONNÉ */}
            <div className="p-6 space-y-6 flex-1">
              
              {/* =========================================================
                  ÉCRAN 1 : DASHBOARD PRINCIPAL
              ========================================================= */}
              {activeWebScreen === 'dashboard' && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  
                  {/* 4 Cartes KPI (Hauteur 120px) */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* KPI 1 : Taux de relevé */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs h-[120px] flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Taux de relevé</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <ArrowUpRight className="w-3 h-3" /> +4.2%
                        </span>
                      </div>
                      <div>
                        <span className="text-3xl font-black text-[#0056A6] font-display">85%</span>
                        <p className="text-[11px] text-slate-500 mt-0.5">compteurs relevés aujourd&apos;hui</p>
                      </div>
                      <div className="w-full h-1.5 bg-blue-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0056A6] rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    {/* KPI 2 : Anomalies détectées */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs h-[120px] flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Anomalies</span>
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                      </div>
                      <div>
                        <span className="text-3xl font-black text-amber-600 font-display">12</span>
                        <p className="text-[11px] text-slate-500 mt-0.5">en attente de validation</p>
                      </div>
                      <button 
                        onClick={() => setActiveWebScreen('anomalies')}
                        className="text-[11px] font-bold text-amber-700 hover:underline flex items-center gap-1"
                      >
                        <span>Examiner les alertes</span> &rarr;
                      </button>
                    </div>

                    {/* KPI 3 : Agents actifs */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs h-[120px] flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Agents actifs</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      </div>
                      <div>
                        <span className="text-3xl font-black text-emerald-600 font-display">450</span>
                        <p className="text-[11px] text-slate-500 mt-0.5">agents sur le terrain</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="flex -space-x-1.5 overflow-hidden">
                          {['KJ', 'DO', 'KA', 'BS'].map((initials, idx) => (
                            <span key={idx} className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-slate-800 text-[8px] font-bold text-white flex items-center justify-center">
                              {initials}
                            </span>
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-500 font-semibold ml-1">100% connectés</span>
                      </div>
                    </div>

                    {/* KPI 4 : Consommation totale */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs h-[120px] flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Consommation</span>
                        <Zap className="w-4 h-4 text-[#0056A6]" />
                      </div>
                      <div>
                        <span className="text-3xl font-black text-slate-900 font-display">2.4M</span>
                        <p className="text-[11px] text-slate-500 mt-0.5">kWh relevés aujourd&apos;hui</p>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-medium">Facturation instantanée prête</span>
                    </div>
                  </div>

                  {/* Section Centrale : Carte Géographique (60%) + Flux Temps Réel (40%) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Carte Géographique d'Abidjan (60% = 7/12 cols) */}
                    <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col justify-between min-h-[460px]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#0056A6]" />
                          <h3 className="font-bold text-slate-900 text-sm">
                            Cartographie Temps Réel des Tournées (Abidjan)
                          </h3>
                        </div>
                        <span className="text-[11px] text-slate-500 font-mono">GPS Sub-métrique actif</span>
                      </div>

                      {/* Canvas Stylisé SVG de la carte d'Abidjan */}
                      <div className="relative w-full h-80 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                        {/* Fond cartographique vectoriel stylisé : Lagune Ébrié en bleu clair et axes routiers */}
                        <svg className="w-full h-full" viewBox="0 0 600 350" preserveAspectRatio="none">
                          {/* Fond Terre */}
                          <rect width="600" height="350" fill="#f1f5f9" />
                          
                          {/* Lagune Ébrié */}
                          <path
                            d="M 0,220 C 120,200 200,260 300,240 C 400,220 500,270 600,250 L 600,350 L 0,350 Z"
                            fill="#dbeafe"
                            stroke="#93c5fd"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M 220,180 C 260,190 280,240 260,260 C 240,280 200,250 220,180 Z"
                            fill="#bfdbfe"
                          />

                          {/* Axes Routiers Majeurs (Boulevard Lagunaire, Autoroute du Nord, VGE) */}
                          <line x1="80" y1="0" x2="250" y2="220" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="6,2" />
                          <line x1="250" y1="220" x2="520" y2="300" stroke="#cbd5e1" strokeWidth="4" />
                          <line x1="200" y1="90" x2="480" y2="120" stroke="#e2e8f0" strokeWidth="3" />
                          <line x1="320" y1="80" x2="350" y2="280" stroke="#cbd5e1" strokeWidth="3" />

                          {/* Labels Quartiers */}
                          <text x="320" y="70" fontSize="11" fontWeight="bold" fill="#64748b">Cocody</text>
                          <text x="70" y="90" fontSize="11" fontWeight="bold" fill="#64748b">Yopougon</text>
                          <text x="260" y="190" fontSize="11" fontWeight="bold" fill="#334155">Plateau</text>
                          <text x="350" y="310" fontSize="11" fontWeight="bold" fill="#64748b">Marcory / Zone 4</text>
                          <text x="210" y="320" fontSize="11" fontWeight="bold" fill="#64748b">Treichville</text>
                          <text x="260" y="40" fontSize="11" fontWeight="bold" fill="#64748b">Abobo</text>
                        </svg>

                        {/* Marqueurs Agents interactifs */}
                        {AGENT_MAP_POINTS.map((ag) => {
                          // Coordinates mapped to SVG %
                          const leftPct = ((ag.lon + 4.1) / 0.2) * 100;
                          const topPct = (1 - (ag.lat - 5.28) / 0.16) * 100;
                          const isSelected = activeMarker?.id === ag.id;

                          return (
                            <button
                              key={ag.id}
                              onClick={() => setActiveMarker(ag)}
                              style={{ left: `${Math.min(90, Math.max(8, leftPct))}%`, top: `${Math.min(85, Math.max(12, topPct))}%` }}
                              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 shadow-md transition-transform hover:scale-125 ${
                                ag.code === 'green'
                                  ? 'bg-emerald-500 text-white'
                                  : ag.code === 'blue'
                                  ? 'bg-[#0056A6] text-white'
                                  : ag.code === 'orange'
                                  ? 'bg-amber-500 text-white'
                                  : 'bg-red-600 text-white ring-2 ring-red-300 animate-bounce'
                              } ${isSelected ? 'ring-4 ring-slate-900' : ''}`}
                              title={`${ag.name} (${ag.zone})`}
                            >
                              <Users className="w-3 h-3" />
                            </button>
                          );
                        })}

                        {/* Popup d'inspection active de l'agent sélectionné */}
                        {activeMarker && (
                          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-300 shadow-lg text-xs space-y-1.5 max-w-[210px] animate-in fade-in">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-900 text-xs">{activeMarker.name}</span>
                              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                                activeMarker.code === 'red' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                              }`}>
                                {activeMarker.zone}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600">Progression : <strong>{activeMarker.progress}</strong> compteurs</p>
                            <button
                              onClick={() => setActiveWebScreen('agent')}
                              className="text-[10px] font-bold text-[#0056A6] hover:underline flex items-center gap-1 pt-1"
                            >
                              <span>Voir fiche performance</span> &rarr;
                            </button>
                          </div>
                        )}

                        {/* Légende en bas à droite */}
                        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs p-2 rounded-lg border border-slate-200 text-[10px] space-y-1 text-slate-700 shadow-xs">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                            <span>En avance (&gt;80%)</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#0056A6]"></span>
                            <span>Dans les temps</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                            <span>En retard</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                            <span>Anomalie / Alerte</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 text-[11px] text-slate-500 flex justify-between items-center">
                        <span>450 agents géolocalisés en direct</span>
                        <span className="text-emerald-700 font-semibold">Taux de synchronisation 4G : 99.1%</span>
                      </div>
                    </div>

                    {/* Panneau Latéral Droit : Activité en Temps Réel (40% = 5/12 cols) */}
                    <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                            Activité en Temps Réel
                          </h3>
                          <span className="text-[10px] text-slate-400 font-mono">Dernières secondes</span>
                        </div>

                        {/* Liste scrollable des derniers relevés */}
                        <div className="divide-y divide-slate-100 max-h-[380px] overflow-y-auto space-y-1 pr-1">
                          {LIVE_ACTIVITY_STREAM.map((item, idx) => (
                            <div key={idx} className="py-2.5 flex items-center justify-between text-xs hover:bg-slate-50 rounded-lg px-2 transition-colors">
                              <div className="flex items-center gap-2.5">
                                {/* Miniature photo compteur */}
                                <div className="w-10 h-10 rounded-lg bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
                                  <img
                                    src="https://images.unsplash.com/photo-1590496793907-49cc7c918326?w=100&auto=format&fit=crop&q=80"
                                    alt="Miniature"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-black text-slate-900 font-mono text-[11px]">{item.meter}</span>
                                    <span className="text-[10px] text-slate-400">({item.zone})</span>
                                  </div>
                                  <p className="text-[11px] font-semibold text-slate-600 mt-0.5">{item.kwh}</p>
                                  <span className="text-[10px] text-slate-400 font-mono">{item.time} • {item.agent}</span>
                                </div>
                              </div>

                              <div>
                                {item.status === 'valid' ? (
                                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                                    <Check className="w-3 h-3" /> Validé
                                  </span>
                                ) : (
                                  <button
                                    onClick={() => setActiveWebScreen('anomalies')}
                                    className="bg-amber-100 text-amber-900 hover:bg-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5"
                                  >
                                    <AlertTriangle className="w-3 h-3 text-amber-600" /> Signalé
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 text-center">
                        <button
                          onClick={() => setActiveWebScreen('reports')}
                          className="text-xs font-bold text-[#0056A6] hover:underline"
                        >
                          Voir l&apos;intégralité des 24 500 relevés du jour &rarr;
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* =========================================================
                  ÉCRAN 2 : GESTION DES ANOMALIES & VALIDATION
              ========================================================= */}
              {activeWebScreen === 'anomalies' && (
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4 animate-in fade-in duration-150">
                  
                  {/* Header & Filtres */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-display">
                        Anomalies à Valider ({anomaliesList.length})
                      </h3>
                      <p className="text-xs text-slate-500">
                        Arbitrez les signalements de fraude, baisses brutales et incohérences terrain.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setAnomalyFilter('all')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                          anomalyFilter === 'all' ? 'bg-[#0056A6] text-white' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        Toutes ({anomaliesList.length})
                      </button>
                      <button
                        onClick={() => setAnomalyFilter('drop')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                          anomalyFilter === 'drop' ? 'bg-[#0056A6] text-white' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        Baisse conso (-40%+)
                      </button>
                    </div>
                  </div>

                  {/* Tableau des Anomalies */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] border-y border-slate-200">
                          <th className="py-2.5 px-3">Date / Heure</th>
                          <th className="py-2.5 px-3">Agent</th>
                          <th className="py-2.5 px-3">N° Compteur</th>
                          <th className="py-2.5 px-3">Client</th>
                          <th className="py-2.5 px-3">Ancien &rarr; Nouveau</th>
                          <th className="py-2.5 px-3">Écart (%)</th>
                          <th className="py-2.5 px-3">Photo</th>
                          <th className="py-2.5 px-3">Statut</th>
                          <th className="py-2.5 px-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {anomaliesList.map((item) => (
                          <tr key={item.id} className="hover:bg-blue-50/40 transition-colors">
                            <td className="py-3 px-3 font-mono text-[11px] text-slate-500">{item.date}</td>
                            <td className="py-3 px-3 font-bold text-slate-900">{item.agentName}</td>
                            <td className="py-3 px-3 font-mono font-extrabold text-[#0056A6]">{item.meterId}</td>
                            <td className="py-3 px-3 font-medium text-slate-800">{item.clientName}</td>
                            <td className="py-3 px-3 font-mono text-[11px]">
                              {item.oldIndex.toLocaleString()} &rarr; <strong className="text-slate-900">{item.newIndex.toLocaleString()}</strong>
                            </td>
                            <td className="py-3 px-3">
                              <span className={`px-2 py-0.5 rounded font-black font-mono text-[11px] ${
                                item.variationPercent < -30 ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                              }`}>
                                {item.variationPercent > 0 ? `+${item.variationPercent}%` : `${item.variationPercent}%`}
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <button
                                onClick={() => setSelectedAnomaly(item)}
                                className="w-8 h-8 rounded bg-slate-100 border border-slate-200 overflow-hidden hover:opacity-80 shadow-2xs"
                              >
                                <img src={item.photoUrl} alt="Compteur" className="w-full h-full object-cover" />
                              </button>
                            </td>
                            <td className="py-3 px-3">
                              <span className="bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                {item.status}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-right">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  onClick={() => setSelectedAnomaly(item)}
                                  className="px-2.5 py-1 bg-blue-50 text-[#0056A6] rounded-md font-bold text-[11px] hover:bg-blue-100"
                                >
                                  Examiner
                                </button>
                                <button
                                  onClick={() => handleValidateAnomaly(item.id, 'validated')}
                                  className="p-1 bg-emerald-50 text-emerald-700 rounded-md hover:bg-emerald-100"
                                  title="Valider l'index"
                                >
                                  <Check className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleValidateAnomaly(item.id, 'rejected')}
                                  className="p-1 bg-red-50 text-red-700 rounded-md hover:bg-red-100"
                                  title="Rejeter"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Modal d'arbitrage haute résolution si une anomalie est sélectionnée */}
                  {selectedAnomaly && (
                    <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
                      <div className="bg-white w-full max-w-3xl rounded-3xl p-6 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded uppercase">
                                Dossier Litige : {selectedAnomaly.id}
                              </span>
                              <span className="font-mono text-xs text-slate-500">Compteur : {selectedAnomaly.meterId}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                              {selectedAnomaly.type}
                            </h3>
                          </div>
                          <button onClick={() => setSelectedAnomaly(null)} className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full">
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Colonne gauche : Grande photo 400x300 avec zoom */}
                          <div className="space-y-2">
                            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                              Preuve Photo Horodatée &amp; Géolocalisée
                            </span>
                            <div className="relative w-full h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-300">
                              <img src={selectedAnomaly.photoUrl} alt="Compteur zoom" className="w-full h-full object-cover" />
                              <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 p-2 text-white font-mono text-[10px] space-y-0.5">
                                <p className="font-bold text-emerald-400">CERTIFIÉ CIE • {selectedAnomaly.meterId}</p>
                                <p>{selectedAnomaly.gpsStatus}</p>
                              </div>
                            </div>
                            <p className="text-[11px] text-slate-500 italic">
                              Relevé effectué par {selectedAnomaly.agentName} ({selectedAnomaly.agentMatricule})
                            </p>
                          </div>

                          {/* Colonne droite : Analyse de consommation */}
                          <div className="space-y-3.5 text-xs">
                            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                              <span className="font-bold text-slate-800 uppercase text-[10px]">Client &amp; Localisation :</span>
                              <p className="text-slate-900 font-bold text-sm">{selectedAnomaly.clientName}</p>
                              <p className="text-slate-600">{selectedAnomaly.address}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-center">
                              <div className="p-2.5 rounded-xl bg-slate-100">
                                <span className="text-[10px] text-slate-500 block">Conso Réelle</span>
                                <strong className="text-base text-slate-900 font-mono">{selectedAnomaly.consumption} kWh</strong>
                              </div>
                              <div className="p-2.5 rounded-xl bg-blue-50">
                                <span className="text-[10px] text-blue-700 block">Moyenne Historique</span>
                                <strong className="text-base text-[#0056A6] font-mono">{selectedAnomaly.averageConsumption} kWh</strong>
                              </div>
                            </div>

                            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 space-y-1">
                              <strong className="text-[10px] uppercase font-bold text-amber-900 block">
                                Rapport de Terrain de l&apos;Agent :
                              </strong>
                              <p className="text-[11px] leading-relaxed italic">
                                &ldquo;{selectedAnomaly.comment}&rdquo;
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Boutons d'arbitrage */}
                        <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-2.5">
                          <button
                            onClick={() => handleValidateAnomaly(selectedAnomaly.id, 'inspect')}
                            className="w-full sm:w-auto px-4 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
                          >
                            <Search className="w-3.5 h-3.5" />
                            <span>Demander vérification / Contre-visite</span>
                          </button>
                          <button
                            onClick={() => handleValidateAnomaly(selectedAnomaly.id, 'rejected')}
                            className="w-full sm:w-auto px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
                          >
                            <X className="w-3.5 h-3.5" />
                            <span>Rejeter l&apos;Index Relevé</span>
                          </button>
                          <button
                            onClick={() => handleValidateAnomaly(selectedAnomaly.id, 'validated')}
                            className="w-full sm:w-auto px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Valider &amp; Déclencher Facturation</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* =========================================================
                  ÉCRAN 3 : FICHE AGENT & PERFORMANCE
              ========================================================= */}
              {activeWebScreen === 'agent' && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  
                  {/* Header Agent */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-[#0056A6] text-white flex items-center justify-center font-black text-2xl shadow-md">
                        KJ
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl font-black text-slate-900 font-display">Kouadio Jean</h3>
                          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                            En service
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-mono mt-0.5">Matricule : AGT-0234 • Direction Régionale Abidjan Nord</p>
                        <p className="text-xs font-semibold text-[#0056A6] mt-1">Zone Assignée : Cocody - Secteur 3 (120 compteurs/jour)</p>
                      </div>
                    </div>

                    {/* Section Classement & Top 5% */}
                    <div className="text-center sm:text-right bg-amber-50/70 border border-amber-200 rounded-2xl p-4">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                        <Award className="w-3.5 h-3.5 text-amber-600" />
                        🏆 Top 5% National
                      </span>
                      <p className="text-xl font-black text-slate-900 font-display mt-1">
                        12ème / 450 Agents
                      </p>
                      <p className="text-[11px] text-emerald-700 font-bold mt-0.5">
                        +15% au-dessus de la moyenne
                      </p>
                    </div>
                  </div>

                  {/* 3 Widgets Graphiques de Performance du Mois */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Widget 1 : Barres Compteurs/jour */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Compteurs Relevés / Jour
                      </span>
                      <div className="h-28 flex items-end justify-between gap-1.5 pt-2">
                        {[110, 118, 122, 115, 125, 120, 124].map((val, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              className="w-full bg-[#0056A6] rounded-t transition-all hover:bg-blue-800"
                              style={{ height: `${(val / 130) * 100}%` }}
                            ></div>
                            <span className="text-[9px] text-slate-400 font-mono">J{idx + 1}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-slate-600 border-t pt-2">
                        <span>Moyenne : <strong>119/j</strong></span>
                        <span className="text-emerald-700 font-bold">Objectif 100% atteint</span>
                      </div>
                    </div>

                    {/* Widget 2 : Répartition Circulaire des Statuts */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Conformité des Relevés
                      </span>
                      <div className="flex items-center justify-center py-2">
                        <div className="w-24 h-24 rounded-full border-8 border-emerald-500 border-t-amber-500 border-r-emerald-500 flex items-center justify-center text-center">
                          <span className="text-lg font-black text-slate-900 font-display">96%</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 text-center text-[10px] text-slate-600 pt-1">
                        <div><strong className="text-emerald-700 block">96%</strong> Validés</div>
                        <div><strong className="text-amber-600 block">3%</strong> Anomalies</div>
                        <div><strong className="text-red-600 block">1%</strong> Rejets</div>
                      </div>
                    </div>

                    {/* Widget 3 : Temps Moyen par Compteur */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Temps Moyen / Compteur
                      </span>
                      <div className="py-2 text-center">
                        <span className="text-4xl font-black text-emerald-700 font-display">2.1 min</span>
                        <p className="text-xs text-slate-500 mt-1">vs 4.5 min avec l&apos;ancien système papier</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-950 text-xs text-center font-semibold">
                        Gain de productivité : +53% de rapidité
                      </div>
                    </div>
                  </div>

                  {/* Tableau des Dernières Tournées de l'Agent */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
                    <h4 className="font-bold text-slate-900 text-sm mb-3">Dernières Tournées Effectuées</h4>
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-slate-400 uppercase text-[10px] border-b pb-1 font-bold">
                          <th className="py-2">Date</th>
                          <th className="py-2">Zone</th>
                          <th className="py-2">Compteurs</th>
                          <th className="py-2">Anomalies</th>
                          <th className="py-2">Durée</th>
                          <th className="py-2 text-right">Statut</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="py-2.5 font-mono">08/09/2026</td>
                          <td className="py-2.5 font-bold">Cocody Zone 2</td>
                          <td className="py-2.5">120 / 120</td>
                          <td className="py-2.5 text-amber-700 font-semibold">2</td>
                          <td className="py-2.5">4h 15m</td>
                          <td className="py-2.5 text-right"><span className="text-emerald-700 font-bold">✓ Complété</span></td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-mono">07/09/2026</td>
                          <td className="py-2.5 font-bold">Cocody Zone 1</td>
                          <td className="py-2.5">118 / 120</td>
                          <td className="py-2.5 text-amber-700 font-semibold">1</td>
                          <td className="py-2.5">4h 20m</td>
                          <td className="py-2.5 text-right"><span className="text-emerald-700 font-bold">✓ Complété</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              )}

              {/* =========================================================
                  ÉCRAN 4 : RAPPORTS & ANALYTICS
              ========================================================= */}
              {activeWebScreen === 'reports' && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  
                  {/* Sélecteur de période */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">Période d&apos;analyse :</span>
                      {(['jour', 'semaine', 'mois', 'trimestre'] as const).map((p) => (
                        <button
                          key={p}
                          onClick={() => setReportPeriod(p)}
                          className={`px-3 py-1.5 rounded-lg capitalize font-semibold ${
                            reportPeriod === p ? 'bg-[#0056A6] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => alert("Génération du rapport exécutif consolidé au format PDF...")}
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl flex items-center gap-1.5 shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Générer le Rapport Officiel CIE (PDF / Excel)</span>
                    </button>
                  </div>

                  {/* 6 KPIs Principaux (Grille 2x3) */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Compteurs Relevés</span>
                      <strong className="text-xl font-black text-slate-900 font-display">2.1M</strong>
                      <span className="text-[10px] text-emerald-700 block mt-0.5">Sur 2.5M national</span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Taux de Réussite</span>
                      <strong className="text-xl font-black text-[#0056A6] font-display">98.4%</strong>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Visites concluantes</span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Anomalies IA</span>
                      <strong className="text-xl font-black text-amber-600 font-display">1 420</strong>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Traitements en cours</span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Fraudes Récupérées</span>
                      <strong className="text-xl font-black text-emerald-700 font-display">1.25 Mrd</strong>
                      <span className="text-[10px] text-slate-500 block mt-0.5">FCFA préservés</span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Temps Moyen</span>
                      <strong className="text-xl font-black text-slate-900 font-display">2.4 min</strong>
                      <span className="text-[10px] text-slate-500 block mt-0.5">-48% vs N-1</span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Satisfaction Client</span>
                      <strong className="text-xl font-black text-purple-700 font-display">92%</strong>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Contestations divisées par 4</span>
                    </div>
                  </div>

                  {/* Tableau Récapitulatif par Zone */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
                    <h4 className="font-bold text-slate-900 text-sm mb-3">Récapitulatif par Direction Régionale</h4>
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-slate-400 uppercase text-[10px] border-b pb-1 font-bold">
                          <th className="py-2">Zone d&apos;Abidjan</th>
                          <th className="py-2">Agents</th>
                          <th className="py-2">Compteurs</th>
                          <th className="py-2">Taux Relevé</th>
                          <th className="py-2">Anomalies</th>
                          <th className="py-2 text-right">Montant Récupéré</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="py-2.5 font-bold">Cocody / Bingerville</td>
                          <td className="py-2.5">85</td>
                          <td className="py-2.5">380 000</td>
                          <td className="py-2.5 text-emerald-700 font-bold">99.1%</td>
                          <td className="py-2.5">180</td>
                          <td className="py-2.5 text-right font-mono font-bold text-slate-900">450M FCFA</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-bold">Yopougon / Songon</td>
                          <td className="py-2.5">140</td>
                          <td className="py-2.5">620 000</td>
                          <td className="py-2.5 text-emerald-700 font-bold">97.8%</td>
                          <td className="py-2.5">520</td>
                          <td className="py-2.5 text-right font-mono font-bold text-slate-900">510M FCFA</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-bold">Marcory / Koumassi / Port-Bouët</td>
                          <td className="py-2.5">110</td>
                          <td className="py-2.5">490 000</td>
                          <td className="py-2.5 text-emerald-700 font-bold">98.5%</td>
                          <td className="py-2.5">310</td>
                          <td className="py-2.5 text-right font-mono font-bold text-slate-900">290M FCFA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              )}

            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
