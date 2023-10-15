import { CategoryBar, Legend } from "@tremor/react";

interface Status {
  name: string;
  value: number;
}

interface StatusesChartProps {
  statuses: Array<Status>;
}

const StatusesChart = ({ statuses }: StatusesChartProps) => {
  const total = statuses.reduce((acc, curr) => acc + curr.value, 0);
  const statusesLegend = statuses.map((e) => `${e.name}: ${e.value}`);
  const values = statuses.map((status) =>
    Math.round((status.value * 100) / total)
  );

  return (
    <>
      <CategoryBar
        values={values}
        colors={["emerald", "yellow", "rose"]}
        showAnimation
        showLabels={false}
      />
      <Legend
        className="mt-3"
        categories={statusesLegend}
        colors={["emerald", "yellow", "rose"]}
      />
    </>
  );
};

export default StatusesChart;
