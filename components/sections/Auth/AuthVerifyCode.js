import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Button from "../../forms/Button";

const AuthVerifyCode = ({setSwitchView}) => {
  const [otp, setOtp] = useState('');
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold uppercase text-black">Verify Code</h2>
        <div className="text-lg font-medium !leading-none text-black">
          <p>Enter your verification code sent to your email address.</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="relative">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={""}
            skipDefaultStyles={true}
            containerStyle={"w-full gap-4"}
            inputStyle={"w-full p-0 h-12 rounded-md border border-slate-200 bg-white text-3xl font-medium text-black focus:border-magenta-500 focus:ring-magenta-500 text-center transition-all duration-200"}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <div className="relative">
          <Button
            buttonEffect="filled"
            buttonClasses={"!rounded-full !px-8 w-full"}
            buttonLabel={"Verify Code"}
            buttonLabelClasses={"font-semibold uppercase text-xl"}
            buttonIcon={"fa-light fa-fingerprint"}
            buttonIconPosition={"right"}
            buttonFunction={() => setSwitchView("set-password")}
          />
        </div>
        <div className="relative !mt-8">
          <div className="text-base font-medium text-center">
            Change email address?
            <Button
              buttonClasses={"!rounded-none !px-0 !bg-transparent !h-auto !text-magenta-500 hover:!text-magenta-500 !gap-1 !inline-flex mx-1"}
              buttonLabel={"Click here"}
              buttonLabelClasses={"font-semibold !text-base duration-0"}
              buttonFunction={() => setSwitchView("forgot-password")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthVerifyCode;