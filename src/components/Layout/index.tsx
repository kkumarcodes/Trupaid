import React, { Fragment, useEffect } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Loader from "../Loader";

export default function Layout({ children }: any) {
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getUserProfile());
  }, []);
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: 95 }}>
        <div id="456787654" className="layout">
          {children}
        </div>
      </main>
      <Footer />
      {/* <Dialog /> */}
      <Loader />
    </>
  );
}
