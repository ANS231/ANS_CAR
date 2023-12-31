import React from 'react';
import Layout from "@/layouts/Layout";
import PageBanner from "@/components/sections/Shared/PageBanner";
import ServicesSection from "@/components/sections/Services/ServicesSection";
import BannerImage from "../public/assets/images/banner.webp";

const Services = () => {
  const bannerData = {
    image:BannerImage,
    title:"Speakers",
    subtitle:"It is a long established fact that a reader",
  }
  return (
    <>
      <Layout type={"FrontLayout"} pageTitle={"Services"}>
        <PageBanner data={bannerData}/>
        <ServicesSection/>
      </Layout>
    </>
  );
};

export default Services;