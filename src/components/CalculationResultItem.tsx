import { colors, ListRow } from 'tosslib';

interface CalculationResultItemProps {
  title: string;
  description: string;
}
export function CalculationResultItem({ title, description }: CalculationResultItemProps) {
  return (
    <ListRow
      contents={
        <ListRow.Texts
          type="2RowTypeA"
          top={title}
          topProps={{ color: colors.grey600 }}
          bottom={description}
          bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
        />
      }
    />
  );
}
