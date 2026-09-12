import {
  RoiItem,
  PricingPlan,
  UpsellService,
  DeploymentHypothesis,
  StartupCostItem,
  MonthlyCostItem,
  ProfitabilityYear,
  DeploymentPhase,
  RiskItem,
  FinancingOption,
  ActionStep,
  KeyAdvice,
  CieDeciderFaqItem,
} from '../types/businessPlan';

export const BUSINESS_INFO = {
  name: "VOLTASYNC CI",
  subtitle: "Solution Digitale de Relevé de Compteurs & Détection de Fraudes",
  targetClient: "Compagnie Ivoirienne d'Électricité (CIE)",
  valueProposition: "Zéro fraude, zéro perte, 100% traçabilité",
  regionalExpansion: ["SODE (Côte d'Ivoire - Eau)", "SENELEC (Sénégal)", "ENEO (Cameroun)", "SBEE (Bénin)", "GRIDCo (Ghana)"],
  pitchPrincipal: "Pour 2,5 milliards FCFA/an d'abonnement à notre SaaS, vous récupérez 24 milliards FCFA de revenus perdus. Votre retour sur investissement est de 960% la première année.",
  author: "Adama F. Sheickner",
  founder: "Adama F. Sheickner",
  contactPerson: "Adama F. Sheickner",
  title: "Fondateur & CEO",
  company: "Markkanich Global",
  entity: "VoltaSync CI (Markkanich Global)",
  certifiedBy: "L'Équipe Fondatrice de VOLTASYNC CI",
  confidentialityNotice: "Dossier confidentiel sous clause de non-divulgation (NDA)",
  email: "sheicknerl@markkanich.com",
  phone: "+225 0504496944",
  phoneWhatsApp: "+225 0504496944",
  website: "markkanich.com",
  location: "Abidjan, République de Côte d'Ivoire",
  version: "Version Exécutive 1.0 - Confidentiel",
  date: "Septembre 2026",
  currency: "FCFA",
};

export const CIE_CURRENT_PROBLEM = {
  agentsCount: "500 - 800 agents releveurs",
  metersCount: "~2,5 millions de clients",
  technicalLosses: "20 - 25% de l'électricité produite",
  fraudEstimatedRate: "10 - 15% des compteurs sous-évalués ou manipulés",
  fraudCostAnnual: "30 à 50 milliards FCFA / an de manque à gagner direct",
};

export const ROI_DATA: RoiItem[] = [
  {
    id: "roi-1",
    gain: "Réduction de la fraude",
    estimation: "+15 milliards FCFA",
    estimationValue: 15_000_000_000,
    comment: "Détection temps réel des compteurs sous-évalués par analyse d'historique et photo horodatée (5% de récupération nette minimale)",
    iconName: "ShieldAlert",
    category: "direct",
  },
  {
    id: "roi-2",
    gain: "Réduction des impayés",
    estimation: "+5 milliards FCFA",
    estimationValue: 5_000_000_000,
    comment: "Facturation instantanée, émission plus rapide et suppression des contestations de consommation",
    iconName: "ReceiptCheck",
    category: "direct",
  },
  {
    id: "roi-3",
    gain: "Économie sur carnets papier",
    estimation: "200 millions FCFA",
    estimationValue: 200_000_000,
    comment: "Suppression totale des carnets papier, de l'encre, de la logistique d'acheminement et des bordereaux",
    iconName: "FileX",
    category: "operational",
  },
  {
    id: "roi-4",
    gain: "Réduction du temps de traitement",
    estimation: "1 milliard FCFA",
    estimationValue: 1_000_000_000,
    comment: "Automatisation de la saisie, réaffectation du personnel administratif sur des tâches à plus haute valeur",
    iconName: "Clock",
    category: "operational",
  },
  {
    id: "roi-5",
    gain: "Amélioration de la productivité",
    estimation: "3 milliards FCFA",
    estimationValue: 3_000_000_000,
    comment: "Optimisation des tournées par géolocalisation GPS (+20% de compteurs relevés par agent chaque jour)",
    iconName: "TrendingUp",
    category: "productivity",
  },
];

export const TOTAL_ROI_ANNUAL = 24_200_000_000; // ~24 milliards FCFA
export const CIE_SUBSCRIPTION_BENCHMARK = 2_500_000_000; // 2.5 milliards FCFA / an
export const ROI_RATIO_PERCENT = 960; // 960%

export const PRICING_OPTION_A: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    pricePerAgentMonth: 3000,
    priceFormatted: "3 000 FCFA",
    type: "saas_only",
    features: [
      "Application mobile agent (Android offline-first)",
      "Relevé d'index avec photo haute définition",
      "Horodatage et géolocalisation GPS inviolables",
      "Synchronisation automatique 3G/4G/Wi-Fi",
      "Portail superviseur basique",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    recommended: true,
    pricePerAgentMonth: 5000,
    priceFormatted: "5 000 FCFA",
    badge: "Le plus populaire",
    type: "saas_only",
    features: [
      "Toutes les fonctionnalités Starter",
      "Détection d'anomalies par IA (reconnaissance OCR index)",
      "Algorithme anti-fraude (comparatif consommation historique)",
      "Dashboard analytique avancé & cartographie en temps réel",
      "Notification SMS instantanée au client après relevé",
      "Gestion dynamique des tournées et alertes déviation",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    pricePerAgentMonth: 8000,
    priceFormatted: "8 000 FCFA",
    type: "saas_only",
    features: [
      "Toutes les fonctionnalités Professional",
      "API bidirectionnelle avec le progiciel de facturation CIE",
      "Accompagnement dédié & Support technique 24/7 SLA 99.9%",
      "Formations initiales et continues des formateurs CIE",
      "Rapports d'audit de conformité et export légal",
      "Hébergement souverain ou Cloud dédié haute sécurité",
    ],
  },
];

export const PRICING_OPTION_B: PricingPlan[] = [
  {
    id: "pack-complet",
    name: "Pack Complet",
    recommended: true,
    pricePerAgentMonth: 7500,
    priceFormatted: "7 500 FCFA",
    commitment: "36 mois",
    badge: "Recommandé CIE",
    type: "saas_hardware",
    features: [
      "Smartphone professionnel Durci (Rugged IP68 étanche & antichoc)",
      "Batterie longue durée 5000mAh (autonomie 48h terrain)",
      "Application SaaS Formule Professional incluse",
      "Garantie remplacement J+1 & SAV matériel complet",
      "Coque de protection et dragonne de sécurité",
      "Gestion de flotte MDM à distance (sécurité renforcée)",
    ],
  },
  {
    id: "pack-premium",
    name: "Pack Premium",
    pricePerAgentMonth: 10000,
    priceFormatted: "10 000 FCFA",
    commitment: "36 mois",
    type: "saas_hardware",
    features: [
      "Smartphone durci ultra-robuste avec lecteur code-barres / QR laser",
      "Application SaaS Formule Enterprise incluse",
      "SAV matériel prioritaire H+4 et stock tampon dédié",
      "Modules de formation continue sur site pour agents",
      "Supervision DSI sur-mesure & reporting exécutif",
      "Assurance casse, vol et oxydation 100% couverte",
    ],
  },
];

export const UPSELL_SERVICES: UpsellService[] = [
  {
    id: "upsell-sms",
    service: "SMS automatique au client",
    price: "15 FCFA / SMS",
    priceValue: 15,
    unit: "par SMS",
    description: "Envoi immédiat de l'index relevé, photo de preuve et estimation de consommation au consommateur final.",
  },
  {
    id: "upsell-api",
    service: "Module d'intégration Facturation",
    price: "2 000 000 FCFA / mois",
    priceValue: 2000000,
    unit: "mensuel",
    description: "Connecteur temps réel certifié avec le système d'information central de la CIE (ERP / SAP / Oracle Utility).",
  },
  {
    id: "upsell-training",
    service: "Formation terrain des agents",
    price: "500 000 FCFA / session",
    priceValue: 500000,
    unit: "par session (50 agents max)",
    description: "Sessions immersives de prise en main, gestion des cas complexes de relevé et sensibilisation à la fraude.",
  },
  {
    id: "upsell-support",
    service: "Support technique premium",
    price: "1 000 000 FCFA / mois",
    priceValue: 1000000,
    unit: "mensuel",
    description: "Disponibilité garantie 24/7/365, astreinte téléphonique dédiée et déplacement physique sous 2h à Abidjan.",
  },
];

export const DEPLOYMENT_HYPOTHESIS: DeploymentHypothesis[] = [
  {
    year: 1,
    label: "Année 1 - Pilote & Abidjan Sud",
    agents: 300,
    scope: "Pilote 100 agents (Cocody) → Extension 300 agents",
    averagePlanPrice: 7500,
    mrr: 2_250_000,
    arr: 27_000_000,
    additionalRevenue: {
      apiIntegration: 15_000_000,
      training: 5_000_000,
      sms: 10_000_000,
      total: 30_000_000,
    },
    totalRevenue: 57_000_000,
  },
  {
    year: 2,
    label: "Année 2 - Couverture Grand Abidjan",
    agents: 600,
    scope: "600 agents actifs couvrant l'ensemble du Grand Abidjan",
    averagePlanPrice: 7500,
    mrr: 4_500_000,
    arr: 54_000_000,
    additionalRevenue: {
      apiIntegration: 0,
      training: 10_000_000,
      sms: 25_000_000,
      total: 35_000_000,
    },
    totalRevenue: 89_000_000,
  },
  {
    year: 3,
    label: "Année 3 - Déploiement National",
    agents: 1000,
    scope: "1 000 agents (couverture intégrale Côte d'Ivoire)",
    averagePlanPrice: 8000,
    mrr: 8_000_000,
    arr: 96_000_000,
    additionalRevenue: {
      apiIntegration: 0,
      training: 15_000_000,
      sms: 50_000_000,
      total: 65_000_000,
    },
    totalRevenue: 161_000_000,
  },
];

