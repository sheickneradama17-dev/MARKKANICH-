export interface MobileScreenSpec {
  id: 'login' | 'tours' | 'reading' | 'offline' | 'incident';
  number: number;
  title: string;
  nameFr: string;
  category: string;
  description: string;
  keyFeatures: string[];
  specs: {
    header: string;
    layout: string;
    colors: string[];
    dimensions?: string;
  };
}

export interface WebScreenSpec {
  id: 'dashboard' | 'anomalies' | 'agent' | 'reports';
  number: number;
  title: string;
  nameFr: string;
  description: string;
  keyFeatures: string[];
  specs: {
    sidebar: string;
    layout: string;
    primaryKpis: string[];
  };
}

export interface FigmaStep {
  step: number;
  title: string;
  badge: string;
  timeEstimate: string;
  description: string;
  substeps: {
    label: string;
    detail: string;
    tip?: string;
  }[];
}

// ---------------------------------------------------------------------------
// PARTIE 1 : SPÉCIFICATIONS APP MOBILE (AGENT TERRAIN)
// ---------------------------------------------------------------------------
export const MOBILE_SCREENS: MobileScreenSpec[] = [
  {
    id: 'login',
    number: 1,
    title: "Page de Connexion",
    nameFr: "Connexion Agent Sécurisée",
    category: "Authentification",
    description: "Point d'entrée sécurisé pour les 450 à 800 agents de terrain avec matricule CIE et mot de passe.",
    keyFeatures: [
      "Logo CIE officiel centré (120x120px)",
      "Titre 'Relevé CIE' (24px bold) & Sous-titre 'Connexion agent' (14px)",
      "Champ Matricule/Email avec icône utilisateur",
      "Champ Mot de passe avec bascule afficher/masquer",
      "Bouton CTA 'Se connecter' (50px hauteur, Bleu CIE #0056A6)",
      "Lien de récupération et version de l'application (v1.0.0)"
    ],
    specs: {
      header: "Logo CIE officiel 120x120px",
      layout: "Pleine hauteur (393x852px), marges latérales 24px",
      colors: ["#0056A6 (Bleu CIE)", "#FFFFFF (Fond)", "#333333 (Texte)", "#E0E0E0 (Bordure)"]
    }
  },
  {
    id: 'tours',
    number: 2,
    title: "Accueil & Tournées",
    nameFr: "Accueil / Liste des Tournées",
    category: "Gestion de Mission",
    description: "Vue d'ensemble de la journée de l'agent : statut de synchronisation, progression de la tournée du jour et statistiques de rendement.",
    keyFeatures: [
      "Header 56px avec Avatar agent (40px), Nom 'Kouadio Jean' et Badge 'En ligne'",
      "Carte principale 'Tournée Cocody - Zone 3' (fond bleu clair #E3F2FD)",
      "Barre de progression 37% (45/120 compteurs relevés)",
      "Bouton 'Continuer la tournée' (44px, Bleu CIE)",
      "3 Cartes statistiques rapides : Aujourd'hui (45), Anomalies (3), Temps moyen (2.5 min)",
      "Historique des tournées antérieures avec indicateur de complétion ✓"
    ],
    specs: {
      header: "Barre statut 56px avec avatar 40px et cloche notification",
      layout: "Carte héros 12px rayon, grille 3 colonnes stats, liste tournées",
      colors: ["#E3F2FD (Bleu clair carte)", "#0056A6 (Primaire)", "#28A745 (Vert en ligne)", "#FF9800 (Orange anomalies)"]
    }
  },
  {
    id: 'reading',
    number: 3,
    title: "Relevé de Compteur",
    nameFr: "Relevé de Compteur (ÉCRAN PRINCIPAL)",
    category: "Opération Terrain",
    description: "Le cœur opérationnel du système : géolocalisation vérifiée, prise de photo certifiée avec horodatage GPS, saisie géante de l'index et calcul automatique.",
    keyFeatures: [
      "Header avec retour, titre et badge 🟢 'Position vérifiée (GPS ±2m)'",
      "Fiche compteur : N° MTR-7892-A, Rue des Jardins Cocody, Client Traoré Ibrahim, Ancien index 82 150 kWh",
      "Zone critique photo (200px) : cadre avec overlay date/heure/GPS et déclencheur caméra",
      "Saisie numérique géante (48px) avec calcul instantané de consommation (ex: 2 126 kWh)",
      "Bandeau d'alerte anomalie automatique (-45% vs moyenne) et justification requise",
      "Boutons d'action fixés en bas : Annuler (gris) et Valider (bleu CIE, conditionné à la photo)"
    ],
    specs: {
      header: "Flèche retour + GPS Indicator 🟢 Position vérifiée",
      layout: "Section compteur, cadre photo 200px, display input 48px, alerte anomalie, CTA bas de page",
      colors: ["#0056A6 (Bleu CIE)", "#FFF3E0 (Alerte orange)", "#28A745 (Vert consommation)", "#E0E0E0 (Cadre photo)"]
    }
  },
  {
    id: 'offline',
    number: 4,
    title: "Mode Hors-Ligne",
    nameFr: "Mode Hors-Ligne & Sync",
    category: "Résilience Réseau",
    description: "Interface automatique quand la connexion 4G/Edge faiblit. Stockage local chiffré des photos et index, avec file d'attente visible.",
    keyFeatures: [
      "Bandeau orange persistant (#FF9800) avec icône 📡 barrée",
      "Compteur en direct des relevés stockés en local : '12 relevés en attente'",
      "Liste détaillée des relevés en attente : N° compteur, index saisi, miniature photo, horodatage",
      "Bouton 'Synchroniser maintenant' dynamique (devient vert et pulse à la reconnexion)",
      "Barre de transfert animée avec pourcentage de synchronisation vers les serveurs CIE"
    ],
    specs: {
      header: "Bandeau supérieur orange #FF9800 48px avec statut hors-ligne",
      layout: "File d'attente scrollable des relevés locaux avec miniatures photos et bouton sync flottant",
      colors: ["#FF9800 (Orange réseau)", "#28A745 (Vert sync)", "#F8F9FA (Fond carte)", "#6C757D (Statut attente)"]
    }
  },
  {
    id: 'incident',
    number: 5,
    title: "Signalement d'Incident",
    nameFr: "Signalement d'Incident & Fraude",
    category: "Contrôle & Sécurité",
    description: "Écran d'escalade immédiate lorsqu'un relevé standard est impossible ou lorsqu'une anomalie physique majeure est constatée.",
    keyFeatures: [
      "Header d'urgence avec titre 'Signaler un incident' et bouton fermer (X)",
      "5 Catégories rapides à grosses touches tactiles ergonomiques :",
      "🔒 Compteur inaccessible | 🔥 Compteur brûlé/défectueux",
      "⚡ Fraude suspectée (bouton d'alerte rouge prioritaire)",
      "🏠 Client absent | 🐕 Chien méchant / danger physique",
      "Champ de justification obligatoire avec microphone vocal ou texte",
      "Bouton 'Prendre une photo de preuve' obligatoire pour la fraude",
      "Bouton d'envoi différencié : Rouge vif pour Fraude, Bleu CIE pour incident technique"
    ],
    specs: {
      header: "Titre 18px bold avec bouton croix fermeture",
      layout: "5 boutons larges verticaux avec icônes distinctes, zone commentaire 80px, bouton photo et CTA",
      colors: ["#DC3545 (Rouge fraude)", "#0056A6 (Bleu CIE standard)", "#F8F9FA (Cartes)", "#333333 (Texte)"]
    }
  }
];

// ---------------------------------------------------------------------------
// PARTIE 2 : SPÉCIFICATIONS DASHBOARD WEB (DIRECTEUR CIE)
// ---------------------------------------------------------------------------
export const WEB_SCREENS: WebScreenSpec[] = [
  {
    id: 'dashboard',
    number: 1,
    title: "Dashboard Principal",
    nameFr: "Tableau de Bord & Supervision Temps Réel",
    description: "Le centre de commandement pour le Directeur Général et le Directeur du Relevé : vue cartographique temps réel d'Abidjan, KPIs du jour et flux d'activité en direct.",
    keyFeatures: [
      "Sidebar 240px Bleu marine CIE (#003D7A) avec logo CIE blanc et menu de navigation complet",
      "Header blanc 64px avec sélecteurs de date, zone (Cocody, Yopougon...) et notifications",
      "4 Cartes KPI géantes : Taux de relevé (85%), Anomalies (12), Agents actifs (450), Consommation (2.4M kWh)",
      "Carte géographique interactive d'Abidjan (60% largeur) avec 4 codes couleurs de marqueurs : Vert (en avance), Bleu (dans les temps), Orange (en retard), Rouge (anomalies)",
      "Popup d'inspection au survol d'un agent avec photo, nom, zone et cadence",
      "Panneau latéral droit (40%) : Flux d'activité en direct des relevés avec photo miniature et statut"
    ],
    specs: {
      sidebar: "Largeur 240px, Fond #003D7A, Liens actifs #0056A6",
      layout: "Header 64px, 4 KPI cards (120px haut), Grille 60% Carte / 40% Flux temps réel",
      primaryKpis: ["85% Relevés", "12 Anomalies", "450 Agents", "2.4M kWh"]
    }
  },
  {
    id: 'anomalies',
    number: 2,
    title: "Gestion des Anomalies",
    nameFr: "Centre de Validation & Anti-Fraude",
    description: "Tableau de bord décisionnel dédié au filtrage, à l'inspection visuelle et à la validation des fraudes et chutes suspectes d'index.",
    keyFeatures: [
      "Filtres rapides : Toutes | Baisse consommation | GPS incohérent | Photo floue",
      "Tri dynamique : Plus récent | Plus critique (perte financière estimée)",
      "Tableau interactif complet avec sélection multiple (bulk actions)",
      "Colonnes : Date/Heure, Agent, N° compteur, Client, Index ancien/nouveau, % Variation, Photo, Statut",
      "Modal de détail immersif : Grande photo compteur 400x300px avec zoom haute résolution",
      "Graphique d'historique de consommation sur 12 mois pour comparer avec la saisonnalité",
      "Actions de décision immédiates : ✓ Valider l'index (vert) | ✗ Rejeter (rouge) | 🔍 Déclencher une contre-visite terrain (orange)"
    ],
    specs: {
      sidebar: "Sidebar standard 240px, onglet Anomalies actif avec badge alerte rouge",
      layout: "Barre de filtres et recherche, tableau avec pagination, modal d'arbitrage 2 colonnes",
      primaryKpis: ["12 À valider", "8 Fraudes confirmées", "-45% Écart moyen", "15M FCFA Protégés"]
    }
  },
  {
    id: 'agent',
    number: 3,
    title: "Profil & Performance Agent",
    nameFr: "Fiche Agent & Évaluation Terrain",
    description: "Fiche individuelle détaillée de chaque releveur (ex: Kouadio Jean, AGT-0234) permettant de suivre sa productivité, la conformité de ses photos et son classement.",
    keyFeatures: [
      "En-tête agent avec photo de profil 80x80px, matricule AGT-0234, secteur Cocody 3 et badge '🟢 En service'",
      "Onglets de navigation : Vue d'ensemble | Historique | Performance | Tournées",
      "Section Performance du mois avec 3 visualisations :",
      "1. Barres : Compteurs relevés par jour (moyenne 120/j)",
      "2. Camembert : Répartition des statuts (94% Validés, 4% Anomalies, 2% Rejetés)",
      "3. Ligne : Temps moyen par compteur (tendance à la baisse vers 2.1 min)",
      "Classement national : 12ème sur 450 agents (Badge '🏆 Top 5%', productivité +15% vs moyenne)",
      "Tableau des dernières tournées avec durée et compteurs effectués"
    ],
    specs: {
      sidebar: "Sidebar standard, onglet Agents actif",
      layout: "Carte profil héros, grille de métriques, 3 widgets graphiques, tableau d'historique",
      primaryKpis: ["120 Compteurs/j", "2.1 min/relevé", "98.8% Conformité photo", "12ème Rang national"]
    }
  },
  {
    id: 'reports',
    number: 4,
    title: "Rapports & Analytics",
    nameFr: "Rapports Exécutifs & Business Intelligence",
    description: "Outil analytique pour la Direction Générale et financière : consolidation des tournées, analyse géographique des fraudes et export certifié.",
    keyFeatures: [
      "Sélecteur de granularité temporelle : Jour | Semaine | Mois | Trimestre | Personnalisé",
      "6 KPIs de synthèse financière et opérationnelle :",
      "Total compteurs (2.1M), Taux moyen (98.4%), Anomalies (1 420), Fraudes récupérées (1.25 Mrd FCFA), Temps moyen (2.4 min), Satisfaction client (92%)",
      "Graphique empilé : Volume de relevés par zone (Cocody, Yopougon, Abobo, Marcory, Plateau...)",
      "Heatmap cartographique : Densité des fraudes et compteurs défectueux sur le district d'Abidjan",
      "Tableau récapitulatif consolidé par direction régionale",
      "Bouton 'Générer le rapport' avec export instantané PDF, Excel, CSV et envoi automatique par email"
    ],
    specs: {
      sidebar: "Sidebar standard, onglet Rapports actif",
      layout: "Barre de filtres périodiques, grille 2x3 KPIs, bento-grid de graphiques, exportateur",
      primaryKpis: ["2.1M Relevés", "98.4% Taux global", "1.25 Mrd FCFA Fraudes", "92% Satisfaction"]
    }
  }
];

