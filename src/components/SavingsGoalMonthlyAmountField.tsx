import { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';
import { TextField } from 'tosslib';

interface SavingsGoalMonthlyAmountFieldProps {
  value: number;
  onChange: (value: number) => void;
}
export function SavingsGoalMonthlyAmountField({ value, onChange }: SavingsGoalMonthlyAmountFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10) || 0;

    if (newValue < SavingsGoal.MIN_MONTLY_AMOUNT) {
      alert(`월 납입액은 최소 ${SavingsGoal.MIN_MONTLY_AMOUNT}원 이상이어야 합니다.`);
      return;
    }

    onChange(newValue);
  };

  return (
    <TextField
      label="월 납입액"
      placeholder="희망 월 납입액을 입력하세요"
      suffix="원"
      value={value.toString()}
      onChange={handleChange}
    />
  );
}
