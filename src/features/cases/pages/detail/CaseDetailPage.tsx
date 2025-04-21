import CaseDetails from "@cases/components/CaseDetails/CaseDetails";
import CaseExpenses from "@cases/components/CaseExpenses/CaseExpenses";
import { DetailsTab } from "@cases/types";
import { DETAILS } from "@cases/utils/constants";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CaseDetailPage.module.css";

export const CaseDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<DetailsTab>(DETAILS);

  return (
    <div className={styles.page}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === DETAILS ? styles.active : ""
          }`}
          onClick={() => setActiveTab(DETAILS)}
        >
          Details
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "expenses" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("expenses")}
        >
          Expenses
        </button>
      </div>
      <div className={styles.content}>
        {activeTab === DETAILS ? (
          <CaseDetails caseId={id!} />
        ) : (
          <CaseExpenses />
        )}
      </div>
    </div>
  );
};
