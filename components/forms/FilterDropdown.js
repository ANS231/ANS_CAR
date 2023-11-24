import React, { useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { bottom } from "@popperjs/core";
import { usePopper } from "react-popper";
import { classNames } from "@/helpers/classNames";
import Checkbox from "./Checkbox";
import Radio from "./Radio";

const FilterDropdown = ({
  icon,
  label,
  xPlacement = "",
  data,
  ...props
}) => {
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

  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <Menu.Button ref={setTargetElement} className="relative overflow-hidden flex justify-center items-center bg-magenta-500 text-white rounded-lg text-lg h-10 py-0 px-2 transition-all duration-200 min-w-[40px]">
            <div className="flex items-center gap-2">
              {icon && <i className={classNames("fa-fw", icon)}></i>}
              {label && <span className="inline-block text-base transition-all duration-200">{label}</span>}
            </div>
          </Menu.Button>
          <Transition
            show={open}
            leave="transition duration-75"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="z-50"
            beforeEnter={() => setPopperElement(popperElRef.current)}
            afterLeave={() => setPopperElement(null)}
            ref={popperElRef}
            style={styles.popper}
            {...attributes.popper}
          >
            <Menu.Items className="w-60 origin-top-right bg-white border-0 divide-y divide-slate-100 rounded-md shadow ring-0">
              {data.length > 0 &&
                <div className="py-1 max-h-80 space-y-2 pb-4 overflow-auto scroll-smooth scrollbar">
                  {data.map((item) => (
                    <div className="py-1" key={item._id}>
                      {item.header &&
                        <div className="py-1 px-3 border-b border-slate-20 mb-3 flex items-center space-x-2 text-magenta-500 text-lg">
                          {item.icon && <i className={classNames("fa-fw", item.icon)}></i>}
                          <span className="text-sm text-slate-900 font-medium">{item.header}</span>
                        </div>
                      }
                      {item.optionsData?.length > 0 &&
                        <div className="px-3 space-y-1">
                          {item.type === 'checkbox' &&
                            <>
                              {item.optionsData?.map((item, index) => (
                                <div key={index}>
                                  <Checkbox
                                    checkboxLabel={item.label}
                                    checkboxName={item.inputName}
                                    isChecked={item.isChecked}
                                  />
                                </div>
                              ))}
                            </>
                          }
                          {item.type === 'radio' &&
                            <>
                              {item.optionsData?.map((item, index) => (
                                <div key={index}>
                                  <Radio
                                    radioLabel={item.label}
                                    radioName={item.inputName}
                                    isChecked={item.isChecked}
                                  />
                                </div>
                              ))}
                            </>
                          }
                        </div>
                      }
                    </div>
                  ))}
                </div>
              }
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default FilterDropdown;
