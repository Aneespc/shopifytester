import React from "react";
import styles from "./UserAvatarButton.module.css";

/**
 * Reusable UserAvatarButton component.
 * Isolated to easily allow future dropdown features (Settings, Logout, etc.).
 */
const UserAvatarButton = ({ onClick, ariaLabel = "User profile options", className = "" }) => {
  return (
    <button
      type="button"
      className={`${styles.avatarBtn} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <svg
        className={styles.avatarIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </button>
  );
};

export default UserAvatarButton;
