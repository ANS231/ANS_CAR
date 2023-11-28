import React from 'react';
import HowItWorksItem from "../../items/HowItWorksItem";

const HomeHowItWorks = () => {
  const howItWorksData = {
    title:"See How <span class='text-magenta-500'>Partyfixers</span> Works",
    description:"<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</p>",
    howItWorks:[
      {
        icon:"fa-clipboard-list-check",
        title:"Post Quote",
        description:"Create your free job posting and start receiving Quotes",
        link:"/"
      },
      {
        icon:"fa-desktop",
        title:"Hire From Our Vendor",
        description:"Compare the quotes you receive and hire the best vendors professionals for the job.",
        link:"/"
      },
      {
        icon:"fa-chart-area",
        title:"Ger Work Done",
        description:"Decide on how and when payments will be made and use WorkRooms to collaborate, communicate and track work.",
        link:"/"
      },
    ]
  }
  
  return (
    <>
      <section className="relative py-20 z-0 bg-white overflow-hidden">
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          <div className="space-y-5 text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-black text-5xl uppercase font-bold leading-none tracking-tight" dangerouslySetInnerHTML={{__html:howItWorksData.title}}></h2>
            <div className="text-black text-xl font-medium !leading-normal" dangerouslySetInnerHTML={{__html:howItWorksData.description}}></div>
          </div>
          {howItWorksData.howItWorks.length > 0 &&
          <div className="grid grid-cols-3 gap-6">
            {howItWorksData.howItWorks.map((item, index) => (
              <HowItWorksItem key={index} data={item}/>
            ))}
          </div>
          }
        </div>
      </section>
    </>
  );
};

export default HomeHowItWorks;