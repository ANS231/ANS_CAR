import React, { useRef, useState } from 'react';
import { Menu, Transition } from "@headlessui/react";
import { bottom } from "@popperjs/core";
import { usePopper } from "react-popper";
import Link from "next/link";
import Image from "next/image";
import { classNames } from "@/helpers/classNames";


const UserDropdown = ({ data, xPlacement, ...props }) => {

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
                <div className="w-10 h-10 min-w-[40px] overflow-hidden rounded-full border-2 border-magenta-500">
                  <Image src={data.image} alt={data.name} width={'100%'} height={'100%'} effect={'blur'} classes={'object-cover'}/>
                </div>
                <div className={classNames("text-lg font-semibold mx-2 transition-all duration-200", props.scrolled?"text-black":"text-white")}>{data.name}</div>
                {/* <div className="text-xs text-slate-400">
                  <i className={"fa-light fa-fw " + (open?'fa-chevron-up':'fa-chevron-down')}></i>
                </div> */}
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
              <Menu.Items className="w-40 origin-top-right bg-white border-0 divide-y divide-magenta-100 rounded-md shadow ring-0">
                <div className="py-1 max-h-80 divide-y divide-slate-100 overflow-auto scroll-smooth scrollbar">
                  {data.menuData?.map((item, index) => (
                    <Menu.Item key={index}>
                      {item.link?(
                        <Link 
                          href={item.link} 
                          className={classNames(
                          "flex items-center py-2 px-3 gap-3 font-medium transition-all duration-200", 
                          item.standout?"text-rose-500 hover:bg-rose-100":"text-black hover:bg-magenta-100"
                          )}
                        >
                          <div className="w-5 h-5 flex items-center justify-center text-base">
                            <i className={"fa-regular fa-fw " + (item.icon)}></i>
                          </div>
                          <div className="text-base">{item.label}</div>
                        </Link>
                      ):(
                        <button 
                          type="button" 
                          className={classNames(
                            "w-full flex items-center py-2 px-3 gap-3 font-medium transition-all duration-200", 
                            item.standout?"text-rose-500 hover:bg-rose-100":"text-black hover:bg-magenta-100"
                          )}
                          onClick={item.onclick}
                        >
                          <div className="w-5 h-5 flex items-center justify-center text-base">
                            <i className={"fa-regular fa-fw " + (item.icon)}></i>
                          </div>
                          <div className="text-base">{item.label}</div>
                        </button>
                      )}
                      
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

export default UserDropdown;