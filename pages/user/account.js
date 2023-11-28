import React from 'react';
import Layout from "@/layouts/Layout";
import AccountSection from "@/components/sections/User/AccountSection";

const Account = () => {
  return (
    <Layout type={"AuthLayout"} pageTitle={"Account"}>
      <AccountSection/>
    </Layout>
  );
};

export default Account;