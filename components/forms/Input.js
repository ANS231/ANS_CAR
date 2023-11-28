import React, { useEffect, useState, useRef } from 'react';
import { classNames } from "../../helpers/classNames";

const Input = ({
  label,
  labelClasses,
  inputType,
  inputClasses,
  inputPlaceholder,
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
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const passwordInput = useRef(null);
  const handleChange = () => {
    setPasswordVisibility(!passwordVisibility);
  }

  useEffect(() => {
    passwordInput.current.type = passwordVisibility ? 'text' : inputType;
  }, [inputType, passwordVisibility]);


  return (
    <>
      {label &&
        <div className={classNames("text-sm font-semibold text-black", labelClasses)}>{label}</div>
      }
      <div className={classNames("relative flex")}>
        {isInputGroup && inputGroupPosition === 'left' &&
          <div className={classNames(
            "w-10 min-w-[40px] flex items-center justify-center border border-slate-200 rounded-lg rounded-r-none bg-white text-magenta-500 text-base focus:border-magenta-500",
            inputGroupIconClass,
            isDisabled?"!bg-slate-50":"",
          )}>
            <i className={classNames("fa-fw", inputGroupIcon)}></i>
          </div>
        }
        <div className="w-full">
          <div className="relative flex">
            {isDisabled ? (
              <input
                type={inputType}
                ref={passwordInput}
                className={classNames(
                  "w-full h-10 rounded-lg bg-white border border-slate-200 px-3 text-base font-medium text-black !ring-0 !outline-0 focus:border-slate-200 focus:bg-white transition-all duration-200",
                  isDisabled?"!bg-slate-50":"",
                  inputClasses,
                  (isInputGroup ? (
                    (inputGroupPosition === 'left') ? "!border-l-0 !rounded-l-none -ml-[1px] pl-0" : ""
                  ) : (
                    (inputGroupPosition === 'right') ? "!border-r-0 !rounded-r-none -mr-[1px] pr-0" : ""
                  ))
                )}
                placeholder={inputPlaceholder}
                name={inputName}
                defaultValue={inputValue}
                autoComplete={'new-' + (inputType)}
                disabled
              />
            ) : (
              <input
                type={inputType}
                ref={passwordInput}
                className={classNames(
                  "w-full h-10 rounded-lg bg-white border border-slate-200 px-3 text-base font-medium text-black !ring-0 !outline-0 focus:border-slate-200 focus:bg-white transition-all duration-200",
                  inputClasses,
                  (isInputGroup ? (
                    (inputGroupPosition === 'left') ? "!border-l-0 !rounded-l-none -ml-[1px] pl-0" : ""
                  ) : (
                    (inputGroupPosition === 'right') ? "!border-r-0 !rounded-r-none -mr-[1px] pr-0" : ""
                  ))
                )}
                placeholder={inputPlaceholder}
                name={inputName}
                defaultValue={inputValue}
                autoComplete={'new-' + (inputType)}
              />
            )}
            {inputType === 'password' &&
              <button type="button" className="w-10 h-full absolute top-0 right-0 bg-transparent text-slate-500 text-sm" onClick={handleChange}>
                <i className={classNames("fa-regular fa-fw", passwordVisibility ? 'fa-eye-slash' : 'fa-eye')}></i>
              </button>
            }
          </div>
        </div>
        {isInputGroup && inputGroupPosition === 'right' &&
          <div className={classNames(
            "w-10 min-w-[40px] flex items-center justify-center border border-slate-200 rounded-lg rounded-r-none bg-white text-magenta-500 text-base focus:border-magenta-500",
            inputGroupIconClass,
            isDisabled?"!bg-slate-50":"",
          )}>
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

export default Input;