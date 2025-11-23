import { useEffect, useState } from 'react';
import { Border, NavigationBar, Spacing } from 'tosslib';

import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import type { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';

import SavingsGoalForm from 'components/SavingsGoalForm';
import { SavingsCalculatorTabs } from 'components/SavingsCalculatorTabs';
import { SavingsProductsList } from 'components/SavingsProductsList';
import { CalculationResult } from 'components/CalculationResult';
import { RecommendedSavingsProductsList } from 'components/RecommendedSavingsProductsList';
import { fetchSavingsProducts } from 'data/savingsProducts';

export function SavingsCalculatorPage() {
  const [tab, setTab] = useState<'SAVING_PRODUCTS' | 'CALCULATION_RESULT'>('SAVING_PRODUCTS');
  const [selectedSavingsProduct, setSelectedSavingsProduct] = useState<SavingsProduct | null>(null);
  const [savingsProducts, setSavingsProducts] = useState<SavingsProduct[]>([]);
  const [savingsGoal, setSavingsGoal] = useState<SavingsGoal>({
    targetAmount: 0,
    monthlyAmount: 0,
    termMonths: undefined,
  });

  useEffect(() => {
    fetchSavingsProducts().then(setSavingsProducts);
  }, []);

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
        <SavingsProductsList
          savingsProducts={savingsProducts}
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

      <RecommendedSavingsProductsList
        savingsProducts={savingsProducts}
        savingsGoal={savingsGoal}
        selectedSavingsProduct={selectedSavingsProduct}
        onSelectProduct={setSelectedSavingsProduct}
      />

      <Spacing size={40} />
    </>
  );
}
