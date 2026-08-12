"use client";

import Link from "next/link";
import cn from "classnames";
import { useMapFrame } from "./hooks/useMapFrame";
import { getSkeletonLabel, isFrameMounted } from "./MapFrame.utils";
import { MapFrameProps } from "./MapFrame.types";
import styles from "./MapFrame.module.css";

export default function MapFrame(props: MapFrameProps) {
  const { src, title, ariaLabel, mapsUrl, addressLines } = props;
  const { stage, hasTimedOut, activate, handleLoad } = useMapFrame();

  return (
    <div className={styles.wrap}>
      {stage === "preview" && (
        <div className={styles.preview}>
          <div className={styles.previewPattern} aria-hidden="true" />

          <div className={styles.previewIconCol} aria-hidden="true">
            <span className={styles.previewIcon}>📍</span>
          </div>

          <div className={styles.previewBody}>
            <span className={styles.previewEyebrow}>Find Us</span>
            <address className={styles.previewAddress}>
              {addressLines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </address>
          </div>

          <div className={styles.previewActions}>
            <button
              type="button"
              onClick={activate}
              className={styles.btnPrimary}
            >
              Show Interactive Map
            </button>
            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              Open in Google Maps
            </Link>
          </div>
        </div>
      )}

      {isFrameMounted(stage) && (
        <div className={styles.frameStage}>
          {stage === "loading" && (
            <div className={styles.skeleton} aria-hidden="true">
              <div className={styles.skeletonShimmer} />
              <span className={styles.skeletonPin}>📍</span>
              <span className={styles.skeletonLabel}>
                {getSkeletonLabel(hasTimedOut)}
              </span>
            </div>
          )}
          <iframe
            src={src}
            title={title}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={ariaLabel}
            onLoad={handleLoad}
            className={cn(styles.iframe, {
              [styles.iframeVisible]: stage === "loaded",
            })}
          />
        </div>
      )}
    </div>
  );
}
