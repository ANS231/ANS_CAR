import { classNames } from "@/helpers/classNames";
import React from 'react';

const HomeAbout = () => {

  const aboutData = {
    title:"Plan, book, celebrate—with <span class='text-magenta-500 block'>Confidence</span>",
    description:"<p>Our event booking platform revolutionizes the way you plan and organize events. Whether you’re hosting a corporate conference, a music festival, a wedding, or any other type of gathering, our platform provides a seamless and efficient experience from start to finish.</p>",
    features:[
      { icon:"fa-badge-check", label:"Trusted"},
      { icon:"fa-credit-card", label:"Booking Platform"},
      { icon:"fa-calendar-check", label:"Success Events"},
      { icon:"fa-star", label:"Top-Rated Service"},
    ]
  }

  return (
    <>
      <section className="relative !pt-40 py-20 z-0">
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          <div className="flex items-center gap-20 justify-between max-w-6xl mx-auto">
            <div className="w-2/3 flex-shrink gap-5">
              <div className="space-y-8">
                <h2 className="text-black text-5xl uppercase font-bold leading-none tracking-tight" dangerouslySetInnerHTML={{__html:aboutData.title}}></h2>
                <div className="text-black text-xl font-medium !leading-normal" dangerouslySetInnerHTML={{__html:aboutData.description}}></div>
              </div>
            </div>
            <div className="w-1/3 flex-shrink-0">
              {aboutData.features.length > 0 &&
              <div className="flex flex-wrap justify-end gap-5">
                {aboutData.features.map((item, index) => (
                <div className="relative aspect-square w-40 flex" key={index}>
                  <div className="relative w-full flex flex-col py-6 px-4 items-center text-center bg-white shadow-md border border-slate-100 rounded-lg overflow-hidden hover:bg-magenta-500 hover:border-magenta-500 group transition-all duration-200">
                    <div className="text-5xl text-magenta-500 my-auto group-hover:text-white transition-all duration-200"><i className={classNames("fa-light fa-fw", item.icon)}></i></div>
                    <div className="text-base uppercase font-semibold text-black !leading-none mt-auto group-hover:text-white transition-all duration-200">{item.label}</div>
                  </div>
                </div>
                ))}
              </div>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;