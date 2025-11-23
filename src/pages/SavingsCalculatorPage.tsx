import { useState } from 'react';
import { Border, colors, ListHeader, ListRow, NavigationBar, Spacing } from 'tosslib';

import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import type { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';

import SavingsGoalForm from 'components/SavingsGoalForm';
import { SavingsCalculatorTabs } from 'components/SavingsCalculatorTabs';
import { SavingsProductsContainer } from 'components/SavingsProductsContainer';
import { CalculationResult } from 'components/CalculationResult';

export function SavingsCalculatorPage() {
  const [tab, setTab] = useState<'SAVING_PRODUCTS' | 'CALCULATION_RESULT'>('SAVING_PRODUCTS');
  const [selectedSavingsProduct, setSelectedSavingsProduct] = useState<SavingsProduct | null>(null);
  const [savingsGoal, setSavingsGoal] = useState<SavingsGoal>({
    targetAmount: 0,
    monthlyAmount: 0,
    termMonths: undefined,
  });

  return (
    <>
      <NavigationBar title="적금 계산기" />
      <Spacing size={16} />
      <SavingsGoalForm savingsGoal={savingsGoal} onChange={setSavingsGoal} />
      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />
      <SavingsCalculatorTabs tab={tab} onChange={setTab} />
      {tab === 'SAVING_PRODUCTS' ? (
        <SavingsProductsContainer
          savingsGoal={savingsGoal}
          selectedSavingsProduct={selectedSavingsProduct}
          onSelectProduct={setSelectedSavingsProduct}
        />
      ) : tab === 'CALCULATION_RESULT' ? (
        <CalculationResult savingsGoal={savingsGoal} selectedSavingsProduct={selectedSavingsProduct} />
      ) : null}

      <Spacing size={8} />

      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />

      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

      <ListRow
        contents={
          <ListRow.Texts
            type="3RowTypeA"
            top={'기본 정기적금'}
            topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
            middle={`연 이자율: 3.2%`}
            middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
            bottom={`100,000원 ~ 500,000원 | 12개월`}
            bottomProps={{ fontSize: 13, color: colors.grey600 }}
          />
        }
        onClick={() => {}}
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="3RowTypeA"
            top={'고급 정기적금'}
            topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
            middle={`연 이자율: 2.8%`}
            middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
            bottom={`50,000원 ~ 1,000,000원 | 24개월`}
            bottomProps={{ fontSize: 13, color: colors.grey600 }}
          />
        }
        onClick={() => {}}
      />

      <Spacing size={40} />
    </>
  );
}
