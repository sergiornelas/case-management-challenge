import { CaseList } from "../../components/CaseList/CaseList";
import styles from "./CaseListPage.module.css";

export const CaseListPage = () => {
  return (
    <div className={styles.page}>
      <CaseList />
    </div>
  );
};
