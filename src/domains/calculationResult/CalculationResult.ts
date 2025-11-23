import z from 'zod';
import { getCalculationResultFromSavingsProduct } from './getCalculationResultFromSavingsProduct';

const CalculationResultSchema = z.object({
  expectedTotalAmount: z.number(),
  differenceFromTarget: z.number(),
  recommendedMonthlyAmount: z.number(),
});

export type CalculationResult = z.infer<typeof CalculationResultSchema>;
export const CalculationResult = Object.assign(CalculationResultSchema, {
  getCalculationResultFromSavingsProduct,
});
