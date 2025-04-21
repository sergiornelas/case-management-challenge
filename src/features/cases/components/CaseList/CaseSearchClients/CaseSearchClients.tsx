import styles from "./CaseSearchClients.module.css";

export default function CaseSearchClients({ searchTerm, setSearchTerm }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Clients</h2>
      <div className={styles.searchWrapper}>
        <svg
          className={styles.searchIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search Clients"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}
