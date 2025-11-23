import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import type { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';

export function verifySavingsProductMatchesGoal(savingsProduct: SavingsProduct, targetGoal: SavingsGoal) {
  const isMonthlyAmountValid =
    savingsProduct.minMonthlyAmount <= targetGoal.monthlyAmount &&
    targetGoal.monthlyAmount <= savingsProduct.maxMonthlyAmount;
  const isTermValid = savingsProduct.availableTerms >= targetGoal.termMonths;

  return isMonthlyAmountValid && isTermValid;
}
