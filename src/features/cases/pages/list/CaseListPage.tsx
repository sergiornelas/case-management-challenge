import CaseButtons from "@cases/components/CaseList/CaseButtons/CaseButtons";
import CasePagination from "@cases/components/CaseList/CasePagination/CasePagination";
import CaseSearchClients from "@cases/components/CaseList/CaseSearchClients/CaseSearchClients";
import CaseTable from "@cases/components/CaseList/CaseTable/CaseTable";
import { MedicalStatus } from "@cases/types";
import { useState } from "react";
import styles from "./CaseListPage.module.css";

// Temporary mock data until we set up Zustand
import { mockCases } from "../../utils/mockCases";

export const CaseListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<MedicalStatus | "All">(
    "All",
  );

  const filteredCases = mockCases.filter((caseItem) => {
    const matchesSearch = caseItem.client_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || caseItem.client_status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className={styles.container}>
      <CaseSearchClients
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <CaseButtons
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <CaseTable filteredCases={filteredCases} />
      <CasePagination />
    </div>
  );
};
