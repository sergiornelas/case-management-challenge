import type { CaseExpensesTableProps } from "@cases/types";
import styles from "./CaseExpensesTable.module.css";

export default function CaseExpensesTable({
  expenses,
  handleCheckboxChange,
  selectedExpenses,
}: CaseExpensesTableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          <th>Label</th>
          <th>Amount</th>
          <th>Deducted From</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr
            key={expense.id}
            className={index % 2 !== 0 ? styles.oddRows : ""}
          >
            <td>
              <input
                type="checkbox"
                checked={selectedExpenses.includes(expense.id)}
                onChange={() => handleCheckboxChange(expense.id)}
              />
            </td>
            <td>{expense.label}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>{expense.deductedFrom}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
