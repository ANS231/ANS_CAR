import React from 'react';
import Image from "next/image";
import Tabs from "@/components/elements/Tabs";
import ServicesTabContent from "./ServicesTabContent";

import ServiceImage1 from "../../../public/assets/images/services-01.webp";
import ServiceImage2 from "../../../public/assets/images/services-02.webp";
import ServiceImage3 from "../../../public/assets/images/services-03.webp";
import ServiceImage4 from "../../../public/assets/images/services-04.webp";
import ServiceImage5 from "../../../public/assets/images/services-05.webp";
import ServiceImage6 from "../../../public/assets/images/services-06.webp";
import ServiceImage7 from "../../../public/assets/images/services-07.webp";
import ServiceImage8 from "../../../public/assets/images/services-08.webp";



const ServicesSection = () => {
  const servicesData = [
    {
      image: ServiceImage1,
      title: "DJ Party Event",
      description: "It is a long established fact that a reader will be distracted by the readable content",
      link: "/"
    },
    {
      image: ServiceImage2,
      title: "Live Music Party Event",
      description: "It is a long established fact that a reader will be distracted by the readable content",
      link: "/"
    },
    {
      image: ServiceImage3,
      title: "Speakers",
      description: "It is a long established fact that a reader will be distracted by the readable content",
      link: "/"
    },
    {
      image: ServiceImage4,
      title: "Variety Acts",
      description: "It is a long established fact that a reader will be distracted by the readable content",
      link: "/"
    },
    {
      image: ServiceImage5,
      title: "Event Services",
      description: "It is a long established fact that a reader will be distracted by the readable content",
      link: "/"
    },
    {
      image: ServiceImage6,
      title: "Party Rentals",
      description: "It is a long established fact that a reader will be distracted by the readable content",
      link: "/"
    },
    {
      image: ServiceImage7,
      title: "Conferences",
      description: "It is a long established fact that a reader will be distracted by the readable content",
      link: "/"
    },
    {
      image: ServiceImage8,
      title: "Others",
      description: "It is a long established fact that a reader will be distracted by the readable content",
      link: "/"
    },
  ]

  const tabData = [
    { 
      _id: 1,
      name: "DJ Party Event",
      component: <ServicesTabContent title={"DJ Party Event"} data={servicesData} />
    },
    { 
      _id: 2,
      name: "Live Music Party Event",
      component: <ServicesTabContent title={"Live Music Party Event"} data={servicesData} />
    },
    { 
      _id: 3,
      name: "Speakers",
      component: <ServicesTabContent title={"Speakers"} data={servicesData} />
    },
    { 
      _id: 4,
      name: "Variety Acts",
      component: <ServicesTabContent title={"Variety Acts"} data={servicesData} />
    },
    { 
      _id: 5,
      name: "Event Services",
      component: <ServicesTabContent title={"Event Services"} data={servicesData} />
    },
    { 
      _id: 6,
      name: "Party Rentals",
      component: <ServicesTabContent title={"Party Rentals"} data={servicesData} />
    },
    { 
      _id: 7,
      name: "Conferences",
      component: <ServicesTabContent title={"Conferences"} data={servicesData} />
    },
    { 
      _id: 8,
      name: "Others",
      component: <ServicesTabContent title={"Others"} data={servicesData} />
    },
  ]

  return (
    <>
      <section className="relative py-20 z-0 bg-neutral-100 overflow-hidden">
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          <div className="relative">
            <Tabs
              tabs={tabData}
              navTabClass={""}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;