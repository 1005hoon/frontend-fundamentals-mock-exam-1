import { SavingsGoalTermMonths } from 'domains/savingsGoal/SavingsGoal';
import { SelectBottomSheet } from 'tosslib';

interface SavingsGoalTermMonthFieldProps {
  value?: SavingsGoalTermMonths;
  onChange: (value: SavingsGoalTermMonths) => void;
}

export function SavingsGoalTermMonthField({ value, onChange }: SavingsGoalTermMonthFieldProps) {
  const handleChange = (newValue: SavingsGoalTermMonths) => {
    onChange(newValue);
  };

  return (
    <SelectBottomSheet label="저축 기간" title="저축 기간을 선택해주세요" value={value} onChange={handleChange}>
      {SavingsGoalTermMonths.options.map(term => (
        <SelectBottomSheet.Option key={term} value={Number(term)}>
          {term}개월
        </SelectBottomSheet.Option>
      ))}
    </SelectBottomSheet>
  );
}
