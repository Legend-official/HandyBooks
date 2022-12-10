import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
import booklogo from "../../assests/Book.png";
import Link from "next/link";
import { ThreeLines } from "../Icons";
import { useState } from "react";
export default function BottomNav() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.main_header}>
      {/* header logo  */}
      <Link href="/">
        <div className={styles.headerlogo}>
          <div className={styles.logo}>
            <Image src={booklogo}></Image>
          </div>
          <span className={styles.logoname}>HandyBooks</span>
        </div>
      </Link>
      {/* container for aboutus,questions,contactus */}
      <div className={styles.checkcont}>
        <div className={styles.header_buttons}>
          <Link href="/about">
            <span className={styles.headerbtn_link}>About Us</span>
          </Link>
          <Link href="/questionbank">
            <span className={styles.headerbtn_link}>Question Papers</span>
          </Link>
          <Link href="/contact">
            <span className={styles.headerbtn_link}>Contact Us</span>
          </Link>
        </div>
        <div className={styles.dropdown} onClick={() => setShow(!show)}>
          <ThreeLines h={20} w={20}></ThreeLines>
          {/* dropdown menu */}
          <div className={show ? `${styles.dropdowncontainer} ${styles.slideleft}` : ``}>
            <Link href="/">
              <span className={show ? `` : `${styles.dontshow}`}>
                {"> Home"}
              </span>
            </Link>
            <hr className={show ? `${styles.hr}` : `${styles.dontshow}`}></hr>
            <Link href="/about">
              <span className={show ? `` : `${styles.dontshow}`}>
                {"> About Us"}
              </span>
            </Link>
            <hr className={show ? `${styles.hr}` : `${styles.dontshow}`}></hr>
            <Link href="/questionbank">
              <span className={show ? `` : `${styles.dontshow}`}>
                {"> Question Papers"}
              </span>
            </Link>
            <hr className={show ? `${styles.hr}` : `${styles.dontshow}`}></hr>
            <Link href="/contact">
              <span className={show ? `` : `${styles.dontshow}`}>
                {"> Contact Us"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
