import React from 'react';
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const FrontLayout = ({children}) => {
  return (
    <>
      <Header/>
      <div className="relative">{children}</div>
      <Footer/>
    </>
  );
};

export default FrontLayout;