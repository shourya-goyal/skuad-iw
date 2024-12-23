import styles from "./index.module.scss";
import { useState } from "react";

const LoginPage = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className={styles["content-holder"]}>
      <div className={styles["banner"]}>Welcome to splitwise!!</div>
      <div className={styles["content"]}>
        <div className={styles["title"]}>Login to continue</div>
        <input
          className={styles["input"]}
          placeholder={"Enter username"}
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <input
          className={styles["input"]}
          type={password}
          placeholder={"enter password"}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className={styles["button"]} disabled={!userName || !password}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
