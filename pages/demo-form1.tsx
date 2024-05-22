import type { NextPage } from "next";
import Form from "../components/form";
import GroupComponent from "../components/group-component";
import styles from "./demo-form1.module.css";

const DemoForm1: NextPage = () => {
  return (
    <div className={styles.demoForm1}>
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
          <div className={styles.activeEnterprisesExtraordinContainer}>
            <p className={styles.activeEnterprises}>
              <b>Active Enterprises</b>
            </p>
            <p className={styles.extraordinaryChoice}>“Extraordinary Choice”</p>
          </div>
        </div>
        <Form />
      </div>
      <GroupComponent />
    </div>
  );
};

export default DemoForm1;

