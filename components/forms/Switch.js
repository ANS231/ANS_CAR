import React from 'react';

const Switch = ({ checked, functions }) => {
  return (
    <>
      <div className="relative overflow-hidden">
        <input type="checkbox" className="peer absolute top-0 left-0 z-10 opacity-0 cursor-pointer w-full h-full" defaultChecked={checked}
          onChange={functions}
        />
        <div className="w-12 h-6 rounded-3xl border border-slate-200 bg-slate-100 before:absolute before:content-[''] before:top-1/2 before:left-1 before:-translate-y-1/2 before:bg-white before:border before:border-slate-200 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 transition-all before:transition-all peer-checked:bg-magenta-500 peer-checked:before:bg-white"></div>
      </div>
    </>
  );
};

export default Switch;