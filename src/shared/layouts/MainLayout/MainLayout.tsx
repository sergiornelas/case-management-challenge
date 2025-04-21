import { Header } from "@shared/layouts/Header/Header";
import { Sidebar } from "@shared/layouts/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";

export const MainLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
