import styles from "./CaseExpenses.module.css";
import { expenses } from "@cases/utils/mockExpenses";

export default function CaseExpenses() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.actions}>
          <button className={styles.deleteButton}>Delete</button>
          <button className={styles.addButton}>Add Expense</button>
        </div>
      </div>
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
              className={index % 2 != 0 ? styles.oddRows : ""}
            >
              <td>
                <input type="checkbox" />
              </td>
              <td>{expense.label}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.deductedFrom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
