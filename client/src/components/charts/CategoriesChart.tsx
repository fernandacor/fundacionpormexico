import { DonutChart } from "@tremor/react";

interface Category {
  name: string;
  value: number;
}

interface CategoriesChartProps {
  categories: Array<Category>;
}

const CategoriesChart = ({ categories }: CategoriesChartProps) => {
  return (
    <DonutChart
      className="mt-6"
      data={categories}
      category="value"
      index="name"
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber", "indigo"]}
    />
  );
};

export default CategoriesChart;
