import React from 'react';
import Image from "next/image";
import ServiceBoxItem from "../../items/ServiceBoxItem";

import TextureTop from "../../../public/assets/images/texture-top.webp";
import TextureBottom from "../../../public/assets/images/texture-bottom.webp";
import ServiceImage1 from "../../../public/assets/images/services-01.webp";
import ServiceImage2 from "../../../public/assets/images/services-02.webp";
import ServiceImage3 from "../../../public/assets/images/services-03.webp";
import ServiceImage4 from "../../../public/assets/images/services-04.webp";
import ServiceImage5 from "../../../public/assets/images/services-05.webp";
import ServiceImage6 from "../../../public/assets/images/services-06.webp";
import ServiceImage7 from "../../../public/assets/images/services-07.webp";
import ServiceImage8 from "../../../public/assets/images/services-08.webp";

const ServicesSection = () => {
  const servicesData = {
    services:[
      {
        image:ServiceImage1,
        title:"DJ Party Event",
        description:"It is a long established fact that a reader will be distracted by the readable content",
        link:"/"
      },
      {
        image:ServiceImage2,
        title:"Live Music Party Event",
        description:"It is a long established fact that a reader will be distracted by the readable content",
        link:"/"
      },
      {
        image:ServiceImage3,
        title:"Speakers",
        description:"It is a long established fact that a reader will be distracted by the readable content",
        link:"/"
      },
      {
        image:ServiceImage4,
        title:"Variety Acts",
        description:"It is a long established fact that a reader will be distracted by the readable content",
        link:"/"
      },
      {
        image:ServiceImage5,
        title:"Event Services",
        description:"It is a long established fact that a reader will be distracted by the readable content",
        link:"/"
      },
      {
        image:ServiceImage6,
        title:"Party Rentals",
        description:"It is a long established fact that a reader will be distracted by the readable content",
        link:"/"
      },
      {
        image:ServiceImage7,
        title:"Conferences",
        description:"It is a long established fact that a reader will be distracted by the readable content",
        link:"/"
      },
      {
        image:ServiceImage8,
        title:"Others",
        description:"It is a long established fact that a reader will be distracted by the readable content",
        link:"/"
      },
    ]
  }

  return (
    <>
      <section className="relative py-20 z-0 bg-neutral-100 overflow-hidden">
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          {servicesData.services.length > 0 &&
          <div className="grid grid-cols-4 gap-6">
            {servicesData.services.map((item, index) => (
              <ServiceBoxItem key={index} data={item}/>
            ))}
          </div>
          }
        </div>
      </section>
    </>
  );
};

export default ServicesSection;