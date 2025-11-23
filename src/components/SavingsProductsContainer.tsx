import { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';
import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';

import { SavingsProductItem } from './SavingsProductItem';
import { useEffect, useMemo, useState } from 'react';
import { fetchSavingsProducts } from 'data/savingsProducts';
import { ListRow } from 'tosslib';

interface SavingsProductsContainerProps {
  selectedSavingsProduct: SavingsProduct | null;
  savingsGoal: SavingsGoal;
  onSelectProduct: (product: SavingsProduct) => void;
}

export function SavingsProductsContainer({
  selectedSavingsProduct,
  savingsGoal,
  onSelectProduct,
}: SavingsProductsContainerProps) {
  const [savingsProducts, setSavingsProducts] = useState<SavingsProduct[]>([]);

  const availableSavingsProducts = useMemo(
    () => savingsProducts.filter(product => SavingsProduct.verifySavingsProductMatchesGoal(product, savingsGoal)),
    [savingsProducts, savingsGoal]
  );

  const handleClick = (product: SavingsProduct) => {
    onSelectProduct(product);
  };

  useEffect(() => {
    fetchSavingsProducts().then(setSavingsProducts);
  }, []);

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
