import { ListHeader, ListRow, Spacing } from 'tosslib';

import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';

import { SavingsProductItem } from './SavingsProductItem';

interface RecommendedSavingsProductsListProps {
  savingsProducts: SavingsProduct[];
  savingsGoal: SavingsGoal;
  selectedSavingsProduct: SavingsProduct | null;
  onSelectProduct: (product: SavingsProduct) => void;
}
export function RecommendedSavingsProductsList({
  savingsProducts,
  savingsGoal,
  selectedSavingsProduct,
  onSelectProduct,
}: RecommendedSavingsProductsListProps) {
  const recommendedProducts = SavingsProduct.getRecommendedProducts(savingsProducts, savingsGoal);

  const handleClick = (product: SavingsProduct) => {
    onSelectProduct(product);
  };

  return (
    <>
      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />
      {recommendedProducts.length === 0 ? (
        <NoAvailableProducts />
      ) : (
        recommendedProducts.map(product => (
          <SavingsProductItem
            key={product.id}
            savingsProduct={product}
            isChecked={selectedSavingsProduct?.id === product.id}
            onClick={() => handleClick(product)}
          />
        ))
      )}
    </>
  );
}

function NoAvailableProducts() {
  return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="적금 목표에 해당하는 상품이 없습니다." />} />;
}
