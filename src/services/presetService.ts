import { PricingRule } from '../types/preset';

const defaultRules: PricingRule[] = [
  {
    id: '1',
    name: 'Base Cost Calculation',
    formula: [
      {
        id: crypto.randomUUID(),
        leftOperand: 'base_price',
        operator: '*',
        rightOperand: 'material_markup',
        rightOperandType: 'factor',
      },
    ],
    result: 'unit_cost',
  },
  {
    id: '2',
    name: 'Shipping Cost Calculation',
    formula: [
      {
        id: crypto.randomUUID(),
        leftOperand: 'width',
        operator: '*',
        rightOperand: 'height',
        rightOperandType: 'factor',
      },
      {
        id: crypto.randomUUID(),
        leftOperand: 'shipping_rate',
        operator: '*',
        rightOperand: 'depth',
        rightOperandType: 'factor',
      },
    ],
    result: 'shipping_cost',
  },
];

export function getPricingRules(): PricingRule[] {
  const stored = localStorage.getItem('pricingRules');
  if (!stored) {
    localStorage.setItem('pricingRules', JSON.stringify(defaultRules));
    return defaultRules;
  }
  return JSON.parse(stored);
}

export function savePricingRules(rules: PricingRule[]): void {
  localStorage.setItem('pricingRules', JSON.stringify(rules));
}