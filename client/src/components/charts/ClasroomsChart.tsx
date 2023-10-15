import { BarList } from "@tremor/react";

interface Classroom {
  name: string;
  value: number;
}

interface ClassroomsChartProps {
  classrooms: Array<Classroom>;
}

const ClassroomsChart = ({ classrooms }: ClassroomsChartProps) => (
  <BarList data={classrooms} color={"green"} />
);

export default ClassroomsChart;
