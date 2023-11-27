import React from 'react';
import { classNames } from "../../helpers/classNames";

const Checkbox = ({
  checkboxName,
  checkboxInputClass,
  isChecked,
  checkboxLabel,
  checkboxLableClass,
  ...props
}) => {
  return (
    <>
      <div className="relative overflow-hidden flex items-center">
        <input type="checkbox"
          name={checkboxName}
          className={classNames("peer absolute top-0 left-0 w-5 h-5 opacity-0 z-10 cursor-pointer", checkboxInputClass)}
          defaultChecked={isChecked}
        />
        <div className="w-5 h-5 min-w-[20px] mr-3 border border-slate-300 rounded flex items-center justify-center text-sm bg-white text-black/0 peer-checked:bg-magenta-500 peer-checked:border-magenta-500 peer-checked:text-white">
          <i className="fa-light fa-fw fa-check"></i>
        </div>
        <div className={classNames("text-sm text-black w-full", checkboxLableClass)}>{checkboxLabel}</div>
      </div>
    </>
  );
};

export default Checkbox;