import React from 'react';
import ServiceBoxItem from "@/components/items/ServiceBoxItem";
import Search from "@/components/forms/Search";

const ServicesTabContent = ({title, data}) => {
  return (
    <>
      <div className="space-y-6 pt-4">
        <h2 className="text-3xl font-bold text-black">{title}</h2>
        <div className="space-y-10">
        <Search
          placeholder={"What are you searching for?"}
        />
        {data?.length > 0 &&
        <div className="grid grid-cols-4 gap-6">
          {data?.map((item, index) => (
            <ServiceBoxItem key={index} data={item}/>
          ))}
        </div>
        }
      </div>
      </div>
    </>
  );
};

export default ServicesTabContent;