import React from 'react';
import { classNames } from "../../helpers/classNames";

const ButtonFile = ({
  buttonClasses,
  buttonIcon,
  buttonIconPosition,
  buttonLabel,
  buttonLabelClasses,
  buttonFunction,
  ...props
}) => {
  return (
    <>
      <div
        className={classNames(
          "relative flex justify-center items-center gap-2 bg-magenta-500 text-white rounded text-lg h-10 py-0 px-3 transition-all duration-200 overflow-hidden cursor-pointer",
          buttonClasses
        )}
      >
        <input type={'file'} className="absolute top-0 right-0 z-10 opacity-0 cursor-pointer w-[1000px] h-full" />
        {buttonIconPosition === 'left' &&
          <i className={classNames("fa-fw", buttonIcon)}></i>
        }
        {buttonLabel &&
          <span className={classNames("text-sm font-medium", buttonLabelClasses)}>{buttonLabel}</span>
        }
        {buttonIconPosition === 'right' &&
          <i className={classNames("fa-fw", buttonIcon)}></i>
        }
      </div>
    </>
  );
};

export default ButtonFile;