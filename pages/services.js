import React from 'react';
import Layout from "@/layouts/Layout";
import PageBanner from "@/components/sections/Shared/PageBanner";
import ServicesSection from "@/components/sections/Services/ServicesSection";

const Services = () => {
  return (
    <>
      <Layout type={"FrontLayout"} pageTitle={"Services"}>
        <PageBanner/>
        <ServicesSection/>
      </Layout>
    </>
  );
};

export default Services;