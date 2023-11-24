import React from 'react';
import { classNames } from "../../helpers/classNames";

const Textarea = ({
  label,
  labelClasses,
  inputClasses,
  inputPlaceholder,
  inputValue,
  inputName,
  errorType,
  ...props
}) => {
  return (
    <>
      {label &&
        <div className={classNames("text-sm font-medium text-slate-950 mb-1", labelClasses)}>{label}</div>
      }
      <div className="relative flex">
        <textarea
          className={classNames(
            "w-full rounded-xl bg-white border border-slate-200 px-3 text-sm text-slate-950 !ring-0 !outline-0 focus:border-slate-200 focus:bg-white transition-all duration-200 resize-none overflow-auto scroll-smooth scrollbar",
            inputClasses
          )}
          placeholder={inputPlaceholder}
          name={inputName}
          defaultValue={inputValue}
        ></textarea>
      </div>
      {errorType && errorType === 'error' &&
        <div className="text-xs text-red-600 mt-1">
          <i className="fa-regular fa-fw fa-square-exclamation text-sm mr-1"></i>This field is required
        </div>
      }
      {errorType && errorType === 'warning' &&
        <div className="text-xs text-amber-600 mt-1">
          <i className="fa-regular fa-fw fa-triangle-exclamation text-sm mr-1"></i>This field has a warning
        </div>
      }
      {errorType && errorType === 'success' &&
        <div className="text-xs text-green-600 mt-1">
          <i className="fa-regular fa-fw fa-circle-check text-sm mr-1"></i>Verified
        </div>
      }
    </>
  );
};

export default Textarea;