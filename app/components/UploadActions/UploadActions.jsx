import React from "react";
import Button from "../Button/Button";
import styles from "./UploadActions.module.css";

/**
 * UploadActions component.
 * Layout component holding the action buttons for adding files or links.
 */
const UploadActions = ({ onAddFile, onAddLink }) => {
  // SVG File-Plus Icon
  const FilePlusIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M9 15h6" />
      <path d="M12 12v6" />
    </svg>
  );

  // SVG Link Icon
  const LinkIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l-3 3a5 5 0 0 0-7.07-7.07l1.71-1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l3-3a5 5 0 0 0 7.07 7.07l-1.71 1.71" />
      <line x1="8" y1="16" x2="16" y2="8" />
    </svg>
  );

  return (
    <div className={styles.actionsContainer}>
      <Button
        variant="primary"
        icon={FilePlusIcon}
        onClick={onAddFile}
        ariaLabel="Add a new file asset"
      >
        Add file
      </Button>
      <Button
        variant="secondary"
        icon={LinkIcon}
        onClick={onAddLink}
        ariaLabel="Add a new link asset"
      >
        Add link
      </Button>
    </div>
  );
};

export default UploadActions;
