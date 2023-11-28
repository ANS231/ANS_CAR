import React from 'react';
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Sidebar from "../shared/Sidebar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Header/>
        <section className="relative py-12 bg-slate-50">
          <div className="w-full px-4 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto">
            <div className="grid grid-cols-12 gap-8">
              <div className="relative col-span-3">
                <Sidebar/>
              </div>
              <div className="relative col-span-9">{children}</div>
            </div>
          </div>
          
        </section>
      <Footer/>
    </>
  );
};

export default AuthLayout;