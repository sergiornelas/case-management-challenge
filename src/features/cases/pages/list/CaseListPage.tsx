import CaseButtons from "@cases/components/CaseList/CaseButtons/CaseButtons";
import CasePagination from "@cases/components/CaseList/CasePagination/CasePagination";
import CaseSearchClients from "@cases/components/CaseList/CaseSearchClients/CaseSearchClients";
import CaseTable from "@cases/components/CaseList/CaseTable/CaseTable";
import { mockCases } from "@cases/utils/mockCases";
import { MedicalStatus } from "@cases/types";
import { useFilterStore } from "@cases/store/filterStore";
import styles from "./CaseListPage.module.css";

export const CaseListPage = () => {
  const {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    currentPage,
    setCurrentPage,
    getFilteredAndPaginatedItems,
  } = useFilterStore();

  const { items: paginatedCases, totalPages } =
    getFilteredAndPaginatedItems(mockCases);

  return (
    <div className={styles.container}>
      <CaseSearchClients
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <CaseButtons
        statusFilter={statusFilter as "All" | MedicalStatus}
        setStatusFilter={setStatusFilter}
      />
      <CaseTable filteredCases={paginatedCases} />
      <CasePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
