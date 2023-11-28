import React from 'react';
import Image from "next/image";
import EventItem from "../../items/EventItem";
import TextureTop from "../../../public/assets/images/texture-top.webp";
import TextureBottom from "../../../public/assets/images/texture-bottom.webp";
import EventImage1 from "../../../public/assets/images/events-01.webp";
import EventImage2 from "../../../public/assets/images/events-02.webp";
import EventImage3 from "../../../public/assets/images/events-03.webp";
import EventImage4 from "../../../public/assets/images/events-04.webp";
import EventImage5 from "../../../public/assets/images/events-05.webp";


const HomeEvents = () => {
  const eventsData = {
    title:"Get Ready For <span class='text-magenta-500'>Your Next Event</span>",
    description:"<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>",
    events:[
      {
        image:EventImage1,
        title:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less ",
        link:"/",
        date:{
          day:"18",
          month:"Jun"
        }
      },
      {
        image:EventImage2,
        title:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less ",
        link:"/",
        date:{
          day:"18",
          month:"Jun"
        }
      },
      {
        image:EventImage3,
        title:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less ",
        link:"/",
        date:{
          day:"18",
          month:"Jun"
        }
      },
      {
        image:EventImage4,
        title:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less ",
        link:"/",
        date:{
          day:"18",
          month:"Jun"
        }
      },
      {
        image:EventImage2,
        title:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less ",
        link:"/",
        date:{
          day:"18",
          month:"Jun"
        }
      },
      {
        image:EventImage5,
        title:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less ",
        link:"/",
        date:{
          day:"18",
          month:"Jun"
        }
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
            <h2 className="text-black text-5xl uppercase font-bold leading-none tracking-tight" dangerouslySetInnerHTML={{__html:eventsData.title}}></h2>
            <div className="text-black text-xl font-medium !leading-normal" dangerouslySetInnerHTML={{__html:eventsData.description}}></div>
          </div>
          {eventsData.events.length > 0 &&
          <div className="grid grid-cols-3 gap-6">
            {eventsData.events.map((item, index) => (
              <EventItem key={index} data={item}/>
            ))}
          </div>
          }
        </div>
      </section>
    </>
  );
};

export default HomeEvents;