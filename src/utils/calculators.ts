/**
 * Flexport Cost Calculators
 * Configurable rate tables for estimating fulfillment, receiving, and storage costs
 */

// ============================================================================
// RATE TABLES (Configurable - would come from backend in production)
// ============================================================================

export const RATE_TABLES = {
  // Fulfillment rates
  fulfillment: {
    pickAndPack: {
      simple: 3.5, // Standard items
      medium: 4.25, // Multiple items or kitting
      complex: 5.0 // Fragile, oversized, or special handling
    },
    storage: {
      perCubicFoot: 0.75, // Per cubic foot per month
      firstMonthFree: true, // First 30 days included
      longTermThreshold: 180, // Days before long-term rates apply
      longTermRate: 15.0 // Per cubic foot after 180 days
    }
  },

  // Receiving rates
  receiving: {
    palletized: {
      standard: 25, // Standard pallet, labeled
      unlabeled: 50, // Requires warehouse labeling
      oversized: 75 // Oversized or non-standard
    },
    floorLoaded: {
      standard: 100, // Per container
      complex: 150 // Requires sorting or special handling
    },
    containerized: {
      standard: 200, // 20ft container
      large: 350 // 40ft container
    },
    parcel: {
      perUnit: 2.5 // Small parcel receiving
    }
  },

  // Additional fees
  additional: {
    returns: 2.5, // Per unit returned
    specialHandling: 5.0, // Fragile, hazmat, etc.
    unscheduledDelivery: 150, // No appointment scheduled
    missingLabels: 50 // Per shipment without labels
  },

  // Minimum commitments
  minimums: {
    monthlySpend: 2500, // Minimum monthly spend
    storageMinimum: 100 // Minimum storage charge
  }
};

// ============================================================================
// FULFILLMENT SPEND ESTIMATOR
// ============================================================================

export interface FulfillmentEstimateInput {
  dailyOrders: number;
  skuCount: number;
  storageNeeds: 'small' | 'medium' | 'large' | 'enterprise';
  channels: string[];
  inboundMethod: string;
  averageItemsPerOrder?: number;
  averageWeight?: number;
  hasFragileItems?: boolean;
}

export interface FulfillmentEstimateResult {
  estimatedMonthlySpend: number;
  breakdown: {
    pickAndPack: number;
    storage: number;
    receiving: number;
    additional: number;
  };
  confidence: 'high' | 'medium' | 'low';
  meetsMinimum: boolean;
  minimumSpend: number;
  assumptions: string[];
}

export function calculateFulfillmentEstimate(
input: FulfillmentEstimateInput)
: FulfillmentEstimateResult {
  const monthlyOrders = input.dailyOrders * 30;
  const itemsPerOrder = input.averageItemsPerOrder || 1.5;

  // Pick & Pack calculation
  let pickAndPackRate = RATE_TABLES.fulfillment.pickAndPack.simple;
  if (itemsPerOrder > 3 || input.hasFragileItems) {
    pickAndPackRate = RATE_TABLES.fulfillment.pickAndPack.complex;
  } else if (itemsPerOrder > 1.5) {
    pickAndPackRate = RATE_TABLES.fulfillment.pickAndPack.medium;
  }
  const pickAndPackCost = monthlyOrders * pickAndPackRate;

  // Storage calculation
  const storageCubicFeet = {
    small: 50,
    medium: 200,
    large: 500,
    enterprise: 1000
  }[input.storageNeeds];
  const storageCost =
  storageCubicFeet * RATE_TABLES.fulfillment.storage.perCubicFoot;

  // Receiving calculation (estimate 4 inbound shipments per month)
  const inboundShipmentsPerMonth = 4;
  let receivingCostPerShipment = RATE_TABLES.receiving.palletized.standard;

  if (input.inboundMethod.includes('Floor loaded')) {
    receivingCostPerShipment = RATE_TABLES.receiving.floorLoaded.standard;
  } else if (input.inboundMethod.includes('Containerized')) {
    receivingCostPerShipment = RATE_TABLES.receiving.containerized.standard;
  } else if (input.inboundMethod.includes('Parcel')) {
    receivingCostPerShipment = RATE_TABLES.receiving.parcel.perUnit * 50; // Assume 50 units
  }
  const receivingCost = inboundShipmentsPerMonth * receivingCostPerShipment;

  // Additional fees (estimate 5% of orders have special handling)
  const additionalCost =
  monthlyOrders * 0.05 * RATE_TABLES.additional.specialHandling;

  const totalEstimate =
  pickAndPackCost + storageCost + receivingCost + additionalCost;

  // Confidence scoring
  let confidence: 'high' | 'medium' | 'low' = 'low';
  if (
  input.channels.length > 0 &&
  input.inboundMethod &&
  input.averageItemsPerOrder)
  {
    confidence = 'high';
  } else if (input.dailyOrders && input.skuCount && input.inboundMethod) {
    confidence = 'medium';
  }

  // Assumptions
  const assumptions: string[] = [
  `Based on ${monthlyOrders} orders per month`,
  `Average ${itemsPerOrder.toFixed(1)} items per order`,
  `${storageCubicFeet} cubic feet of storage`,
  `${inboundShipmentsPerMonth} inbound shipments per month`];


  return {
    estimatedMonthlySpend: Math.round(totalEstimate),
    breakdown: {
      pickAndPack: Math.round(pickAndPackCost),
      storage: Math.round(storageCost),
      receiving: Math.round(receivingCost),
      additional: Math.round(additionalCost)
    },
    confidence,
    meetsMinimum: totalEstimate >= RATE_TABLES.minimums.monthlySpend,
    minimumSpend: RATE_TABLES.minimums.monthlySpend,
    assumptions
  };
}

