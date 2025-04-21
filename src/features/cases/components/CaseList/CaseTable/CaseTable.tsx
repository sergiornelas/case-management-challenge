import { Case } from "@cases/types";
import { useNavigate } from "react-router-dom";
import styles from "./CaseTable.module.css";

export default function CaseTable({ filteredCases }) {
  const navigate = useNavigate();
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>DOA</th>
            <th>Medical Status</th>
            <th>Case Status</th>
            <th>Law Firm</th>
          </tr>
        </thead>
        <tbody>
          {filteredCases.map((caseItem: Case, index: string) => (
            <tr
              key={caseItem.id}
              onClick={() => navigate(`/cases/${caseItem.id}`)}
              className={
                caseItem.medical_status === "Ready for Assignment"
                  ? styles.tableRowReady
                  : styles.tableRow
              }
            >
              <td>{`${index + 1}. ${caseItem.client_name}`}</td>
              <td>{new Date(caseItem.doa).toLocaleDateString()}</td>
              <td>{caseItem.medical_status}</td>
              <td>{caseItem.client_status}</td>
              <td>{caseItem.law_firm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
