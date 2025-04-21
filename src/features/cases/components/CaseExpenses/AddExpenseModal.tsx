import { useExpenseStore } from "@cases/store/expenseStore";
import { AddExpenseModalProps } from "@cases/types";
import { NOT_DEDUCTED } from "@cases/utils/constants";
import { useState } from "react";
import styles from "./AddExpenseModal.module.css";

export default function AddExpenseModal({
  isOpen,
  onClose,
}: AddExpenseModalProps) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [deductedFrom, setDeductedFrom] = useState(NOT_DEDUCTED);
  const { addExpense } = useExpenseStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      label,
      amount: parseFloat(amount),
      deductedFrom,
    };
    addExpense(newExpense);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setLabel("");
    setAmount("");
    setDeductedFrom(NOT_DEDUCTED);
  };

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
        <form onSubmit={handleSubmit}>
          <div className={styles.content}>
            <div className={styles.field}>
              <label>Deduction Type</label>
              <select
                value={deductedFrom}
                onChange={(e) => setDeductedFrom(e.target.value)}
              >
                <option value={NOT_DEDUCTED}>Not Deducted</option>
                <option value="Client Settlement">Client Settlement</option>
                <option value="Attorney Fee">Attorney Fee</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Expense Label</label>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                required
              />
            </div>

            <div className={styles.field}>
              <label>Expense Amount</label>
              <div className={styles.amountInput}>
                <span className={styles.currencySymbol}>$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
