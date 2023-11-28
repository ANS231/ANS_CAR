import { Fragment, useState } from 'react';
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react';
import AuthSignIn from "../sections/Auth/AuthSignIn";
import AuthSignUp from "../sections/Auth/AuthSignUp";
import AuthForgotPassword from "../sections/Auth/AuthForgotPassword";
import AuthVerifyCode from "../sections/Auth/AuthVerifyCode";
import AuthSetPassword from "../sections/Auth/AuthSetPassword";

import BannerImage from "../../public/assets/images/banner.webp";

const AuthenticationModal = ({ isOpen, setIsOpen }) => {
  const [switchView, setSwitchView] = useState("signin");

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-60" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="w-full grid grid-cols-5">
                    <div className="relative col-span-2">
                      <div className="absolute shadow-inner top-0 left-0 z-[-1] w-full h-full overflow-hidden">
                        <Image src={BannerImage} alt="" fill={false} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="relative col-span-3 py-8 px-12 space-y-8">
                      {switchView === 'signin' &&
                        <AuthSignIn setSwitchView={setSwitchView}/>
                      }
                      {switchView === 'signup' &&
                        <AuthSignUp setSwitchView={setSwitchView}/>
                      }
                      {switchView === 'forgot-password' &&
                        <AuthForgotPassword setSwitchView={setSwitchView}/>
                      }
                      {switchView === 'verify-code' && 
                        <AuthVerifyCode setSwitchView={setSwitchView}/>
                      }
                      {switchView === 'set-password' && 
                        <AuthSetPassword setSwitchView={setSwitchView}/>
                      }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AuthenticationModal;