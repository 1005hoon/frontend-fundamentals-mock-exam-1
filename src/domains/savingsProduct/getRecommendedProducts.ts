import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import { SavingsProduct } from './SavingsProduct';

export function getRecommendedProducts(savingsProducts: SavingsProduct[], savingsGoal: SavingsGoal): SavingsProduct[] {
  const matchingProducts = savingsProducts.filter(product =>
    SavingsProduct.verifySavingsProductMatchesGoal(product, savingsGoal)
  );

  matchingProducts.sort((a, b) => b.annualRate - a.annualRate);
  return matchingProducts.slice(0, 2);
}
