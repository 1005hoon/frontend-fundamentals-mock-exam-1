import z from 'zod';

const CalculationResultSchema = z.object({
  expectedTotalAmount: z.number(),
  differenceFromTarget: z.number(),
  recommendedMonthlyAmount: z.number(),
});

export type CalculationResult = z.infer<typeof CalculationResultSchema>;
