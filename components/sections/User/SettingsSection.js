import React, { useState } from 'react';
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";

const SettingsSection = () => {
  return (
    <>
      <div className="relative bg-white shadow rounded-lg overflow-hidden py-4 px-8">
        <div className="flex justify-between items-center border-b border-slate-200">
          <h1 className="text-3xl font-semibold text-black">Settings</h1>
        </div>
        <div className="divide-y divide-slate-200">
          <div className="relative py-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold text-black">Notification Settings</h1>
            </div>
            <div className="w-full max-w-2xl">
              <div className="space-y-5">
                <div className="relative flex space-x-4">
                  <Button
                    buttonEffect="hollow"
                    buttonClasses={"!rounded-full !h-10 !px-8"}
                    buttonLabel={"Cancel"}
                    buttonLabelClasses={"font-semibold"}
                    buttonFunction={() => {}}
                  />
                  <Button
                    buttonEffect="filled"
                    buttonClasses={"!rounded-full !h-10 !px-8"}
                    buttonLabel={"Update"}
                    buttonLabelClasses={"font-semibold"}
                    buttonFunction={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsSection;