import React from 'react';
import { Menu, Transition } from "@headlessui/react";
import { usePopper } from "react-popper";
import { useRef, useState } from "react";
import { bottom } from "@popperjs/core";
import Checkbox from "../forms/Checkbox";
import Radio from "../forms/Radio";
import Search from "../forms/Search";

const TableFilter = ({ xPlacement, ...props }) => {
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

  const filterData = [
    {_id:1, name:'Options 01', type:'checkbox', isChecked:false },
    {_id:2, name:'Options 02', type:'checkbox', isChecked:false },
    {_id:3, name:'Options 03', type:'checkbox', isChecked:false },
    {_id:4, name:'Options 04', type:'checkbox', isChecked:false },
    {_id:5, name:'Options 05', type:'checkbox', isChecked:false },
    {_id:6, name:'Options 06', type:'checkbox', isChecked:false },
  ]

  return (
    <>
      <Menu as="div">
        {({ open }) => (
          <>
            <Menu.Button ref={setTargetElement} className="flex items-center">
              <div className="relative bg-transparent flex items-center justify-center text-sm text-magenta-500 w-6 h-6 focus:ring-0 transition-all duration-200">
                <i className="fa-solid fa-fw fa-filter-list"></i>
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
              <Menu.Items className="w-60 origin-top-right bg-white border-0 divide-y divide-slate-100 rounded-md shadow ring-0">
                <div className="py-2 px-3">
                  <Search placeholder={'Search'} iconClasses={''} classes={'font-normal'}/>
                </div>
                <div className="py-1 max-h-60 divide-y divide-slate-100 overflow-auto scroll-smooth scrollbar">
                  {filterData.map((item) => (
                    <>
                    {item.type === 'checkbox' &&
                      <div className="relative py-2 px-3 hover:bg-slate-100 transition-all duration-200">
                        <Checkbox key={item._id} checkboxName={'filter_checkbox'} checkboxInputClass={''} isChecked={item.isChecked} checkboxLabel={item.name} checkboxLableClass={'font-normal text-xs'}/>
                      </div>
                    }
                    {item.type === 'radio' &&
                      <div className="relative py-2 px-3 hover:bg-slate-100 transition-all duration-200">
                        <Radio key={item._id} radioName={'filter_radio'} radioInputClass={''} isChecked={item.isChecked} radioLabel={item.name} radioLableClass={'font-normal text-xs'}/>
                      </div>
                    }
                    </>
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

export default TableFilter;