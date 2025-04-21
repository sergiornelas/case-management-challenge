import { useExpenseStore } from "@cases/store/expenseStore";
import { useState } from "react";
import CaseExpensesButtons from "./CaseExpensesButtons/CaseExpensesButtons";
import AddExpenseModal from "./CaseExpensesModal/AddExpenseModal";
import CaseExpensesTable from "./CaseExpensesTable/CaseExpensesTable";

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
    <>
      <CaseExpensesButtons
        handleDelete={handleDelete}
        selectedExpenses={selectedExpenses}
        setIsModalOpen={setIsModalOpen}
      />
      <CaseExpensesTable
        expenses={expenses}
        handleCheckboxChange={handleCheckboxChange}
        selectedExpenses={selectedExpenses}
      />
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
