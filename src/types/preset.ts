export interface FormulaStep {
  id: string;
  leftOperand: string;
  operator: string;
  rightOperand: string;
  rightOperandType: 'factor' | 'value';
}

export interface PricingRule {
  id: string;
  name: string;
  formula: FormulaStep[];
  result: string;
}