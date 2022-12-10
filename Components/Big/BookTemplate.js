import React from "react";
//css file
import styles from "./BookTemplate.module.css";
// next/image
import Image from "next/image";
//image
import BookImage from "./noimage.jpg";
import { accordionDetailsClasses } from "@mui/material";

const BookTemplate = (props) => {
  return (
    <div className={styles.bookcontainer}>
      <div className={styles.image}>
        <Image
          className={styles.imagecover}
          src={
            props.image ? props.image : BookImage
          }
          width="160px"
          height="200px"
        />
      </div>
      <div className={styles.title}>
        <span>{props.title ? props.title: "NotProvided"}</span>
      </div>
      <div className={styles.desc}>

        <span>{props.desc ? props.desc : "NotProvided"}</span>
      </div>
    </div>
  );
};

export default BookTemplate;
