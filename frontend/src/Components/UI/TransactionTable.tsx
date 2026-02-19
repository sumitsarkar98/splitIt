import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

import type { Transaction } from "../../Types/transactionsType";

interface Props {
  transactions: Transaction[];
}

const TransactionTable = ({ transactions }: Props) => {
  const isEmpty = transactions.length === 0;

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        width: "100%",
        maxHeight: 500,
      }}
    >
      <Table stickyHeader>
        {/* TABLE HEADER */}
        <TableHead>
          <TableRow
            sx={{
              "& .MuiTableCell-root": {
                fontWeight: "bold",
                backgroundColor: "#fff",
              },
            }}
          >
            {/* Type (hidden on mobile) */}
            <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
              Type
            </TableCell>

            <TableCell>Category</TableCell>
            <TableCell align="right">Amount (₹)</TableCell>
          </TableRow>
        </TableHead>

        {/* TABLE BODY */}
        <TableBody>
          {isEmpty ? (
            <TableRow>
              <TableCell colSpan={3} align="center">
                <Typography variant="body2" color="text.secondary">
                  No transactions found
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            transactions.map((row) => {
              const isIncome = row.type === "income";

              return (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  {/* TYPE */}
                  <TableCell
                    sx={{
                      display: { xs: "none", md: "table-cell" },
                      textTransform: "capitalize",
                      fontWeight: 600,
                      color: isIncome ? "green" : "red",
                    }}
                  >
                    {row.type}
                  </TableCell>

                  {/* CATEGORY */}
                  <TableCell>{row.category}</TableCell>

                  {/* AMOUNT */}
                  <TableCell
                    align="right"
                    sx={{
                      fontWeight: 500,
                      color: isIncome ? "green" : "red",
                    }}
                  >
                    ₹{" "}
                    {Number(row.amount).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
