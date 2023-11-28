import SettingsSection from "@/components/sections/User/SettingsSection";
import Layout from "@/layouts/Layout";
import React from 'react';

const Settings = () => {
  return (
    <>
      <Layout type={"AuthLayout"} pageTitle={"Settings"}>
        <SettingsSection/>
      </Layout>
    </>
  );
};

export default Settings;