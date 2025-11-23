import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import type { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';

export function verifySavingsProductMatchesGoal(savingsProduct: SavingsProduct, targetGoal: SavingsGoal) {
  const isMonthlyAmountValid =
    savingsProduct.minMonthlyAmount <= targetGoal.monthlyAmount &&
    targetGoal.monthlyAmount <= savingsProduct.maxMonthlyAmount;

  if (targetGoal.termMonths === undefined) return false;

  const isTermValid = savingsProduct.availableTerms >= Number(targetGoal.termMonths);

  return isMonthlyAmountValid && isTermValid;
}
