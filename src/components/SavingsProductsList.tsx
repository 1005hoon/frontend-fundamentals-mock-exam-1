import { useMemo } from 'react';
import { ListRow } from 'tosslib';

import { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';
import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';

import { SavingsProductItem } from './SavingsProductItem';

interface SavingsProductsListProps {
  savingsProducts: SavingsProduct[];
  selectedSavingsProduct: SavingsProduct | null;
  savingsGoal: SavingsGoal;
  onSelectProduct: (product: SavingsProduct) => void;
}

export function SavingsProductsList({
  savingsProducts,
  selectedSavingsProduct,
  savingsGoal,
  onSelectProduct,
}: SavingsProductsListProps) {
  const availableSavingsProducts = useMemo(
    () => savingsProducts.filter(product => SavingsProduct.verifySavingsProductMatchesGoal(product, savingsGoal)),
    [savingsProducts, savingsGoal]
  );

  const handleClick = (product: SavingsProduct) => {
    onSelectProduct(product);
  };

  return availableSavingsProducts.length === 0 ? (
    <NoAvailableProducts />
  ) : (
    availableSavingsProducts.map(product => (
      <SavingsProductItem
        key={product.id}
        savingsProduct={product}
        onClick={() => handleClick(product)}
        isChecked={selectedSavingsProduct?.id === product.id}
      />
    ))
  );
}

function NoAvailableProducts() {
  return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="적금 목표에 해당하는 상품이 없습니다." />} />;
}
