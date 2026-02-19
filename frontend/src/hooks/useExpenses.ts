import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../api/api.function";

export const useExpenses = (year?: number) => {
  return useQuery({
    queryKey: ["expenses", year],
    queryFn: () => getExpenses({ year }),
  });
};
