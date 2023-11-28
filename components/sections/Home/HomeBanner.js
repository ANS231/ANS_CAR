import React from 'react';
import Image from "next/image";
import SearchWithDropdown from "../../forms/SearchWithDropdown";
import Button from "../../forms/Button";

import BannerImage from "../../../public/assets/images/banner.webp";
import User01 from "../../../public/assets/images/user-01.webp";
import User02 from "../../../public/assets/images/user-02.webp";
import User03 from "../../../public/assets/images/user-03.webp";
import User04 from "../../../public/assets/images/user-04.webp";
import User05 from "../../../public/assets/images/user-05.webp";

const HomeBanner = () => {
  const bannerData = {
    image:BannerImage,
    title:"Find the right <span class='block text-8xl leading-none tracking-tight'>Event <span class='text-magenta-500'>Planner</span></span>",
    subtitle:"to fit your party needs",
    description:"<p>Our event booking platform revolutionizes the way you plan and organize events. Whether you’re hosting a corporate conference, a music festival, a wedding, or any other type of gathering, our platform provides a seamless and efficient experience from start to finish.</p>",
    searchTitle:"Looking for a vendor or entertainer?"
  }
  const dropdownData = [
    {
      _id:1,
      type:"organiser",
      title:"Richard C. Gormley",
      image:User01,
      link:"/"
    },
    {
      _id:2,
      type:"organiser",
      title:"Charles P. Dittrich",
      image:User02,
      link:"/"
    },
    {
      _id:3,
      type:"organiser",
      title:"Calvin M. Sussman",
      image:User03,
      link:"/"
    },
    {
      _id:4,
      type:"organiser",
      title:"Billy M. Ramon",
      image:User04,
      link:"/"
    },
    {
      _id:5,
      type:"organiser",
      title:"Ryan D. Augustus",
      image:User05,
      link:"/"
    },
    {
      _id:6,
      type:"event",
      title:"Dj Party",
      icon:"fa-compact-disc",
      link:"/"
    },
    {
      _id:7,
      type:"event",
      title:"Live Music Party",
      icon:"fa-guitar-electric",
      link:"/"
    },
    {
      _id:8,
      type:"event",
      title:"Speakers",
      icon:"fa-trumpet",
      link:"/"
    },
    {
      _id:9,
      type:"event",
      title:"Variety Act",
      icon:"fa-people-pulling",
      link:"/"
    },
    {
      _id:10,
      type:"event",
      title:"Events Services",
      icon:"fa-party-horn",
      link:"/"
    },
  ]
  return (
    <>
      <section className="relative h-screen py-32 flex flex-col justify-center z-[1]">
        <div className="absolute shadow-inner top-0 left-0 z-[-1] w-full h-full rounded-bl-[320px] overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950/60">
          <Image src={bannerData.image} alt="" fill={false} className="w-full h-full object-cover" />
        </div>
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          <div className="w-1/2 space-y-4">
            <h1 className="text-white text-5xl uppercase font-bold leading-none" dangerouslySetInnerHTML={{__html:bannerData.title}}></h1>
            <h3 className="text-white text-4xl uppercase font-semibold leading-none" dangerouslySetInnerHTML={{__html:bannerData.subtitle}}></h3>
            <div className="text-xl text-white" dangerouslySetInnerHTML={{__html:bannerData.description}}></div>
          </div>
        </div>
        <div className="absolute bottom-0 translate-y-1/2 left-0 w-full">
          <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
            <div className="w-3/4 rounded-lg mx-auto bg-white py-6 px-6 shadow-lg space-y-4">
              <h4 className="text-black text-2xl font-semibold" dangerouslySetInnerHTML={{__html:bannerData.searchTitle}}></h4>
              <div className="flex items-center gap-10">
                <div className="w-full flex-shrink">
                  <SearchWithDropdown
                    divClasses={"!border-slate-100 !bg-slate-100"}
                    iconPosition={"right"}
                    iconClasses={"!text-black !bg-slate-100"}
                    placeholder={"What event are you searching for?"}
                    dropdownData={dropdownData}
                  />
                </div>
                <div className="flex items-center justify-center flex-shrink-0">
                  <div className="uppercase font-semibold text-black text-xl">or</div>
                </div>
                <div className="flex items-center justify-center flex-shrink-0">
                  <Button
                    buttonEffect={"filled"}
                    buttonClasses={"!px-10"}
                    buttonLabel={"Post an Event"}
                    buttonLabelClasses={"whitespace-nowrap !text-lg font-semibold"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;