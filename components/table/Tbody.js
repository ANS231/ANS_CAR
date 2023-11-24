import React from 'react';
import Td from './Td';

const Tbody = ({tableData}) => {
  return (
    <>
      <tbody className="text-slate-700 text-sm font-light">
        {tableData.map((item) => (
        <tr className="border-b border-magenta-500/5" key={item._id}>
          {item.rowData.map((itemData) => (
            <Td 
              key={itemData._id}
              type={itemData.type} 
              align={itemData.align} 
              data={itemData.data} 
              image={itemData.image}
              statusLabel={itemData.statusLabel} 
              statusType={itemData.statusType}
              actionData={itemData.actionData}
            />
          ))}
        </tr>
        ))}
      </tbody>
    </>
  );
};

export default Tbody;