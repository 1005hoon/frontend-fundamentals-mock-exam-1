import { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';
import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';

import { SavingsProductItem } from './SavingsProductItem';
import { useEffect, useMemo, useState } from 'react';
import { fetchSavingsProducts } from 'data/savingsProducts';

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
    <p>조건에 맞는 적금 상품이 없습니다.</p>
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
