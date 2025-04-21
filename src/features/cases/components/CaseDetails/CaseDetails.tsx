import styles from "./CaseDetails.module.css";
import { mockCases } from "@cases/utils/mockCases";
import { GiGreekTemple } from "react-icons/gi";

export default function CaseDetails({ caseId }: { caseId: string }) {
  const caseData = mockCases.find((case_) => case_.id === caseId);

  if (!caseData) {
    return <div>Case not found</div>;
  }

  return (
    <div className={styles.container}>
      <label>Client Name:</label>
      <div className={styles.fieldTop}>
        <div className={styles.value}>#221901 - {caseData.client_name}</div>
        <div className={styles.lawFirm}>
          <GiGreekTemple className={styles.icon} />
          <span>{caseData.law_firm}</span>
        </div>
      </div>

      <div className={styles.field}>
        <label>Date of Birth:</label>
        10/1/1971
      </div>

      <div className={styles.field}>
        <label>DATE OF INCIDENT:</label>
        <div className={styles.value}>{caseData.doa}</div>
      </div>
    </div>
  );
}
