import styles from "./Footer.module.css";
import dentist from "../../assets/dentist.svg";
import bloodtest from "../../assets/bloodtest.svg";
import cardiology from "../../assets/cardiology.svg";
import labrotary from "../../assets/labrotary.svg";
import mri from "../../assets/mri.svg";
import piscologist from "../../assets/piscologist.svg";
import xray from "../../assets/x-ray.svg";
import primaryCare from "../../assets/primaryCare.svg";
import patientimage from "../../assets/patientCaring.svg";
import tick from "../../assets/tick.svg";
import group_1 from "../../assets/group_1.svg";

import Card from "../Card/Card";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.specialization}>
        <div>
          <span className={styles.heading}>Find By Specialisation</span>
        </div>
        <div className={styles.specialGrid}>
          <div>
            <img src={dentist} alt="" />
          </div>
          <div>
            <img src={primaryCare} alt="" />
          </div>
          <div>
            <img src={cardiology} alt="" />
          </div>
          <div>
            <img src={mri} alt="" />
          </div>
          <div>
            <img src={bloodtest} alt="" />
          </div>
          <div>
            <img src={piscologist} alt="" />
          </div>
          <div>
            <img src={labrotary} alt="" />
          </div>
          <div>
            <img src={xray} alt="" />
          </div>
        </div>
        <button>View All</button>
      </div>
      <div className={styles.medicalSpecialist}>
        <div>
          <span className={styles.heading}>Our Medical Specialist</span>
        </div>
        <div className={styles.swiper}></div>
        <div></div>
      </div>

      {/* --------------- */}

      <div className={styles.patientcaring}>
        <div className={styles.patientImg}>
          <img src={patientimage} alt="image" />
        </div>
        <div className={styles.pateintText}>
          <div className={styles.heading_1}>
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </div>
          <div className={styles.heading_2}>
            <span>Patient</span>
            <span> Caring</span>
          </div>
          <div className={styles.patientPara}>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </div>
          <div className={styles.highlights}>
            <div>
              <span className={styles.tickImage}>
                <img src={tick} alt="image" />
              </span>
              <span className={styles.highlightsText}>
                Stay Updated About Your Health
              </span>
            </div>
            <div>
              <span className={styles.tickImage}>
                <img src={tick} alt="image" />
              </span>
              <span className={styles.highlightsText}>
                Check Your Results Online
              </span>
            </div>
            <div>
              <span className={styles.tickImage}>
                <img src={tick} alt="image" />
              </span>
              <span className={styles.highlightsText}>
                Manage Your Appointments
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* -------------- */}
      <div className={styles.newsSection}>
        <div className={styles.newsHeading}>
          <div className={styles.newsSubHeading}>Blog & News</div>
          <div className={styles.newsMainHeading}>Read Our Latest News</div>
        </div>
        <div className={styles.cardSection}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/* ---families section */}
      <div className={styles.families}>
        <div className={styles.familiesText}>
          <div className={styles.familiesSubHeading}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </div>
          <div className={styles.familiesMainHeading}>Our Families</div>
          <div className={styles.familiesPara}>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </div>
        </div>
        <div className={styles.familiesImg}>
          <img src={group_1} alt="image" />
        </div>
      </div>
      {/* ------------------ */}
      <div className="faqs"></div>
      <div className="medifyApp"></div>
      <div className="mainFooter"></div>
    </div>
  );
};

export default Footer;
