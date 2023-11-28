import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Button from "../../forms/Button";
import Input from "../../forms/Input";
import Checkbox from "../../forms/Checkbox";

import Google from "../../../public/assets/images/google.svg"
import Facebook from "../../../public/assets/images/facebook.svg"

const AuthSignIn = ({setSwitchView}) => {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold uppercase text-black">Signin</h2>
        <div className="text-lg font-medium !leading-none text-black">
          <p>Use your credential to signin into your account</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="relative">
          <Input
            isInputGroup={true}
            inputGroupIcon={"fa-regular fa-user"}
            inputGroupPosition={"left"}
            label={"Username / Email address"}
            inputType={"email"}
          />
        </div>
        <div className="relative">
          <Input
            isInputGroup={true}
            inputGroupIcon={"fa-regular fa-key"}
            inputGroupPosition={"left"}
            label={"Password"}
            inputType={"password"}
          />
        </div>
        <div className="relative flex justify-between">
          <div className="relative">
            <Checkbox
              checkboxLabel={"Remember me"}
              checkboxLableClass={"!font-semibold"}
            />
          </div>
          <div className="relative">
            <Button
              buttonClasses={"!rounded-none !px-0 !bg-transparent !h-auto !text-black hover:!text-magenta-500 !gap-1"}
              buttonLabel={"Forgot Password"}
              buttonLabelClasses={"font-semibold !text-sm duration-0"}
              buttonIcon={"fa-regular fa-circle-question text-sm"}
              buttonIconPosition={"left"}
              buttonFunction={() => setSwitchView("forgot-password")}
            />
          </div>
        </div>
        <div className="relative">
          <Button
            buttonEffect="filled"
            buttonClasses={"!rounded-full !px-8 w-full"}
            buttonLabel={"Signin"}
            buttonLabelClasses={"font-semibold uppercase text-xl"}
            buttonIcon={"fa-regular fa-arrow-right-to-bracket"}
            buttonIconPosition={"right"}
            buttonFunction={() => {}}
          />
        </div>
        <div className="relative z-0 flex flex-col items-center space-y-4">
          <div className="max-auto w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 font-semibold uppercase text-xs !leading-none after:content[''] after:absolute after:top-3.5 after:left-0 after:border-t after:border-slate-200 after:w-full after:z-[-1]">Or</div>
          <div className="flex items-center gap-2 w-full">
            <div className="relative w-full flex-shrink">
              <Link href="/" className="w-full h-10 bg-white space-x-4 border border-slate-200 flex items-center justify-center text-black font-semibold text-sm rounded-lg">
                <Image src={Facebook} width={20} height={20} alt={"Facebook"}  className="object-contain"/>
                <span>Login with Facebook</span>
              </Link>
            </div>
            <div className="relative w-full flex-shrink">
              <Link href="/" className="w-full h-10 bg-white space-x-4 border border-slate-200 flex items-center justify-center text-black font-semibold text-sm rounded-lg">
                <Image src={Google} width={20} height={20} alt={"Google"}  className="object-contain"/>
                <span>Login with Google</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative !mt-8">
          <div className="text-base font-medium text-center">
            Don't have an account?
            <Button
              buttonClasses={"!rounded-none !px-0 !bg-transparent !h-auto !text-magenta-500 hover:!text-magenta-500 !gap-1 !inline-flex mx-1"}
              buttonLabel={"Signup"}
              buttonLabelClasses={"font-semibold !text-base duration-0"}
              buttonFunction={() => setSwitchView("signup")}
            />
            here
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthSignIn;