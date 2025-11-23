import { isHttpError, http } from 'tosslib';

import type { SavingsProduct } from 'domains/savingsProduct/SavingsProduct';

export async function fetchSavingsProducts(): Promise<SavingsProduct[]> {
  try {
    const response = await http.get<SavingsProduct[]>('/api/savings-products');
    return response;
  } catch (e) {
    if (isHttpError(e)) {
      throw new Error(`적금 상품을 불러오는데 실패했습니다: ${e.message}`);
    }
    throw new Error('적금 상품을 불러오는데 실패했습니다.');
  }
}
