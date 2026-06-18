import React from "react";
import styles from "./Button.module.css";

/**
 * Reusable Button component for the application.
 * Designed as a clean wrapper that can easily map to Polaris components later.
 */
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  icon,
  ariaLabel,
  disabled = false,
  className = "",
  ...props
}) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      aria-label={ariaLabel}
      {...props}
    >
      {icon && <span className={styles.iconWrapper}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </button>
  );
};

export default Button;
