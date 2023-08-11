import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import SSRProvider from 'react-bootstrap/SSRProvider';
// import { useDispatch } from "react-redux";
// import { getUserProfile } from "../../store/actions";
import Navigation from "../Navigation";
import Footer from "../Footer";
import AlertBanner from "../AlertBanner";
import Dialog from "../Dialog";
import Loader from "../Dialog/Loader";
import SubDialog from "../Dialog/SubDialog";

export default function Layout({ children }) {
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getUserProfile());
  }, []);
  return (
    <SSRProvider>
      <Helmet>
        {/* <meta name="icon" href="/light-mode-royal-PNG-fallback.png" /> */}
        <meta charSet="utf-8" />
        <title>Opalvest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Helmet>
      <Navigation />
      <AlertBanner />
      <main style={{ paddingTop: 95 }}>
        <div id="456787654" className="layout">
          {children}
        </div>
      </main>
      <Footer />
      <Dialog />
      <SubDialog />
      <Loader />
    </SSRProvider>
  );
}
