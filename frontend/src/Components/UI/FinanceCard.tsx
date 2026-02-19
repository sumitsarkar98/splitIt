import type { FinanceCardTypes } from "../../Types/propsTypes";

interface CardProps {
  data: FinanceCardTypes;
}

const FinanceCard = ({ data }: CardProps) => {
  const getStyles = () => {
    switch (data.name) {
      case "Total Income":
        return {
          hoverBorder: "hover:border-green-500",
          text: "text-green-600",
          bg: "bg-green-50 hover:bg-green-100",
          shadow: "hover:shadow-green-200",
        };
      case "Total Expense":
        return {
          hoverBorder: "hover:border-red-500",
          text: "text-red-600",
          bg: "bg-red-50 hover:bg-red-100",
          shadow: "hover:shadow-red-200",
        };
      default:
        return {
          hoverBorder: "hover:border-blue-500",
          text: "text-blue-600",
          bg: "bg-blue-50 hover:bg-blue-100",
          shadow: "hover:shadow-blue-200",
        };
    }
  };

  const styles = getStyles();

  return (
    <div
      className={`
        p-6 rounded-2xl shadow-md
        border-l-4 border-transparent
        ${styles.bg}
        ${styles.hoverBorder}
        ${styles.shadow}
        
        transition-all transform
        duration-300 ease-out
        
        hover:shadow-xl hover:-translate-y-1
      `}
    >
      <h2 className="text-gray-600 text-md font-semibold uppercase tracking-wide">
        {data.name}
      </h2>

      <p className={`mt-2 text-2xl font-bold ${styles.text}`}>
        ₹ {data.amount.toLocaleString()}
      </p>
    </div>
  );
};

export default FinanceCard;
