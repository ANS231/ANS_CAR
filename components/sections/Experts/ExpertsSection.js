import React, { useState } from 'react';
import FilterContent from "./FilterContent";
import Button from "@/components/forms/Button";
import { classNames } from "@/helpers/classNames";

const ExpertsSection = () => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <>
      <section className="relative py-20 z-0 bg-neutral-100 overflow-hidden">
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          <div className="relative">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-black">Over 250+ Experts at your service</h2>
              <div className="ml-auto">
                <Button
                  buttonClasses={classNames("border border-slate-200 !px-3", isFilter?"!bg-magenta-500 !text-white":"!bg-white !text-black")}
                  buttonLabel={"Filters"}
                  buttonLabelClasses={"font-semibold text-lg !leading-none !transition-none"}
                  buttonIcon={"fa-regular fa-sliders"}
                  buttonIconPosition={"left"}
                  buttonFunction={() => setIsFilter(!isFilter)}
                />
              </div>
            </div>
            <FilterContent/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpertsSection;