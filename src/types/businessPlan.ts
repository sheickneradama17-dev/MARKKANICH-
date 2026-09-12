export interface RoiItem {
  id: string;
  gain: string;
  estimation: string;
  estimationValue: number; // in FCFA
  comment: string;
  iconName: string;
  category: 'direct' | 'operational' | 'productivity';
}

export interface PricingPlan {
  id: string;
  name: string;
  recommended?: boolean;
  pricePerAgentMonth: number;
  priceFormatted: string;
  commitment?: string;
  features: string[];
  type: 'saas_only' | 'saas_hardware';
  badge?: string;
}

export interface UpsellService {
  id: string;
  service: string;
  price: string;
  priceValue: number;
  unit: string;
  description: string;
}

export interface DeploymentHypothesis {
  year: number;
  label: string;
  agents: number;
  scope: string;
  averagePlanPrice: number;
  mrr: number;
  arr: number;
  additionalRevenue: {
    apiIntegration: number;
    training: number;
    sms: number;
    total: number;
  };
  totalRevenue: number;
}

export interface StartupCostItem {
  id: string;
  poste: string;
  montant: number;
  montantFormatted: string;
  notes: string;
  category: 'tech' | 'hardware' | 'infra' | 'commercial' | 'legal' | 'cash';
}

export interface MonthlyCostItem {
  id: string;
  poste: string;
  montantMensuel: number;
  montantFormatted: string;
  notes?: string;
}

export interface ProfitabilityYear {
  year: number;
  agents: number;
  revenue: number;
  costs: number;
  netMargin: number;
  marginPercent: number;
  status: 'investment' | 'scale' | 'profitable';
  notes: string;
}

export interface DeploymentPhase {
  phase: number;
  title: string;
  timeframe: string;
  description: string;
  milestones: string[];
  color: string;
}

export interface RiskItem {
  id: string;
  risk: string;
  probability: 'Faible' | 'Moyenne' | 'Haute';
  impact: 'Faible' | 'Moyen' | 'Élevé';
  mitigation: string;
  category: 'social' | 'financial' | 'technical' | 'market' | 'governance';
}

export interface FinancingOption {
  optionNumber: number;
  title: string;
  type: string;
  amount?: string;
  dilution?: string;
  advantage: string;
  disadvantage?: string;
  feasibilityOrTarget: string;
  argument?: string;
  icon: string;
}

export interface ActionStep {
  id: string;
  timeline: 'Cette semaine' | 'Dans 2 semaines' | 'Dans 1 mois' | 'Dans 3 mois';
  tasks: {
    id: string;
    text: string;
    completed: boolean;
    priority: 'Haute' | 'Moyenne' | 'Normale';
  }[];
}

export interface KeyAdvice {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface CieDeciderFaqItem {
  id: string;
  category: 'interoperability' | 'security' | 'tco';
  categoryLabel: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  proofPoints: string[];
  keyMetric?: string;
  badge: string;
}
