import { getCalculationResultFromSavingsProduct } from 'domains/calculationResult/getCalculationResultFromSavingsProduct';
import z from 'zod';

export const SavingsGoalTermMonths = z.enum(['6', '12', '24']);
export type SavingsGoalTermMonths = z.infer<typeof SavingsGoalTermMonths>;

const SavingsGoalSchema = z.object({
  targetAmount: z.number(),
  monthlyAmount: z.number(),
  termMonths: SavingsGoalTermMonths.optional(),
});

export type SavingsGoal = z.infer<typeof SavingsGoalSchema>;
export const SavingsGoal = Object.assign(SavingsGoalSchema, {
  MIN_TARGET_AMOUNT: 0,
  MIN_MONTLY_AMOUNT: 0,

  getCalculationResultFromSavingsProduct,
});
