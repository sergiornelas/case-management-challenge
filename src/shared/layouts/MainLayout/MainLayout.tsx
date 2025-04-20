import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Case Management System</h1>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
