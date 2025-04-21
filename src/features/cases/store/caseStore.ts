import { create } from "zustand";
import { Case } from "@cases/types";
import { mockCases } from "@cases/utils/mockCases";
import { expenses } from "@cases/utils/mockExpenses";

interface CaseState {
  cases: Case[];
  expenses: typeof expenses;
  selectedCaseId: string | null;
  setSelectedCaseId: (id: string | null) => void;
  addExpense: (expense: (typeof expenses)[0]) => void;
  deleteExpenses: (expenseIds: number[]) => void;
}

export const useCaseStore = create<CaseState>((set) => ({
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
