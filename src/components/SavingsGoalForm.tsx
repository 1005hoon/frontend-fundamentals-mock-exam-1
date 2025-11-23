import { memo, useCallback } from 'react';
import { Spacing } from 'tosslib';

import type { SavingsGoal } from 'domains/savingsGoal/SavingsGoal';

import { SavingsGoalTargetAmountField } from './SavingsGoalTargetAmountField';
import { SavingsGoalMonthlyAmountField } from './SavingsGoalMonthlyAmountField';
import { SavingsGoalTermMonthField } from './SavingGoalTermMonthField';

interface SavingsGoalFormProps {
  savingsGoal: SavingsGoal;
  onChange: (updater: (prev: SavingsGoal) => SavingsGoal) => void;
}
const SavingsGoalForm = memo(({ savingsGoal, onChange }: SavingsGoalFormProps) => {
  const handleFieldChange = useCallback(
    <K extends keyof SavingsGoal>(field: K, value: SavingsGoal[K]) => {
      onChange(prev => ({
        ...prev,
        [field]: value,
      }));
    },
    [onChange]
  );

  return (
    <>
      <SavingsGoalTargetAmountField
        value={savingsGoal.targetAmount}
        onChange={handleFieldChange.bind(null, 'targetAmount')}
      />
      <Spacing size={16} />
      <SavingsGoalMonthlyAmountField
        value={savingsGoal.monthlyAmount}
        onChange={handleFieldChange.bind(null, 'monthlyAmount')}
      />
      <Spacing size={16} />
      <SavingsGoalTermMonthField value={savingsGoal.termMonths} onChange={handleFieldChange.bind(null, 'termMonths')} />
    </>
  );
});

SavingsGoalForm.displayName = 'SavingsGoalForm';
export default SavingsGoalForm;
