import { CaseState } from "@cases/types";
import { mockCases } from "@cases/utils/mockCases";
import { expenses } from "@cases/utils/mockExpenses";
import { create } from "zustand";

export const useExpenseStore = create<CaseState>((set) => ({
  cases: mockCases,
  expenses: expenses,
  selectedCaseId: null,
  setSelectedCaseId: (id) => set({ selectedCaseId: id }),
  addExpense: (expense) =>
    set((state) => ({
      expenses: [...state.expenses, expense],
    })),
  deleteExpenses: (expenseIds) =>
    set((state) => ({
      expenses: state.expenses.filter(
        (expense) => !expenseIds.includes(expense.id),
      ),
    })),
}));
