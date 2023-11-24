import Layout from "@/layouts/Layout";
import HomeBanner from "@/components/sections/HomeBanner";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeServices from "@/components/sections/HomeServices";
import HomeHowItWorks from "@/components/sections/HomeHowItWorks";
import HomeCTA from "@/components/sections/HomeCTA";
import HomeInspiration from "@/components/sections/HomeInspiration";
import HomeEvents from "@/components/sections/HomeEvents";

export default function Home() {
  return (
    <>
      <Layout type={"FrontLayout"} pageTitle={"Home"}>
        <HomeBanner/>
        <HomeAbout/>
        <HomeServices/>
        <HomeHowItWorks/>
        <HomeCTA/>
        <HomeInspiration/>
        <HomeEvents/>
      </Layout>
    </>
  )
}