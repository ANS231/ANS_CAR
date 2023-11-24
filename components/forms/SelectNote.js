import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { usePopper } from "react-popper";
import { bottom } from "@popperjs/core";
import { classNames } from "../../helpers/classNames";

const SelectNote = ({
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
  const [selectedNote, setSelectedNote] = useState();

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
  }, [selectedValue])

  return (
    <>
      {label &&
        <div className={classNames("text-sm font-medium text-slate-950 mb-1", labelClasses)}>{label}</div>
      }
      <Listbox value={selected} onChange={setSelected} as={'div'} className="relative">
        <Listbox.Button ref={setTargetElement} className="flex flex-col items-center w-full">
          <div className={classNames("relative w-full h-10 flex items-center justify-between focus:ring-0 transition-all duration-200 gap-2 pr-2 pl-3 bg-slate-50 rounded border border-slate-200", dropdownButtonClass)}>
            <div className="text-sm] text-slate-950 font-medium whitespace-nowrap truncate">{selected.label}</div>
            <div className="text-xs text-slate-400">
              <i className={"fa-light fa-fw fa-chevron-down"}></i>
            </div>
          </div>
          {selected.note &&
            <div className="text-[11px] text-slate-500 text-left leading-none mt-1 w-full">{selected.note}</div>
          }
        </Listbox.Button>
        <Transition
          leave="transition duration-75" leaveFrom="opacity-100" leaveTo="opacity-0" className="z-50 w-full"
          beforeEnter={() => setPopperElement(popperElRef.current)}
          afterLeave={() => setPopperElement(null)}
          ref={popperElRef}
          style={styles.popper}
          {...attributes.popper}
        >
          <Listbox.Options className={classNames("w-40 origin-top-right bg-white border-0 divide-y divide-slate-100 rounded-md shadow ring-0", dropdownClass)}>
            <div className="py-1 max-h-80 divide-y divide-slate-100 overflow-auto scroll-smooth scrollbar">
              {dropdownData.map((item, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) => classNames("relative select-none py-2 pl-8 pr-2 text-xs leading-tight cursor-pointer transition-all duration-200", active ? 'bg-slate-100 text-slate-700' : 'text-slate-500')}
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <div className={classNames("block truncate", selected ? 'font-medium' : 'font-normal')}>{item.label}</div>
                      {selected &&
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-teal-500 text-base">
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
    </>
  );
}

export default SelectNote;