import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import type { Transaction } from "../../Types/transactionsType";

interface Props {
  transactions: Transaction[];
  tag: "income" | "expense";
}

const CustomBarChart = ({ transactions, tag }: Props) => {
  const chartData = Object.values(
    transactions.reduce(
      (acc, curr) => {
        if (!acc[curr.category]) {
          acc[curr.category] = {
            name: curr.category,
            amount: 0,
          };
        }

        acc[curr.category].amount += Number(curr.amount);
        return acc;
      },
      {} as Record<string, { name: string; amount: number }>,
    ),
  );

  const barColor = tag === "income" ? "#16a34a" : "#dc2626";

  return (
    <div className="w-full min-w-0 flex flex-col p-2">
      {/* Chart */}
      <div className="w-full h-64 sm:h-72 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              formatter={(value: number | undefined) =>
                `₹ ${Number(value ?? 0).toLocaleString("en-IN")}`
              }
            />
            <Bar dataKey="amount" fill={barColor} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-2 mt-3">
        <span
          className="w-4 h-4 rounded-sm"
          style={{ backgroundColor: barColor }}
        />
        <span className="text-sm text-gray-600 capitalize">
          {tag} by category
        </span>
      </div>
    </div>
  );
};

export default CustomBarChart;
