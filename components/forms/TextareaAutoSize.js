import React, { useEffect, useRef, useState } from "react";
import { classNames } from "../../helpers/classNames";

const TextAreaAutoSize = ({
  label,
  labelClasses,
  inputValue = "",
  inputClasses,
  inputPlaceholder = "",
  inputName,
  isDisabled = false,
  error = false,
  onChange = () => { },
  errorType,
  errorText,
}) => {
  const buildInputClasses = classNames(
    "w-full min-h-[80px] rounded-md bg-slate-50 border border-slate-200 px-3 text-sm text-slate-950 !ring-0 !outline-0 focus:border-slate-300 focus:bg-slate-50 transition-all duration-200 overflow-hidden resize-none",
    error ? "border-red-300" : "",
    isDisabled ? "text-slate-400 cursor-not-allowed bg-slate-100 !border-slate-200" : "",
    inputClasses
  )
  const [val, setVal] = useState(inputValue)
  const textareaRef = useRef(null)

  const handleKeyDown = () => {
    textareaRef.current.style.height = `80px`
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
  }

  useEffect(() => {
    setVal(inputValue)
  }, [inputValue])

  useEffect(() => {
    if (textareaRef) {
      handleKeyDown()
    }
  }, [val, textareaRef])

  return (
    <>
      {label &&
        <div className={classNames("text-sm font-medium text-slate-950 mb-1", labelClasses)}>{label}</div>
      }
      <div className="relative">
        <textarea
          disabled={isDisabled}
          ref={textareaRef}
          value={val}
          rows={1}
          name={inputName}
          placeholder={inputPlaceholder}
          className={buildInputClasses}
          onChange={(e) => {
            setVal(e.target.value)
            onChange(e)
          }}
          onPaste={handleKeyDown}
          onFocus={handleKeyDown}></textarea>
      </div>
      {errorType && errorType === 'error' &&
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
  )
}

export default TextAreaAutoSize
