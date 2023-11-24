import React from 'react';
import TableFilter from './TableFilter';
import TableSort from './TableSort';

const Th = ({
  name,
  nameAlign,
  isSort,
  isFilter,
  ...props
}) => {

  const align = {
    left: "justify-start",
    right: "justify-end",
    center: "justify-center",
    "": "justify-start",
  }

  return (
    <>
      <th className="py-4 px-2 text-left max-w-[240px] bg-magenta-50 first:rounded-tl-lg last:rounded-tr-lg">
        <div className={"flex items-center w-full " + (align[nameAlign])}>
          <div className="text-xs uppercase font-semibold text-magenta-500">{name}</div>
          {(isSort || isFilter) &&
          <div className="ml-auto flex justify-end items-center">
            {isSort &&
              <TableSort sortState={'nostate'}/>
            }
            {isFilter &&
              <TableFilter xPlacement={'right'}/>
            }
          </div>
          }
        </div>
      </th>
    </>
  );
};

export default Th;