import z from 'zod';
import { verifySavingsProductMatchesGoal } from './verifySavingsProductMatchesGoal';
import { getRecommendedProducts } from './getRecommendedProducts';

const SavingsProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  annualRate: z.number(),
  minMonthlyAmount: z.number(),
  maxMonthlyAmount: z.number(),
  availableTerms: z.number(),
});

export type SavingsProduct = z.infer<typeof SavingsProductSchema>;
export const SavingsProduct = Object.assign(SavingsProductSchema, {
  getRecommendedProducts,
  verifySavingsProductMatchesGoal,
});
