import { classNames } from "@/helpers/classNames";
import Link from "next/link";
import React from 'react';

const HowItWorksItem = ({data}) => {
  return (
    <>
      <Link href={data.link} className="w-full z-[1] group flex">
        <div className="relative overflow-hidden flex flex-col rounded-xl shadow w-full bg-white border border-neutral-100 transition-all duration-300 group-hover:bg-magenta-100 group-hover:border-magenta-100 group-hover:shadow-xl">
          <div className="px-8 py-12 space-y-8 text-center">
            <div className="w-32 h-32 flex items-center justify-center rounded-full overflow-hidden mx-auto bg-magenta-100 text-7xl text-magenta-500 transition-all duration-300 group-hover:bg-white">
              <i className={classNames("fa-light fa-fw", data.icon)}></i>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl uppercase font-bold transition-all duration-300 group-hover:text-magenta-500">{data.title}</h4>
              <div className="w-full flex-shrink !leading-tight text-base font-medium">{data.description}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HowItWorksItem;