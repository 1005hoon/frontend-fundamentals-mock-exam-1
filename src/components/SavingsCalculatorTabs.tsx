import { Tab } from 'tosslib';
import z from 'zod';

const SavingsCalculatorTab = z.enum(['SAVING_PRODUCTS', 'CALCULATION_RESULT']);
export type SavingsCalculatorTab = z.infer<typeof SavingsCalculatorTab>;

interface SavingsCalculatorTabsProps {
  tab: SavingsCalculatorTab;
  onChange: (tab: SavingsCalculatorTab) => void;
}

const savingsCalculatorTabMap: Record<SavingsCalculatorTab, string> = {
  SAVING_PRODUCTS: '적금 상품',
  CALCULATION_RESULT: '계산 결과',
};

export function SavingsCalculatorTabs({ tab, onChange }: SavingsCalculatorTabsProps) {
  const isTabSelected = (value: SavingsCalculatorTab) => tab === value;

  const handleTabChange = (value: string) => {
    const result = SavingsCalculatorTab.safeParse(value);
    if (result.success) {
      onChange(result.data);
    }
  };

  return (
    <Tab onChange={handleTabChange}>
      <Tab.Item value="SAVING_PRODUCTS" selected={isTabSelected('SAVING_PRODUCTS')}>
        {savingsCalculatorTabMap.SAVING_PRODUCTS}
      </Tab.Item>
      <Tab.Item value="CALCULATION_RESULT" selected={isTabSelected('CALCULATION_RESULT')}>
        {savingsCalculatorTabMap.CALCULATION_RESULT}
      </Tab.Item>
    </Tab>
  );
}
