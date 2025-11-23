import { useMemo } from 'react';
import { colors, ListRow } from 'tosslib';

import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import type { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';
import { CalculationResult as CalculationResultSchema } from 'domains/calculationResult/CalculationResult';

interface CalculationResultProps {
  savingsGoal: SavingsGoal;
  selectedSavingsProduct: SavingsProduct | null;
}
export function CalculationResult({ savingsGoal, selectedSavingsProduct }: CalculationResultProps) {
  const calculationResult = useMemo(
    () => CalculationResultSchema.getCalculationResultFromSavingsProduct(savingsGoal, selectedSavingsProduct),
    [savingsGoal, selectedSavingsProduct]
  );

  if (!calculationResult) return null;

  return (
    <>
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="예상 수익 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`1,000,000원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="목표 금액과의 차이"
            topProps={{ color: colors.grey600 }}
            bottom={`-500,000원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="추천 월 납입 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`100,000원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
    </>
  );
}
