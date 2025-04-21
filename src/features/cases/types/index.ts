import { expenses } from "@cases/utils/mockExpenses";

export type MedicalStatus = "Ready for Assignment" | "Signed" | "Scheduled";
export type CaseStatus = "Active" | "Pending" | "In Progress";
export type DetailsTab = "details" | "expenses";
export type DeductedFrom = "Not Deducted" | "Client Settlement";

export type Case = {
  id: string;
  client_name: string;
  doa: string;
  medical_status: MedicalStatus;
  client_status: CaseStatus;
  law_firm: string;
};

export type CaseExpense = {
  id: number;
  label: string;
  amount: number;
  deductedFrom: DeductedFrom;
};

export interface CasePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface UsePaginationProps {
  items: Case[];
  itemsPerPage?: number;
}

export interface CaseSearchClientsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface CaseButtonsProps {
  statusFilter: MedicalStatus | "All";
  setStatusFilter: (status: MedicalStatus | "All") => void;
}

export interface AddExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface CaseState {
  cases: Case[];
  expenses: typeof expenses;
  selectedCaseId: string | null;
  setSelectedCaseId: (id: string | null) => void;
  addExpense: (expense: (typeof expenses)[0]) => void;
  deleteExpenses: (expenseIds: number[]) => void;
}

export interface FilterState {
  searchTerm: string;
  debouncedSearchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  getFilteredAndPaginatedItems: (items: Case[]) => {
    items: Case[];
    totalItems: number;
    totalPages: number;
  };
}
