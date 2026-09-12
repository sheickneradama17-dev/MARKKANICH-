import { useState } from 'react';
import { 
  Smartphone, 
  Wifi, 
  WifiOff, 
  Camera, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  Flame, 
  Zap, 
  Home, 
  ShieldAlert, 
  ChevronLeft, 
  Eye, 
  EyeOff, 
  User, 
  Bell, 
  Clock, 
  RefreshCw, 
  Check, 
  RotateCcw, 
  X,
  Share2,
  Sparkles,
  Layers,
  MapPin
} from 'lucide-react';
import { MOBILE_SCREENS } from '../../data/mockupGuideData';

export function MobileAppSimulator() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'tours' | 'reading' | 'offline' | 'incident'>('reading');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [hasTakenPhoto, setHasTakenPhoto] = useState<boolean>(true);
  const [meterIndex, setMeterIndex] = useState<string>("84276");
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [syncSuccess, setSyncSuccess] = useState<boolean>(false);
  const [selectedIncident, setSelectedIncident] = useState<string>("fraude");
  const [incidentComment, setIncidentComment] = useState<string>("Boîtier fracturé et câble bleu de shunt repéré sur phase 2.");
  const [anomalyJustification, setAnomalyJustification] = useState<string>("Ancien index 82 150 kWh vs 84 276 kWh. Consommation en chute anormale suite à travaux.");
  const [validationSuccess, setValidationSuccess] = useState<boolean>(false);

  // Calculations
  const oldIndex = 82150;
  const numIndex = parseInt(meterIndex, 10) || 0;
  const calculatedKwh = Math.max(0, numIndex - oldIndex);
  const expectedAverageKwh = 3900;
  const isAnomaly = calculatedKwh < 2500 || calculatedKwh > 7000;

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncSuccess(true);
      setTimeout(() => {
        setSyncSuccess(false);
        setIsOffline(false);
      }, 1500);
    }, 1800);
  };

  const handleValidateReading = () => {
    if (!hasTakenPhoto) return;
    setValidationSuccess(true);
    setTimeout(() => {
      setValidationSuccess(false);
      setCurrentScreen('tours');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Interactive Controls & Screen Selector */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0056A6] flex items-center justify-center font-bold">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Simulateur Mobile Agent de Terrain</h4>
            <p className="text-[11px] text-slate-500">
              Smartphone durci IP68 • 5 Écrans opérationnels configurés selon le cahier des charges CIE
            </p>
          </div>
        </div>

        {/* Screen Picker Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {MOBILE_SCREENS.map((sc) => {
            const isActive = currentScreen === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => setCurrentScreen(sc.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#0056A6] text-white shadow-xs'
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

      {/* Main Grid: Left Screen Specs / Right Live Interactive Phone */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Screen Technical Specs according to user prompt (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {(() => {
            const activeSpec = MOBILE_SCREENS.find((s) => s.id === currentScreen)!;
            return (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-[#0056A6] font-bold text-xs">
                      Écran {activeSpec.number} / 5
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {activeSpec.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">393 × 852 px</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {activeSpec.nameFr}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {activeSpec.description}
                  </p>
                </div>

                {/* Key Checklist Features */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Éléments Clés de la Maquette Figma :
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {activeSpec.keyFeatures.map((kf, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0056A6] shrink-0 mt-0.5" />
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tokens & Colors */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wide">
                    Spécifications de Mise en Page &amp; Tokens :
                  </span>
                  <div className="text-slate-600 space-y-1 text-[11px]">
                    <p><strong>Header :</strong> {activeSpec.specs.header}</p>
                    <p><strong>Layout :</strong> {activeSpec.specs.layout}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {activeSpec.specs.colors.map((c, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px] text-slate-800">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Simulator Guidance */}
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-2.5 text-xs text-blue-950">
                  <Sparkles className="w-4 h-4 text-[#0056A6] shrink-0 mt-0.5" />
                  <p className="text-[11px] leading-relaxed">
                    <strong>Testez l&apos;interactivité à droite :</strong> Vous pouvez changer les écrans, modifier l&apos;index de relevé pour tester le calcul automatique de consommation, déclencher une photo et simuler le mode hors-ligne !
                  </p>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Right Col: High-Fidelity Smartphone Device Mockup (7 cols) */}
        <div className="lg:col-span-7 flex justify-center">
          
          {/* Rugged Smartphone Outer Frame */}
          <div className="relative w-full max-w-[393px] bg-slate-950 rounded-[48px] p-3.5 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/50">
            
            {/* Hardware Speaker / Rugged bumper top */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-2 z-30">
              <div className="w-10 h-1 bg-slate-700 rounded-full"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
            </div>

            {/* Screen Inner Container (393x800 approx ratio) */}
            <div className="relative w-full bg-white rounded-[38px] overflow-hidden min-h-[720px] flex flex-col font-sans text-slate-900 select-none shadow-inner border border-slate-100">
              
              {/* Smartphone Status Bar */}
              <div className="h-10 bg-slate-900 text-white px-6 flex items-center justify-between text-[11px] font-mono shrink-0 z-20">
                <span className="font-semibold">09:42</span>
                <div className="flex items-center gap-2">
                  {isOffline ? (
                    <span className="text-amber-400 flex items-center gap-1 font-bold">
                      <WifiOff className="w-3 h-3" /> No Net
                    </span>
                  ) : (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Wifi className="w-3 h-3" /> 4G LTE
                    </span>
                  )}
                  <span>100% 🔋</span>
                </div>
              </div>

              {/* =========================================================
                  ÉCRAN 1 : PAGE DE CONNEXION
              ========================================================= */}
              {currentScreen === 'login' && (
                <div className="flex-1 flex flex-col justify-between p-6 bg-white animate-in fade-in duration-150">
                  <div className="pt-6 space-y-6">
                    {/* Logo CIE centré (120x120px) */}
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 rounded-2xl bg-[#0056A6] text-white flex flex-col items-center justify-center shadow-md shadow-blue-900/20">
                        <span className="text-2xl font-black tracking-wider">CIE</span>
                        <span className="text-[9px] font-semibold uppercase tracking-widest text-blue-200">Électricité</span>
                      </div>
                      <h2 className="text-2xl font-black text-[#0056A6] mt-4 font-display">
                        Relevé CIE
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">
                        Connexion agent de terrain
                      </p>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-3.5 pt-2">
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block mb-1">
                          Matricule Agent / Email
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            defaultValue="AGT-0234 (Kouadio Jean)"
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0056A6] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block mb-1">
                          Mot de passe
                        </label>
                        <div className="relative">
                          <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type={showPassword ? "text" : "password"}
                            defaultValue="••••••••••••"
                            className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0056A6] focus:bg-white transition-all"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* CTA Se Connecter */}
                      <button
                        onClick={() => setCurrentScreen('tours')}
                        className="w-full h-[50px] bg-[#0056A6] hover:bg-blue-800 text-white font-bold rounded-xl text-sm shadow-md shadow-blue-900/20 active:scale-98 transition-all flex items-center justify-center gap-2 mt-2"
                      >
                        <span>Se connecter</span>
                      </button>

                      <div className="text-center pt-2">
                        <button className="text-xs font-semibold text-[#0056A6] hover:underline">
                          Mot de passe oublié ?
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Footer version */}
                  <div className="text-center pt-6 pb-2 text-[10px] text-slate-400 font-mono">
                    VOLTASYNC CI • Version 1.0.0 (Build 42)
                  </div>
                </div>
              )}

              {/* =========================================================
                  ÉCRAN 2 : ACCUEIL & TOURNÉES
              ========================================================= */}
              {currentScreen === 'tours' && (
                <div className="flex-1 flex flex-col bg-slate-50 overflow-y-auto animate-in fade-in duration-150">
                  
                  {/* Header 56px */}
                  <div className="h-14 bg-white px-4 border-b border-slate-200 flex items-center justify-between shrink-0 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0056A6] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                        KJ
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">Kouadio Jean</span>
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            En ligne
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">Matricule: AGT-0234</span>
                      </div>
                    </div>
                    <button className="p-2 text-slate-500 hover:text-slate-800 relative">
                      <Bell className="w-5 h-5" />
                      <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-1.5 right-1.5"></span>
                    </button>
                  </div>

                  <div className="p-4 space-y-4 flex-1">
                    
                    {/* Carte Tournée du jour */}
                    <div className="bg-[#E3F2FD] border border-blue-200 rounded-2xl p-4 shadow-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-extrabold tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                          Tournée Prioritaire
                        </span>
                        <span className="text-xs font-bold text-[#0056A6]">Cocody</span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-display">
                          Tournée Cocody - Zone 3
                        </h3>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Progression : <strong className="text-slate-900">45 / 120</strong> compteurs
                        </p>
                      </div>

                      {/* Barre de progression 37% */}
                      <div className="space-y-1">
                        <div className="w-full h-2.5 bg-blue-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#0056A6] rounded-full transition-all duration-500" style={{ width: '37.5%' }}></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                          <span>37% effectué</span>
                          <span>75 restants</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setCurrentScreen('reading')}
                        className="w-full h-11 bg-[#0056A6] hover:bg-blue-800 text-white font-bold rounded-xl text-xs shadow-sm flex items-center justify-center gap-2 active:scale-98 transition-all"
                      >
                        <span>Continuer la tournée</span>
                      </button>
                    </div>

                    {/* Section Statistiques rapides (3 cartes) */}
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Performance du Jour
                      </span>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                          <span className="text-[10px] text-slate-500 block font-medium">Aujourd&apos;hui</span>
                          <span className="text-lg font-black text-[#0056A6] font-display">45</span>
                          <span className="text-[9px] text-slate-400 block">relevés</span>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                          <span className="text-[10px] text-slate-500 block font-medium">Anomalies</span>
                          <span className="text-lg font-black text-amber-600 font-display">3</span>
                          <span className="text-[9px] text-slate-400 block">signalées</span>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                          <span className="text-[10px] text-slate-500 block font-medium">Temps moy.</span>
                          <span className="text-lg font-black text-emerald-600 font-display">2.5m</span>
                          <span className="text-[9px] text-slate-400 block">/ compteur</span>
                        </div>
                      </div>
                    </div>

                    {/* Liste des tournées précédentes */}
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Historique des Tournées Récentes
                      </span>
                      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 text-xs shadow-xs">
                        <div className="p-3 flex items-center justify-between">
                          <div>
                            <p className="font-bold text-slate-900">Hier • Cocody Zone 2</p>
                            <span className="text-[11px] text-slate-500">118 / 120 compteurs relevés</span>
                          </div>
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3" /> Complété
                          </span>
                        </div>
                        <div className="p-3 flex items-center justify-between">
                          <div>
                            <p className="font-bold text-slate-900">07 Sept • Cocody Zone 1</p>
                            <span className="text-[11px] text-slate-500">120 / 120 compteurs relevés</span>
                          </div>
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3" /> Complété
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Boutons bascule simulateur */}
                    <div className="pt-2 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setCurrentScreen('offline')}
                        className="flex-1 py-2 bg-amber-100 text-amber-900 rounded-lg text-[11px] font-bold text-center hover:bg-amber-200"
                      >
                        Tester Mode Hors-Ligne
                      </button>
                      <button
                        onClick={() => setCurrentScreen('incident')}
                        className="flex-1 py-2 bg-red-100 text-red-900 rounded-lg text-[11px] font-bold text-center hover:bg-red-200"
                      >
                        Signaler Incident
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {/* =========================================================
                  ÉCRAN 3 : RELEVÉ DE COMPTEUR (ÉCRAN PRINCIPAL)
              ========================================================= */}
              {currentScreen === 'reading' && (
                <div className="flex-1 flex flex-col bg-white overflow-y-auto animate-in fade-in duration-150">
                  
                  {/* Header avec retour et GPS */}
                  <div className="h-12 px-3 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white sticky top-0 z-10">
                    <button
                      onClick={() => setCurrentScreen('tours')}
                      className="p-1.5 text-slate-600 hover:text-slate-900 flex items-center gap-1 font-bold text-xs"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Tournée</span>
                    </button>
                    <span className="font-bold text-slate-900 text-xs">Relevé Compteur</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Position vérifiée
                    </span>
                  </div>

                  <div className="p-4 space-y-4 flex-1">

                    {/* Section Informations Compteur */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1 text-xs">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase font-bold">Compteur CIE</span>
                          <h4 className="font-black text-slate-900 text-sm font-mono">MTR-7892-A</h4>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 uppercase font-bold">Ancien Index</span>
                          <p className="font-extrabold text-[#0056A6] font-mono text-sm">82 150 kWh</p>
                        </div>
                      </div>
                      <p className="text-slate-700 font-semibold pt-1">Client : M. Traoré Ibrahim</p>
                      <p className="text-slate-500 text-[11px] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        Rue des Jardins, Cocody - Villa 42
                      </p>
                    </div>

                    {/* Section Photo du Compteur (Zone Critique) */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider">
                          Photo du Compteur (Obligatoire)
                        </span>
                        <span className="text-[10px] text-[#0056A6] font-semibold">
                          {hasTakenPhoto ? "✓ Photo Certifiée" : "En attente"}
                        </span>
                      </div>

                      <div className="relative w-full h-44 bg-slate-100 rounded-xl overflow-hidden border-2 border-dashed border-slate-300 flex items-center justify-center">
                        {hasTakenPhoto ? (
                          <>
                            <img
                              src="https://images.unsplash.com/photo-1590496793907-49cc7c918326?w=600&auto=format&fit=crop&q=80"
                              alt="Compteur relevé"
                              className="w-full h-full object-cover"
                            />
                            {/* Overlay de certification date, heure, GPS */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-2 text-white font-mono text-[9px] space-y-0.5">
                              <p className="font-bold text-emerald-400">CERTIFIÉ VOLTASYNC • MTR-7892-A</p>
                              <p>Date : 09/09/2026 • 14:22:07 GMT</p>
                              <p>GPS : 5°21&apos;07.5&quot;N 3°59&apos;15.4&quot;W (±1.8m)</p>
                            </div>
                          </>
                        ) : (
                          <div className="text-center p-4 text-slate-400">
                            <Camera className="w-8 h-8 mx-auto mb-1 text-slate-300" />
                            <p className="text-xs font-semibold text-slate-600">Appuyez pour photographier</p>
                            <span className="text-[10px] text-slate-400">Prise de vue du cadran nette requise</span>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => setHasTakenPhoto(!hasTakenPhoto)}
                        className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-[#0056A6] font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors border border-blue-200"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>{hasTakenPhoto ? "Reprendre la photo" : "Prendre la photo"}</span>
                      </button>
                    </div>

                    {/* Section Saisie Index Numérique */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block">
                        Nouvel Index Relevé
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={meterIndex}
                          onChange={(e) => setMeterIndex(e.target.value)}
                          className="w-full h-12 text-center text-2xl font-black font-mono tracking-wider text-slate-950 bg-white border-2 border-[#0056A6] rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                          kWh
                        </span>
                      </div>

                      {/* Calcul automatique de la consommation */}
                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                        <span className="text-emerald-900 font-semibold">Consommation calculée :</span>
                        <strong className="text-emerald-700 font-mono text-sm">
                          {calculatedKwh.toLocaleString()} kWh
                        </strong>
                      </div>
                    </div>

                    {/* Alerte anomalie si consommation suspecte */}
                    {isAnomaly && (
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 space-y-2 text-xs text-amber-950 animate-in fade-in">
                        <div className="flex items-center gap-1.5 font-bold text-amber-800">
                          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Consommation anormale (-45% vs moyenne 3 900 kWh)</span>
                        </div>
                        <p className="text-[11px] text-amber-900 leading-snug">
                          Une baisse brutale a été détectée par l&apos;algorithme IA.
                        </p>
                        <div>
                          <label className="text-[10px] font-bold uppercase text-amber-800 block mb-0.5">
                            Justification obligatoire agent :
                          </label>
                          <textarea
                            value={anomalyJustification}
                            onChange={(e) => setAnomalyJustification(e.target.value)}
                            rows={2}
                            className="w-full p-2 bg-white border border-amber-200 rounded-lg text-[11px] text-slate-800 focus:outline-none focus:border-amber-400"
                            placeholder="Indiquer la raison (client absent, travaux, soupçon de fraude...)"
                          />
                        </div>
                      </div>
                    )}

                    {/* Notification de succès après validation */}
                    {validationSuccess && (
                      <div className="p-3 bg-emerald-600 text-white rounded-xl text-center text-xs font-bold animate-in zoom-in-95">
                        ✓ Relevé validé et synchronisé avec succès !
                      </div>
                    )}

                    {/* Boutons d'action fixés en bas */}
                    <div className="pt-2 flex items-center gap-2 pb-2">
                      <button
                        onClick={() => setCurrentScreen('tours')}
                        className="w-1/2 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                      >
                        Annuler
                      </button>
                      <button
                        onClick={handleValidateReading}
                        disabled={!hasTakenPhoto}
                        className={`w-1/2 py-3 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-md ${
                          hasTakenPhoto
                            ? 'bg-[#0056A6] hover:bg-blue-800 text-white shadow-blue-900/20 active:scale-98'
                            : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        <Check className="w-4 h-4" />
                        <span>Valider le relevé</span>
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {/* =========================================================
                  ÉCRAN 4 : MODE HORS-LIGNE
              ========================================================= */}
              {currentScreen === 'offline' && (
                <div className="flex-1 flex flex-col bg-slate-50 overflow-y-auto animate-in fade-in duration-150">
                  
                  {/* Bandeau supérieur orange persistant (#FF9800) */}
                  <div className="bg-[#FF9800] text-white p-3.5 shadow-md flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2">
                      <WifiOff className="w-5 h-5 shrink-0" />
                      <div>
                        <h4 className="font-bold text-xs">Mode hors-ligne actif</h4>
                        <p className="text-[10px] text-amber-100">Données stockées en local (chiffré)</p>
                      </div>
                    </div>
                    <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-bold font-mono">
                      12 en attente
                    </span>
                  </div>

                  <div className="p-4 space-y-3 flex-1">
                    
                    {/* Explication technique */}
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
                      <p className="font-bold text-slate-900">
                        File de synchronisation SQLite / SQLCipher
                      </p>
                      <p className="text-[11px] leading-relaxed">
                        Chaque index et chaque photo sont scellés cryptographiquement en attendant le retour du réseau 4G.
                      </p>
                    </div>

                    {/* Liste des relevés en attente */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Relevés en file d&apos;attente locale (12)
                      </span>

                      {[
                        { meter: "MTR-7892-A", kwh: "84 276", time: "14:22", client: "M. Traoré Ibrahim" },
                        { meter: "MTR-4421-B", kwh: "38 540", time: "14:15", client: "Mme Kouamé A." },
                        { meter: "MTR-1099-M", kwh: "124 000", time: "14:02", client: "Boutique Le Progrès" }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-mono text-[10px] text-slate-400 border border-slate-200">
                              IMG
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 font-mono">{item.meter}</p>
                              <span className="text-[10px] text-slate-500">Index: {item.kwh} kWh • {item.time}</span>
                            </div>
                          </div>
                          <span className="text-[10px] text-amber-700 bg-amber-100 px-2 py-0.5 rounded font-semibold">
                            ⏳ En attente
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Statut Sync */}
                    {syncSuccess && (
                      <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold text-center">
                        ✓ Synchronisation réussie : 12 relevés téléversés vers les serveurs CIE !
                      </div>
                    )}

                    {/* Bouton Synchroniser maintenant */}
                    <div className="pt-4">
                      <button
                        onClick={handleSync}
                        disabled={isSyncing}
                        className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-md shadow-emerald-900/20 active:scale-98 transition-all flex items-center justify-center gap-2"
                      >
                        <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
                        <span>{isSyncing ? "Synchronisation en cours (4G)..." : "Synchroniser maintenant"}</span>
                      </button>
                      <button
                        onClick={() => setCurrentScreen('reading')}
                        className="w-full text-center py-2 text-xs text-slate-500 hover:text-slate-700 mt-2 font-medium"
                      >
                        Retour au relevé en cours
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {/* =========================================================
                  ÉCRAN 5 : SIGNALEMENT D'INCIDENT
              ========================================================= */}
              {currentScreen === 'incident' && (
                <div className="flex-1 flex flex-col bg-white overflow-y-auto animate-in fade-in duration-150">
                  
                  {/* Header d'incident */}
                  <div className="h-12 px-4 border-b border-slate-200 flex items-center justify-between shrink-0">
                    <span className="font-bold text-slate-900 text-sm font-display">
                      Signaler un Incident
                    </span>
                    <button
                      onClick={() => setCurrentScreen('reading')}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded-full"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-4 space-y-3.5 flex-1">
                    <p className="text-xs text-slate-500">
                      Compteur MTR-7892-A • Sélectionnez le motif d&apos;escalade terrain :
                    </p>

                    {/* 5 Options larges empilées */}
                    <div className="space-y-2">
                      {[
                        { id: "inaccessible", label: "Compteur inaccessible", icon: Lock, color: "text-slate-700" },
                        { id: "brule", label: "Compteur brûlé / défectueux", icon: Flame, color: "text-amber-600" },
                        { id: "fraude", label: "Fraude suspectée (Shunt, dérivation)", icon: Zap, color: "text-red-600", isDanger: true },
                        { id: "absent", label: "Client absent (Portail clos)", icon: Home, color: "text-blue-600" },
                        { id: "chien", label: "Chien méchant / Danger physique", icon: ShieldAlert, color: "text-orange-600" }
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = selectedIncident === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setSelectedIncident(item.id)}
                            className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                              isSelected
                                ? item.isDanger
                                  ? 'border-red-500 bg-red-50/80 shadow-xs ring-1 ring-red-400'
                                  : 'border-[#0056A6] bg-blue-50/80 shadow-xs ring-1 ring-blue-400'
                                : 'border-slate-200 bg-white hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${isSelected ? 'bg-white shadow-xs' : 'bg-slate-100'} ${item.color}`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className={`text-xs font-bold ${isSelected ? 'text-slate-950' : 'text-slate-700'}`}>
                                {item.label}
                              </span>
                            </div>
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-[#0056A6]"></span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Commentaire justificatif */}
                    <div className="space-y-1 pt-1">
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block">
                        Description de la situation
                      </label>
                      <textarea
                        value={incidentComment}
                        onChange={(e) => setIncidentComment(e.target.value)}
                        rows={3}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#0056A6] focus:bg-white"
                        placeholder="Décrivez précisément ce que vous constatez sur place..."
                      />
                    </div>

                    {/* Photo de preuve */}
                    <button
                      onClick={() => setHasTakenPhoto(true)}
                      className="w-full py-2.5 border border-slate-300 rounded-xl bg-slate-50 text-slate-700 text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-100"
                    >
                      <Camera className="w-3.5 h-3.5 text-slate-500" />
                      <span>{hasTakenPhoto ? "✓ Photo de preuve enregistrée" : "Prendre une photo de preuve (Recommandé)"}</span>
                    </button>

                    {/* Bouton d'envoi différencié */}
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          alert(`Signalement [${selectedIncident.toUpperCase()}] transmis avec succès au superviseur CIE !`);
                          setCurrentScreen('tours');
                        }}
                        className={`w-full py-3 font-bold rounded-xl text-xs shadow-md flex items-center justify-center gap-2 transition-all ${
                          selectedIncident === 'fraude'
                            ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-900/20'
                            : 'bg-[#0056A6] hover:bg-blue-800 text-white shadow-blue-900/20'
                        }`}
                      >
                        <Zap className="w-4 h-4" />
                        <span>
                          {selectedIncident === 'fraude' ? 'Envoyer Alerte Fraude Immédiate' : 'Transmettre le Signalement'}
                        </span>
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {/* Bottom Home Indicator */}
              <div className="h-4 bg-white flex items-center justify-center shrink-0">
                <div className="w-28 h-1 bg-slate-300 rounded-full"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
