import React from "react";
import Head from "next/head";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className={styles.main}>
        {/* left cont*/}
        <div className={styles.contactus}>
          <span className={styles.contacttitle}>Contact Us</span>
          <span className={styles.contactdesc}>
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the department email you'd like to contact below.
          </span>
        </div>
        {/* right cont */}
        <div className={styles.contactus_form}>
          <div className={styles.sub_contactus_form}>
            <div className={styles.fieldcontainers}>
              <span className={styles.titlefield}>FullName*:</span>
              <input className={styles.inputfield}></input>
            </div>
            <div className={styles.fieldcontainers}>
              <span className={styles.titlefield}>Title*:</span>
              <input className={styles.inputfield}></input>
            </div>
            <div className={styles.fieldcontainers}>
              <span className={styles.titlefield}>Email*:</span>
              <input className={styles.inputfield}></input>
            </div>
            <div className={styles.fieldcontainers}>
              <span className={styles.titlefield}>
                What can we help you with? *:
              </span>
              <textarea className={styles.inputparafield}></textarea>
            </div>
            <div className={styles.fieldcontainers}>
              <button className={`${styles.contactbtn} ${styles.noselect}`}>
                <span>Contact Now!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
