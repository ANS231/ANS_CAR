import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { classNames } from "@/helpers/classNames";

import Logo from "../../public/assets/images/logo-alt.svg";
import EventImage1 from "../../public/assets/images/events-01.webp";
import EventImage2 from "../../public/assets/images/events-02.webp";

const Footer = () => {

  const companyData = {
    logo: Logo,
    slogan: "Get help from thousands of trusted experts near you.",
    social: {
      title: "Social Media",
      socialLinks: [
        { label: "Facebook", icon: "fa-facebook-f", link: "/" },
        { label: "Twitter", icon: "fa-twitter", link: "/" },
        { label: "LinkedIn", icon: "fa-linkedin-in", link: "/" },
      ]
    }
  }

  const sitemapData = {
    title: "Sitemap",
    links: [
      { label: "Home", link: "/" },
      { label: "Request", link: "/" },
      { label: "Services", link: "/" },
      { label: "Experts", link: "/" },
    ]
  }

  const contactData = {
    title: "Contact Us",
    contacts: [
      { label: "Phone", data: "+91 000 000 1000", icon: "fa-phone-volume", link: "tel:+91 000 000 1000" },
      { label: "Email", data: "sample@exmaple.com", icon: "fa-envelope-open", link: "mailto:sample@exmaple.com" },
      { label: "Address", data: "1/12 A.B.V Street, Kolkata, WB, India - 700000", icon: "fa-location-dot", },
    ]
  }

  const eventsData = {
    title:"Articles",
    events:[
      {
        image:EventImage1,
        title:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        link:"/",
        date:{
          day:"18",
          month:"Jun",
          year:"2023"
        }
      },
      {
        image:EventImage2,
        title:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        link:"/",
        date:{
          day:"18",
          month:"Jun",
          year:"2023"
        }
      },
    ]
  }
  const copyright = "Copyright © 2023 partyfixers.com. All rights reserved."

  return (
    <>
      <footer className="relative bg-neutral-800">
        <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
          <div className="grid grid-cols-12 gap-20 py-16">
            <div className="col-span-3">
              <div className="space-y-8">
                {companyData.logo &&
                  <div className="max-w-xs mr-auto transition-all duration-200 h-24 flex w-full">
                    <Link href="/" className="block"><Image src={companyData.logo} alt="Logo" className="w-full h-full object-contain" /></Link>
                  </div>
                }
                {companyData.slogan && <div className="text-base font-medium text-white !leading-tight">{companyData.slogan}</div>}
                {companyData.social &&
                  <div className="relative space-y-1">
                    {companyData.social?.title && <h4 className="text-base font-semibold uppercase text-white">{companyData.social?.title}</h4>}
                    {companyData.social?.socialLinks?.length > 0 &&
                      <div className="relative flex flex-wrap gap-x-5 gap-y-2">
                        {companyData.social?.socialLinks.map((item, index) => (
                          <a href={item.link} target="_blank" rel="nofollow" className="inline-flex items-center text-white space-x-2 group hover:text-magenta-500 transition-all duration-300" key={index}>
                            <span className="text-xs flex items-center justify-center rounded-full bg-white text-black w-6 h-6 transition-all duration-300 group-hover:bg-magenta-500">
                              <i className={classNames("fa-brands fa-fw", item.icon)}></i>
                            </span>
                            <span className="text-sm font-semibold">{item.label}</span>
                          </a>
                        ))}
                      </div>
                    }
                  </div>
                }
              </div>
            </div>
            <div className="col-span-2">
              {sitemapData &&
                <div className="space-y-8">
                  {sitemapData.title && <h4 className="text-xl font-semibold text-white uppercase">{sitemapData.title}</h4>}
                  {sitemapData.links?.length > 0 &&
                    <div className="relative space-y-4">
                      {sitemapData.links?.map((item, index) => (
                        <div className="flex" key={index}>
                          <a href={item.link} className="text-white text-lg font-medium transition-all duration-300 hover:text-magenta-500 hover:translate-x-2">{item.label}</a>
                        </div>
                      ))}
                    </div>
                  }
                </div>
              }
            </div>
            <div className="col-span-3">
              {contactData &&
                <div className="space-y-8">
                  {contactData.title && <h4 className="text-xl font-semibold text-white uppercase">{contactData.title}</h4>}
                  {contactData.contacts?.length > 0 &&
                    <div className="relative space-y-6">
                      {contactData.contacts?.map((item, index) => (
                        <div className="flex" key={index}>
                          {item.link ? (
                            <a href={item.link} className="text-white text-xl font-medium transition-all duration-300 hover:text-magenta-500 hover:translate-x-2 flex space-x-2">
                              <span><i className={classNames("fa-regular fa-fw", item.icon)}></i></span>
                              <span className="text-lg !leading-tight">{item.data}</span>
                            </a>
                          ) : (
                            <div className="text-white text-xl font-medium transition-all duration-300 hover:text-magenta-500 hover:translate-x-2 flex space-x-2">
                              <span><i className={classNames("fa-regular fa-fw", item.icon)}></i></span>
                              <span className="text-lg !leading-tight">{item.data}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  }
                </div>
              }
            </div>
            <div className="col-span-4">
              {eventsData &&
                <div className="space-y-8">
                  {eventsData.title && <h4 className="text-xl font-semibold text-white uppercase">{eventsData.title}</h4>}
                  {eventsData.events?.length > 0 &&
                    <div className="relative divide-y divide-white/10">
                      {eventsData.events?.map((item, index) => (
                        <div className="flex" key={index}>
                          <a href={item.link} className="relative group flex space-x-4 py-3">
                            <div className="w-20 h-20 overflow-hidden rounded flex-shrink-0">
                              <Image src={item.image} alt={item.title} fill={false} className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:grayscale"/>
                            </div>
                            <div className="w-full flex-shrink text-white space-y-1">
                              {item.title && <h4 className="font-medium text-base !leading-tight">{item.title}</h4>}
                              {item.date && <div className="opacity-75 text-sm !leading-none font-light">{item.date?.day} {item.date?.month} {item.date?.year}</div>}
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  }
                </div>
              }
            </div>
          </div>
        </div>
        {copyright &&
        <div className="border-t border-white/10">
          <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
            <div className="py-8 flex justify-center">
              <div className="text-white text-sm tracking-wider opacity-75 font-light">{copyright}</div>
            </div>
          </div>
        </div>
        }
      </footer>
    </>
  );
};

export default Footer;