# CAHIER DES CHARGES TECHNIQUE (VOLTASYNC CI)
**Projet :** Solution SaaS de Relevé de Compteurs & Détection de Fraudes pour la CIE  
**Auteur & Contact :** Adama F. Sheickner, Fondateur & CEO — Markkanich Global / VoltaSync CI (sheicknerl@markkanich.com | +225 0504496944 | markkanich.com)  
**Date :** Septembre 2026 — Version 1.2  

---

# PARTIE A : CAHIER DES CHARGES LOGICIEL (POUR DÉVELOPPEURS)

## 1. Contexte & Objectifs
- **Produit :** Plateforme SaaS comprenant une application mobile pour agents et un dashboard web pour managers et la DSI de la CIE.
- **Périmètre cible :** 500 à 800 agents releveurs, 2,5 millions de compteurs sur le territoire ivoirien.
- **Objectif principal :** Zéro fraude, zéro carnet papier, 100% de traçabilité spatio-temporelle et réduction du cycle de facturation de 21 jours à 48 heures.

## 2. Architecture Technique Recommandée
- **Mobile (Agents) :**
  - Framework : Flutter (Dart) pour compilation native Android à 60 FPS.
  - Base de données locale : SQLite (SQLCipher) pour chiffrement au repos + Hive pour le cache rapide.
  - Synchronisation Offline-first : File d'attente FIFO persistante avec reprise automatique dès détection du réseau 3G/4G ou Wi-Fi.
- **Web (Superviseurs & DSI) :**
  - Framework : React 18+ avec TypeScript et Tailwind CSS.
  - Cartographie temps réel : Leaflet.js / Mapbox GL avec clusters pour les points de livraison.
  - Visualisations : Recharts pour les graphiques de suivi de consommation et de fraude.
- **Backend & API :**
  - Runtime : Node.js (NestJS) ou Python (FastAPI).
  - API : RESTful JSON + WebSocket pour le suivi télémétrique en temps réel.
  - Authentification : JWT avec Refresh Tokens, 2FA obligatoire pour les comptes superviseurs et DSI.
  - Stockage fichiers : AWS S3 compatible (MinIO) avec chiffrement serveur (SSE-S3) pour les photos de compteurs.
- **Base de données :**
  - Base relationnelle : PostgreSQL 15+ avec extension PostGIS pour les requêtes géographiques (geofencing).
  - Cache & Files de messages : Redis pour la gestion des sessions et la file de synchronisation.
  - Recherche : Elasticsearch pour la recherche instantanée parmi les 2,5 millions de contrats et l'audit trail.
- **Infrastructure & Conformité :**
  - Hébergement : Cloud souverain en Côte d'Ivoire ou région Afrique conforme aux réglementations de l'ARTCI.
  - Monitoring : Sentry pour les crashs applicatifs et Prometheus/Grafana pour les métriques d'infrastructure.

