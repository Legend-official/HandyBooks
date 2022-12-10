import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./bookid.module.css";
import data from "../../Data/BookData.json";
// component
import BookTemplate from "../../Components/Big/BookTemplate";

const BookData = () => {
  const Router = useRouter();
  const Classid = Router.query.bookid;
  if (Classid < 6) {
    Router.push("/");
  } else if (Classid > 12) {
    Router.push("/");
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div>
            <span className={styles.cbsebook_title}>
              {`${Classid}`}th CBSE Books:
            </span>
          </div>
          <div className={styles.bookscontainer}>
            {data[Classid - 6]?.length === 0 ? (
              <span className={styles.nobook}>
                No Books Avaibable at this time! comeback later
              </span>
            ) : (
              data[Classid - 6]?.map((item,index) => {
                return (
                  <BookTemplate
                    key={index}
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default BookData;
