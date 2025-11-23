import type { CalculationResult } from 'domains/calculationResult/CalculationResult';
import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import type { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';

const COMMON_INTEREST_RATE = 0.05;

export function getCalculationResultFromSavingsProduct(
  savingsGoal: SavingsGoal,
  savingsProduct: SavingsProduct | null
): CalculationResult | null {
  if (!savingsProduct) return null;
  if (!savingsGoal.termMonths) return null;

  const { monthlyAmount, termMonths, targetAmount } = savingsGoal;
  const { annualRate } = savingsProduct;

  const parsedTermMonths = Number(termMonths);
  if (Number.isNaN(parsedTermMonths) || parsedTermMonths <= 0) return null;

  const expectedTotalAmount = monthlyAmount * parsedTermMonths * (1 + annualRate * COMMON_INTEREST_RATE);
  const differenceFromTarget = targetAmount - expectedTotalAmount;
  const recommendedMonthlyAmount =
    Math.round(targetAmount / (parsedTermMonths * (1 + annualRate * COMMON_INTEREST_RATE)) / 1000) * 1000;
  return {
    expectedTotalAmount,
    differenceFromTarget,
    recommendedMonthlyAmount,
  };
}