## 3. Modules Applicatifs
### 3.1 Application Mobile (Flutter)
1. **Module Authentification & Sécurité :** Login unique, 2FA, verrouillage PIN après 3 minutes d'inactivité, biométrie.
2. **Module Tournées :** Téléchargement offline de la liste des compteurs du jour, itinéraire GPS optimisé.
3. **Module Relevé en 5 étapes :**
   - Scan du QR code / code-barres du compteur.
   - Contrôle GPS automatique (blocage si l'agent est à plus de 10m du compteur).
   - Saisie de l'index avec calcul instantané de la consommation (alerte si ±50% vs historique).
   - Photo obligatoire haute définition avec incrustation indélébile (date, heure, GPS, ID agent).
   - Validation et archivage chiffré dans la base SQLite locale.
4. **Module Signalement Incidents :** Boutons dédiés pour "Compteur inaccessible", "Compteur brûlé", "Fraude / Branchement direct suspecté".
5. **Moteur Offline-First :** Sauvegarde locale intégrale et synchronisation d'arrière-plan sans friction.
6. **Notifications Push :** Réattribution de tournées et alertes urgentes du superviseur.

### 3.2 Dashboard Web Manager (React)
1. **Supervision cartographique :** Carte interactive des agents en direct avec code couleur d'avancement.
2. **Console de validation des anomalies :** File d'attente priorisée, comparaison avec l'historique sur 12 mois, zoom x4 sur la photo du cadran, validation/rejet en 1 clic.
3. **Gestion des compteurs & abonnés :** Répertoire complet, import/export CSV, géolocalisation certifiée.
4. **Gestion des tournées & équipes :** Découpage polygonal des secteurs, KPI par agent (taux de conformité photo, cadence horaire).
5. **Analytics & Rapports exécutifs :** Taux de relevé global, kWh réintégrés, export PDF et connecteur batch pour progiciel de facturation (SAP).
6. **Paramétrage système :** Ajustement du rayon GPS (défaut : 10m) et des seuils d'alerte de sur/sous-consommation.

## 4. Principaux Endpoints REST API
- `GET /api/v1/meters` : Liste paginée des compteurs d'une agence.
- `GET /api/v1/meters/:id/history` : Historique des 24 derniers relevés et photos d'un compteur.
- `POST /api/v1/readings` : Soumission d'un nouveau relevé avec photo, index et métadonnées GPS certifiées.
- `GET /api/v1/anomalies` : Liste des relevés suspects nécessitant une validation manuelle.
- `POST /api/v1/anomalies/:id/validate` : Validation ou rejet d'un relevé suspect par un superviseur.
- `GET /api/v1/agents/telemetry` : Flux de positions en direct pour la carte de supervision.
- `POST /api/v1/billing/sync` : Exportation batch sécurisée vers le progiciel de facturation CIE.

## 5. Exigences Non-Fonctionnelles
- Démarrage à froid de l'application mobile < 3 secondes.
- Chargement d'une tournée de 200 compteurs < 1 seconde.
- Disponibilité de la plateforme : 99,5% garantie (SLA).
- Scalabilité : 1 000 agents simultanés et jusqu'à 10 000 relevés/heure en période de pointe.

## 6. Budget de Développement Estimé
- **Option Standard (Équipe complète 6 mois) :** 40 800 000 FCFA
- **Option Optimisée (Core Team 3-4 mois) :** ~25 000 000 FCFA

---

# PARTIE B : HARDWARE SPECIFICATION (FOR CHINESE MANUFACTURERS)

**REQUEST FOR QUOTATION (RFQ) - RUGGED SMARTPHONES**  
**Company:** Markkanich Global / VoltaSync CI  
**Contact:** Adama F. Sheickner, Founder & CEO  
**Email:** sheicknerl@markkanich.com | **Phone/WhatsApp:** +225 0504496944 | **Web:** markkanich.com  
**Destination:** Abidjan, Côte d'Ivoire (West Africa)  
**Initial Order Quantity:** 500 units  
**Annual Forecast:** 2,000 - 3,000 units  
**Target FOB Price (500 units):** $90 - $110 USD / unit (FOB Shenzhen)  

### Key Technical Specifications
1. **Durability:** IP68 certified (water & dust immersion) + MIL-STD-810G/H (1.5m drop resistance on concrete) + Corning Gorilla Glass.
2. **Battery:** 8,000 mAh minimum (10,000 mAh preferred), 18W+ fast charging, CE / RoHS / UN38.3 certified cells.
3. **GNSS Geolocation:** Dual-Frequency GNSS (L1 + L5 bands), GPS + GLONASS + Galileo + BeiDou, anti-spoofing hardware support.
4. **Processor & Memory:** Octa-Core 2.0GHz+ (MediaTek Helio G85/G99 or Snapdragon 680), 4GB to 6GB RAM, 64GB to 128GB ROM + MicroSD slot.
5. **Cellular:** 4G LTE Dual SIM Dual Standby with African bands (B1/B3/B7/B8/B20/B28/B38/B40/B41) for Orange CI & MTN CI.
6. **Camera:** 16MP to 48MP rear camera with fast autofocus (PDAF), macro focus and high-intensity dual LED torch flash.
7. **Display:** 5.5" to 6.3" IPS screen, 450+ nits outdoor sunlight readability, wet-finger & glove mode enabled.
8. **Enterprise Software:** Clean Android 12/13, Android Enterprise Recommended / Kiosk Mode MDM support, custom boot logo.
9. **Warranty & Spare Parts:** 24 months manufacturer warranty + 5% free spare parts buffer included in initial shipment.
