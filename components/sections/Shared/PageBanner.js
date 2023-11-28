import React from 'react';
import Image from "next/image";

import BannerImage from "../../../public/assets/images/banner.webp";

const PageBanner = () => {
  const bannerData = {
    image:BannerImage,
    title:"Speakers",
    subtitle:"It is a long established fact that a reader",
  }
  return (
    <>
      <section className="relative h-[480px] py-32 pt-60 flex flex-col justify-center z-[1]">
        <div className="absolute shadow-inner top-0 left-0 z-[-1] w-full h-full rounded-bl-[240px] overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950/60">
          <Image src={bannerData.image} alt="" fill={false} className="w-full h-full object-cover" />
        </div>
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          <div className="w-1/2 space-y-4">
            <h1 className="text-white text-6xl uppercase font-bold leading-none" dangerouslySetInnerHTML={{__html:bannerData.title}}></h1>
            <h3 className="text-white text-2xl uppercase font-semibold leading-none" dangerouslySetInnerHTML={{__html:bannerData.subtitle}}></h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageBanner;