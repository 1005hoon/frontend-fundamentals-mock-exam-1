import { Assets, colors, ListRow } from 'tosslib';

import type { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';

interface SavingsProductItemProps {
  savingsProduct: SavingsProduct;
  onClick: (id: string) => void;
  isChecked?: boolean;
}
export function SavingsProductItem({ savingsProduct, isChecked, onClick }: SavingsProductItemProps) {
  const { id, name, annualRate, minMonthlyAmount, maxMonthlyAmount, availableTerms } = savingsProduct;

  const handleClick = (id: string) => {
    onClick(id);
  };

  return (
    <ListRow
      contents={
        <ListRow.Texts
          type="3RowTypeA"
          top={name}
          topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
          middle={`연 이자율: ${annualRate}%`}
          middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
          bottom={`${minMonthlyAmount.toLocaleString()}원 ~ ${maxMonthlyAmount.toLocaleString()}원 | ${availableTerms}개월`}
          bottomProps={{ fontSize: 13, color: colors.grey600 }}
        />
      }
      right={isChecked ? <Assets.Icon name="icon-check-circle-green" /> : undefined}
      onClick={() => handleClick(id)}
    />
  );
}
