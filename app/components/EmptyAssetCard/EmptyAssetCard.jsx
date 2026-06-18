import React from "react";
import UploadActions from "../UploadActions/UploadActions";
import FileTypeTags from "../FileTypeTags/FileTypeTags";
import AssetIllustration from "../AssetIllustration/AssetIllustration";
import styles from "./EmptyAssetCard.module.css";

/**
 * EmptyAssetCard component.
 * Main call-to-action card presented to users when no assets exist.
 */
const EmptyAssetCard = ({ onAddFile, onAddLink }) => {
  return (
    <article className={styles.card}>
      {/* Content panel */}
      <div className={styles.content}>
        <h2 className={styles.heading}>Add your first asset</h2>
        <p className={styles.description}>
          Set up the files and links customers get access to after they purchase.
          Think PDFs, videos, course portals, or booking links.
        </p>
        
        <div className={styles.actions}>
          <UploadActions onAddFile={onAddFile} onAddLink={onAddLink} />
        </div>
        
        <div className={styles.tags}>
          <FileTypeTags />
        </div>
      </div>

      {/* Illustration panel */}
      <div className={styles.illustrationWrapper}>
        <AssetIllustration />
      </div>
    </article>
  );
};

export default EmptyAssetCard;
