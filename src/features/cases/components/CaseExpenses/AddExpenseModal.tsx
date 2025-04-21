import styles from "./AddExpenseModal.module.css";
import { AddExpenseModalProps } from "@cases/types";

export default function AddExpenseModal({
  isOpen,
  onClose,
}: AddExpenseModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <h2>Add Expense</h2>
        <div className={styles.content}>
          <div className={styles.field}>
            <label>Deduction Type</label>
            <select defaultValue="not-deducted">
              <option value="not-deducted">Not Deducted</option>
              {/* add other options as needed ;) */}
            </select>
          </div>

          <div className={styles.field}>
            <label>Expense Label</label>
            <input type="text" placeholder="Enter expense label" />
          </div>

          <div className={styles.field}>
            <label>Expense Amount</label>
            <div className={styles.amountInput}>
              <span className={styles.currencySymbol}>$</span>
              <input type="number" step="0.01" />
            </div>
          </div>

          <button className={styles.submitButton}>Submit Expense</button>
        </div>
      </div>
    </div>
  );
}
