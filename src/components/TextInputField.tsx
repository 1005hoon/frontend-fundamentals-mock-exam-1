import { TextField } from 'tosslib';

interface TextInputFieldProps {
  name: string;
  placeholder: string;
  suffix: string;
  value: number;
  onChange: (value: number) => void;
}

export function TextInputField({ name, placeholder, suffix, value, onChange }: TextInputFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueWithoutCommas = e.target.value.replace(/,/g, '');
    const newTargetAmount = parseInt(valueWithoutCommas, 10) || 0;

    onChange(newTargetAmount);
  };
  return (
    <TextField
      label={name}
      placeholder={placeholder}
      suffix={suffix}
      value={value.toLocaleString()}
      onChange={handleChange}
    />
  );
}
