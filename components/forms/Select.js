import React, { useState, useRef, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { usePopper } from "react-popper";
import { bottom } from "@popperjs/core";
import { classNames } from "../../helpers/classNames";

const Select = ({
  xPlacement,
  dropdownData,
  dropdownClass,
  dropdownButtonClass,
  selectedValue,
  label,
  labelClasses,
  errorType,
  errorText,
  ...props
}) => {
  const [selected, setSelected] = useState(dropdownData[0]);

  const popperElRef = useRef(null);
  const [targetElement, setTargetElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const placements = {
    left: "bottom-start",
    right: "bottom-end",
    "": bottom,
  };

  const { styles, attributes } = usePopper(targetElement, popperElement, {
    placement: placements[xPlacement],
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  useEffect(() => {
    if (selectedValue) {
      const index = dropdownData.findIndex((item) => item._id === selectedValue);
      if (index !== -1) {
        setSelected(dropdownData[index]);
      }
    }
  }, [dropdownData, selectedValue])

  return (
    <>
      {label &&
        <div className={classNames("text-sm font-medium text-slate-950 mb-1", labelClasses)}>{label}</div>
      }
      <Listbox value={selected} onChange={setSelected} as={'div'} className="relative">
        <Listbox.Button ref={setTargetElement} className="flex items-center w-full">
          <div className={classNames(
            "relative w-full h-12 flex items-center justify-between focus:ring-0 transition-all duration-200 gap-1 pr-2 pl-3 bg-white rounded-xl border border-slate-200",
            dropdownButtonClass
          )}>
            <div className="text-sm text-slate-950 whitespace-nowrap truncate">{selected.name}</div>
            <div className="text-xs text-slate-400">
              <i className={"fa-light fa-fw fa-chevron-down"}></i>
            </div>
          </div>
        </Listbox.Button>
        <Transition
          leave="transition duration-75" leaveFrom="opacity-100" leaveTo="opacity-0" className="w-full z-50"
          beforeEnter={() => setPopperElement(popperElRef.current)}
          afterLeave={() => setPopperElement(null)}
          ref={popperElRef}
          style={styles.popper}
          {...attributes.popper}
        >
          <Listbox.Options className={classNames("w-60 origin-top-right bg-white border-0 divide-y divide-slate-100 rounded-md shadow ring-0 overflow-auto scroll-smooth scrollbar", dropdownClass)}>
            <div className="py-1 max-h-80 divide-y divide-slate-100 ">
              {dropdownData.map((item, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) => classNames("relative select-none py-2 pl-8 pr-2 text-sm leading-tight cursor-pointer transition-all duration-200", active ? 'bg-magenta-50 text-slate-700' : 'text-slate-500')}
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <div className={classNames("block truncate", selected ? 'font-semibold' : 'font-normal')}>{item.name}</div>
                      {selected &&
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-magenta-500 text-base">
                          <i className="fa-regular fa-fw fa-check"></i>
                        </div>
                      }
                    </>
                  )}
                </Listbox.Option>
              ))}
            </div>
          </Listbox.Options>
        </Transition>
      </Listbox>
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
  );
}

export default Select;