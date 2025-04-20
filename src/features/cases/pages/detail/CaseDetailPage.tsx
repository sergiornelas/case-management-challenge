import { useParams } from "react-router-dom";
// import { CaseDetails } from "../../components/CaseDetails/CaseDetails";
// import { CaseExpenses } from "../../components/CaseExpenses/CaseExpenses";
import styles from "./CaseDetailPage.module.css";

export const CaseDetailPage = () => {
  const { id } = useParams();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h2>Case Details</h2>
      </header>
      <div className={styles.content}>
        <CaseDetails caseId={id!} />
        <CaseExpenses caseId={id!} />
      </div>
    </div>
  );
};
