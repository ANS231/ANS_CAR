import React from 'react';
import Button from "../../forms/Button";
import Input from "../../forms/Input";

const AuthSetPassword = ({setSwitchView}) => {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold uppercase text-black">Set New Password</h2>
        <div className="text-lg font-medium !leading-none text-black">
          <p>Enter your verification code sent to your email address.</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="relative">
          <Input
            isInputGroup={true}
            inputGroupIcon={"fa-regular fa-key"}
            inputGroupPosition={"left"}
            label={"New Password"}
            inputType={"password"}
          />
        </div>
        <div className="relative">
          <Input
            isInputGroup={true}
            inputGroupIcon={"fa-regular fa-key"}
            inputGroupPosition={"left"}
            label={"Confirm New Password"}
            inputType={"password"}
          />
        </div>
        <div className="relative">
          <Button
            buttonEffect="filled"
            buttonClasses={"!rounded-full !px-8 w-full"}
            buttonLabel={"Update Password"}
            buttonLabelClasses={"font-semibold uppercase text-xl"}
            buttonIcon={"fa-light fa-key"}
            buttonIconPosition={"right"}
            buttonFunction={() => setSwitchView('signin')}
          />
        </div>
      </div>
    </>
  );
};

export default AuthSetPassword;