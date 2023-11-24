import React from 'react';
import Image from "next/image";
import { classNames } from "../../helpers/classNames";

const ImageUploader = ({
  label,
  labelClasses,

}) => {
  return (
    <>
      {label &&
        <div className={classNames("text-sm font-medium text-slate-950 mb-1", labelClasses)}>{label}</div>
      }
      <div className="flex flex-wrap gap-4 pt-2">
        <div className="relative">
          <div className="relative w-16 h-16 overflow-hidden border border-slate-200 bg-white rounded-md">
            <Image src={"/assets/images/aa.jpg"} fill={true} alt='' sizes={"(max-width: 768px) 64px"} className='object-cover'/>
          </div>
          <button type="button" className="w-5 h-5 rounded-full bg-white shadow absolute -top-2.5 -right-2.5 text-red-500 text-sm">
            <i className="fa-regular fa-fw fa-xmark"></i>
          </button>
        </div>
        <div className="relative">
          <div className="relative w-16 h-16 overflow-hidden border border-slate-200 bg-white rounded-md">
            <Image src={"/assets/images/aa.jpg"} fill={true} alt='' sizes={"(max-width: 768px) 64px"} className='object-cover'/>
          </div>
          <button type="button" className="w-5 h-5 rounded-full bg-white shadow absolute -top-2.5 -right-2.5 text-red-500 text-sm">
            <i className="fa-regular fa-fw fa-xmark"></i>
          </button>
        </div>
        <div className="relative">
          <div className="relative w-16 h-16 overflow-hidden border-2 border-dashed border-slate-200 text-slate-500 bg-slate-50 rounded-md flex items-center justify-center flex-col gap-1 text-xl leading-none">
            <input type="file" className="absolute top-0 right-0 opacity-0 w-[1000px] h-full z-[1] cursor-pointer" />
            <i className="fa-regular fa-fw fa-plus"></i>
            <div className="text-[10px] font-medium uppercase">Images</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUploader;