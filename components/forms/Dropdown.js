import React, { useState, useRef } from "react";
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react'
import { classNames } from "../../helpers/classNames";
import { usePopper } from "react-popper";
import { bottom } from "@popperjs/core";


const Dropdown = ({ data, buttonClass, buttonLabelClass, buttonIcon, buttonLabel, dropdownContainer, xPlacement = "left" }) => {
  const popperElRef = useRef(null);
  const [targetElement, setTargetElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const placements = {
    left: "bottom-start",
    right: "bottom-end",
    "": bottom,
  };

  const { styles, attributes } = usePopper(targetElement, popperElement, {
    placement: placements[xPlacement || ""],
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 0],
        },
      },
    ],
  });

  return (
    <>
      <Menu as="div" className="relative text-left">
        <div>
          <Menu.Button ref={setTargetElement} className={classNames("flex items-center justify-center gap-2 h-10 border border-slate-200 px-3 rounded-md transition-all duration-200", buttonClass)}>
            <div className={classNames("text-base text-slate-950 transition-all duration-200", buttonLabelClass)}>{buttonLabel}</div>
            {buttonIcon &&
              <i className="fa-regular fa-fw fa-chevron-down text-sm ml-auto"></i>
            }
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          beforeEnter={() => setPopperElement(popperElRef.current)}
          afterLeave={() => setPopperElement(null)}
          ref={popperElRef}
          style={styles.popper}
          {...attributes.popper}
        >
          <Menu.Items
            className={classNames(
              "absolute mt-1 border border-slate-200 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none",
              dropdownContainer
            )}
          >
            <div className="px-1 py-1 divide-y divide-slate-100">
              {data.length > 0 && data.map((item) => (
                item.link ? (
                  <Menu.Item key={item._id}>
                    {({ active }) => (
                      <Link href={item.link} className={classNames("group flex w-full items-center rounded-md px-2 py-2 text-sm", active ? 'bg-magenta-500 text-white' : 'text-slate-900')}>{item.name}</Link>
                    )}
                  </Menu.Item>
                ) : (
                  <Menu.Item key={item._id}>
                    {({ active }) => (
                      <button className={classNames("group flex w-full items-center rounded-md px-2 py-2 text-sm", active ? 'bg-magenta-500 text-white' : 'text-slate-900')}>{item.name}</button>
                    )}
                  </Menu.Item>
                )
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Dropdown;