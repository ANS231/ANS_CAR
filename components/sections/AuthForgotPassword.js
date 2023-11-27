import React from 'react';
import Button from "../forms/Button";
import Input from "../forms/Input";


const AuthForgotPassword = ({setSwitchView}) => {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold uppercase text-black">Forgot Password</h2>
        <div className="text-lg font-medium !leading-none text-black">
          <p>Enter your email address to receive code.</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="relative">
          <Input
            isInputGroup={true}
            inputGroupIcon={"fa-regular fa-envelope"}
            inputGroupPosition={"left"}
            label={"Email address"}
            inputType={"email"}
          />
        </div>
        <div className="relative">
          <Button
            buttonEffect="filled"
            buttonClasses={"!rounded-full !px-8 w-full"}
            buttonLabel={"Reset Password"}
            buttonLabelClasses={"font-semibold uppercase text-xl"}
            buttonIcon={"fa-regular fa-key"}
            buttonIconPosition={"right"}
            buttonFunction={() => {}}
          />
        </div>
        <div className="relative !mt-8">
          <div className="text-base font-medium text-center">
            Already have an account?
            <Button
              buttonClasses={"!rounded-none !px-0 !bg-transparent !h-auto !text-magenta-500 hover:!text-magenta-500 !gap-1 !inline-flex mx-1"}
              buttonLabel={"Signin"}
              buttonLabelClasses={"font-semibold !text-base duration-0"}
              buttonFunction={() => setSwitchView("signin")}
            />
            here
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForgotPassword;