import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ServiceBoxItem = ({data}) => {
  return (
    <>
      <Link href={data.link} className="w-full z-[1] group">
        <div className="relative overflow-hidden flex flex-col aspect-square rounded-xl transition-all duration-300 group-hover:shadow-xl">
          <div className="absolute w-full h-full top-0 left-0 z-[-1] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t from-slate-950/80 via-slate-950/50 transition-all duration-300 group-hover:scale-110 group-hover:grayscale">
            <Image src={data.image} alt={data.title} fill={false} className="w-full h-full object-cover" />
          </div>
          <div className="text-white px-8 py-8 mt-auto space-y-2">
            <h4 className="text-3xl uppercase font-bold transition-all duration-300 group-hover:text-magenta-500">{data.title}</h4>
            <div className="flex items-center gap-10">
              <div className="w-full flex-shrink !leading-tight text-base font-medium">{data.description}</div>
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-magenta-500 flex justify-center items-center"><i className="fa-light fa-fw fa-chevron-right"></i></div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ServiceBoxItem;