import React, { useState } from 'react';

const TableSort = ({sortState, ...props}) => {
  const[sortType, setSortType] = useState(sortState);

  return (
    <>
      <button type="button" className="relative w-4 h-4 bg-transparent text-magenta-500" onClick={() => {setSortType(sortType === 'ASC'? 'DESC':'ASC')}}>
        <span className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " + (sortType === 'ASC'?'opacity-100':'opacity-25')}>
          <i className="fa-solid fa-fw fa-sort-up"></i>
        </span>
        <span className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " + (sortType === 'DESC'?'opacity-100':'opacity-25')}>
          <i className="fa-solid fa-fw fa-sort-down"></i>
        </span>
      </button>
    </>
  );
};

export default TableSort;