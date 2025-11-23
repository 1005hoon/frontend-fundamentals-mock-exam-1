import { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import { TextInputField } from './TextInputField';

interface SavingsGoalMonthlyAmountFieldProps {
  value: number;
  onChange: (value: number) => void;
}
export function SavingsGoalMonthlyAmountField({ value, onChange }: SavingsGoalMonthlyAmountFieldProps) {
  const handleChange = (newValue: number) => {
    if (newValue < SavingsGoal.MIN_MONTLY_AMOUNT) {
      alert(`월 납입액은 최소 ${SavingsGoal.MIN_MONTLY_AMOUNT}원 이상이어야 합니다.`);
      return;
    }

    onChange(newValue);
  };

  return (
    <TextInputField
      name="월 납입액"
      placeholder="희망 월 납입액을 입력하세요"
      suffix="원"
      value={value}
      onChange={handleChange}
    />
  );
}
