import TransactionTable from "../UI/TransactionTable";
import { useExpenses } from "../../hooks/useExpenses";
import type { Transaction } from "../../Types/transactionsType";

const Expenses = () => {
  const { data, isLoading, error } = useExpenses();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching transactions</p>;

  const expenses: Transaction[] =
    data?.message?.transactions?.map((t: any) => ({
      id: t.id,
      type: t.type,
      category: t.category,
      amount: Number(t.amount),
    })) ?? [];

  return (
    <div>
      <section>
        <h1 className="capitalize font-semibold text-lg underline underline-offset-5 mb-4 p-3">
          Latest Expenses :
        </h1>

        <TransactionTable transactions={expenses} />
      </section>
    </div>
  );
};

export default Expenses;
