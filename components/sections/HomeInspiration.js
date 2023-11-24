import React from 'react';
import InspirationItem from "../items/InspirationItem";

const HomeInspiration = () => {
  const inspirationData = {
    title:"Find Inspiration For Any <span class='text-magenta-500 block'>Celebration</span>",
    description:"<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>",
    inspiration:[
      {
        icon:'fa-screen-users',
        title:"Conference And Meeting",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
        link:"/"
      },
      {
        icon:'fa-user-tie',
        title:"Trade Shows And Exhibitions",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
        link:"/"
      },
      {
        icon:'fa-jack-o-lantern',
        title:"Halloween Party",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
        link:"/"
      },
      {
        icon:'fa-rings-wedding',
        title:"Wedding Reception Events",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
        link:"/"
      },
      {
        icon:'fa-party-horn',
        title:"Fundraosers And Chairty",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
        link:"/"
      },
      {
        icon:'fa-apartment',
        title:"Concerts And Festivals",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
        link:"/"
      },
      {
        icon:'fa-sportsball',
        title:"Sports And Recreational",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
        link:"/"
      },
      {
        icon:'fa-cake-candles',
        title:"Birthday Parties And Celebrations",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
        link:"/"
      },
    ]
  }

  return (
    <>
      <section className="relative py-20 z-0 bg-neutral-100 overflow-hidden">
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          <div className="space-y-5 text-center max-w-8xl mx-auto mb-16">
            <h2 className="text-black text-5xl uppercase font-bold leading-none tracking-tight" dangerouslySetInnerHTML={{__html:inspirationData.title}}></h2>
            <div className="text-black text-xl font-medium !leading-normal" dangerouslySetInnerHTML={{__html:inspirationData.description}}></div>
          </div>
          {inspirationData.inspiration.length > 0 &&
          <div className="grid grid-cols-4 gap-6">
            {inspirationData.inspiration.map((item, index) => (
              <InspirationItem key={index} data={item}/>
            ))}
          </div>
          }
        </div>
      </section>
    </>
  );
};

export default HomeInspiration;