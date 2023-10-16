import { CategoryBar, Legend } from "@tremor/react";

interface Status {
  name: string;
  value: number;
  color: string;
}

interface StatusesChartProps {
  statuses: Array<Status>;
}

const StatusesChart = ({ statuses }: StatusesChartProps) => {
  const totalTickets = statuses.reduce((acc, curr) => acc + curr.value, 0);
  const colors: any = [];
  const statusesLegend = statuses.map((e) => {
    colors.push(e.color);
    return `${e.name}: ${e.value}`;
  });
  const percentages = statuses.map((status) =>
    Math.round((status.value * 100) / totalTickets)
  );

  return (
    <>
      <CategoryBar
        values={percentages}
        colors={colors}
        showAnimation
        showLabels={false}
      />
      <Legend className="mt-3" categories={statusesLegend} colors={colors} />
    </>
  );
};

export default StatusesChart;
