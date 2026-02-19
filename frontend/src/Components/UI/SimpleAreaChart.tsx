import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import type { FinanceCardTypes } from "../../Types/propsTypes";

interface AreaChartpropsType {
  data: FinanceCardTypes[];
}

const SimpleAreaChart = ({ data }: AreaChartpropsType) => {
  return (
    <AreaChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default SimpleAreaChart;
