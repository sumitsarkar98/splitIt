export interface Transaction {
  id: number;
  type: "income" | "expense";
  category: string;
  amount: string;
  description: string;
  transaction_date: string;
}