export const STARTUP_COSTS: StartupCostItem[] = [
  {
    id: "sc-1",
    poste: "Développement logiciel",
    montant: 25_000_000,
    montantFormatted: "25 000 000 FCFA",
    notes: "Équipe de 3-4 développeurs seniors pendant 6 mois (Mobile React Native + Backend Cloud)",
    category: "tech",
  },
  {
    id: "sc-2",
    poste: "Achat smartphones (300 unités)",
    montant: 28_800_000,
    montantFormatted: "28 800 000 FCFA",
    notes: "~96 000 FCFA / unité (spécifications durcies IP68, import groupé + frais douaniers)",
    category: "hardware",
  },
  {
    id: "sc-3",
    poste: "Infrastructure cloud",
    montant: 5_000_000,
    montantFormatted: "5 000 000 FCFA",
    notes: "Hébergement GCP / AWS haute disponibilité, serveurs sécurisés pour 1 an",
    category: "infra",
  },
  {
    id: "sc-4",
    poste: "Marketing & Commercial",
    montant: 8_000_000,
    montantFormatted: "8 000 000 FCFA",
    notes: "Pitch decks, déplacements terrain, démonstrateurs, relations institutionnelles",
    category: "commercial",
  },
  {
    id: "sc-5",
    poste: "Juridique & Administratif",
    montant: 3_000_000,
    montantFormatted: "3 000 000 FCFA",
    notes: "Création de la SAS, convention cadre CIE, dépôt brevet & propriété intellectuelle",
    category: "legal",
  },
  {
    id: "sc-6",
    poste: "Fonds de roulement",
    montant: 10_000_000,
    montantFormatted: "10 000 000 FCFA",
    notes: "Trésorerie de sécurité opérationnelle pour amortir les délais de paiement",
    category: "cash",
  },
];

export const TOTAL_STARTUP_COSTS = 79_800_000;

export const MONTHLY_COSTS_YEAR_2: MonthlyCostItem[] = [
  {
    id: "mc-1",
    poste: "Équipe technique (3 devs + 1 support lead)",
    montantMensuel: 6_000_000,
    montantFormatted: "6 000 000 FCFA",
    notes: "Salaires et charges sociales de l'équipe d'ingénierie",
  },
  {
    id: "mc-2",
    poste: "Infrastructure cloud & passerelle SMS",
    montantMensuel: 800_000,
    montantFormatted: "800 000 FCFA",
    notes: "Bases de données, stockage images cryptées, routage télécom",
  },
  {
    id: "mc-3",
    poste: "Support client & assistance terrain (2 personnes)",
    montantMensuel: 1_500_000,
    montantFormatted: "1 500 000 FCFA",
    notes: "Prise en charge des incidents, hotline dédiée agents",
  },
  {
    id: "mc-4",
    poste: "Marketing, Ventes & Relations CIE",
    montantMensuel: 1_000_000,
    montantFormatted: "1 000 000 FCFA",
    notes: "Suivi des comptes clés et prospection sous-régionale",
  },
  {
    id: "mc-5",
    poste: "Administratif, Loyer & Logistique Abidjan",
    montantMensuel: 1_500_000,
    montantFormatted: "1 500 000 FCFA",
    notes: "Bureaux, comptabilité, assurances et conformité",
  },
  {
    id: "mc-6",
    poste: "Remplacement smartphones & pièces (5% / an)",
    montantMensuel: 500_000,
    montantFormatted: "500 000 FCFA",
    notes: "Provision pour casse, usure et accessoires terrain",
  },
];

export const TOTAL_MONTHLY_COSTS_Y2 = 11_300_000;
export const ANNUALIZED_COSTS_Y2_BASE = 11_300_000 * 12; // 135 600 000 FCFA

export const PROFITABILITY_SUMMARY: ProfitabilityYear[] = [
  {
    year: 1,
    agents: 300,
    revenue: 57_000_000,
    costs: 79_800_000,
    netMargin: -22_800_000,
    marginPercent: -40.0,
    status: "investment",
    notes: "Phase d'investissement initial, R&D et acquisition de la première flotte de 300 terminaux.",
  },
  {
    year: 2,
    agents: 600,
    revenue: 89_000_000,
    costs: 135_600_000,
    netMargin: -46_600_000,
    marginPercent: -52.4,
    status: "scale",
    notes: "Montée en charge rapide. Inclut l'achat de 300 nouveaux smartphones durcis (28,8 M FCFA).",
  },
  {
    year: 3,
    agents: 1000,
    revenue: 161_000_000,
    costs: 135_600_000,
    netMargin: 25_400_000,
    marginPercent: 15.8,
    status: "profitable",
    notes: "Plein régime national, forte rentabilité récurrente et marges nettes positives durables.",
  },
];

export const BREAK_EVEN_MONTH = "Mois 28 - 30 (Fin Année 2)";

