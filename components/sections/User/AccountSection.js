import React, { useState } from 'react';
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";

const AccountSection = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("Tony C. German");
  const [email, setEmail] = useState("tony.german@mailinator.com");
  const [phone, setPhone] = useState("9836098360");
  const [address, setAddress] = useState("84 Cherry Tree Drive");
  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("FL");
  const [city, setCity] = useState("Jacksonville");
  const [zipcode, setZipcode] = useState("32207");
  return (
    <>
      <div className="relative bg-white shadow rounded-lg overflow-hidden py-4 px-8">
        <div className="flex justify-between items-center border-b border-slate-200">
          <h1 className="text-3xl font-semibold text-black">Account</h1>
        </div>
        <div className="divide-y divide-slate-200">
          <div className="relative py-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold text-black">Personal Informations</h1>
              {!isEdit &&
              <div className="ml-auto">
                <Button
                  buttonClasses={"!rounded-none !px-0 w-full !h-6 !bg-transparent !text-magenta-500 !text-sm"}
                  buttonLabel={"Edit"}
                  buttonLabelClasses={"font-semibold text-base !leading-none"}
                  buttonIcon={"fa-regular fa-user-pen"}
                  buttonIconPosition={"left"}
                  buttonFunction={() => setIsEdit(true)}
                />
              </div>
              }
            </div>
            <div className="w-full max-w-2xl">
              <div className="space-y-5">
                <div className="relative">
                  <Input
                    isInputGroup={true}
                    inputGroupIcon={"fa-regular fa-user"}
                    inputGroupPosition={"left"}
                    label={"Name"}
                    labelClasses={"!text-base"}
                    inputType={"text"}
                    inputValue={name}
                    isDisabled={!isEdit}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative">
                    <Input
                      isInputGroup={true}
                      inputGroupIcon={"fa-regular fa-envelope"}
                      inputGroupPosition={"left"}
                      label={"Email address"}
                      labelClasses={"!text-base"}
                      inputType={"email"}
                      inputValue={email}
                      isDisabled={!isEdit}
                    />
                  </div>
                  <div className="relative">
                    <Input
                      isInputGroup={true}
                      inputGroupIcon={"fa-regular fa-phone"}
                      inputGroupPosition={"left"}
                      label={"Phone"}
                      labelClasses={"!text-base"}
                      inputType={"text"}
                      inputValue={phone}
                      isDisabled={!isEdit}
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className={"text-base font-semibold text-black"}>Address</div>
                  <div className="flex border border-slate-200 rounded-lg overflow-hidden py-2">
                    <div className={"w-10 min-w-[40px] flex items-center justify-center bg-white text-magenta-500 text-base mt-8 mb-auto"}>
                      <i className={"fa-regular fa-location-dot fa-fw"}></i>
                    </div>
                    <div className="w-full flex-shrink pr-3 space-y-5">
                      <div className="relative">
                        <Input
                          label={"Address Line 1"}
                          inputType={"text"}
                          inputValue={address}
                          isDisabled={!isEdit}
                        />
                      </div>
                      <div className="relative grid grid-cols-2 gap-5">
                        <div className="relative">
                          <Input
                            label={"Country"}
                            inputType={"text"}
                            inputValue={country}
                            isDisabled={!isEdit}
                          />
                        </div>
                        <div className="relative">
                          <Input
                            label={"State"}
                            inputType={"text"}
                            inputValue={state}
                            isDisabled={!isEdit}
                          />
                        </div>
                        <div className="relative">
                          <Input
                            label={"City"}
                            inputType={"text"}
                            inputValue={city}
                            isDisabled={!isEdit}
                          />
                        </div>
                        <div className="relative">
                          <Input
                            label={"Zipcode"}
                            inputType={"text"}
                            inputValue={zipcode}
                            isDisabled={!isEdit}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {isEdit &&
                <div className="relative flex space-x-4">
                  <Button
                    buttonEffect="hollow"
                    buttonClasses={"!rounded-full !h-10 !px-8"}
                    buttonLabel={"Cancel"}
                    buttonLabelClasses={"font-semibold"}
                    buttonFunction={() => setIsEdit(false)}
                  />
                  <Button
                    buttonEffect="filled"
                    buttonClasses={"!rounded-full !h-10 !px-8"}
                    buttonLabel={"Update"}
                    buttonLabelClasses={"font-semibold"}
                    buttonFunction={() => setIsEdit(false)}
                  />
                </div>
                }
              </div>
            </div>
          </div>
          <div className="relative py-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold text-black">Payment Informations</h1>
            </div>
            <div className="w-full max-w-2xl">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSection;