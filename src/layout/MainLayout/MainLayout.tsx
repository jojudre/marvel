import { FC, PropsWithChildren } from "react";
import styles from "./MainLayout.module.css";

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <main className={styles.layout}>{children}</main>
);

export default MainLayout;
