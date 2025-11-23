import { useMemo } from 'react';
import { ListRow } from 'tosslib';

import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import type { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';
import { CalculationResult as CalculationResultSchema } from 'domains/calculationResult/CalculationResult';
import { CalculationResultItem } from './CalculationResultItem';

interface CalculationResultProps {
  savingsGoal: SavingsGoal;
  selectedSavingsProduct: SavingsProduct | null;
}
export function CalculationResult({ savingsGoal, selectedSavingsProduct }: CalculationResultProps) {
  const calculationResult = useMemo(
    () => CalculationResultSchema.getCalculationResultFromSavingsProduct(savingsGoal, selectedSavingsProduct),
    [savingsGoal, selectedSavingsProduct]
  );

  if (!selectedSavingsProduct) return <NoSavingsGoalSelected />;
  if (!calculationResult) return null;

  return (
    <>
      <CalculationResultItem
        title="예상 수익 금액"
        description={`${calculationResult.expectedTotalAmount.toLocaleString()}원`}
      />
      <CalculationResultItem
        title="목표 금액과의 차이"
        description={`${calculationResult.differenceFromTarget.toLocaleString()}원`}
      />
      <CalculationResultItem
        title="추천 월 납입 금액"
        description={`${calculationResult.recommendedMonthlyAmount.toLocaleString()}원`}
      />
    </>
  );
}

function NoSavingsGoalSelected() {
  return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} />;
}
