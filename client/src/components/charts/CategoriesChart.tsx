import { DonutChart, Legend } from "@tremor/react";

interface Category {
  name: string;
  value: number;
}

interface CategoriesChartProps {
  categories: Array<Category>;
}

const colorsOptions = [
  "slate",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const CategoriesChart = ({ categories }: CategoriesChartProps) => {
  const colors: any = categories.map(
    () => colorsOptions[Math.floor(Math.random() * colorsOptions.length)]
  );
  const legend = categories.map((e) => `${e.name}: ${e.value}`);
  if (categories.length === 0) return null;

  return (
    <>
      <DonutChart
        data={categories}
        category="value"
        index="name"
        colors={colors}
      />
      <Legend className="mt-3" categories={legend} colors={colors} />
    </>
  );
};

export default CategoriesChart;
