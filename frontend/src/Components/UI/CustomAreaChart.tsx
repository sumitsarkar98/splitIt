import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Transaction {
  id: number;
  type: "income" | "expense";
  amount: string;
  transaction_date: string;
}

interface AreaChartProps {
  data: Transaction[];
}

const CustomAreaChart = ({ data }: AreaChartProps) => {
  // Sort transactions by date
  const sortedData = [...data].sort(
    (a, b) =>
      new Date(a.transaction_date).getTime() -
      new Date(b.transaction_date).getTime(),
  );

  // Convert to chart format
  const chartData = sortedData.map((transaction) => ({
    date: new Date(transaction.transaction_date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    }),
    income: transaction.type === "income" ? Number(transaction.amount) : 0,
    expense: transaction.type === "expense" ? Number(transaction.amount) : 0,
  }));

  return (
    <div className="w-full h-100 bg-white rounded-xl p-6 shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Income Line */}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

          {/* Expense Line */}
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomAreaChart;
