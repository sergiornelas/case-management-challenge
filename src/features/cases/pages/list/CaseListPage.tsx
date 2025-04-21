import CaseButtons from "@cases/components/CaseList/CaseButtons/CaseButtons";
import CasePagination from "@cases/components/CaseList/CasePagination/CasePagination";
import CaseSearchClients from "@cases/components/CaseList/CaseSearchClients/CaseSearchClients";
import CaseTable from "@cases/components/CaseList/CaseTable/CaseTable";
import { usePagination } from "@cases/hooks/usePagination";
import { mockCases } from "@cases/utils/mockCases";
import { MedicalStatus } from "@cases/types";
import styles from "./CaseListPage.module.css";

export const CaseListPage = () => {
  const {
    pagination,
    search,
    filter,
    items: paginatedCases,
  } = usePagination({ items: mockCases });

  return (
    <div className={styles.container}>
      <CaseSearchClients
        searchTerm={search.term}
        setSearchTerm={search.setTerm}
      />
      <CaseButtons
        statusFilter={filter.status as "All" | MedicalStatus}
        setStatusFilter={filter.setStatus}
      />
      <CaseTable filteredCases={paginatedCases} />
      <CasePagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={pagination.handlePageChange}
      />
    </div>
  );
};
