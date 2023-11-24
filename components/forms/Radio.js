import React from 'react';
import { classNames } from "../../helpers/classNames";

const Radio = ({
  radioName,
  radioInputClass,
  isChecked,
  radioLabel,
  radioLableClass,
  ...props
}) => {
  return (
    <>
      <div className="relative overflow-hidden flex items-center">
        <input type="radio"
          name={radioName}
          className={classNames("peer absolute top-0 left-0 w-5 h-5 opacity-0 z-10 cursor-pointer", radioInputClass)}
          defaultChecked={isChecked}
        />
        <div className="w-5 h-5 min-w-[20px] mr-3 border border-slate-300 rounded-full flex items-center justify-center text-[10px] bg-white text-black/0 peer-checked:bg-magenta-500 peer-checked:border-carbg-magenta-500 peer-checked:text-white">
          <i className="fa-solid fa-fw fa-circle"></i>
        </div>
        <div className={classNames("text-sm text-slate-800 w-full", radioLableClass)}>{radioLabel}</div>
      </div>
    </>
  );
};

export default Radio;