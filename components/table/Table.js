import React from 'react';
import Tbody from './Tbody';
import Thead from './Thead';

const Table = ({tableData, tableHeadData}) => {
  return (
    <>
      <div className="w-full overflow-auto scroll-smooth scrollbar">
        <table className="min-w-max w-full table-auto">
          <Thead tableHeadData={tableHeadData}/>
          <Tbody tableData={tableData}/>
        </table>
      </div>
    </>
  );
};

export default Table;