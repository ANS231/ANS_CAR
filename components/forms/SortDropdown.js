import React, { useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { bottom } from "@popperjs/core";
import { usePopper } from "react-popper";
import { classNames } from "@/helpers/classNames";

const SortDropdown = ({
  icon,
  label,
  xPlacement = "",
  data,
  ...props
}) => {
  const [sortName, setSortName] = useState("");
  const [sortIcon, setSortIcon] = useState("");
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
              {icon && <i className={classNames("fa-fw", sortIcon?sortIcon:icon)}></i>}
              {label && 
                <span className="inline-block text-base transition-all duration-200 whitespace-nowrap">
                  {label}{sortName?(sortName !== 'Default'?": "+sortName:""):""}
                </span>
              }
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
                <div className="py-2 px-2 max-h-80 space-y-2 pb-4 overflow-auto scroll-smooth scrollbar">
                  {data.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <button className={classNames("group flex w-full items-center rounded-md px-2 py-1.5 text-base space-x-2 transition-all duration-200", active ? 'bg-magenta-500 text-white' : 'text-slate-900')} onClick={() => {setSortName(item.label), setSortIcon(item.icon), item.click}}>
                          {item.icon && <i className={classNames("fa-fw", item.icon)}></i>}
                          {item.label && <span className="inline-block text-sm">{item.label}</span>}
                        </button>
                      )}
                    </Menu.Item>
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

export default SortDropdown;
