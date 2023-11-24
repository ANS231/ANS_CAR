import React from 'react';
import Image from "next/image";
import ServiceBoxItem from "../items/ServiceBoxItem";

import TextureTop from "../../public/assets/images/texture-top.webp";
import TextureBottom from "../../public/assets/images/texture-bottom.webp";
import ServiceImage1 from "../../public/assets/images/services-01.webp";
import ServiceImage2 from "../../public/assets/images/services-02.webp";
import ServiceImage3 from "../../public/assets/images/services-03.webp";
import ServiceImage4 from "../../public/assets/images/services-04.webp";
import ServiceImage5 from "../../public/assets/images/services-05.webp";
import ServiceImage6 from "../../public/assets/images/services-06.webp";


const HomeServices = () => {
  const servicesData = {
    title:"Explore Our <span class='text-magenta-500'>Services</span>",
    description:"<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</p>",
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
    ]
  }

  return (
    <>
      <section className="relative py-20 z-0 bg-neutral-100 overflow-hidden">
        <div className="absolute top-0 right-0 z-[-1]">
          <Image src={TextureTop} alt="" fill={false} className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 z-[-1]">
          <Image src={TextureBottom} alt="" fill={false} className="w-full h-full object-cover" />
        </div>
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          <div className="space-y-5 text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-black text-5xl uppercase font-bold leading-none tracking-tight" dangerouslySetInnerHTML={{__html:servicesData.title}}></h2>
            <div className="text-black text-xl font-medium !leading-normal" dangerouslySetInnerHTML={{__html:servicesData.description}}></div>
          </div>
          {servicesData.services.length > 0 &&
          <div className="grid grid-cols-3 gap-6">
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

export default HomeServices;