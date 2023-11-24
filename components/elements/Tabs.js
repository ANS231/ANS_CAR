import React, { useEffect, useState } from 'react';
import { classNames } from "@/helpers/classNames";

const Tabs = ({
  tabs, 
  navTabClass,
  ...props
}) => {
  const [selectedTab, setSelectedTab] = useState({})
  
  const handleTabSelection = (tab = {}) => {
    setTimeout(() => {
      let activeTab = [];
      let filteredTab = tabs.filter((tab) => activeTab.includes(tab._id))[0];
      if(filteredTab){
        activeTab = [...activeTab.filter((actab) => actab !== filteredTab._id), tab?._id]
      } else {
        activeTab = [...activeTab, tab?._id]
      }
      setSelectedTab(tab);
    }, 100)
  }

  useEffect(() => {
    if (tabs.length) {
      setSelectedTab(tabs[0])
    }
  }, [tabs]);
  
  return (
    <>
      <div className="relative">
        <div className={classNames("flex overflow-auto", navTabClass)}>
          <nav className={classNames("flex bg-white shadow-lg mb-4 border border-slate-50 rounded-lg space-x-2")}>
            {tabs.map((item, index) => (
              <button 
                type="button" 
                className={classNames(
                  "relative px-5 py-2 rounded-md transition-all duration-200", 
                  (item._id === selectedTab?._id)?"bg-magenta-500":"",
                  
                )} 
                key={index} 
                onClick={() => handleTabSelection(item)}
              >
                <div className={classNames(
                  "whitespace-nowrap text-base transition-all duration-200",
                  (item._id === selectedTab?._id)?"text-white":""
                )}>{item.name}</div>
              </button>
            ))}
          </nav>
        </div>
        <div className="relative">{selectedTab?.component}</div>
      </div>
    </>
  );
};

export default Tabs;