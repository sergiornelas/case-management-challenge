import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./MainLayout.module.css";

export const MainLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <header className={styles.header}>
          <h1>ABC Company</h1>
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
