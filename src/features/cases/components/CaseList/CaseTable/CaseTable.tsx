import { Case } from "@cases/types";
import { useNavigate } from "react-router-dom";
import styles from "./CaseTable.module.css";

export default function CaseTable({
  filteredCases,
}: {
  filteredCases: Case[];
}) {
  const navigate = useNavigate();
  const noClients = filteredCases.length === 0;

  return (
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
        {noClients ? (
          <tr>
            <td colSpan={5}>No clients found</td>
          </tr>
        ) : (
          filteredCases.map((caseItem: Case) => (
            <tr
              key={caseItem.id}
              onClick={() => navigate(`/cases/${caseItem.id}`)}
              className={styles.tableRow}
            >
              <td>{`${caseItem.id}. ${caseItem.client_name}`}</td>
              {/* dates workaround: */}
              <td>{new Date(caseItem.doa).toLocaleDateString()}</td>
              <td>{caseItem.medical_status}</td>
              <td>{caseItem.client_status}</td>
              <td>{caseItem.law_firm}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
