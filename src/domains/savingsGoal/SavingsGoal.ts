import { getCalculationResultFromSavingsProduct } from 'domains/calculationResult/getCalculationResultFromSavingsProduct';
import z from 'zod';

const SavingsGoalSchema = z.object({
  targetAmount: z.number(),
  monthlyAmount: z.number(),
  termMonths: z.number(),
});

export type SavingsGoal = z.infer<typeof SavingsGoalSchema>;
export const SavingsGoal = Object.assign(SavingsGoalSchema, {
  getCalculationResultFromSavingsProduct,
});
