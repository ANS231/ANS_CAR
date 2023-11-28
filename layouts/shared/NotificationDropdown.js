import React, { useRef, useState } from 'react';
import { Menu, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { bottom } from "@popperjs/core";
import { usePopper } from "react-popper";
import Link from "next/link";
import { classNames } from "@/helpers/classNames";
import Image from "next/image";


const NotificationDropdown = ({ data, xPlacement, ...props }) => {
  const pathname = usePathname();
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
              <div className={classNames(
                "relative w-full h-10 flex items-center justify-center focus:ring-0 transition-all duration-200 text-2xl", 
                props.scrolled?"text-black":"text-white",
                pathname !== "/"?"!text-black":""
                )}>
                <i className="fa-regular fa-fw fa-bell"></i>
                {data.count > 0 &&
                <span className="absolute top-0.5 -right-1 w-5 h-5 flex items-center justify-center bg-magenta-500 rounded-full text-xs font-medium leading-none pt-0.5 text-white">{data.count}</span>
                }
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
              <Menu.Items className="w-96 origin-top-right bg-white border-0 divide-y divide-slate-100 rounded-md shadow ring-0">
                <div className="flex items-center space-x-1 text-xl font-bold text-black px-4 py-2">
                  <i className="fa-regular fa-fw fa-bell text-magenta-500"></i>
                  <span className="text-lg">Notification</span>
                </div>
                <div className="py-1 max-h-96 divide-y divide-magenta-100 overflow-auto scroll-smooth scrollbar">
                  {data?.data.length > 0 && data?.data.map((item, index) => (
                  <Menu.Item key={index}>
                    <Link 
                      href={"/"} 
                      className={classNames("flex items-center py-4 px-4 font-medium transition-all duration-200", !item.isRead?"bg-magenta-50 hover:bg-magenta-100":"bg-white hover:bg-magenta-50")}
                    >
                      <div className="flex space-x-4">
                        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-offset-2 ring-magenta-300">
                          <Image src={item.image} alt={item.name} width={'100%'} height={'100%'} effect={'blur'} classes={'w-full h-full object-cover'}/>
                        </div>
                        <div className="w-full flex-shrink space-y-2">
                          <div className="flex justify-between">
                            <div className="text-lg font-bold text-black leading-none">{item.name}</div>
                            <div className="text-xs leading-tight text-magenta-600">{item.date}</div>
                          </div>
                          <div className="text-sm leading-tight text-slate-600" dangerouslySetInnerHTML={{__html:item.content}}></div>
                        </div>
                      </div>
                    </Link>
                  </Menu.Item>
                  ))}
                </div>
                <div className="flex items-center justify-center px-4 py-3">
                  <Link  href={"/"}  className="text-base font-semibold text-black hover:text-magenta-500 hover:underline hover:underline-offset-4 transition-all duration-200">View All</Link>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
};

export default NotificationDropdown;