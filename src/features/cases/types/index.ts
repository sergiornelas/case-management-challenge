export type MedicalStatus = "Ready for Assignment" | "Signed" | "Scheduled";

export type CaseStatus = "Active" | "Pending" | "In Progress";

export type Case = {
  id: string;
  client_name: string;
  doa: string;
  medical_status: MedicalStatus;
  client_status: CaseStatus;
  law_firm: string;
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
