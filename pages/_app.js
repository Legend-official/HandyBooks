import "../styles/globals.css";
import React from "react";
// pages
import Header from "../Components/Header/Header";
//progressbar
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../styles/Nprogress.css"; //styles of nprogress
//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <div className="mainpage">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
