import React from "react";
import UserAvatarButton from "../UserAvatarButton/UserAvatarButton";
import styles from "./AppHeader.module.css";

/**
 * AppHeader Component representing the top navigation bar.
 */
const AppHeader = ({ title = "Digital Hub", onAvatarClick }) => {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.actions}>
          <UserAvatarButton onClick={onAvatarClick} />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
