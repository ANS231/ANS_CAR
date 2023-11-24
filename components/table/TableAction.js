import React from 'react';
import { Menu, Transition } from "@headlessui/react";
import { usePopper } from "react-popper";
import { useRef, useState } from "react";
import { bottom } from "@popperjs/core";
import Link from "next/link";

const TableAction = ({ data, xPlacement, ...props }) => {
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
    <>
      <Menu as="div">
        {({ open }) => (
          <>
            <Menu.Button ref={setTargetElement} className="flex items-center">
              <div className="relative w-full h-10 flex items-center justify-center focus:ring-0 transition-all duration-200">
                <div className="text-base text-slate-400 w-6 h-6 flex items-center justify-center">
                  <i className="fa-regular fa-fw fa-ellipsis-vertical"></i>
                </div>
              </div>
            </Menu.Button>
            <Transition
              show={open}
              leave="transition duration-75" leaveFrom="opacity-100" leaveTo="opacity-0" className="z-50"
              beforeEnter={() => setPopperElement(popperElRef.current)}
              afterLeave={() => setPopperElement(null)}
              ref={popperElRef}
              style={styles.popper}
              {...attributes.popper}
            >
              <Menu.Items className="w-40 origin-top-right bg-white border-0 divide-y divide-slate-100 rounded-md shadow ring-0">
                <div className="py-1 max-h-80 divide-y divide-slate-100 overflow-auto scroll-smooth scrollbar">
                  {data.map((item) => (
                    <Menu.Item key={item._id}>
                      <Link href={item.link} className={"flex items-center py-2 px-3 gap-3 font-medium transition-all duration-200 " + 
                      (item.standout?"text-rose-500 hover:bg-rose-100":"text-slate-950 hover:bg-magenta-100 hover:text-magenta-500")}>
                        <div className="w-5 h-5 flex items-center justify-center text-base">
                          <i className={"fa-regular fa-fw " + (item.icon)}></i>
                        </div>
                        <div className="text-[13px]">{item.label}</div>
                      </Link>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
};

export default TableAction;