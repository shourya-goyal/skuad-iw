import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <div>Company logo</div>
      <div>User</div>
    </div>
  );
};

export default Header;
