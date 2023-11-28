import Layout from "@/layouts/Layout";
import HomeBanner from "@/components/sections/Home/HomeBanner";
import HomeAbout from "@/components/sections/Home/HomeAbout";
import HomeServices from "@/components/sections/Home/HomeServices";
import HomeHowItWorks from "@/components/sections/Home/HomeHowItWorks";
import HomeCTA from "@/components/sections/Home/HomeCTA";
import HomeInspiration from "@/components/sections/Home/HomeInspiration";
import HomeEvents from "@/components/sections/Home/HomeEvents";

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