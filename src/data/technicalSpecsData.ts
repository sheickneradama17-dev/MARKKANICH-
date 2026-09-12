export interface SoftwareModule {
  id: string;
  name: string;
  target: 'mobile' | 'web' | 'api';
  description: string;
  features: string[];
}

export interface HardwareSpecSection {
  title: string;
  items: { label: string; spec: string; critical?: boolean }[];
}

export const SOFTWARE_SPEC_DATA = {
  title: "Cahier des Charges Technique Logiciel (SaaS VoltaSync CI)",
  version: "v1.2 - Spécifications Détaillées pour Développeurs",
  date: "Septembre 2026",
  targetAudience: "Agences de développement, Freelances Seniors (Flutter/Node/React), DSI",
  context: {
    product: "SaaS B2B de relevé de compteurs d'électricité & supervision terrain",
    client: "Compagnie Ivoirienne d'Électricité (CIE) - 2,5 millions de compteurs",
    users: [
      "Agents de terrain (Application Mobile Android Flutter)",
      "Managers & Superviseurs d'agence (Dashboard Web React)",
      "Administrateurs Système & DSI CIE (Console Web & API REST)"
    ],
    mainGoal: "Digitaliser 100% des relevés de compteurs, éliminer les fraudes et collusions, supprimer les carnets papier et accélérer le cycle de facturation."
  },
  architecture: {
    mobile: {
      framework: "Flutter (recommandé pour compilation native 60 FPS, widgets personnalisés et robustesse offline)",
      localDb: "SQLite + Hive (cache ultra-rapide)",
      offlineSync: "Isar Database / WatermelonDB avec file d'attente FIFO et résolution de conflits serveur-prioritaire"
    },
    web: {
      framework: "React.js 18+ avec TypeScript",
      styling: "Tailwind CSS + Headless UI",
      mapping: "Leaflet.js / Mapbox GL (tracking GPS temps réel des tournées)",
      charts: "Recharts / Chart.js"
    },
    backend: {
      runtime: "Node.js (NestJS) ou Python (FastAPI)",
      apiStyle: "RESTful JSON + WebSocket (Socket.io) pour télémétrie temps réel",
      auth: "JWT avec Refresh Tokens, 2FA obligatoire pour admins (TOTP/SMS), RBAC strict",
      files: "AWS S3 compatible / MinIO (chiffrement SSE-S3 des photos d'index)"
    },
    database: {
      primary: "PostgreSQL 15+ avec extension PostGIS (requêtes spatiales et geofencing)",
      cache: "Redis (sessions, files d'attente de sync, rate-limiting)",
      search: "Elasticsearch (recherche instantanée parmi 2,5M compteurs et logs)"
    },
    infrastructure: {
      cloud: "Hébergeur conforme ARTCI / Cloud souverain en Côte d'Ivoire ou AWS/GCP zone Afrique",
      cdn: "Cloudflare pour distribution sécurisée des flux et photos",
      monitoring: "Sentry (crash reporting) + Prometheus & Grafana (métriques uptime & latence)"
    }
  },
  mobileModules: [
    {
      id: "mob-1",
      name: "Module 1 : Authentification & Profil Sécurisé",
      target: "mobile" as const,
      description: "Gestion d'accès sécurisé avec identification biométrique ou 2FA",
      features: [
        "Login par identifiant unique + mot de passe + 2FA (SMS ou TOTP)",
        "Profil agent complet : nom, matricule CIE, photo, zone assignée",
        "Déconnexion automatique après inactivité et verrouillage par code PIN rapide",
        "Association biométrique (empreinte digitale sur smartphone durci)"
      ]
    },
    {
      id: "mob-2",
      name: "Module 2 : Gestion des Tournées & Itinéraires",
      target: "mobile" as const,
      description: "Planification et suivi visuel de la tournée quotidienne",
      features: [
        "Téléchargement automatique de la liste des compteurs à relever (mode 100% offline)",
        "Affichage de la tournée du jour avec jauge de progression en temps réel",
        "Itinéraire optimisé par géocodage GPS (ordre optimal des compteurs de la rue)",
        "Statistiques personnelles de la journée (compteurs relevés, temps moyen par relevé)"
      ]
    },
    {
      id: "mob-3",
      name: "Module 3 : Relevé de Compteur en 5 Étapes Blindées",
      target: "mobile" as const,
      description: "Cœur opérationnel de l'application avec barrières anti-fraude",
      features: [
        "Étape 1 : Scan du QR code / code-barres du compteur (ou saisie manuelle avec confirmation)",
        "Étape 2 : Vérification GPS automatique (tolérance 10 mètres autour du compteur) - Si hors zone : blocage immédiat",
        "Étape 3 : Saisie de l'index avec calcul automatique de la consommation et détection d'anomalie (si index < ancien ou variation ±50% : justification obligatoire)",
        "Étape 4 : Prise de photo obligatoire du compteur - Horodatage certifié incrusté (date, heure, coordonnées GPS, ID agent) - Galerie interdite",
        "Étape 5 : Validation et archivage chiffré dans la base SQLite locale"
      ]
    },
    {
      id: "mob-4",
      name: "Module 4 : Signalement d'Incidents & Fraudes Terrain",
      target: "mobile" as const,
      description: "Boutons d'action rapide pour qualifier les anomalies physiques",
      features: [
        "Bouton 'Compteur Inaccessible' (obligation de prendre en photo la clôture/grille)",
        "Bouton 'Compteur Brûlé / Défectueux' (photo avec zoom sur le cadran)",
        "Bouton 'Fraude / Branchement Anarchique Suspecté' (photo des fils + commentaire)",
        "Bouton 'Client Absent' (horodatage du passage et preuve visuelle)"
      ]
    },
    {
      id: "mob-5",
      name: "Module 5 : Moteur Hors-Ligne Résilient (Offline-First)",
      target: "mobile" as const,
      description: "Continuité de service intégrale sans réseau cellulaire 3G/4G",
      features: [
        "Toutes les tournées et fiches compteurs stockées localement en SQLite chiffré",
        "File d'attente FIFO persistante avec reprise automatique après redémarrage",
        "Synchronisation transparente en tâche de fond dès qu'un réseau (Edge, 3G, 4G, Wi-Fi) est capté",
        "Indicateur d'état permanent dans la barre d'en-tête (Vert: Connecté, Orange: En attente, Rouge: Hors ligne)"
      ]
    },
    {
      id: "mob-6",
      name: "Module 6 : Notifications Push & Alertes Superviseur",
      target: "mobile" as const,
      description: "Canal de communication bilatéral entre superviseur et agent",
      features: [
        "Push notification lors de l'attribution d'une tournée prioritaire ou réajustement",
        "Messages urgents du superviseur d'agence",
        "Alerte de synchronisation terminée avec accusé de réception serveur"
      ]
    }
  ],
  webModules: [
    {
      id: "web-1",
      name: "Module 1 : Authentification & RBAC DSI",
      target: "web" as const,
      description: "Ségrégation stricte des rôles et traçabilité des accès",
      features: [
        "Authentification forte 2FA (email + SMS / Authenticator)",
        "Gestion fine des rôles : Administrateur DSI, Directeur Relevé, Manager Agence, Superviseur Terrain",
        "Journal d'audit complet de toutes les sessions et connexions avec adresse IP"
      ]
    },
    {
      id: "web-2",
      name: "Module 2 : Supervision Cartographique Temps Réel",
      target: "web" as const,
      description: "Cockpit de contrôle de la flotte d'agents sur le Grand Abidjan et régions",
      features: [
        "Carte interactive plein écran montrant la position GPS de chaque agent en direct",
        "Code couleur d'avancement des tournées (Vert: dans les temps, Orange: ralenti, Rouge: en retard/inactif)",
        "Filtres dynamiques par Direction Régionale, Agence locale, zone géographique et agent",
        "Indicateurs live : taux de relevé du jour (ex: 85% à 14h), nombre d'anomalies détectées, cadence moyenne"
      ]
    },
    {
      id: "web-3",
      name: "Module 3 : Console de Validation des Anomalies",
      target: "web" as const,
      description: "Interface dédiée aux superviseurs pour traiter les relevés suspects",
      features: [
        "File d'attente priorisée des relevés suspects avec score de criticité",
        "Comparatif visuel : ancien index vs nouvel index, historique de consommation sur 12 mois",
        "Visualiseur de photo haute définition avec zoom x4 sur le cadran du compteur",
        "Boutons d'action immédiate : Valider pour facturation / Rejeter / Déclencher contre-visite terrain",
        "Historique inaltérable des arbitrages (nom du superviseur, motif, date et heure)"
      ]
    },
    {
      id: "web-4",
      name: "Module 4 : Gestion des Compteurs & Répertoire Clients",
      target: "web" as const,
      description: "Base de données centralisée des points de livraison",
      features: [
        "Fiche détaillée par compteur (numéro de série, type, coordonnées GPS certifiées, puissance souscrite)",
        "Historique chronologique complet de tous les relevés et photos archivées",
        "Import/export en masse CSV/Excel pour synchronisation avec le système de facturation CIE",
        "Moteur de recherche multicritère (par numéro de contrat, nom abonné, quartier, ID agent)"
      ]
    },
    {
      id: "web-5",
      name: "Module 5 : Gestion des Équipes & Tournées",
      target: "web" as const,
      description: "Affectation et analyse de rentabilité des ressources humaines",
      features: [
        "Création de tournées par découpage cartographique polygonal",
        "Planning hebdomadaire et mensuel des tournées",
        "Tableaux de performance par agent (compteurs/jour, écart moyen, taux de conformité photo)",
        "Détection des anomalies de comportement (temps passé par compteur trop court, téléportations GPS)"
      ]
    },
    {
      id: "web-6",
      name: "Module 6 : Analytics Décisionnels & Rapports CIE",
      target: "web" as const,
      description: "Indicateurs macro-économiques pour la Direction Générale",
      features: [
        "Tableau de bord exécutif : Taux de relevé global, kWh réintégrés, volume de fraudes déjouées",
        "Économies directes calculées en milliards FCFA de pertes évitées",
        "Génération automatisée de rapports exécutifs PDF et exports tableurs (quotidien, hebdomadaire, mensuel)",
        "Connecteur d'intégration batch vers SAP / progiciel de facturation de la CIE"
      ]
    },
    {
      id: "web-7",
      name: "Module 7 : Paramétrage Système & Sécurité",
      target: "web" as const,
      description: "Règles métier configurables à chaud",
      features: [
        "Ajustement du rayon de geofencing GPS autorisé (défaut : 10 mètres)",
        "Seuil de déclenchement des alertes de sur/sous-consommation (défaut : ±50% vs moyenne 6 mois)",
        "Paramétrage des passerelles SMS (Orange Côte d'Ivoire, MTN, Moov)",
        "Consultation des journaux d'audit de sécurité inviolables"
      ]
    }
  ],
  apiEndpoints: [
    { method: "GET", path: "/api/v1/meters", desc: "Liste paginée des compteurs avec coordonnées GPS et historique", auth: "Bearer JWT / API Key" },
    { method: "GET", path: "/api/v1/meters/:id/history", desc: "Historique des 24 derniers relevés et photos d'un compteur", auth: "Bearer JWT" },
    { method: "POST", path: "/api/v1/readings", desc: "Envoi d'un nouveau relevé avec photo, index, GPS et timestamp certifié", auth: "Bearer JWT (Agent)" },
    { method: "GET", path: "/api/v1/anomalies", desc: "Liste filtrée des relevés suspects en attente de validation", auth: "Bearer JWT (Manager)" },
    { method: "POST", path: "/api/v1/anomalies/:id/validate", desc: "Validation ou rejet formel d'un relevé suspect", auth: "Bearer JWT (Manager)" },
    { method: "GET", path: "/api/v1/agents/telemetry", desc: "Flux WebSocket / REST de la position des agents actifs", auth: "Bearer JWT (DSI)" },
    { method: "POST", path: "/api/v1/billing/sync", desc: "Export batch des relevés validés vers le progiciel de facturation CIE", auth: "Mutual TLS + API Key" }
  ],
  nonFunctionalReqs: [
    { title: "Performance Mobile", value: "Démarrage froid < 3s, chargement tournée < 1s, navigation fluide 60 FPS" },
    { title: "Performance Web", value: "Chargement des tableaux < 2s, rafraîchissement cartographique < 500ms" },
    { title: "Latence API", value: "Temps de réponse 95ème percentile < 500ms sur réseau 3G/4G" },
    { title: "Scalabilité", value: "1 000 agents mobiles simultanés, 2,5 millions de compteurs, 10 000 relevés/heure en pic" },
    { title: "Sécurité & Chiffrement", value: "TLS 1.3 en transit, AES-256 au repos, bases SQLite locales chiffrées SQLCipher" },
    { title: "Souveraineté des Données", value: "Conformité stricte aux exigences ARTCI et loi ivoirienne de protection des données" },
    { title: "Disponibilité Uptime", value: "99,5% garanti avec basculement automatique et backups quotidiens chiffrés" }
  ],
  budgetEstimate: [
    { role: "CTO / Lead Architect", monthlyRate: 2_000_000, durationMonths: 6, total: 12_000_000 },
    { role: "Développeur Mobile Senior (Flutter)", monthlyRate: 1_500_000, durationMonths: 5, total: 7_500_000 },
    { role: "Développeur Backend (NestJS/PostgreSQL)", monthlyRate: 1_500_000, durationMonths: 5, total: 7_500_000 },
    { role: "Développeur Frontend Web (React/TypeScript)", monthlyRate: 1_200_000, durationMonths: 4, total: 4_800_000 },
    { role: "Designer UI/UX (Figma & Ergonomie terrain)", monthlyRate: 800_000, durationMonths: 2, total: 1_600_000 },
    { role: "Ingénieur QA & Tests Terrain", monthlyRate: 800_000, durationMonths: 3, total: 2_400_000 },
    { role: "Serveurs & Infrastructure Cloud (1ère année)", monthlyRate: 0, durationMonths: 12, total: 5_000_000 },
  ],
  totalBudget: 40_800_000, // FCFA (ou version optimisée à ~25M FCFA avec équipe resserrée)
  totalBudgetOptimized: 25_000_000
};

