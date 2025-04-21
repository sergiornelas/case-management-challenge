import styles from "./CaseDetails.module.css";
import { mockCases } from "../../utils/mockCases";

export default function CaseDetails({ caseId }: { caseId: string }) {
  const caseData = mockCases.find((case_) => case_.id === caseId);

  if (!caseData) {
    return <div>Case not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <label>Client Name:</label>
        <div className={styles.value}>
          <span className={styles.icon}>🏛️</span>
          {caseData.client_name}
        </div>
        <div className={styles.caseNumber}>{caseData.law_firm}</div>
      </div>

      <div className={styles.field}>
        <label>Date of Accident:</label>
        <div className={styles.value}>{caseData.doa}</div>
      </div>

      <div className={styles.field}>
        <label>Medical Status:</label>
        <div className={styles.value}>{caseData.medical_status}</div>
      </div>

      <div className={styles.field}>
        <label>Client Status:</label>
        <div className={styles.value}>{caseData.client_status}</div>
      </div>
    </div>
  );
}
