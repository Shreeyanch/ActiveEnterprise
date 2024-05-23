import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./group-component.module.css";

const GroupComponent: NextPage = () => {
  const onBDD3242FDEB4B0C980514815B2IconClick = useCallback(() => {
    window.open(
      "https://www.facebook.com/profile.php?id=61558959911050&mibextid=LQQJ4d&rdid=FTJC5AdWnSxFXvHh"
    );
  }, []);

  const onTiktokImageClick = useCallback(() => {
    window.open (
      "https://www.tiktok.com/@activeenterprises369?_t=8mXRsQtream&_r=1");
  }, []);

  const onImage13IconClick = useCallback(() => {
    window.open(
      "https://www.instagram.com/activeenterprises.369?igsh=MXZzaWJ1ZmozMnFpeg=="
    );
  }, []);

  const onLETTERLOGO2Click = useCallback(() => {
    window.open("https://www.samparka.info/");
  }, []);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.connectWithUsParent}>
          <div className={styles.connectWithUs}>Connect with us:</div>
          <div className={styles.bdd3242Fdeb4b0c980514815b2Parent}>
            <img
              className={styles.bdd3242Fdeb4b0c980514815b2Icon}
              alt=""
              src="/7bdd3242fdeb4b0c980514815b2da5d0-1@2x.png"
              onClick={onBDD3242FDEB4B0C980514815B2IconClick}
            />
            <img
              className={styles.tiktokIcon}
              alt=""
              src="/tiktok@2x.png"
              onClick={onTiktokImageClick}
            />
            <img
              className={styles.image13Icon}
              alt=""
              src="/image-13@2x.png"
              onClick={onImage13IconClick}
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.poweredByParent}>
          <div className={styles.poweredBy}>powered by</div>
          <img
            className={styles.letterLogo2}
            alt=""
            src="/letter-logo-2@2x.png"
            onClick={onLETTERLOGO2Click}
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
