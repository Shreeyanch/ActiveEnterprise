import type { NextPage } from "next";
import { useCallback } from "react";
import StateSelected from "./state-selected";
import StarGroup from "./star-group";
import { useRouter } from "next/router";
import styles from "./modal.module.css";

const Modal: NextPage = () => {
  const router = useRouter();

  const onStarRatingClick = useCallback(() => {
    window.location.href = "https://reviewthis.biz/activeenterperise";
  }, []);

  const onStarRating1Click = useCallback(() => {
    window.location.href = "https://reviewthis.biz/activeenterperise";
  }, []);

  const onStarRating2Click = useCallback(() => {
    router.push("/demo-form1");
  }, [router]);

  const onStarRating3Click = useCallback(() => {
    router.push("/demo-form1");
  }, [router]);

  const onStarRating4Click = useCallback(() => {
    router.push("/demo-form1");
  }, [router]);

  return (
    <div className={styles.modal}>
      <div className={styles.pleaseRateYour}>Please rate your experience.</div>
      <div className={styles.starRatingParent}>
        <button className={styles.starRating} onClick={onStarRatingClick}>
          <div className={styles.excellent}>EXCELLENT:</div>
          <div className={styles.starGroup}>
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="rgba(123, 97, 255, 0)"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="rgba(123, 97, 255, 0)"
            />
          </div>
        </button>
        <button className={styles.starRating1} onClick={onStarRating1Click}>
          <div className={styles.good}>GOOD:</div>
          <StarGroup
            iconstar="/iconstar.svg"
            iconstar1="/iconstar.svg"
            iconstar2="/iconstar.svg"
            iconstar3="/iconstar.svg"
            iconstar4="/iconstar1.svg"
            buttonroundedBackgroundColor="unset"
            buttonroundedBackgroundColor1="unset"
            buttonroundedBackgroundColor2="unset"
            buttonroundedBackgroundColor3="rgba(123, 97, 255, 0)"
          />
        </button>
        <button className={styles.starRating2} onClick={onStarRating2Click}>
          <div className={styles.good}>AVERAGE:</div>
          <StarGroup
            iconstar="/iconstar.svg"
            iconstar1="/iconstar.svg"
            iconstar2="/iconstar.svg"
            iconstar3="/iconstar1.svg"
            iconstar4="/iconstar1.svg"
            buttonroundedBackgroundColor="unset"
            buttonroundedBackgroundColor1="unset"
            buttonroundedBackgroundColor2="rgba(199, 195, 216, 0)"
            buttonroundedBackgroundColor3="unset"
          />
        </button>
        <button className={styles.starRating3} onClick={onStarRating3Click}>
          <div className={styles.fair}>FAIR:</div>
          <StarGroup
            iconstar="/iconstar.svg"
            iconstar1="/iconstar.svg"
            iconstar2="/iconstar1.svg"
            iconstar3="/iconstar1.svg"
            iconstar4="/iconstar1.svg"
            buttonroundedBackgroundColor="unset"
            buttonroundedBackgroundColor1="rgba(123, 97, 255, 0)"
            buttonroundedBackgroundColor2="unset"
            buttonroundedBackgroundColor3="unset"
          />
        </button>
        <button className={styles.starRating4} onClick={onStarRating4Click}>
          <div className={styles.needImprovement}>
            <span className={styles.needImprovementTxtContainer}>
              <p className={styles.need}>NEED</p>
              <p className={styles.need}>IMPROVEMENT:</p>
            </span>
          </div>
          <StarGroup
            iconstar="/iconstar.svg"
            iconstar1="/iconstar1.svg"
            iconstar2="/iconstar1.svg"
            iconstar3="/iconstar1.svg"
            iconstar4="/iconstar1.svg"
            buttonroundedBackgroundColor="rgba(123, 97, 255, 0)"
            buttonroundedBackgroundColor1="unset"
            buttonroundedBackgroundColor2="unset"
            buttonroundedBackgroundColor3="unset"
          />
        </button>
      </div>
    </div>
  );
};

export default Modal;