// ============================================================================
// RECEIVING COST ESTIMATOR
// ============================================================================

export interface ReceivingEstimateInput {
  method: 'palletized' | 'floor-loaded' | 'containerized' | 'parcel';
  quantity: number;
  hasLabels: boolean;
  hasAppointment: boolean;
  isOversized?: boolean;
  containerSize?: '20ft' | '40ft';
}

export interface ReceivingEstimateResult {
  baseCost: number;
  labelingFee: number;
  appointmentFee: number;
  oversizedFee: number;
  totalCost: number;
  warnings: string[];
}

export function calculateReceivingCost(
input: ReceivingEstimateInput)
: ReceivingEstimateResult {
  let baseCost = 0;
  const warnings: string[] = [];

  // Base cost by method
  switch (input.method) {
    case 'palletized':
      baseCost = input.isOversized ?
      RATE_TABLES.receiving.palletized.oversized :
      RATE_TABLES.receiving.palletized.standard;
      baseCost *= input.quantity;
      break;
    case 'floor-loaded':
      baseCost = RATE_TABLES.receiving.floorLoaded.standard * input.quantity;
      warnings.push('Floor-loaded shipments require 48-hour advance notice');
      break;
    case 'containerized':
      const rate =
      input.containerSize === '40ft' ?
      RATE_TABLES.receiving.containerized.large :
      RATE_TABLES.receiving.containerized.standard;
      baseCost = rate * input.quantity;
      warnings.push('Container receiving requires scheduled appointment');
      break;
    case 'parcel':
      baseCost = RATE_TABLES.receiving.parcel.perUnit * input.quantity;
      break;
  }

  // Labeling fee
  const labelingFee = !input.hasLabels ?
  RATE_TABLES.additional.missingLabels * input.quantity :
  0;
  if (!input.hasLabels) {
    warnings.push(
      'Unlabeled shipments incur additional warehouse labeling fees'
    );
  }

  // Appointment fee
  const appointmentFee = !input.hasAppointment ?
  RATE_TABLES.additional.unscheduledDelivery :
  0;
  if (!input.hasAppointment) {
    warnings.push('Unscheduled deliveries incur $150 surcharge');
  }

  // Oversized fee
  const oversizedFee = input.isOversized ?
  (RATE_TABLES.receiving.palletized.oversized -
  RATE_TABLES.receiving.palletized.standard) *
  input.quantity :
  0;

  return {
    baseCost,
    labelingFee,
    appointmentFee,
    oversizedFee,
    totalCost: baseCost + labelingFee + appointmentFee + oversizedFee,
    warnings
  };
}

// ============================================================================
// STORAGE COST ESTIMATOR
// ============================================================================

export interface StorageEstimateInput {
  cubicFeet: number;
  daysInStorage: number;
}

export interface StorageEstimateResult {
  monthlyCost: number;
  isLongTerm: boolean;
  longTermSurcharge: number;
  totalCost: number;
  warning?: string;
}

export function calculateStorageCost(
input: StorageEstimateInput)
: StorageEstimateResult {
  const isLongTerm =
  input.daysInStorage > RATE_TABLES.fulfillment.storage.longTermThreshold;

  const monthlyCost =
  input.cubicFeet * RATE_TABLES.fulfillment.storage.perCubicFoot;
  const longTermSurcharge = isLongTerm ?
  input.cubicFeet * RATE_TABLES.fulfillment.storage.longTermRate :
  0;

  let warning: string | undefined;
  if (isLongTerm) {
    warning = `Inventory over ${RATE_TABLES.fulfillment.storage.longTermThreshold} days incurs long-term storage fees`;
  }

  return {
    monthlyCost,
    isLongTerm,
    longTermSurcharge,
    totalCost: monthlyCost + longTermSurcharge,
    warning
  };
}

// ============================================================================
// RETURNS COST ESTIMATOR
// ============================================================================

export interface ReturnsEstimateInput {
  monthlyReturns: number;
  requiresInspection: boolean;
}

export interface ReturnsEstimateResult {
  processingCost: number;
  inspectionCost: number;
  totalCost: number;
}

export function calculateReturnsCost(
input: ReturnsEstimateInput)
: ReturnsEstimateResult {
  const processingCost = input.monthlyReturns * RATE_TABLES.additional.returns;
  const inspectionCost = input.requiresInspection ?
  input.monthlyReturns * RATE_TABLES.additional.specialHandling :
  0;

  return {
    processingCost,
    inspectionCost,
    totalCost: processingCost + inspectionCost
  };
}