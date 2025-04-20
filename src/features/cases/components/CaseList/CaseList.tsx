import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CaseList.module.css";

type MedicalStatus = "Active" | "Pending" | "In Progress";

// Temporary mock data until we set up Zustand
const mockCases = [
  {
    id: "1",
    client_name: "Carlos Cox",
    doa: "2024-03-15",
    medical_status: "Active",
    client_status: "Active",
    law_firm: "XYZ Law",
  },
  {
    id: "2",
    client_name: "Maria Rodriguez",
    doa: "2024-03-10",
    medical_status: "Pending",
    client_status: "Active",
    law_firm: "XYZ Law",
  },
  {
    id: "3",
    client_name: "John Smith",
    doa: "2024-03-08",
    medical_status: "In Progress",
    client_status: "Active",
    law_firm: "ABC Legal",
  },
  {
    id: "4",
    client_name: "Emma Wilson",
    doa: "2024-03-05",
    medical_status: "Active",
    client_status: "Active",
    law_firm: "XYZ Law",
  },
  {
    id: "5",
    client_name: "Michael Chang",
    doa: "2024-03-03",
    medical_status: "Pending",
    client_status: "Active",
    law_firm: "ABC Legal",
  },
  {
    id: "6",
    client_name: "Sarah Johnson",
    doa: "2024-03-01",
    medical_status: "In Progress",
    client_status: "Active",
    law_firm: "XYZ Law",
  },
  {
    id: "7",
    client_name: "David Lee",
    doa: "2024-02-28",
    medical_status: "Active",
    client_status: "Active",
    law_firm: "ABC Legal",
  },
  {
    id: "8",
    client_name: "Lisa Anderson",
    doa: "2024-02-25",
    medical_status: "Pending",
    client_status: "Active",
    law_firm: "XYZ Law",
  },
  {
    id: "9",
    client_name: "James Wilson",
    doa: "2024-02-23",
    medical_status: "In Progress",
    client_status: "Active",
    law_firm: "ABC Legal",
  },
  {
    id: "10",
    client_name: "Patricia Martinez",
    doa: "2024-02-20",
    medical_status: "Active",
    client_status: "Active",
    law_firm: "XYZ Law",
  },
  {
    id: "11",
    client_name: "Robert Taylor",
    doa: "2024-02-18",
    medical_status: "Pending",
    client_status: "Active",
    law_firm: "ABC Legal",
  },
  {
    id: "12",
    client_name: "Jennifer Brown",
    doa: "2024-02-15",
    medical_status: "In Progress",
    client_status: "Active",
    law_firm: "XYZ Law",
  },
  {
    id: "13",
    client_name: "William Davis",
    doa: "2024-02-13",
    medical_status: "Active",
    client_status: "Active",
    law_firm: "ABC Legal",
  },
  {
    id: "14",
    client_name: "Elizabeth Garcia",
    doa: "2024-02-10",
    medical_status: "Pending",
    client_status: "Active",
    law_firm: "XYZ Law",
  },
  {
    id: "15",
    client_name: "Thomas Moore",
    doa: "2024-02-08",
    medical_status: "In Progress",
    client_status: "Active",
    law_firm: "ABC Legal",
  },
  {
    id: "16",
    client_name: "Sandra White",
    doa: "2024-02-05",
    medical_status: "Active",
    client_status: "Active",
    law_firm: "XYZ Law",
  },
];

export const CaseList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<MedicalStatus | "All">(
    "All"
  );

  const filteredCases = mockCases.filter((caseItem) => {
    const matchesSearch = caseItem.client_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || caseItem.medical_status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Clients</h2>
        <div className={styles.actions}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <button className={styles.addButton}>+ Add Client</button>
        </div>
      </div>

      <div className={styles.filters}>
        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as MedicalStatus | "All")
          }
          className={styles.filterSelect}
        >
          <option value="All">Filter Clients</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
        </select>
      </div>

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
            {filteredCases.map((caseItem) => (
              <tr
                key={caseItem.id}
                onClick={() => navigate(`/cases/${caseItem.id}`)}
                className={styles.tableRow}
              >
                <td>{caseItem.client_name}</td>
                <td>{new Date(caseItem.doa).toLocaleDateString()}</td>
                <td>{caseItem.medical_status}</td>
                <td>{caseItem.client_status}</td>
                <td>{caseItem.law_firm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button className={styles.paginationButton}>&lt;</button>
        <div className={styles.pageNumbers}>
          <button className={`${styles.pageNumber} ${styles.active}`}>1</button>
          <button className={styles.pageNumber}>2</button>
          <button className={styles.pageNumber}>3</button>
          <button className={styles.pageNumber}>4</button>
        </div>
        <button className={styles.paginationButton}>&gt;</button>
      </div>
    </div>
  );
};
