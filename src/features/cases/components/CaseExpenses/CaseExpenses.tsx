import styles from "./CaseExpenses.module.css";
import { useState } from "react";
import AddExpenseModal from "./AddExpenseModal";
import { useExpenseStore } from "@cases/store/expenseStore";

export default function CaseExpenses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpenses, setSelectedExpenses] = useState<number[]>([]);
  const { expenses, deleteExpenses } = useExpenseStore();

  const handleDelete = () => {
    deleteExpenses(selectedExpenses);
    setSelectedExpenses([]);
  };

  const handleCheckboxChange = (expenseId: number) => {
    setSelectedExpenses((prev) =>
      prev.includes(expenseId)
        ? prev.filter((id) => id !== expenseId)
        : [...prev, expenseId],
    );
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.actions}>
          <button
            className={styles.deleteButton}
            onClick={handleDelete}
            disabled={selectedExpenses.length === 0}
          >
            Delete
          </button>
          <button
            className={styles.addButton}
            onClick={() => setIsModalOpen(true)}
          >
            Add Expense
          </button>
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
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