export const DEPLOYMENT_ROADMAP: DeploymentPhase[] = [
  {
    phase: 1,
    title: "Phase 1 : Préparation & Structuration",
    timeframe: "Mois 1 - 3",
    description: "Fondations de l'entreprise, développement du MVP et formalisation du cadre partenarial.",
    color: "emerald",
    milestones: [
      "Création juridique de la société SAS à Abidjan",
      "Recrutement de l'équipe technique de choc (CTO + 2 développeurs expérimentés)",
      "Développement du MVP logiciel (application mobile offline-first + dashboard supervision)",
      "Commande du premier lot de 100 smartphones durcis pour la phase pilote",
      "Rédaction et validation des conventions contractuelles avec la direction générale de la CIE",
    ],
  },
  {
    phase: 2,
    title: "Phase 2 : Pilote Opérationnel & Validation ROI",
    timeframe: "Mois 4 - 6",
    description: "Mise à l'épreuve sur le terrain, mesures comparatives et validation du gain financier pour la CIE.",
    color: "blue",
    milestones: [
      "Déploiement sur une zone test à forte densité (ex: Direction Régionale de Cocody, 100 agents)",
      "Tests intensifs en conditions réelles pendant 3 mois d'exploitation continue",
      "Collecte active des retours d'expérience agents et ajustements ergonomiques",
      "Audit indépendant des relevés et documentation chiffrée du ROI (taux de fraude détecté)",
    ],
  },
  {
    phase: 3,
    title: "Phase 3 : Extension Grand Abidjan",
    timeframe: "Mois 7 - 18",
    description: "Déploiement à grande échelle et raccordement complet au système de facturation centrale.",
    color: "amber",
    milestones: [
      "Signature du contrat cadre pluriannuel national avec la direction générale de la CIE",
      "Montée en cadence progressive : 300 agents (Fin An 1) puis 600 agents (An 2)",
      "Recrutement et structuration du pôle support technique et formation continue",
      "Commandes échelonnées des terminaux durcis par lots de 200 à 300 unités",
    ],
  },
  {
    phase: 4,
    title: "Phase 4 : Échelle Nationale & Expansion Régionale",
    timeframe: "Mois 19 - 36",
    description: "Monopole de service en Côte d'Ivoire et réplication dans les utilities de l'Afrique de l'Ouest.",
    color: "purple",
    milestones: [
      "Couverture intégrale du territoire ivoirien (1 000 agents équipés)",
      "Diversification sectorielle : SODE (Société de Distribution d'Eau de Côte d'Ivoire) et communes",
      "Expansion géographique sous-régionale : Sénégal (SENELEC), Cameroun (ENEO), Bénin (SBEE)",
      "Lancement de modules complémentaires : détection de compteurs communicants (IoT smart-grid)",
    ],
  },
];

export const RISKS_AND_MITIGATION: RiskItem[] = [
  {
    id: "risk-1",
    risk: "Résistance au changement des agents et des syndicats",
    probability: "Haute",
    impact: "Élevé",
    category: "social",
    mitigation: "Impliquer les représentants syndicaux dès le départ. Mettre en avant la protection de l'agent (preuves GPS en cas de litige client, fin des réprimandes sur les erreurs d'index manuscrites, suppression du fardeau papier). Proposer des primes à la qualité de relevé.",
  },
  {
    id: "risk-2",
    risk: "Retard de paiement de la CIE (délais administratifs)",
    probability: "Moyenne",
    impact: "Élevé",
    category: "financial",
    mitigation: "Négocier un paiement d'avance trimestriel ou la mise en place d'une lettre de crédit / garantie bancaire à première demande. Intégrer des pénalités conventionnelles claires.",
  },
  {
    id: "risk-3",
    risk: "Problèmes techniques terrain (pannes, casse, zones blanches)",
    probability: "Moyenne",
    impact: "Moyen",
    category: "technical",
    mitigation: "Mode 100% offline-first avec synchronisation automatique différée. Équipe support locale joignable 24/7. Maintien d'un stock tampon permanent de 5% de smartphones de rechange préconfigurés.",
  },
  {
    id: "risk-4",
    risk: "Entrée de concurrents (éditeurs de logiciels internationaux)",
    probability: "Faible",
    impact: "Élevé",
    category: "market",
    mitigation: "Avantage territorial décisif : équipe présente à Abidjan, compréhension fine des problématiques locales de fraude, prix adaptés au marché sous-régional et réactivité d'intervention physique en moins de 2 heures.",
  },
  {
    id: "risk-5",
    risk: "Changement de gouvernance ou de direction à la CIE",
    probability: "Moyenne",
    impact: "Élevé",
    category: "governance",
    mitigation: "Multiplier les interlocuteurs opérationnels (Direction du Relevé, DSI, Direction Financière, Syndicats) et ancrer juridiquement le contrat avec validation au niveau du Conseil d'Administration.",
  },
  {
    id: "risk-6",
    risk: "Tension sur la trésorerie au moment de l'achat groupé des smartphones",
    probability: "Haute",
    impact: "Élevé",
    category: "financial",
    mitigation: "Mobiliser une levée de fonds d'amorçage (Love money, Business Angels africains) ou mettre en place une ligne de crédit de leasing matériel adossée au bon de commande de la CIE.",
  },
];

