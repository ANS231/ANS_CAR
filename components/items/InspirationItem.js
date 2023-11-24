import React from 'react';
import Link from "next/link";
import { classNames } from "@/helpers/classNames";


const InspirationItem = ({data}) => {
  return (
    <>
      <Link href={data.link} className="w-full z-[1] group flex">
        <div className="relative overflow-hidden flex flex-col rounded-xl shadow w-full bg-white border border-neutral-100 transition-all duration-300 group-hover:bg-magenta-500 group-hover:border-magenta-500 group-hover:shadow-xl">
          <div className="px-8 py-12 space-y-8 text-center">
            <div className="flex items-center justify-center mx-auto text-6xl text-magenta-500 transition-all duration-300 group-hover:text-white">
              <i className={classNames("fa-thin fa-fw", data.icon)}></i>
            </div>
            <div className="space-y-3 text-black group-hover:text-white">
              <h4 className="text-2xl !leading-none uppercase font-bold transition-all duration-300">{data.title}</h4>
              <div className="w-full flex-shrink !leading-tight text-base font-medium transition-all duration-300">{data.description}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default InspirationItem;