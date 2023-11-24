import React, { useState } from 'react';
import { classNames } from "../../helpers/classNames";
import Image from "next/image";

const InputAudio = ({
  label,
  labelClasses,
  inputClasses,
  inputPlaceholder,
  inputButtonPlaceholder,
  inputValue,
  inputName,
  isInputGroup = false,
  inputGroupIcon,
  inputGroupPosition,
  inputGroupIconClass,
  errorType,
  errorText,
  isDisabled,
  ...props
}) => {

  return (
    <>
      <div className="relative flex">
        {isInputGroup && inputGroupPosition === 'left' &&
          <div className={classNames(
            "w-10 min-w-[40px] flex items-center justify-center border border-dashed border-magenta-500 rounded-md rounded-r-none bg-white text-base text-magenta-500",
            inputGroupIconClass
          )}>
            <i className={classNames("fa-fw", inputGroupIcon)}></i>
          </div>
        }
        <div className="w-full">
          <div className="relative flex">
            <div className={classNames(
              "w-full h-14 rounded-xl bg-white border border-dashed border-magenta-500 px-2 text-sm text-slate-950 !ring-0 !outline-0 focus:border-magenta-200 focus:bg-magenta-50 transition-all duration-200 overflow-hidden flex items-center space-x-3",
              inputClasses,
              isDisabled?"!bg-slate-100":"",
              (isInputGroup ? (
                (inputGroupPosition === 'left') ? "!border-l-none !rounded-l-none -ml-[1px]" : ""
              ) : (
                (inputGroupPosition === 'right') ? "!border-r-none !rounded-r-none -mr-[1px]" : ""
              ))
            )}>
              {label && <div className={classNames("text-sm w-full flex-grow flex-shrink leading-tight line-clamp-2", labelClasses)} title={label}>{label}</div>}
              {inputValue ? (
                <div className="relative overflow-hidden rounded-lg bg-green-500 h-10 text-white flex-grow-0 flex-shrink-0 flex items-center justify-center px-2 space-x-2 truncate max-w-[160px]" title={inputValue.name}>
                  <button type="button" className="flex-grow-0 flex-shrink-0">
                    <i className="fa-regular fa-fw fa-play"></i>
                  </button>
                  <div className="w-full truncate text-sm transition-all duration-200 whitespace-nowrap">{inputValue.name}</div>
                  <button type="button" title="Remove" className="flex-grow-0 flex-shrink-0 text-base">
                    <i className="fa-light fa-fw fa-xmark"></i>
                  </button>
                </div>
              ) : (
                <div className={classNames(
                  "relative overflow-hidden rounded-lg bg-magenta-500 h-10 text-white flex-grow-0 flex-shrink-0 flex items-center justify-center px-2",
                  isDisabled?"opacity-50":"opacity-100"
                  )}>
                  <input
                    type={"file"}
                    className={classNames("absolute top-0 right-0 opacity-0 w-[1000px] h-full z-[1]", isDisabled?"cursor-not-allowed":"cursor-pointer")}
                    name={inputName}
                    disabled={isDisabled}
                  />
                  <div className="text-sm transition-all duration-200 whitespace-nowrap">{inputButtonPlaceholder}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {isInputGroup && inputGroupPosition === 'right' &&
          <div className={classNames(
            "w-10 min-w-[40px] flex items-center justify-center border border-dashed border-magenta-500 rounded-md rounded-r-none bg-white text-base text-magenta-500",
            inputGroupIconClass
          )}>
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

export default InputAudio;