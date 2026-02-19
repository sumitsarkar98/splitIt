import { useTransactions } from "../../hooks/useTransactions";

import FinanceCard from "../UI/FinanceCard";
import TransactionTable from "../UI/TransactionTable";
import CustomActiveShapePieChart from "../UI/CustomActiveShapePieChart";
import CustomBarChart from "../UI/CustomBarChart";
import CustomAreaChart from "../UI/CustomAreaChart";

import type { FinanceCardTypes } from "../../Types/propsTypes";

const Dashboard = () => {
  const { data, isLoading, error } = useTransactions();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching transactions</p>;

  // Destructure properly
  const transactions = data?.message?.transactions || [];
  const summary = data?.message?.summary;
  const IncomeTransaction = transactions.filter(
    (t: any) => t.type === "income",
  );

  const ExpenseTransaction = transactions.filter(
    (t: any) => t.type === "expense",
  );

  // Convert string to number safely
  const totalBalance = Number(summary?.balance || 0);
  const totalIncome = Number(summary?.total_income || 0);
  const totalExpense = Number(summary?.total_expense || 0);

  const UserfinanceData: FinanceCardTypes[] = [
    { name: "Total Balance", amount: totalBalance, fill: "#a78bfa" },
    { name: "Total Income", amount: totalIncome, fill: "#4ade80" },
    { name: "Total Expense", amount: totalExpense, fill: "#f87171" },
  ];

  return (
    <div className="dashboard-container min-h-screen p-1 lg:p-4">
      {/* Finance Cards - section1 */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:px-8 py-4 mb-6">
        {UserfinanceData.map((item) => (
          <FinanceCard key={item.name} data={item} />
        ))}
      </section>

      {/* Transactions Overview - section2 */}
      <section className="flex flex-col bg-white lg:flex-row items-start p-2 gap-6">
        {/* Transactions left */}
        <div className="users-transactions-left w-full lg:w-1/2">
          <h1 className="capitalize font-semibold text-lg underline underline-offset-4 mb-4 p-3">
            Latest Transactions :
          </h1>
          <TransactionTable
            transactions={transactions.map((t: any) => ({
              id: t.id,
              type: t.type,
              category: t.category,
              amount: Number(t.amount),
            }))}
          />
        </div>

        {/* Transactions right */}
        <div className="users-transactions-right w-full lg:w-1/2">
          <h1 className="capitalize font-semibold text-lg underline underline-offset-4 p-3 mb-4">
            Transactions Overview :
          </h1>
          <CustomActiveShapePieChart data={UserfinanceData} />
        </div>
      </section>

      {/* Expenses Overview - section3 */}
      <section className="flex flex-col bg-white lg:flex-row items-start  gap-10 mt-10">
        {/* Expenses left */}
        <div className="users-transactions-right w-full lg:w-1/2 flex flex-col items-between gap-10">
          <h1 className="capitalize font-semibold text-lg underline underline-offset-4 p-3 mb-4">
            Expenses Overview :
          </h1>
          <CustomBarChart transactions={ExpenseTransaction} tag="expense" />
        </div>

        {/* Transactions right */}
        <div className="users-transactions-left w-full lg:w-1/2">
          <h1 className="capitalize font-semibold text-lg underline underline-offset-4 mb-4 p-3">
            Latest Expenses :
          </h1>
          <TransactionTable
            transactions={ExpenseTransaction.map((t: any) => ({
              id: t.id,
              type: t.type,
              category: t.category,
              amount: Number(t.amount),
            }))}
          />
        </div>
      </section>

      {/* Income Overview - section4 */}
      <section className="flex flex-col bg-white lg:flex-row items-start p-2 gap-10 mt-10">
        {/* Income Transactions left */}
        <div className="users-transactions-left w-full lg:w-1/2">
          <h1 className="capitalize font-semibold text-lg underline underline-offset-4 mb-4 p-3">
            Latest Income :
          </h1>
          <TransactionTable
            transactions={IncomeTransaction.map((t: any) => ({
              id: t.id,
              type: t.type,
              category: t.category,
              amount: Number(t.amount),
            }))}
          />
        </div>

        {/* Income chart right */}
        <div className="users-transactions-right w-full lg:w-1/2">
          <h1 className="capitalize font-semibold text-lg underline underline-offset-4 p-3 mb-4">
            Income Overview :
          </h1>
          <CustomBarChart transactions={IncomeTransaction} tag="income" />
        </div>
      </section>

      {/* Overview - section5 */}
      <section className="mt-10">
        <CustomAreaChart data={transactions} />
      </section>
    </div>
  );
};

export default Dashboard;
