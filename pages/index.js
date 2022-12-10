import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header/Header";
import BookGirl from "../assests/bookimage.png";
import React from "react";
import Link from "next/link";
// Pages
import About from "./about";
// icons
import Downarrow from "../Components/Icons/Downarrow";
import Button from "../Components/Small/Button";
import DropDownMenu from "../Components/Medium/DropDownMenu";
//css file
import styles from "../styles/Home.module.css";
import { RightArrow } from "../Components/Icons";
//next router
import { useRouter } from "next/router";

const BoardData = [
  { value: 1, title: "CBSE" },
  { value: 2, title: "PSEB" },
  { value: 3, title: "ICSE" },
];
const ClassData = [
  { value: 6, title: "6th" },
  { value: 7, title: "7th" },
  { value: 8, title: "8th" },
  { value: 9, title: "9th" },
  { value: 10, title: "10th" },
  { value: 11, title: "11th" },
  { value: 12, title: "12th" },
];

export default function Home() {
  const Router = useRouter();

  var Board = null,
    Class = null;

  // get the " select board " value
  function GetBoardValue(Value) {
    switch (Value) {
      case 1:
        Board = "cbse";
        break;
      case 2:
        Board = "pseb";
        break;
      case 3:
        Board = "icse";
        break;
      default:
        break;
    }
  }

  // get the " select class " value
  function GetClassValue(Value) {
    Class = Value;
  }

  const onButtonPress = () => {
    if (Board === null) {
      alert("Please select your board!");
    } else if (Class === null) {
      alert("Please select your class!");
    } else {
      Router.push(`/${Board}/${Class}`);
    }
  };

  return (
    <div>
      <Head>
        <title>HandyBooks</title>
      </Head>
      <div className={styles.maincontainer}>
        {/* text container */}
        <div className={styles.textcontainer}>
          <div className={styles.textcontainer_Title}>
            <a>Online Library</a>
          </div>
          <div className={styles.textcontainer_textdesc}>
            <a>
              Welcome to HandyBooks which have free book library
              <br /> for CBSE, ICSE, PSEB etc Board Books
            </a>
          </div>
          <div className={styles.textcontainer_options}>
            <div className={styles.option_cont}>
              <div className={styles.menucustom}>
                <DropDownMenu
                  data={BoardData}
                  text={"Select Board"}
                  getData={GetBoardValue}
                />
              </div>
              <div className={styles.menucustom}>
                <DropDownMenu
                  data={ClassData}
                  text={"Select Class"}
                  getData={GetClassValue}
                />
              </div>
            </div>
            <div className={styles.menucustom}>
              <Button
                onClick={onButtonPress}
                title={"Find Book"}
                isOrange={false}
                isShadow={false}
                istitlebold={false}
                isTextBlack={true}
              />
            </div>
          </div>
        </div>
        {/* Image container */}
        <div className={styles.imagecontainer}>
          <Image src={BookGirl}></Image>
        </div>
      </div>
    </div>
  );
}
