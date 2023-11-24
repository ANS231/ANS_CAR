import React, { useRef } from 'react';
import TableAction from './TableAction';
import Image from "next/image";
import Select from "../forms/Select";
import Input from "../forms/Input";
import Textarea from "../forms/Textarea";
import { classNames } from "@/helpers/classNames";

const Td = ({type, align, data, image, statusLabel, statusType, actionData}) => {

  const status = {
    "success":"bg-green-100 text-green-600",
    "danger":"bg-rose-100 text-rose-600",
    "warning":"bg-amber-100 text-amber-600",
    "info":"bg-sky-100 text-sky-600",
    "":"bg-slate-100 text-slate-950",
  }

  return (
    <>
      <td className={classNames(
        "py-3 px-2 max-w-[240px]", 
        align === 'left'? "text-left": align === 'right'? "text-right": align === 'center'? "text-center":"",
      )}>
        {type === 'text' &&
          <div className="text-base font-normal text-slate-950">{data}</div>
        }
        {type === 'user' &&
          <div className="relative flex items-center">
            <div className="relative w-8 h-8 min-w-[32px] overflow-hidden rounded-full bg-magenta-100">
              <Image src={image} alt={""} fill={true} />
            </div>
            <div className="text-base font-normal text-slate-950 mx-2">{data}</div>
          </div>
        }
        {type === 'image' &&
          <div className={classNames(
            "relative w-8 h-8 min-w-[32px] overflow-hidden rounded-full bg-magenta-100",
            align === 'left'? "": align === 'right'? "ml-auto": align === 'center'? "mx-auto":"",
            )}>
            <Image src={image} alt={""} fill={true} />
          </div>
        }
        {type === 'status' &&
          <div className={classNames(
            "flex items-center",
            align === 'left'? "justify-start": align === 'right'? "justify-end": align === 'center'? "justify-center":"",
          )}>
            <div className={"text-xs font-medium leading-tight rounded py-1 px-2 " + (status[statusType])}>{statusLabel}</div>
          </div>
        }
        {type === 'action' &&
          <div className="flex items-center justify-end">
            <TableAction data={actionData} xPlacement={'right'}/>
          </div>
        }
        {type === 'select' &&
          <Select xPlacement={'left'} dropdownClass={'!w-full'} dropdownData={
            [
              { _id: -1, label: 'Select', value: 0 },
              ...[
                { _id: 1, label: 'Yes', value: 1 },
                { _id: 2, label: 'No', value: 2 },
              ]
            ]}
          />
        }
        {type === 'input' &&
          <Input inputType={'text'} />
        }
        {type === 'textarea' &&
          <Textarea />
        }
      </td>
    </>
  );
};

export default Td;