// ---------------------------------------------------------------------------
// PARTIE 3 : GUIDE COMPLET POUR CRÉER TES MAQUETTES DANS FIGMA
// ---------------------------------------------------------------------------
export const FIGMA_GUIDE_STEPS: FigmaStep[] = [
  {
    step: 1,
    title: "Installation & Configuration du Projet",
    badge: "Préparation",
    timeEstimate: "10 min",
    description: "Créer un espace de travail propre et professionnel sur Figma pour centraliser les maquettes Mobile et Web de la CIE.",
    substeps: [
      {
        label: "Création du compte et environnement",
        detail: "Rendez-vous sur figma.com, connectez-vous ou créez un compte gratuit. Privilégiez l'application Desktop Figma (Mac/Windows) pour une fluidité maximale et la prise en charge des raccourcis natifs."
      },
      {
        label: "Nouveau fichier de projet",
        detail: "Créez un nouveau Design File nommé exactement : 'CIE - App de Relevé & Dashboard Directeur'."
      },
      {
        label: "Organisation des pages dans Figma",
        detail: "Dans le panneau de gauche 'Pages', créez 4 pages distinctes : '📱 01. App Mobile Agent', '💻 02. Dashboard Web Directeur', '🎨 03. Design System & Tokens', '🚀 04. Prototypes & User Flow'."
      }
    ]
  },
  {
    step: 2,
    title: "Créer les Frames (Écrans Normalisés)",
    badge: "Artboards",
    timeEstimate: "15 min",
    description: "Poser les contraintes de dimensionnement adaptées aux appareils réels : smartphones durcis Android pour les agents et écrans HD/Retina pour la direction.",
    substeps: [
      {
        label: "Frames pour l'App Mobile Agent (5 Écrans)",
        detail: "Appuyez sur la touche 'F', sélectionnez 'Phone' dans le panneau droit. Choisissez 'iPhone 14 Pro' (393 x 852 px) ou 'Android Large' (360 x 800 px). Créez 5 frames nommées : 'Mobile / 01_Login', 'Mobile / 02_Tournees', 'Mobile / 03_Releve_Principal', 'Mobile / 04_Mode_Offline', 'Mobile / 05_Signalement_Incident'.",
        tip: "Pour simuler le smartphone durci de l'agent (type IP68), ajoutez un contour extérieur gris foncé de 16px avec coins arrondis de 32px."
      },
      {
        label: "Frames pour le Dashboard Web Directeur (4 Écrans)",
        detail: "Appuyez sur 'F', sélectionnez 'Desktop' : dimension recommandée 1440 x 900 px (ou MacBook Pro 14' 1512 x 982 px). Créez 4 frames : 'Web / 01_Dashboard_Principal', 'Web / 02_Gestion_Anomalies', 'Web / 03_Profil_Agent', 'Web / 04_Rapports_Analytics'."
      },
      {
        label: "Grille de mise en page (Layout Grid)",
        detail: "Mobile : Grille de 4 colonnes, marge 16px, gouttière 12px. Web : Grille de 12 colonnes, marge 32px, gouttière 24px."
      }
    ]
  },
  {
    step: 3,
    title: "Créer la Bibliothèque de Composants & Tokens",
    badge: "Design System",
    timeEstimate: "30 min",
    description: "Structurer des composants réutilisables (Master Components) avec variantes (Hover, Focus, Disabled) aux couleurs officielles de la CIE.",
    substeps: [
      {
        label: "Palette de couleurs officielles CIE",
        detail: "Primaire CIE : #0056A6 (Bleu officiel) | Dashboard Dark : #003D7A (Sidebar) | Bleu clair fond : #E3F2FD | Vert Succès : #28A745 | Orange Alerte : #FF9800 | Rouge Fraude : #DC3545 | Fond neutre : #F5F5F5 | Blanc : #FFFFFF."
      },
      {
        label: "Composant Boutons (Avec Auto Layout)",
        detail: "Créez 4 variantes de boutons : Primaire (fond #0056A6, texte blanc, hauteur 48px, radius 10px), Secondaire (fond blanc, bordure #0056A6 1px, texte #0056A6), Danger (fond #DC3545, texte blanc), Désactivé (fond #E0E0E0, texte #888888)."
      },
      {
        label: "Champs de saisie (Inputs)",
        detail: "Créez un composant Input avec variantes : Normal (bordure grise #E0E0E0), Focus (bordure bleue #0056A6 2px), Erreur (bordure rouge #DC3545), Avec icône (gauche: utilisateur/cadenas, droite: œil afficher mot de passe)."
      },
      {
        label: "Cartes KPI & Badges de statut",
        detail: "Cartes avec fond blanc, radius 12px, ombre portée légère (Drop Shadow : 0px 4px 12px rgba(0,0,0,0.06)). Badges pilules (hauteur 24px, radius 999px) pour 'En ligne', 'Validé', 'Anomalie', 'Hors-ligne'."
      }
    ]
  },
  {
    step: 4,
    title: "Utiliser les Plugins Figma Recommandés",
    badge: "Accélérateurs",
    timeEstimate: "15 min",
    description: "Installer les meilleurs plugins gratuits pour peupler vos maquettes avec des données réalistes ivoiriennes et des visuels de compteurs réels.",
    substeps: [
      {
        label: "Unsplash / Pexels",
        detail: "Pour insérer en un clic des photos de compteurs électriques réels, des compteurs à disque ou électroniques, ainsi que des photos d'avatars professionnels pour l'agent Kouadio Jean et le directeur.",
        tip: "Mots-clés de recherche : 'electric meter', 'utility meter', 'african technician', 'worker portrait'."
      },
      {
        label: "Iconify / Lucide Icons",
        detail: "Bibliothèque complète d'icônes vectorielles : flèches, GPS (MapPin), caméra, cadenas, éclair de fraude, flamme, cloche de notification et graphiques."
      },
      {
        label: "Content Reel",
        detail: "Pour générer automatiquement des matricules cohérents ('AGT-0234', 'MTR-7892-A'), des adresses réelles d'Abidjan (Cocody, Yopougon, Marcory) et des séries d'index numériques."
      },
      {
        label: "Autoflow",
        detail: "Trace instantanément des flèches directionnelles intelligentes entre vos écrans pour illustrer le parcours utilisateur (User Journey)."
      },
      {
        label: "Figma to Code (HTML/Tailwind)",
        detail: "Permet de vérifier la conformité du code Tailwind CSS généré pour les développeurs Flutter et React."
      }
    ]
  },
  {
    step: 5,
    title: "Créer les Prototypes Interactifs (User Flow)",
    badge: "Prototypage",
    timeEstimate: "25 min",
    description: "Relier les écrans entre eux pour que le directeur de la CIE puisse manipuler l'application comme si elle était déjà programmée.",
    substeps: [
      {
        label: "Basculer en mode Prototype",
        detail: "Cliquez sur l'onglet 'Prototype' dans la barre latérale droite de Figma. Des points d'ancrage bleus (+) apparaissent sur chaque élément cliquable."
      },
      {
        label: "Connecter le flux Mobile Agent",
        detail: "Liez le bouton 'Se connecter' (Écran 1) vers l'Accueil Tournées (Écran 2). Liez la carte 'Tournée Cocody' vers le Relevé de Compteur (Écran 3). Liez le bouton 'Prendre une photo' vers l'état 'Photo prise'. Liez le bouton 'Valider' vers le retour tournée avec incrémentation du score (46/120). Liez l'icône incident vers l'écran Signalement (Écran 5)."
      },
      {
        label: "Connecter le flux Dashboard Directeur",
        detail: "Liez le menu latéral vers chaque écran correspondant. Sur l'écran Anomalies (Écran 2), liez une ligne du tableau vers le modal d'inspection haute résolution pour tester la validation d'une fraude en un clic."
      },
      {
        label: "Transitions recommandées (Smart Animate)",
        detail: "Pour les modales et notifications : Transition 'Smart Animate' avec courbe 'Ease-out' 300ms. Pour le passage d'écran mobile : 'Slide in' de droite à gauche."
      }
    ]
  },
  {
    step: 6,
    title: "Exporter & Présenter à la Direction CIE",
    badge: "Livraison",
    timeEstimate: "10 min",
    description: "Préparer les formats de rendu pour la réunion officielle avec la Direction Générale de la CIE.",
    substeps: [
      {
        label: "Lien de prototype interactif en plein écran",
        detail: "Appuyez sur le bouton 'Play' (triangle en haut à droite). Cliquez sur 'Share Prototype' et configurez l'accès en 'Anyone with the link can view'. Partagez ce lien direct lors de votre soutenance.",
        tip: "Activez le cadre de simulation 'iPhone 14 Pro' dans les réglages de présentation pour un effet saisissant sur vidéoprojecteur."
      },
      {
        label: "Export PDF Haute Définition",
        detail: "Sélectionnez tous les frames, allez dans Fichier > Exporter les cadres en PDF. Ce document A4 paysage s'insère directement dans votre dossier de présentation."
      },
      {
        label: "Export PNG 2x / 3x pour le Pitch Deck",
        detail: "Exportez les écrans clés au format PNG @2x pour une netteté parfaite dans les diapositives de votre Pitch Deck (Slide 5 et Slide 6)."
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// JEU DE DONNÉES SIMULATEUR WEB & MOBILE (INTERACTIF)
// ---------------------------------------------------------------------------
export const SAMPLE_ANOMALIES = [
  {
    id: "ANO-2026-001",
    date: "Aujourd'hui, 14:22",
    agentName: "Kouadio Jean",
    agentMatricule: "AGT-0234",
    meterId: "MTR-7892-A",
    clientName: "Traoré Ibrahim",
    address: "Rue des Jardins, Cocody - Villa 42",
    oldIndex: 82150,
    newIndex: 84276,
    consumption: 2126,
    averageConsumption: 3900,
    variationPercent: -45.5,
    type: "Baisse anormale de consommation",
    severity: "critical",
    photoUrl: "https://images.unsplash.com/photo-1590496793907-49cc7c918326?w=600&auto=format&fit=crop&q=80",
    comment: "Le compteur présente des traces de descellement sur le boîtier inférieur. Risque de dérivation clandestine.",
    status: "En attente de validation",
    gpsStatus: "Conforme (lat 5.3421, lon -3.9876)"
  },
  {
    id: "ANO-2026-002",
    date: "Aujourd'hui, 13:45",
    agentName: "Bamba Sekou",
    agentMatricule: "AGT-0188",
    meterId: "MTR-3341-C",
    clientName: "Société Ivoirienne de Meubles",
    address: "Zone Industrielle Yopougon, Rue 12",
    oldIndex: 450200,
    newIndex: 450210,
    consumption: 10,
    averageConsumption: 8500,
    variationPercent: -99.8,
    type: "Compteur bloqué / Shunté",
    severity: "critical",
    photoUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    comment: "Index quasi identique au mois dernier alors que l'usine tourne à plein régime. Câble de dérivation visible.",
    status: "En attente de validation",
    gpsStatus: "Conforme"
  },
  {
    id: "ANO-2026-003",
    date: "Aujourd'hui, 11:15",
    agentName: "Koné Mariam",
    agentMatricule: "AGT-0312",
    meterId: "MTR-9081-F",
    clientName: "Résidence Les Flamboyants",
    address: "Plateau, Av. Chardy",
    oldIndex: 12040,
    newIndex: 11950,
    consumption: -90,
    averageConsumption: 450,
    variationPercent: -120.0,
    type: "Inversion d'index (Erreur ou Rembobinage)",
    severity: "high",
    photoUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
    comment: "Nouvel index inférieur à l'ancien. Soupçon de rembobinage manuel ou erreur de frappe sur le dernier chiffre.",
    status: "En attente de validation",
    gpsStatus: "Conforme"
  },
  {
    id: "ANO-2026-004",
    date: "Aujourd'hui, 09:30",
    agentName: "N'Guessan Yao",
    agentMatricule: "AGT-0095",
    meterId: "MTR-5542-K",
    clientName: "Clinique La Providence",
    address: "Marcory Zone 4C, Rue des Majorettes",
    oldIndex: 94100,
    newIndex: 112500,
    consumption: 18400,
    averageConsumption: 6200,
    variationPercent: +196.8,
    type: "Surconsommation brutale (+197%)",
    severity: "medium",
    photoUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
    comment: "Explosion de consommation suite à l'installation de nouveaux équipements lourds de climatisation.",
    status: "En attente de validation",
    gpsStatus: "Conforme"
  }
];

export const LIVE_ACTIVITY_STREAM = [
  { time: "14:22:07", meter: "MTR-7892-A", kwh: "2,126.0 kWh", status: "flagged", agent: "Kouadio Jean", zone: "Cocody" },
  { time: "14:21:40", meter: "MTR-4421-B", kwh: "385.4 kWh", status: "valid", agent: "Diallo Oumar", zone: "Yopougon" },
  { time: "14:20:12", meter: "MTR-1099-M", kwh: "1,240.0 kWh", status: "valid", agent: "Koffi Aya", zone: "Plateau" },
  { time: "14:18:55", meter: "MTR-3341-C", kwh: "10.0 kWh", status: "flagged", agent: "Bamba Sekou", zone: "Yopougon" },
  { time: "14:17:30", meter: "MTR-8812-D", kwh: "740.2 kWh", status: "valid", agent: "N'Dri Eric", zone: "Marcory" },
  { time: "14:15:04", meter: "MTR-6650-Z", kwh: "412.0 kWh", status: "valid", agent: "Kouadio Jean", zone: "Cocody" },
  { time: "14:12:48", meter: "MTR-2910-E", kwh: "1,980.5 kWh", status: "valid", agent: "Konan Guy", zone: "Treichville" }
];

export const AGENT_MAP_POINTS = [
  { id: 1, name: "Kouadio Jean", status: "warning", zone: "Cocody", lat: 5.352, lon: -3.985, progress: "45/120", code: "red" },
  { id: 2, name: "Diallo Oumar", status: "ahead", zone: "Yopougon", lat: 5.335, lon: -4.075, progress: "78/120", code: "green" },
  { id: 3, name: "Koffi Aya", status: "ontime", zone: "Plateau", lat: 5.325, lon: -4.015, progress: "52/120", code: "blue" },
  { id: 4, name: "Bamba Sekou", status: "warning", zone: "Abobo", lat: 5.415, lon: -4.020, progress: "32/120", code: "red" },
  { id: 5, name: "N'Dri Eric", status: "delayed", zone: "Marcory", lat: 5.305, lon: -3.990, progress: "28/120", code: "orange" },
  { id: 6, name: "Konan Guy", status: "ontime", zone: "Treichville", lat: 5.308, lon: -4.005, progress: "60/120", code: "blue" },
  { id: 7, name: "Fofana Moussa", status: "ahead", zone: "Koumassi", lat: 5.295, lon: -3.955, progress: "84/120", code: "green" }
];