export const FINANCING_STRATEGIES: FinancingOption[] = [
  {
    optionNumber: 1,
    title: "Option 1 : Bootstrapping (Autofinancement)",
    type: "Capitaux propres 100%",
    amount: "70 - 80M FCFA",
    advantage: "Conservation totale de 100% du capital et de l'indépendance de gouvernance.",
    disadvantage: "Exige une importante surface financière personnelle ou des avances clients immédiates.",
    feasibilityOrTarget: "Faisable si le fondateur dispose d'économies substantielles ou réussit à négocier un acompte à la commande de 50% auprès de la CIE.",
    icon: "Wallet",
  },
  {
    optionNumber: 2,
    title: "Option 2 : Love Money & Business Angels",
    type: "Equity / Entrée au capital",
    amount: "80 - 100M FCFA",
    dilution: "20% à 30% du capital social",
    advantage: "Apport de trésorerie non remboursable immédiatement et renforcement du réseau d'affaires.",
    feasibilityOrTarget: "Diaspora ivoirienne, réseaux d'investisseurs régionaux (Afangel, Lagos Angel Network, Comoé Capital, WIC).",
    argument: "Argument décisif : ROI de 960% pour le client final (CIE), marché B2B captif garanti sur plusieurs années.",
    icon: "Users",
  },
  {
    optionNumber: 3,
    title: "Option 3 : Prêt Bancaire / Ligne d'Innovation",
    type: "Dette bancaire structurée",
    amount: "50 - 80M FCFA",
    dilution: "0% (Aucune dilution)",
    advantage: "Taux compétitif (6% à 8% par an) et conservation du contrôle stratégique.",
    disadvantage: "Remboursement obligatoire échelonné sur 5 à 7 ans avec exigence de garanties.",
    feasibilityOrTarget: "Banques ivoiriennes cibles : SGBCI, Bank of Africa (BOA), Ecobank CI, via les guichets PME / Innovation et fonds de garantie ARIZ / Bpifrance.",
    argument: "Le bon de commande ou la lettre d'intention ferme de la CIE sert de collatéral direct pour la ligne de crédit.",
    icon: "Landmark",
  },
  {
    optionNumber: 4,
    title: "Option 4 : Partenariat Stratégique Industriel",
    type: "Corporate Venture / Joint-Venture",
    amount: "Variable (Co-financement)",
    advantage: "Apport massif de crédibilité, accès direct aux infrastructures et réseau d'influence au sommet de l'État.",
    disadvantage: "Processus de décision plus long et risque d'absorption par l'opérateur.",
    feasibilityOrTarget: "Opérateurs Télécom (Orange CI, MTN, Moov) ou groupes industriels de l'énergie (Eranove, Bouygues Energies).",
    argument: "Synergie parfaite avec les cartes SIM M2M des opérateurs télécoms.",
    icon: "Handshake",
  },
];

export const ACTION_PLAN_STEPS: ActionStep[] = [
  {
    id: "step-week-1",
    timeline: "Cette semaine",
    tasks: [
      { id: "t1", text: "Valider et verrouiller les chiffres du business plan exécutif", completed: true, priority: "Haute" },
      { id: "t2", text: "Arrêter le choix de la stratégie de financement prioritaire (Option 1, 2, 3 ou 4)", completed: false, priority: "Haute" },
      { id: "t3", text: "Cartographier et lister les contacts clés à la CIE (Direction du Relevé, DSI, Direction Financière)", completed: false, priority: "Haute" },
      { id: "t4", text: "Initier les démarches juridiques préliminaires de constitution de société à Abidjan", completed: false, priority: "Moyenne" },
    ],
  },
  {
    id: "step-week-2",
    timeline: "Dans 2 semaines",
    tasks: [
      { id: "t5", text: "Finaliser le pitch deck exécutif (10 slides percutantes pour la direction CIE)", completed: false, priority: "Haute" },
      { id: "t6", text: "Solliciter 3 à 5 fabricants certifiés sur Alibaba pour devis fermes de smartphones IP68", completed: false, priority: "Haute" },
      { id: "t7", text: "Rédiger le cahier des charges technique fonctionnel (specs API, sécurité, mode offline)", completed: false, priority: "Moyenne" },
      { id: "t8", text: "Préparer le prototype interactif de démonstration mobile pour la réunion CIE", completed: false, priority: "Moyenne" },
    ],
  },
  {
    id: "step-month-1",
    timeline: "Dans 1 mois",
    tasks: [
      { id: "t9", text: "Tenir le premier rendez-vous stratégique avec le comité de direction de la CIE", completed: false, priority: "Haute" },
      { id: "t10", text: "Proposer formellement un pilote gratuit sur une zone test (Cocody - 100 agents)", completed: false, priority: "Haute" },
      { id: "t11", text: "Lancer la campagne de recrutement du CTO et des deux développeurs full-stack", completed: false, priority: "Haute" },
      { id: "t12", text: "Finaliser les accords bancaires ou de financement d'amorçage pour 80M FCFA", completed: false, priority: "Moyenne" },
    ],
  },
  {
    id: "step-month-3",
    timeline: "Dans 3 mois",
    tasks: [
      { id: "t13", text: "Achever le développement et les tests d'assurance qualité du MVP applicatif", completed: false, priority: "Haute" },
      { id: "t14", text: "Réceptionner, dédouaner et configurer les 100 premiers smartphones durcis", completed: false, priority: "Haute" },
      { id: "t15", text: "Organiser les sessions de formation pour les 100 agents de la zone pilote", completed: false, priority: "Haute" },
      { id: "t16", text: "Lancer officiellement le pilote opérationnel en conditions réelles avec suivi quotidien", completed: false, priority: "Haute" },
    ],
  },
];

