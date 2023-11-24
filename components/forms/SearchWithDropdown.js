import React, { Fragment, useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { Combobox, Transition } from '@headlessui/react';
import { usePopper } from "react-popper";
import { bottom } from "@popperjs/core";
import { classNames } from "../../helpers/classNames";

const SearchWithDropdown = ({
  label,
  labelClasses,
  placeholder,
  divClasses,
  inputClasses,
  iconClasses,
  iconPosition = "left",
  icon = "fa-regular fa-magnifying-glass",
  xPlacement,
  dropdownClass,
  dropdownData
}) => {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState('');
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

  const filteredData =
    query === ''
      ? dropdownData
      : dropdownData.filter((item) =>
        item.title
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  return (
    <>
      <div className="relative">
        {label &&
          <div className={classNames("text-sm font-medium text-slate-950 mb-1", labelClasses)}>{label}</div>
        }
        <Combobox value={selected} onChange={setSelected} as={'div'} className="relative">
          <div ref={setTargetElement} className={classNames("relative flex h-12 w-full bg-white rounded-md border border-slate-200 overflow-hidden", divClasses)}>
            {iconPosition === "left" &&
              <Combobox.Button className={classNames("w-12 h-12 min-w-[40px] flex items-center justify-center text-slate-400 ", iconClasses)}>
                <i className={classNames("fa-fw", icon)}></i>
              </Combobox.Button>
            }
            <Combobox.Input
              displayValue={(item) => item.title}
              onChange={(event) => setQuery(event.target.value)}
              className={classNames("!border-0 w-full !ring-0 bg-transparent text-black text-base font-medium px-3", inputClasses)}
              placeholder={placeholder}
            />
            {iconPosition === "right" &&
              <Combobox.Button className={classNames("w-12 h-12 min-w-[40px] flex items-center justify-center text-black ", iconClasses)}>
                <i className={classNames("fa-fw", icon)}></i>
              </Combobox.Button>
            }
          </div>
          <Transition
            as={Fragment}
            leave="transition duration-75" leaveFrom="opacity-100" leaveTo="opacity-0" className="z-50 w-full"
            beforeEnter={() => setPopperElement(popperElRef.current)}
            afterLeave={() => { setPopperElement(null); setQuery(''); }}
            ref={popperElRef}
            style={styles.popper}
            {...attributes.popper}
          >
            <Combobox.Options className={classNames("w-full origin-top-right bg-white border-0 divide-y divide-magenta-50 rounded-md shadow ring-0 overflow-auto scroll-smooth scrollbar", dropdownClass)}>
              <div className="py-1 max-h-80 divide-y divide-magenta-50 ">
                {filteredData.length > 0 && filteredData.map((item, index) => (
                  <Combobox.Option
                    key={index}
                    className={({ active }) => classNames(
                      "relative select-none py-3 pr-12 pl-4 text-base leading-tight cursor-pointer transition-all duration-200 text-black flex items-center space-x-2",
                      active ? 'bg-magenta-50' : ''
                    )}
                    value={item}>
                    {({ selected }) => (
                      <>
                        {item.type === "event" ? (
                          <div className="text-lg !leading-none text-magenta-500">
                            <i className={classNames("fa-regular fa-fw", item.icon)}></i>
                          </div>
                        ) : (
                          <div className="w-8 h-8 overflow-hidden rounded-full">
                            <Image src={item.image} alt={item.title} fill={false} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className={classNames("block truncate text-base", selected ? 'font-semibold' : 'font-medium')}>{item.title}</div>
                        {item.type &&
                          <div className="text-xs font-semibold text-slate-400 flex items-center space-x-1">
                            <i className="fa-light fa-fw fa-dash"></i>
                            <span className="capitalize">{item.type}</span>
                          </div>
                        }
                        {selected &&
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-magenta-500 text-base">
                            <i className="fa-regular fa-fw fa-check"></i>
                          </div>
                        }
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </div>
            </Combobox.Options>
          </Transition>
        </Combobox>
      </div>
    </>
  );
};

export default SearchWithDropdown;