export const HARDWARE_SPEC_ENGLISH = {
  title: "Request for Quotation (RFQ) - Rugged Android Smartphones for Utility Meter Reading",
  buyerCompany: "Markkanich Global / VoltaSync CI",
  contactPerson: "Adama F. Sheickner, Founder & CEO",
  email: "sheicknerl@markkanich.com",
  phoneWhatsApp: "+225 0504496944",
  website: "markkanich.com",
  targetMarket: "Abidjan, Côte d'Ivoire (West Africa)",
  targetUtility: "Compagnie Ivoirienne d'Électricité (CIE)",
  initialQuantity: "500 units (First Order for Pilot & Abidjan deployment)",
  annualForecast: "2,000 to 3,000 units per year",
  targetFobPrice500Units: "$90 - $110 USD / unit (FOB Shenzhen / Hong Kong)",
  targetFobPrice1000Units: "$75 - $95 USD / unit (FOB Shenzhen)",
  overview: "We are seeking a reliable OEM/ODM manufacturer on Alibaba / Made-in-China to supply industrial-grade rugged smartphones tailored for field meter reading agents in West Africa. The devices must withstand tropical climate conditions (high humidity, rain, heavy dust, accidental drops on asphalt) while ensuring uninterrupted 48-hour battery runtime with dual-frequency GPS.",
  sections: [
    {
      title: "1. Durability & Environmental Standards",
      items: [
        { label: "IP Ingress Rating", spec: "IP68 certified (dust-tight, water immersion up to 1.5m for 30 minutes minimum)", critical: true },
        { label: "Military Standard", spec: "MIL-STD-810G or MIL-STD-810H compliant (drop resistance from 1.5m onto concrete from all 6 faces)", critical: true },
        { label: "Glass Protection", spec: "Corning Gorilla Glass 3 / 5 or equivalent scratch/impact resistant tempered layer", critical: true },
        { label: "Chassis & Casing", spec: "Reinforced rubberized TPU corners, ergonomic non-slip grip, heavy-duty polycarbonate body", critical: false },
        { label: "Operating Temperature", spec: "-10°C to +55°C (continuous direct African sunlight resilience)", critical: false }
      ]
    },
    {
      title: "2. Battery & Power Architecture",
      items: [
        { label: "Battery Capacity", spec: "8,000 mAh minimum (10,000 mAh preferred for guaranteed 48-72h field autonomy)", critical: true },
        { label: "Charging Speed", spec: "Fast charging 18W minimum (33W Type-C fast charge preferred)", critical: false },
        { label: "Reverse Charging (OTG)", spec: "Supported - device can act as an emergency power bank for peripheral accessories", critical: false },
        { label: "Battery Safety", spec: "CE / RoHS / UN38.3 certified lithium-polymer cells with overcharge and thermal protections", critical: true }
      ]
    },
    {
      title: "3. Processor, Memory & Operating System",
      items: [
        { label: "Processor (SoC)", spec: "MediaTek Helio G85 / G99 or Qualcomm Snapdragon 680 (Octa-core 2.0GHz+)", critical: false },
        { label: "System RAM", spec: "4GB RAM minimum (6GB RAM preferred)", critical: true },
        { label: "Internal Storage", spec: "64GB ROM minimum (128GB ROM preferred)", critical: true },
        { label: "Storage Expansion", spec: "Dedicated microSD card slot (up to 256GB)", critical: false },
        { label: "Operating System", spec: "Clean Android 12 or Android 13 without bloatware, Android Enterprise Recommended ready", critical: true }
      ]
    },
    {
      title: "4. Geolocation & Satellite Precision (Crucial Anti-Fraud)",
      items: [
        { label: "GPS Architecture", spec: "Dual-Frequency GNSS (L1 + L5 bands supported) for sub-meter to 3-meter outdoor accuracy", critical: true },
        { label: "Constellations Supported", spec: "GPS + GLONASS + Galileo + BeiDou (concurrent multi-constellation fix)", critical: true },
        { label: "Time-to-First-Fix (TTFF)", spec: "Cold start < 35s, Hot start < 2s under outdoor urban canopy", critical: false },
        { label: "Anti-Spoofing", spec: "Native hardware-level GNSS signature support to prevent mock location apps", critical: false }
      ]
    },
    {
      title: "5. Cellular Connectivity & African RF Bands",
      items: [
        { label: "Cellular Standard", spec: "4G LTE Dual SIM Dual Standby (Nano-SIM slots)", critical: true },
        { label: "4G LTE Bands", spec: "FDD-LTE: B1 / B3 / B5 / B7 / B8 / B20 / B28; TDD-LTE: B38 / B40 / B41 (covers Orange CI & MTN CI)", critical: true },
        { label: "Wi-Fi & Bluetooth", spec: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz + 5.0GHz dual-band) + Bluetooth 5.0 BLE", critical: false },
        { label: "NFC Reader", spec: "Integrated NFC (ISO/IEC 14443 Type A/B) for potential RFID electronic meter token reading", critical: false }
      ]
    },
    {
      title: "6. Camera & Optical Scanning Requirements",
      items: [
        { label: "Main Rear Camera", spec: "16MP to 48MP with fast autofocus (PDAF) and macro focus capabilities", critical: true },
        { label: "Flash / Torch", spec: "High-intensity dual LED flash (essential for dark staircases and electrical closets)", critical: true },
        { label: "Barcode / QR Scanning", spec: "Fast optical QR code and Code-128 decoding via camera engine", critical: true },
        { label: "Front Camera", spec: "5MP minimum for biometric agent attendance verification", critical: false }
      ]
    },
    {
      title: "7. Display & Sunlight Readability",
      items: [
        { label: "Screen Size", spec: "5.5 inches to 6.3 inches (compact one-hand grip for field agents)", critical: false },
        { label: "Resolution & Brightness", spec: "HD+ (1440x720 or 1520x720) IPS panel, minimum 450-500 nits brightness for outdoor sunlight", critical: true },
        { label: "Outdoor Usability", spec: "Wet finger tracking and glove mode enabled (responsive under tropical rain)", critical: true }
      ]
    },
    {
      title: "8. Enterprise Security & Customization",
      items: [
        { label: "MDM & Kiosk Mode", spec: "Support for Mobile Device Management (SOTI / Microsoft Intune / Custom MDM) and Kiosk lockdown", critical: true },
        { label: "Custom ROM & Branding", spec: "Custom boot animation with VoltaSync / CIE logo and pre-installed APK into system partition", critical: false },
        { label: "Physical Hardware Buttons", spec: "Tactile side buttons + dedicated programmable orange SOS / Scan key", critical: false },
        { label: "Audio", spec: "Loudspeaker rated at 85dB+ for noisy street and generator environments", critical: false }
      ]
    },
    {
      title: "9. Packaging, Accessories & Warranty Terms",
      items: [
        { label: "In-Box Accessories", spec: "18W+ Fast Charger with EU/French 2-pin plug, reinforced Type-C cable, lanyard, screen protector", critical: true },
        { label: "Manufacturer Warranty", spec: "24 months manufacturer warranty with dedicated RMA support", critical: true },
        { label: "Spare Parts Buffer", spec: "5% free spare parts (screens, batteries, charging ports, back covers) shipped with order", critical: true },
        { label: "Trade Terms", spec: "FOB Shenzhen or CIF Abidjan Port / Félix Houphouët-Boigny Airport", critical: false }
      ]
    }
  ]
};

