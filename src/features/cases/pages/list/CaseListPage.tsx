import { useState } from "react";
import CaseButtons from "../../components/CaseList/CaseButtons/CaseButtons";
import { CasePagination } from "../../components/CaseList/CasePagination/CasePagination";
import CaseSearchClients from "../../components/CaseList/CaseSearchClients/CaseSearchClients";
import { CaseTable } from "../../components/CaseList/CaseTable/CaseTable";
import styles from "./CaseListPage.module.css";

type MedicalStatus = "Active" | "Pending" | "In Progress";

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
