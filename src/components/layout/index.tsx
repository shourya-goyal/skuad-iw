import { ReactNode } from "react";

import Header from "./header";
import Sidebar from "./sidebar";
import styles from "./index.module.scss";

const Layout = ({
  children,
  isAuthPage,
}: {
  children: ReactNode;
  isAuthPage: boolean;
}) => {
  return (
    <div className={styles["container"]}>
      {isAuthPage ? (
        <>
          <Header />
          <div className={styles["container-holder"]}>
            <Sidebar />
            {children}
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
};

export default Layout;
