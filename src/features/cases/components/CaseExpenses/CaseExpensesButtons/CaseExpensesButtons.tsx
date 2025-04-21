import styles from "./CaseExpensesButtons.module.css";
import type { CaseExpensesButtonsProps } from "@cases/types";

export default function CaseExpensesButtons({
  handleDelete,
  selectedExpenses,
  setIsModalOpen,
}: CaseExpensesButtonsProps) {
  return (
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
  );
}
