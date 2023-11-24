import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { classNames } from "@/helpers/classNames";
import Button from "@/components/forms/Button";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";

import Logo from "../../public/assets/images/logo.svg";
import UserImage1 from "../../public/assets/images/user-01.webp";
import UserImage2 from "../../public/assets/images/user-02.webp";
import UserImage3 from "../../public/assets/images/user-03.webp";
import UserImage4 from "../../public/assets/images/user-04.webp";
import UserImage5 from "../../public/assets/images/user-05.webp";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setILoggedIn] = useState(true);

  const userMenu = {
    image:UserImage1,
    name:"Tony C. German",
    menuData:[
      {label:"Account", icon:"fa-user-large text-magenta-500", link:"/", standout:false },
      {label:"Settings", icon:"fa-sliders text-magenta-500", link:"/", standout:false },
      {label:"My Booking", icon:"fa-party-horn text-magenta-500", link:"/", standout:false },
      {label:"Transactions", icon:"fa-coins text-magenta-500", link:"/", standout:false },
      {label:"Logout", icon:"fa-arrow-right-from-bracket", onclick:() => {}, standout:true },
    ]
  }

  const menuData = [
    {
      _id:1,
      name:"Home",
      icon:"fa-house-blank",
      link:"/",
    },
    {
      _id:2,
      name:"Request",
      icon:"fa-clipboard-question",
      link:"/request",
    },
    {
      _id:3,
      name:"Services",
      icon:"fa-globe",
      link:"/services",
    },
    {
      _id:4,
      name:"Experts",
      icon:"fa-badge-check",
      link:"/experts",
    },
    {
      _id:5,
      name:"Contact us",
      icon:"fa-phone",
      link:"/contact-us",
    },
  ]  

  const notificationData = {
    count: 56,
    data:[
      {
        name:"Tony C. German",
        image:UserImage1,
        content:"<strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. <strong>Proin lacinia</strong> lorem sit amet ipsum aliquet, eget auctor erat pretium. Aliquam tristique",
        date:"9 Nov, 2023",
        link:"/",
        isRead:false
      },
      {
        name:"Omar L. Washington",
        image:UserImage2,
        content:"<strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. <strong>Proin lacinia</strong> lorem sit amet ipsum aliquet, eget auctor erat pretium. Aliquam tristique",
        date:"9 Nov, 2023",
        link:"/",
        isRead:false
      },
      {
        name:"Dennis P. Appling",
        image:UserImage3,
        content:"<strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. <strong>Proin lacinia</strong> lorem sit amet ipsum aliquet, eget auctor erat pretium. Aliquam tristique",
        date:"9 Nov, 2023",
        link:"/",
        isRead:false
      },
      {
        name:"Jay M. Collins",
        image:UserImage4,
        content:"<strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. <strong>Proin lacinia</strong> lorem sit amet ipsum aliquet, eget auctor erat pretium. Aliquam tristique",
        date:"9 Nov, 2023",
        link:"/",
        isRead:false
      },
      {
        name:"Raymond V. Rawlins",
        image:UserImage5,
        content:"<strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. <strong>Proin lacinia</strong> lorem sit amet ipsum aliquet, eget auctor erat pretium. Aliquam tristique",
        date:"9 Nov, 2023",
        link:"/",
        isRead:true
      },
      {
        name:"Tony C. German",
        image:UserImage1,
        content:"<strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. <strong>Proin lacinia</strong> lorem sit amet ipsum aliquet, eget auctor erat pretium. Aliquam tristique",
        date:"9 Nov, 2023",
        link:"/",
        isRead:true
      },
      {
        name:"Omar L. Washington",
        image:UserImage2,
        content:"<strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. <strong>Proin lacinia</strong> lorem sit amet ipsum aliquet, eget auctor erat pretium. Aliquam tristique",
        date:"9 Nov, 2023",
        link:"/",
        isRead:true
      },
    ]
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header className={classNames("fixed top-0 left-0 z-20 w-full transition-all duration-200", scrolled?"bg-white py-3 shadow":"bg-transparent py-8")}>
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          <div className="flex items-center justify-end">
            <div className={classNames("max-w-xs mr-auto transition-all duration-200", scrolled?"h-20":"h-32")}>
              <Link href="/" className="block w-full h-full"><Image src={Logo} alt="Logo" className="w-full h-full object-contain" /></Link>
            </div>
            <div className="">
              {menuData?.length > 0 &&
                <div className="block xl:flex items-center space-y-4 xl:space-y-0 space-x-0 xl:space-x-4">
                  {menuData?.map((item) => (
                    <div className="relative" key={item._id}>
                      <Link href={item.link} className={classNames("px-3 text-lg flex items-center space-x-1 font-semibold uppercase hover:text-magenta-500 transition-all duration-200", pathname === item.link?'text-magenta-500':scrolled?'text-black':'text-white')} >
                        <i className={classNames("fa-regular fa-fw",item.icon)}></i>
                        <span className="text-lg">{item.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              }
            </div>
            <div className="ml-16 flex items-center space-x-5">
              {isLoggedIn?(
                <>
                  <UserDropdown
                    xPlacement={"right"}
                    data={userMenu}
                    scrolled={scrolled}
                  />
                  <NotificationDropdown
                    xPlacement={"right"}
                    data={notificationData}
                    scrolled={scrolled}
                  />
                </>
              ):(
                <>
                  <Button
                    buttonClasses={"!rounded-full !px-8 !bg-green-500"}
                    buttonLabel={"Sign in"}
                    buttonLabelClasses={"font-semibold uppercase text-lg"}
                  />
                </>
              )}
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;