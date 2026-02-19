import axios from "axios";

interface ExpenseParams {
  year?: number;
}

const getTransactions = async () => {
  const { data } = await axios.get(
    "http://localhost:3000/api/v1/transactions/all/",
    {
      withCredentials: true,
    },
  );
  return data;
};

const getExpenses = async (params?: ExpenseParams) => {
  const response = await axios.get("/expenses", {
    params,
  });

  return response.data;
};

export { getTransactions, getExpenses };
