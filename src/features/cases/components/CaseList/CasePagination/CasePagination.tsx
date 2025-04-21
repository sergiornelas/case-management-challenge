import styles from "./CasePagination.module.css";
import { CasePaginationProps } from "@cases/types";

export default function CasePagination({
  currentPage,
  totalPages,
  onPageChange,
}: CasePaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.pageNumber} ${
            currentPage === i ? styles.active : ""
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <div className={styles.pageNumbers}>{renderPageNumbers()}</div>
      <button
        className={styles.paginationButton}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}
