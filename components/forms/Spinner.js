import React, {useState} from 'react';
import { classNames } from "../../helpers/classNames";

const Spinner = ({label, labelClasses, buttonClasses, buttonIcon, buttonEffect, buttonLabel,
  buttonLabelClasses, buttonIconPosition, buttonType, inputClasses, inputPlaceholder, inputValue, inputName,  errorType,  errorText, isDisable = false,}) => {

    const effect = {
      filled: "z-0 before:content-[''] before:z-[-1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-magenta-600/80 before:scale-x-0 before:transition-all before:duration-200 hover:before:scale-x-100 before:origin-left",
      hollow: "z-0 before:content-[''] before:z-[-1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-100 before:scale-x-0 before:transition-all before:duration-200 hover:before:scale-x-100 before:origin-left border border-slate-200 bg-slate-50 hover:border-slate-300"
    }
    
let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
  
  return (
    <>
      {label &&
        <div className={classNames("text-sm font-medium text-slate-950 mb-1", labelClasses)}>{label}</div>
      }
    <div className={classNames("relative flex ")}>
        <button
            type={buttonType}
            className={classNames(
              "relative z-[1] w-12 h-12 min-w-[48px] rounded-lg bg-magenta-500 text-white", buttonClasses, effect[buttonEffect]
            )}
            onClick={incNum}
            disabled={isDisable}
          >
            <i class="fa-regular fa-plus"></i>
        </button>
        <input
            type={"number"}
            className={classNames(
            "text-center", inputClasses)}
            placeholder={inputPlaceholder}
            name={inputName}
            defaultValue={inputValue}
          
            value={num}
            onChange={handleChange}
        />
        <button
            type={buttonType}
            className={classNames(
              "relative z-[1] w-12 h-12 min-w-[48px] rounded-lg bg-magenta-500 text-white", buttonClasses, effect[buttonEffect]
            )}
            onClick={decNum}
            disabled={isDisable}
          >
        <i class="fa-regular fa-minus"></i>
          
        </button>
    </div>
    


      {errorType && errorType === 'danger' &&
        <div className="text-xs text-red-600 mt-1">
          <i className="fa-regular fa-fw fa-square-exclamation text-sm mr-1"></i>{errorText}
        </div>
      }
      {errorType && errorType === 'warning' &&
        <div className="text-xs text-amber-600 mt-1">
          <i className="fa-regular fa-fw fa-triangle-exclamation text-sm mr-1"></i>{errorText}
        </div>
      }
      {errorType && errorType === 'success' &&
        <div className="text-xs text-green-600 mt-1">
          <i className="fa-regular fa-fw fa-circle-check text-sm mr-1"></i>{errorText}
        </div>
      }
      {errorType && errorType === 'info' &&
        <div className="text-xs text-sky-600 mt-1">
          <i className="fa-regular fa-fw fa-circle-info text-sm mr-1"></i>{errorText}
        </div>
      }
    </>
  );
};

export default Spinner;