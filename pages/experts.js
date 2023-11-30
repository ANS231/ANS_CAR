import React from 'react';
import Layout from "@/layouts/Layout";
import PageBanner from "@/components/sections/Shared/PageBanner";
import BannerImage from "../public/assets/images/bg-experts.webp";
import ExpertsSection from "@/components/sections/Experts/ExpertsSection";

const Experts = () => {
  const bannerData = {
    image:BannerImage,
    title:"Expert Vendors",
    subtitle:"It is a long established fact that a reader",
  }
  return (
    <>
      <Layout type={"FrontLayout"} pageTitle={"Services"}>
        <PageBanner data={bannerData}/>
        <ExpertsSection/>
      </Layout>
    </>
  );
};

export default Experts;