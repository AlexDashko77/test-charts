import { XAxis, YAxis } from 'recharts';

interface ChartAxesProps {
  textColor: string;
}

export function ChartAxes({ textColor }: ChartAxesProps) {
  return (
    <>
      <XAxis
        dataKey="date"
        tickFormatter={(d: string) =>
          new Date(d).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
          })
        }
        stroke={textColor}
        tick={{ fill: textColor }}
      />

      <YAxis
        tickFormatter={(v: number) => `${v}%`}
        domain={[0, 40]}
        stroke={textColor}
        tick={{ fill: textColor }}
      />
    </>
  );
}