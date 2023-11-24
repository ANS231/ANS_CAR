import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Button from "../forms/Button";

const EventItem = ({data}) => {
  return (
    <>
      <Link href={data.link} className="w-full z-[1] group">
        <div className="relative overflow-hidden flex flex-col rounded-xl bg-white shadow transition-all duration-300 group-hover:shadow-xl">
          <div className="relative w-full aspect-[5/3] overflow-hidden">
            {data.date &&
              <div className="absolute z-[1] top-4 left-4 w-12 h-12 flex flex-col items-center justify-center text-center bg-magenta-500 text-white font-semibold  uppercase rounded-full">
                <span className="block text-lg !leading-none">{data.date?.day}</span>
                <span className="block text-xs !leading-none">{data.date?.month}</span>
              </div>
            }
            <Image src={data.image} alt={data.title} fill={false} className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:grayscale" />
          </div>
          <div className="px-6 py-6 mt-auto space-y-4">
            <h4 className="text-xl !leading-tight font-bold transition-all duration-300 group-hover:text-magenta-500">{data.title}</h4>
            <div className="w-full flex-shrink !leading-tight text-base font-medium">{data.description}</div>
            <div className="flex items-center pt-4">
              <Button
                buttonEffect={"hollow"}
                buttonClasses={"!px-6 !text-magenta-500 !h-10"}
                buttonLabel={"Read More"}
                buttonLabelClasses={"whitespace-nowrap !text-lg font-semibold"}
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default EventItem;