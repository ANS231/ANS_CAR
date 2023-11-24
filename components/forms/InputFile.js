import React, { useState } from 'react';
import { classNames } from "../../helpers/classNames";
import Image from "next/image";

const InputFile = ({
  label,
  labelClasses,
  inputClasses,
  inputPlaceholder,
  inputButtonPlaceholder,
  inputValue = {},
  inputName,
  isInputGroup = false,
  inputGroupIcon,
  inputGroupPosition,
  errorType,
  errorText,
  isDisabled,
  ...props
}) => {

  const [fileName, setFileName] = useState("");

  return (
    <>
      {label &&
        <div className={classNames("text-sm font-medium text-slate-950 mb-1", labelClasses)}>{label}</div>
      }
      <div className="relative flex">
        {isInputGroup && inputGroupPosition === 'left' &&
          <div className="w-10 min-w-[40px] flex items-center justify-center border border-slate-200 rounded-md rounded-r-none bg-slate-50 text-sm text-slate-500">
            <i className={classNames("fa-fw", inputGroupIcon)}></i>
          </div>
        }
        <div className="w-full">
          <div className="relative flex">
            {isDisabled ? (
              <div className={classNames(
                "w-full h-14 rounded-xl bg-white border border-dashed border-magenta-500 px-2 text-sm text-slate-950 !ring-0 !outline-0 focus:border-magenta-200 focus:bg-magenta-50 transition-all duration-200 overflow-hidden flex items-center space-x-3",
                inputClasses,
                (isInputGroup ? (
                  (inputGroupPosition === 'left') ? "!border-l-none !rounded-l-none -ml-[1px]" : ""
                ) : (
                  (inputGroupPosition === 'right') ? "!border-r-none !rounded-r-none -mr-[1px]" : ""
                ))
              )}>
                <div className="relative w-10 h-10 min-w-[40px] rounded-md bg-white border border-slate-200 text-xl flex items-center justify-center text-slate-300 overflow-hidden">
                  {inputValue.image ? (
                    <Image src={inputValue.image} alt={""} fill={true} />
                  ) : (
                    <i className="fa-light fa-fw fa-image"></i>
                  )}
                </div>
                <div className={classNames(
                  "text-sm w-full flex-grow flex-shrink truncate",
                  inputValue.name ? "text-slate-950 font-medium" : "font-semibold text-magenta-500"
                )}>
                  {inputValue.name ? inputValue.name : inputPlaceholder}
                </div>
                {inputValue.image && inputValue.image &&
                  <button type="button" title="Remove" className="w-8 h-8 min-w-[32px] rounded-md text-xl flex items-center justify-center text-magenta-500 z-[2]">
                    <i className="fa-light fa-fw fa-xmark"></i>
                  </button>
                }
                <input
                  type={"file"}
                  className={"absolute top-0 right-0 opacity-0 w-[1000px] h-full z-[1] cursor-pointer"}
                  name={inputName}
                  disabled
                />
              </div>
            ) : (
              <div className={classNames(
                "w-full h-14 rounded-xl bg-white border border-dashed border-magenta-500 px-2 text-sm text-slate-950 !ring-0 !outline-0 focus:border-magenta-200 focus:bg-magenta-50 transition-all duration-200 overflow-hidden flex items-center space-x-3",
                inputClasses,
                (isInputGroup ? (
                  (inputGroupPosition === 'left') ? "!border-l-none !rounded-l-none -ml-[1px]" : ""
                ) : (
                  (inputGroupPosition === 'right') ? "!border-r-none !rounded-r-none -mr-[1px]" : ""
                ))
              )}>
                <div className="relative w-10 h-10 min-w-[40px] rounded-md bg-white border border-slate-200 text-xl flex items-center justify-center text-slate-300 overflow-hidden">
                  {inputValue.image ? (
                    <Image src={inputValue.image} alt={""} fill={true} />
                  ) : (
                    <i className="fa-light fa-fw fa-image"></i>
                  )}
                </div>
                <div className={classNames(
                  "text-sm w-full flex-grow flex-shrink truncate",
                  inputValue.name ? "text-slate-950 font-medium" : "font-semibold text-magenta-500"
                )}>
                  {inputValue.name ? inputValue.name : inputPlaceholder}
                </div>
                {inputValue.image && inputValue.image &&
                  <button type="button" title="Remove" className="w-8 h-8 min-w-[32px] rounded-md text-xl flex items-center justify-center text-magenta-500 z-[2]">
                    <i className="fa-light fa-fw fa-xmark"></i>
                  </button>
                }
                <div className="relative overflow-hidden rounded-lg bg-magenta-500 h-10 text-white flex-grow-0 flex-shrink-0 flex items-center justify-center px-2">
                  <input
                    type={"file"}
                    className={"absolute top-0 right-0 opacity-0 w-[1000px] h-full z-[1] cursor-pointer"}
                    name={inputName}
                  />
                  <div className="text-sm transition-all duration-200 whitespace-nowrap">{inputButtonPlaceholder}</div>
                </div>
              </div>
            )}
          </div>
        </div>
        {isInputGroup && inputGroupPosition === 'right' &&
          <div className="w-10 min-w-[40px] flex items-center justify-center border border-slate-200 rounded-md rounded-l-none bg-slate-50 text-sm text-slate-500">
            <i className={classNames("fa-fw", inputGroupIcon)}></i>
          </div>
        }
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

export default InputFile;