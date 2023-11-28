import React from 'react';
import Image from "next/image";
import Button from "../../forms/Button";

import CTAImage from "../../../public/assets/images/bg-cta.webp";

const HomeCTA = () => {
  const ctaData = {
    image:CTAImage,
    title:"Trust Us With Your <span class='text-magenta-500 block'>Special Moments</span>",
    description:"<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>",
  }
  return (
    <>
      <section className="relative py-32 flex flex-col justify-center z-[1] bg-neutral-100">
        <div className="absolute shadow-inner top-0 left-0 z-[-1] w-full h-full rounded-br-[320px] overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950/90">
          <Image src={ctaData.image} alt="" fill={false} className="w-full h-full object-cover" />
        </div>
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          <div className="space-y-10 text-center max-w-6xl mx-auto">
            <h2 className="text-white text-5xl uppercase font-bold leading-none tracking-tight" dangerouslySetInnerHTML={{__html:ctaData.title}}></h2>
            <div className="text-white text-xl font-medium !leading-normal" dangerouslySetInnerHTML={{__html:ctaData.description}}></div>
            <div className="flex justify-center">
              <Button
                buttonEffect={"filled"}
                buttonClasses={"!px-10"}
                buttonLabel={"Request"}
                buttonLabelClasses={"whitespace-nowrap !text-lg font-semibold"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCTA;