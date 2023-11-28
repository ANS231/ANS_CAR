import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "@/helpers/classNames";

import UserImage from "../../public/assets/images/user-01.webp";



const Sidebar = () => {
  const pathname = usePathname();
  const userMenu = {
    image: UserImage,
    name: "Tony C. German",
    email: "tony.german@mailinator.com",
    since: "28 Dec, 2022",
    menuData: [
      { label: "Account", icon: "fa-user-large", link: "/user/account", standout: false },
      { label: "Settings", icon: "fa-sliders", link: "/user/settings", standout: false },
      { label: "My Booking", icon: "fa-party-horn", link: "/user/bookings", standout: false },
      { label: "Transactions", icon: "fa-coins", link: "/user/transactions", standout: false },
      { label: "Logout", icon: "fa-arrow-right-from-bracket", onclick: () => { }, standout: true },
    ]
  }
  return (
    <>
      <div className="sticky top-32 w-full">
        <div className="relative bg-white shadow rounded-lg overflow-hidden py-4">
          <div className="py-4 px-8 space-y-4">
            <div className="relative w-40 h-40 overflow-hidden rounded-lg">
              <Image src={userMenu.image} alt={userMenu.name} fill={true} effect={'blur'} className={'w-full h-full object-cover'} />
            </div>
            <div className="text-black">
              <h2 className="text-xl font-bold mb-1">{userMenu.name}</h2>
              <div className="!leading-tight text-base font-medium">Email: {userMenu.email}</div>
              <div className="!leading-tight text-base font-medium">Member Since: {userMenu.since}</div>
            </div>
          </div>
          <div className="py-4 border-t border-slate-200">
            {userMenu.menuData?.map((item, index) => (
            <div key={index}>
              {item.link ? (
                <Link
                  href={item.link}
                  className={classNames(
                    "flex items-center py-2 px-8 gap-3 font-medium transition-all duration-200 text-black hover:text-magenta-500",
                    pathname === item.link?"bg-magenta-100 text-magenta-500":""
                  )}
                >
                  <div className="w-5 h-5 flex items-center justify-center text-base">
                    <i className={"fa-regular fa-fw " + (item.icon)}></i>
                  </div>
                  <div className="text-lg">{item.label}</div>
                </Link>
              ) : (
                <button
                  type="button"
                  className={classNames(
                    "w-full flex items-center py-2 px-8 gap-3 font-medium transition-all duration-200 text-black hover:text-magenta-500",
                    pathname === item.link?"bg-magenta-100 text-magenta-500":""
                  )}
                  onClick={item.onclick}
                >
                  <div className="w-5 h-5 flex items-center justify-center text-base">
                    <i className={"fa-regular fa-fw " + (item.icon)}></i>
                  </div>
                  <div className="text-lg">{item.label}</div>
                </button>
              )}
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;