import { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import { TextInputField } from './TextInputField';

interface SavingsGoalTargetAmountFieldProps {
  value: number;
  onChange: (value: number) => void;
}
export function SavingsGoalTargetAmountField({ value, onChange }: SavingsGoalTargetAmountFieldProps) {
  const handleChange = (newValue: number) => {
    if (newValue < SavingsGoal.MIN_TARGET_AMOUNT) {
      alert(`목표 금액은 ${SavingsGoal.MIN_TARGET_AMOUNT}원 이상이어야 합니다.`);
      return;
    }

    onChange(newValue);
  };

  return (
    <TextInputField
      name="목표 금액"
      placeholder="목표 금액을 입력하세요"
      suffix="원"
      value={value}
      onChange={handleChange}
    />
  );
}
