import React from 'react';
import { classNames } from "@/helpers/classNames";

const Search = ({ 
  placeholder, 
  divClasses, 
  inputClasses, 
  iconClasses, 
  iconPosition = "left",
  icon = "fa-regular fa-magnifying-glass" 
}) => {
  return (
    <>
      <div className={classNames("relative flex h-12 w-full bg-slate-50 rounded-lg overflow-hidden border border-slate-200", divClasses)}>
        {iconPosition === "left" &&
          <div className={classNames("w-12 h-12 min-w-[40px] flex items-center justify-center text-slate-400 bg-slate-50 rounded-lg", iconClasses)}>
            <i className={classNames("fa-fw", icon)}></i>
          </div>
        }
        <input 
          type="text" 
          placeholder={placeholder} 
          className={classNames(
            "!border-0 w-full !ring-0 bg-transparent text-black text-base p-0 px-3 font-medium", 
            inputClasses, iconPosition === "left"?"!pl-0":iconPosition === "right"?"!pr-0":""
          )}
        />
        {iconPosition === "right" &&
          <div className={classNames("w-12 h-12 min-w-[40px] flex items-center justify-center text-slate-400 bg-slate-50 rounded-lg", iconClasses)}>
            <i className={classNames("fa-fw", icon)}></i>
          </div>
        }
      </div>
    </>
  );
};

export default Search;