export const KEY_ADVICE: KeyAdvice[] = [
  {
    title: "1. Vends des résultats, pas un logiciel",
    subtitle: "Parle en milliards FCFA récupérés, jamais en lignes de code",
    description: "Les décideurs de la CIE ne s'intéressent pas à votre pile technique : ils veulent savoir comment combler les 30 à 50 milliards de perte annuelle. Chaque slide, chaque phrase doit résonner avec rentabilité, réduction d'impayés et intégrité financière.",
    badge: "Priorité Commerciale",
  },
  {
    title: "2. Commence petit, pense grand",
    subtitle: "Le pilote de 100 agents est le passeport du contrat national",
    description: "Ne cherchez pas à équiper tout le pays d'un seul coup. Réussir un pilote irréprochable de 3 mois à Cocody avec 100 agents produit des métriques irréfutables et rend le déploiement national inéluctable.",
    badge: "Stratégie Terrain",
  },
  {
    title: "3. Sécurise impérativement les flux de trésorerie",
    subtitle: "La CIE est un géant étatique qui peut être lent à payer",
    description: "Exigez des facturations trimestrielles payables d'avance, des acomptes à la commande de matériel, ou une ligne de découvert bancaire adossée au contrat pour ne jamais étouffer votre BFR.",
    badge: "Gestion Financière",
  },
  {
    title: "4. Bâtis une relation symbiotique avec les syndicats",
    subtitle: "Transforme un frein potentiel en allié le plus puissant",
    description: "L'application doit protéger l'agent releveur : la photo prouve sa bonne foi contre les contestations abusives de clients, le GPS démontre sa présence, et l'app supprime la pénibilité du papier.",
    badge: "Ressources Humaines",
  },
  {
    title: "5. Documente chaque franc sauvé",
    subtitle: "Chaque anomalie démasquée est une munition pour l'extension",
    description: "Mettez en place un reporting hebdomadaire direct au Directeur Général : compteurs manipulés repérés, kWh réintégrés dans la facturation, kilomètres économisés par tournée.",
    badge: "Contrôle de Gestion",
  },
  {
    title: "6. Prépare l'expansion régionale dès le Jour 1",
    subtitle: "De la Côte d'Ivoire vers toute la zone UEMOA / CEMAC",
    description: "La CIE est la vitrine de l'Afrique de l'Ouest francophone. Une fois le succès validé à Abidjan, la SODE (eau), la SENELEC au Sénégal, ENEO au Cameroun et la SBEE au Bénin suivront naturellement.",
    badge: "Scale Régional",
  },
];

export const CIE_DECIDERS_FAQ: CieDeciderFaqItem[] = [
  // INTEROPÉRABILITÉ (DSI & ÉQUIPES SYSTÈMES)
  {
    id: "faq-interop-1",
    category: "interoperability",
    categoryLabel: "Interopérabilité & SI",
    badge: "DSI & Architecture SI",
    question: "Comment VoltaSync s'interface-t-il avec notre progiciel de facturation (SAP IS-U / Oracle CC&B) sans perturber la chaîne de production ?",
    shortAnswer: "Par connecteurs API REST sécurisés bidirectionnels ou exports batch normalisés (CSV/XML/SFTP), sans aucune modification du cœur de votre ERP.",
    detailedAnswer: "VoltaSync a été conçu pour s'adapter à la cartographie applicative existante de la CIE sans imposer de refonte. Nous supportons deux modes d'intégration selon les exigences de la DSI : (1) Mode Temps Réel via API REST/GraphQL sécurisée par mTLS pour injecter les index validés directement dans les tables d'imputation de SAP IS-U ou Oracle CC&B ; (2) Mode Batch sécurisé via serveur SFTP dédié à la CIE générant des fichiers plats chiffrés (format BAPI ou XML standardisé) injectés aux heures creuses.",
    proofPoints: [
      "Connecteurs prédéfinis compatibles SAP IS-U, Oracle CC&B, Microsoft Dynamics et progiciels métiers sur-mesure",
      "Format d'échange paramétrable : index brut, photo compressée, horodatage UTC, coordonnées GPS et flag d'anomalie",
      "Sandbox d'intégration préconfigurée livrée dès la phase de cadrage pilote (J+15)",
      "Mécanisme de rollback et journalisation complète d'audit de chaque transaction"
    ],
    keyMetric: "Zéro modification du schéma ERP CIE"
  },
  {
    id: "faq-interop-2",
    category: "interoperability",
    categoryLabel: "Interopérabilité & SI",
    badge: "Réseau & Hors-Ligne",
    question: "Que se passe-t-il lorsque l'agent releveur se trouve dans une zone blanche ou un sous-sol sans couverture 3G/4G ?",
    shortAnswer: "L'application fonctionne à 100% hors-ligne grâce à sa base embarquée SQLite chiffrée, avec synchronisation différentielle automatique dès reconnexion.",
    detailedAnswer: "En Côte d'Ivoire, les tournées de relevé traversent régulièrement des zones à connectivité instable (zones rurales périurbaines, caves, cours communes enclavées). L'agent télécharge sa feuille de tournée le matin en Wi-Fi à l'agence. Toute l'OCR (reconnaissance d'index) s'exécute en local sur le processeur du smartphone via un modèle TensorFlow Lite optimisé (<300 ms). Aucune connexion Internet n'est requise pour relever, horodater et signer cryptographiquement le relevé.",
    proofPoints: [
      "Fonctionnement hors-ligne autonome garanti jusqu'à 7 jours sans réseau",
      "Synchronisation différentielle par paquets compressés (delta sync) pour économiser la data mobile",
      "Détection automatique de reconnexion réseau (4G/3G ou Wi-Fi agence le soir)",
      "Zéro perte de données grâce à la journalisation Write-Ahead Logging (WAL)"
    ],
    keyMetric: "Autonomie 100% Offline (jusqu'à 7 jours)"
  },
  {
    id: "faq-interop-3",
    category: "interoperability",
    categoryLabel: "Interopérabilité & SI",
    badge: "Matériel & Flotte",
    question: "Sommes-nous contraints d'utiliser vos smartphones spécifiques ou pouvons-nous recycler la flotte existante de la CIE ?",
    shortAnswer: "La plateforme logicielle est totalement agnostique (Android 10+). Vous pouvez déployer notre application sur vos terminaux actuels ou adopter notre package durci.",
    detailedAnswer: "Nous offrons une liberté totale à la CIE : Option A (SaaS Pur) avec déploiement APK / MDM sur les terminaux Android dont dispose déjà la CIE ; ou Option B (Pack Clé-en-main avec terminaux durcis IP68 batterie 8000 mAh importés en direct d'usine Shenzhen). Le parc matériel peut être panaché selon les agences urbaines ou rurales.",
    proofPoints: [
      "Compatible avec 100% des smartphones et tablettes Android 10, 11, 12, 13 et 14+",
      "Gestionnaire de flotte compatible Microsoft Intune, Google Workspace MDM et Samsung Knox",
      "Mises à jour applicatives silencieuses OTA (Over-The-Air) sans intervention technique de l'agent",
      "Étalonnage optique automatique sur capteurs photo 8 MP à 64 MP"
    ],
    keyMetric: "100% matériel agnostique (Android 10+)"
  },

  // SÉCURITÉ & CONFORMITÉ DES DONNÉES (DSI, DPO & JURIDIQUE)
  {
    id: "faq-sec-1",
    category: "security",
    categoryLabel: "Sécurité & Conformité",
    badge: "Souveraineté & ARTCI",
    question: "Où sont hébergées les données des 2,5 millions d'abonnés de la CIE et comment la conformité ARTCI est-elle assurée ?",
    shortAnswer: "Données hébergées en Côte d'Ivoire (datacenter local tier III / cloud souverain Orange/MTN ou on-premise CIE) en stricte conformité avec la loi n° 2013-450 sur la protection des données.",
    detailedAnswer: "La sécurité énergétique et les données des abonnés ivoiriens relèvent de la souveraineté nationale. VoltaSync propose une infrastructure flexible adaptée aux exigences de l'Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI) : hébergement au Data Center National de Grand-Bassam, chez les opérateurs souverains locaux (Orange Business / MTN Cloud Abidjan) ou déploiement On-Premise intégral dans les centres de calculs propriétaires de la CIE à Abidjan.",
    proofPoints: [
      "Conformité totale avec la loi ivoirienne n° 2013-450 relative à la protection des données à caractère personnel",
      "Ségrégation stricte des bases de données de la CIE (environnement Cloud dédié, single-tenant, aucun partage de ressource)",
      "Audit de conformité et dossier déclaratif ARTCI préparé et fourni par notre équipe juridique",
      "Possibilité d'hébergement 100% On-Premise dans les baies serveurs de la CIE"
    ],
    keyMetric: "Hébergement 100% local ou On-Premise CIE"
  },
  {
    id: "faq-sec-2",
    category: "security",
    categoryLabel: "Sécurité & Conformité",
    badge: "Intégrité & Anti-Fraude",
    question: "Comment garantissez-vous qu'un agent ne peut pas falsifier les index ou modifier ses coordonnées GPS pour simuler sa présence ?",
    shortAnswer: "Par triple verrouillage inviolable : photo originale obligatoire, horodatage cryptographique matériel et GPS hybride non falsifiable (anti-Mock Location).",
    detailedAnswer: "La fraude sur les relevés manuels (accords informels entre agent et client, relevés de complaisance, estimation depuis le maquis) coûte entre 30 et 50 milliards FCFA par an à la CIE. VoltaSync élimine structurellement ces dérives par : (1) L'interdiction absolue de saisie manuelle de l'index sans prise de photo nette du compteur ; (2) La validation OCR locale par réseau neuronal sans complaisance humaine ; (3) Le blocage matériel des fausses coordonnées GPS (détection du Rooting, des VPN et des applications Mock Location) ; (4) La signature cryptographique SHA-256 de chaque relevé incluant le hash de la photo, le timestamp satellite et le numéro de série de la carte SIM.",
    proofPoints: [
      "Reconnaissance optique OCR neuronale qui lit le cadran physique et rejette les écarts anormaux d'historique",
      "Blocage automatisé de la saisie si la géolocalisation s'éloigne de plus de 15 mètres du point de livraison (PDL)",
      "Horodatage certifié par réseau mobile et temps GPS, insensible au dérèglement de l'heure du téléphone",
      "Valeur probante juridique en cas de contentieux avec l'abonné (preuve photographique horodatée)"
    ],
    keyMetric: "30 à 50 Mds FCFA de fraudes neutralisables"
  },
  {
    id: "faq-sec-3",
    category: "security",
    categoryLabel: "Sécurité & Conformité",
    badge: "Chiffrement & Accréditations",
    question: "Quels sont les protocoles de chiffrement et de gestion des accès (IAM) appliqués ?",
    shortAnswer: "Chiffrement de bout en bout (AES-256 au repos, TLS 1.3 en transit), authentification multi-facteurs (MFA) et contrôle d'accès basé sur les rôles (RBAC).",
    detailedAnswer: "Toutes les bases de données embarquées sur les smartphones des releveurs sont chiffrées via SQLCipher (AES-256). En cas de perte ou de vol d'un smartphone sur le terrain, l'administrateur CIE peut révoquer les accès et effacer les données à distance en moins de 60 secondes. Les flux de transmission vers le serveur de supervision utilisent le protocole TLS 1.3 avec certificat d'autorité validé. L'accès au cockpit superviseur s'intègre avec l'Active Directory / LDAP d'entreprise de la CIE.",
    proofPoints: [
      "Chiffrement AES-256 sur terminal (base de données et cache photos chiffrés)",
      "Transmission sécurisée TLS 1.3 avec épinglage de certificat (Certificate Pinning)",
      "Authentification biométrique (empreinte digitale) de l'agent sur le terminal terrain",
      "Effacement à distance (Remote Wipe) instantané en cas de perte ou vol du terminal"
    ],
    keyMetric: "Normes bancaires AES-256 & TLS 1.3"
  },

  // COÛT TOTAL DE POSSESSION (TCO) & MODÈLE ÉCONOMIQUE (DG & DAF)
  {
    id: "faq-tco-1",
    category: "tco",
    categoryLabel: "Coût Total de Possession (TCO)",
    badge: "DG, DAF & Rentabilité",
    question: "Quel est le coût global pour la CIE en année 1 et sous quel délai le projet génère-t-il un retour sur investissement net ?",
    shortAnswer: "Pour 64,8 M FCFA d'abonnement SaaS (450 agents), la CIE récupère 622,5 M FCFA annuels. Le projet s'amortit en seulement 14 jours de cycle de facturation.",
    detailedAnswer: "La structure tarifaire de VoltaSync a été étudiée pour être auto-financée par les gains opérationnels dès le premier trimestre. L'abonnement SaaS complet s'élève à 12 000 FCFA HT / agent / mois (soit 64,8 millions FCFA annuels pour l'ensemble des 450 releveurs de la CIE). En face, les gains directs de trésorerie (accélération du cycle d'encaissement de 15 jours) et la réduction des fraudes et contestations rapportent un minimum de 622,5 millions FCFA par an à la CIE. Le ratio de retour sur investissement est de 9,6 pour 1 (ROI de 860% à 960%).",
    proofPoints: [
      "Amortissement complet de la dépense annuelle en 14 jours grâce à l'avance de trésorerie BFR",
      "Gain net direct annuel pour la CIE : +557,7 millions FCFA après déduction de l'abonnement SaaS",
      "Aucun investissement lourd en licence CAPEX : modèle OPEX mensualisé ou trimestriel",
      "Économie immédiate de 45 millions FCFA/an sur les carnets de bordereaux papier et consommables"
    ],
    keyMetric: "9,6 FCFA gagnés pour 1 FCFA investi"
  },
  {
    id: "faq-tco-2",
    category: "tco",
    categoryLabel: "Coût Total de Possession (TCO)",
    badge: "Financement & Pilote",
    question: "La CIE doit-elle mobiliser un budget d'investissement avant de constater les résultats concrets ?",
    shortAnswer: "Non. Nous offrons une phase pilote PoC de 60 jours 100% gratuite (15 agents équipés, licence SaaS offerte, paramétrage inclus) avec engagement de résultats chiffrés.",
    detailedAnswer: "Nous assumons l'intégralité du risque financier de démonstration. VoltaSync déploie un pilote de 60 jours sur 1 à 2 agences témoins (par exemple Plateau pour l'environnement tertiaire et Yopougon pour la densité résidentielle). Nous fournissons 15 smartphones durcis, paramétrons les tournées, formons les agents et mesurons chaque semaine les gains d'efficacité. La CIE ne paye rien tant que les indicateurs de performance (taux de réussite OCR > 98%, zéro contestation sur la zone pilote) ne sont pas formellement démontrés.",
    proofPoints: [
      "Pilote de 60 jours sans aucun déboursement pour la CIE (Valeur offerte : 12,5 millions FCFA)",
      "Mise à disposition gratuite de 15 terminaux préconfigurés prêts à l'emploi",
      "Accompagnement terrain quotidien par notre équipe d'ingénieurs à Abidjan",
      "Rapport d'audit contradictoire remis en fin de pilote au Directeur Général de la CIE"
    ],
    keyMetric: "0 FCFA d'engagement financier initial (PoC 60 jours)"
  },
  {
    id: "faq-tco-3",
    category: "tco",
    categoryLabel: "Coût Total de Possession (TCO)",
    badge: "Pérennité & Support",
    question: "Quels sont les coûts cachés éventuels (maintenance, mises à jour, casse matérielle, formation continue) ?",
    shortAnswer: "Zéro coût caché. Tout est forfaitisé dans le contrat : maintenance applicative, mises à jour, support 24/7, formation et tampon de pièces de rechange.",
    detailedAnswer: "Dans les projets informatiques traditionnels, les dépassements de coûts proviennent de la maintenance corrective et de l'assistance. Chez VoltaSync, notre contrat SaaS annuel tout-inclus couvre : les évolutions logicielles régulières, la hotline support 24/7 basée à Abidjan, les sessions de formation pour les nouveaux agents, et la gestion du cycle de vie des terminaux avec stock tampon de rechange immédiate (5% de terminaux de réserve prépositionnés à la CIE).",
    proofPoints: [
      "Support technique de niveau 1, 2 et 3 basé localement à Abidjan avec SLA contractuel < 2h",
      "Mises à jour réglementaires et correctives incluses sans surcoût dans l'abonnement",
      "Tampon de 5% de terminaux de rechange prêtés sans délai pour zéro interruption de tournée",
      "Garantie constructeur de 24 mois sur les terminaux durcis avec remplacement à neuf en cas de panne"
    ],
    keyMetric: "SLA contractuel < 2h garanti à Abidjan"
  }
];