export const EMAIL_OUTREACH_DATA = {
  subject: "Proposition de modernisation digitale du relevé de compteurs - Gain potentiel de 24 milliards FCFA/an",
  recipient: "Direction Générale de la CIE (Compagnie Ivoirienne d'Électricité)",
  copyRecipients: "Direction du Relevé et de la Facturation • Direction des Systèmes d'Information (DSI) • Direction Commerciale",
  sender: {
    name: "Sheickner Adama",
    title: "Fondateur & CEO",
    company: "VoltaSync CI",
    email: "sheickner@markkanich.com",
    phone: "+225 0715946056",
    website: "markkanich.com",
    address: "Abidjan, Côte d'Ivoire"
  },
  bodyParagraphs: {
    greeting: "Monsieur le Directeur Général,",
    greetingAlt: "(ou Madame la Directrice / Messieurs les Directeurs selon le destinataire)",
    intro: "Je me permets de vous contacter pour vous présenter une solution innovante qui pourrait permettre à la CIE de récupérer jusqu'à 24 milliards de FCFA de revenus perdus chaque année, tout en modernisant et sécurisant l'intégralité de vos opérations de relevé de compteurs.",
    observationTitle: "Le constat : une hémorragie financière évitable",
    observationPoints: [
      "Fraude et sous-évaluation : estimée à 10-15% des compteurs manipulés ou relevés avec complaisance (~15 milliards FCFA/an de pertes).",
      "Retards de facturation : causés par la ressaisie manuelle des carnets papier (~5 milliards FCFA/an de trésorerie ralentie).",
      "Contestations clients fréquentes : litiges en agence faute de preuves visuelles incontestables lors du passage de l'agent.",
      "Coûts opérationnels superflus : impression des carnets, acheminement physique, bordereaux et personnel de saisie (~1,2 milliard FCFA/an)."
    ],
    solutionTitle: "Notre solution : la plateforme SaaS tout-en-un VoltaSync CI",
    solutionPoints: [
      "Application mobile tout-terrain : Relevé sécurisé avec vérification GPS automatique dans un rayon de 10m (anti-fraude), photo horodatée obligatoire du compteur et fonctionnement 100% hors-ligne dans les zones blanches.",
      "Dashboard de pilotage pour managers : Supervision en temps réel des tournées sur carte interactive, console de validation des anomalies avec zoom HD et injection automatisée dans votre progiciel de facturation.",
      "Smartphones durcis (rugged) fournis : Terminaux IP68 ultra-résistants (chute, eau, poussière) équipés de batteries 8000 mAh tenant 48 à 72 heures en continu sur le terrain.",
      "SMS automatique au client : Notification immédiate avec photo du cadran et calcul de la consommation, réduisant de 80% les réclamations d'abonnés en agence."
    ],
    roiSummary: {
      title: "Un retour sur investissement de 960% dès la première année",
      quote: "Pour 1 FCFA investi, la CIE récupère 10 FCFA de trésorerie.",
      table: [
        { label: "Récupération de fraudes détectées", amount: "+15 milliards FCFA" },
        { label: "Réduction des impayés (facturation instantanée)", amount: "+5 milliards FCFA" },
        { label: "Économies opérationnelles (papier, logistique)", amount: "+1,2 milliard FCFA" },
        { label: "Amélioration de la productivité agents (+20%)", amount: "+3 milliards FCFA" },
        { label: "TOTAL DES GAINS ANNUELS ESTIMÉS", amount: "~24 milliards FCFA / an", highlight: true },
        { label: "Coût annuel de notre solution clé-en-main", amount: "2,5 milliards FCFA / an" },
        { label: "BÉNÉFICE NET ANNUEL POUR LA CIE", amount: "+21,5 milliards FCFA / an", bold: true }
      ]
    },
    pilotOfferTitle: "Notre proposition : un pilote gratuit de 90 jours sans risque",
    pilotOfferText: "Nous vous proposons de démarrer immédiatement par un pilote gratuit de 3 mois sur une zone test de votre choix (ex: Cocody ou Yopougon), avec 100 agents releveurs intégralement équipés à nos frais.\n\nCe pilote inclut :\n• La mise à disposition gratuite de 100 smartphones durcis configurés\n• La formation complète sur site de vos agents et superviseurs\n• L'accès illimité à la console de supervision DSI\n• La mesure hebdomadaire et le rapport chiffré du ROI réalisé",
    closing: "La modernisation digitale des utilities est devenue une priorité absolue sur le continent. La CIE a l'opportunité d'asseoir son leadership technologique régional en éradiquant la fraude avec une solution éprouvée.\n\nJe serais honoré de pouvoir vous présenter cette solution en détail lors d'une rencontre de 30 minutes ou d'une démonstration live avec vos équipes techniques (DSI et Direction du Relevé).\n\nVous trouverez ci-joint la présentation complète de notre offre (Pitch Deck de 10 slides).\n\nDans l'attente de votre retour, je vous prie d'agréer, Monsieur le Directeur Général, l'expression de mes salutations distinguées.",
    attachmentName: "Présentation_Relevé_Digital_CIE_Septembre_2026.pdf (10 slides)"
  },
  followUp7Days: {
    subject: "Re: Proposition de modernisation digitale du relevé de compteurs (Gain 24 Mrds FCFA/an)",
    body: `Monsieur le Directeur Général,

Je me permets de revenir vers vous suite à mon message de la semaine dernière concernant notre proposition de pilote gratuit pour digitaliser le relevé de compteurs et éradiquer la fraude pour la CIE.

Conscient de vos impératifs d'agenda, je souhaitais simplement vous réitérer notre entière disponibilité pour un court échange de 15 minutes, en présentiel à vos bureaux ou en visioconférence, afin de vous présenter les chiffres d'économies constatés et vous remettre en main propre le dossier technique.

Un pilote de 100 agents sur 90 jours ne requiert aucun investissement financier de la part de la CIE et nous permettrait de vous démontrer sur le terrain la récupération des kWh perdus.

Seriez-vous disponible ce [Jour] ou [Jour] prochain pour une brève entrevue ?

Respectueusement,

Adama F. Sheickner
Fondateur & CEO - Markkanich Global / VoltaSync CI
sheicknerl@markkanich.com | +225 0504496944
markkanich.com • Abidjan, Côte d'Ivoire`
  },
  linkedInTemplate: {
    title: "Message d'approche LinkedIn pour Décideurs CIE (Directeur Général, DSI, Dir. Facturation)",
    text: `Bonjour Monsieur [Nom du Directeur],

Je suis avec beaucoup d'admiration les chantiers de modernisation du réseau conduits par la CIE.

Nous avons développé avec VoltaSync CI (Markkanich Global) une solution mobile & anti-fraude tout-terrain conçue pour les releveurs ivoiriens, permettant de résorber les 30 à 50 milliards FCFA de pertes annuelles et d'éliminer les contestations clients grâce à des photos d'index horodatées inviolables.

Nous proposons actuellement à la Direction de la CIE un pilote gratuit de 3 mois sur 100 agents (Cocody ou Yopougon) avec fourniture des smartphones durcis.

Seriez-vous ouvert à ce que je vous transmette notre pitch deck de 10 slides ou à échanger 10 minutes à votre convenance ?

Bien cordialement,
Adama F. Sheickner
Fondateur & CEO - Markkanich Global / VoltaSync CI | sheicknerl@markkanich.com | +225 0504496944`
  }
};
