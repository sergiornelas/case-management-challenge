import styles from "./CaseExpenses.module.css";

interface CaseExpensesProps {
  caseId: string;
}

export default function CaseExpenses({ caseId }: CaseExpensesProps) {
  // In a real app, we would fetch this data from an API using the caseId
  const expenses = [
    {
      id: 1,
      label: "Lyft 05/12/2024",
      amount: 54.12,
      deductedFrom: "Client Settlement",
    },
    {
      id: 2,
      label: "Lyft 05/02/2024",
      amount: 38.23,
      deductedFrom: "Client Settlement",
    },
    {
      id: 3,
      label: "Lyft 04/23/2024",
      amount: 20.39,
      deductedFrom: "Client Settlement",
    },
    {
      id: 4,
      label: "04/02/2024",
      amount: 39.28,
      deductedFrom: "Client Settlement",
    },
    {
      id: 5,
      label: "03/28/2024",
      amount: 24.52,
      deductedFrom: "Client Settlement",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.actions}>
          <button className={styles.deleteButton}>Delete</button>
          <button className={styles.addButton}>Add Expense</button>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkboxColumn}>
              <input type="checkbox" />
            </th>
            <th>Label</th>
            <th>Amount</th>
            <th>Deducted From</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
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
