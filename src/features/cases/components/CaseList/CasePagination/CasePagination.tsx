import styles from "./CasePagination.module.css";

export const CasePagination = () => {
  return (
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
  );
};
