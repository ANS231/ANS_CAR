import React from 'react';
import Search from "@/components/forms/Search";
import SortDropdown from "@/components/forms/SortDropdown";

const FilterContent = () => {
  const sortData = [
    { label:"Default", icon:"fa-regular fa-bars-sort", click: {} },
    { label:"Oldest to Newest", icon:"fa-regular fa-arrow-down-wide-short", click: {} },
    { label:"Newest to Oldest", icon:"fa-regular fa-arrow-up-short-wide", click: {} },
    { label:"Chronological", icon:"fa-regular fa-arrow-down-a-z", click: {} },
    { label:"Chronological", icon:"fa-regular fa-arrow-down-z-a", click: {} },
  ]

  return (
    <>
      <div className="relative bg-white py-4 px-5 rounded-lg shadow">
        <div className="pb-2 mb-4 border-b border-slate-200">
          <h3 className="text-xl font-semibold">Filters</h3>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <Search
              placeholder={"What are you searching for?"}
            />
          </div>
          <div className="col-span-8">
            <div className="flex justify-end">
              <SortDropdown
                icon={"fa-light fa-bars-sort"}
                label={"Sort"}
                xPlacement={"right"}
                data={sortData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterContent;