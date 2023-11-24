import React from 'react';
import Th from './Th';

const Thead = ({tableHeadData}) => {

  return (
    <>
      <thead>
        <tr className="text-slate-700 text-xs leading-none border-b-2 border-magenta-100">
          { tableHeadData.map((item) => (
            <Th key={item._id} name={item.name} nameAlign={item.align} isSort={item.isSort} isFilter={item.isFilter}/>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default Thead;