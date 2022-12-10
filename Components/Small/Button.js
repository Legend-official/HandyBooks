
import React from "react";
import styles from "./Button.module.css";

const Button = ({
  renderleft,
  renderright,
  title,
  onClick,
  istitlebold,
  isTextBlack,
  isOrange,
  isShadow,
}) => {
  return (
    <div
      onClick={onClick}
      className={
        isOrange
          ? isShadow
            ? `${styles.container} ${styles.orange} ${styles.showshadow}`
            : `${styles.container} ${styles.orange}`
          : isShadow
          ? `${styles.container} ${styles.notorange} ${styles.showshadow}`
          : `${styles.container} ${styles.notorange}`
      }
    >
      <div className={renderleft ? `${styles.leftlogo}` : `${styles.normal}`}>
        {renderleft}
      </div>
      <div
        className={
          istitlebold
            ? isTextBlack
              ? `${styles.title} ${styles.black}`
              : `${styles.title} ${styles.white}`
            : isTextBlack
            ? `${styles.black}`
            : `${styles.white}`
        }
      >
        {title}
      </div>
      <div className={renderright ? `${styles.rightlogo}` : `${styles.normal}`}>
        {renderright}
      </div>
    </div>
  );
};

export default Button;
