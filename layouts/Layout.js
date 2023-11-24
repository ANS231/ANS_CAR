import React from 'react';
import Head from "next/head";
import AuthLayout from "./auth/AuthLayout";
import FrontLayout from "./front/FrontLayout";

const Layout = ({ type, children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>Party Fixer | {pageTitle}</title>
      </Head>
      {type === "AuthLayout" && <AuthLayout pageTitle={pageTitle}>{children}</AuthLayout>}
      {type === "FrontLayout" && <FrontLayout pageTitle={pageTitle}>{children}</FrontLayout>}
    </>
  );
};

export default Layout;