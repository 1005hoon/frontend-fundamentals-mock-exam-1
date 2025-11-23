import { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import { TextField } from 'tosslib';

interface SavingsGoalTargetAmountFieldProps {
  value: number;
  onChange: (value: number) => void;
}
export function SavingsGoalTargetAmountField({ value, onChange }: SavingsGoalTargetAmountFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTargetAmount = parseInt(e.target.value, 10) || 0;

    if (newTargetAmount < SavingsGoal.MIN_TARGET_AMOUNT) {
      alert(`목표 금액은 ${SavingsGoal.MIN_TARGET_AMOUNT}원 이상이어야 합니다.`);
      return;
    }

    onChange(newTargetAmount);
  };

  return (
    <TextField
      label="목표 금액"
      placeholder="목표 금액을 입력하세요"
      suffix="원"
      value={value.toString()}
      onChange={handleChange}
    />
  );
}
