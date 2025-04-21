import styles from "./CaseButtons.module.css";
import { MedicalStatus } from "@cases/types";

export default function CaseButtons({ statusFilter, setStatusFilter }) {
  return (
    <div className={styles.buttonsContainer}>
      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value as MedicalStatus | "All")
        }
        className={styles.listButton}
      >
        <option value="All">Filter Clients</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
      </select>
      <button className={styles.listButton}>+ Add Client</button>
    </div>
  );
}
