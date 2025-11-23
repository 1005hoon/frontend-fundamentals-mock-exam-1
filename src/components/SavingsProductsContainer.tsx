import { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';

import { SavingsProductItem } from './SavingsProductItem';
import { useEffect, useMemo, useState } from 'react';
import { fetchSavingsProducts } from 'data/savingsProducts';
import { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';

interface SavingsProductsContainerProps {
  selectedSavingsProductId: string | null;
  savingsGoal: SavingsGoal;
  onSelectProduct: (productId: string) => void;
}

export function SavingsProductsContainer({
  selectedSavingsProductId,
  savingsGoal,
  onSelectProduct,
}: SavingsProductsContainerProps) {
  const [savingsProducts, setSavingsProducts] = useState<SavingsProduct[]>([]);

  const availableSavingsProducts = useMemo(
    () => savingsProducts.filter(product => SavingsProduct.verifySavingsProductMatchesGoal(product, savingsGoal)),
    [savingsProducts, savingsGoal]
  );

  const handleClick = (id: string) => {
    onSelectProduct(id);
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
        onClick={() => handleClick(product.id)}
        isChecked={selectedSavingsProductId === product.id}
      />
    ))
  );
}
