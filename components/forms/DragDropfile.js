import React, {useState} from 'react';
import Image from "next/image";


const DragDropfile = () => {

  const [files, setFile] = useState([]);
    const [message, setMessage] = useState();
    const handleFile = (e) => {
        setMessage("");
        let file = e.target.files;
        
        for (let i = 0; i < file.length; i++) {
            const fileType = file[i]['type'];
            const validImageTypes = ['image/jpeg', 'image/png'];
            if (validImageTypes.includes(fileType)) {
                setFile([...files,file[i]]);
            } else {
                setMessage("only images accepted");
            }
            
        } 
    }; 

    const removeImage = (i) => {
       setFile(files.filter(x => x.name !== i));
    }
  return (
    <>
      <div className="relative flex justify-center items-center ">
        <div className="p-3 w-full bg-white rounded-md">
            <span className="flex justify-center items-center text-xs mb-1 text-red-500">{message}</span>

            
            <div className="h-32 w-full relative border-2 items-center rounded-md cursor-pointer  border-magenta-200 border-dashed" >
                <input type="file" onChange={handleFile} className="h-full w-full bg-green-200 opacity-0 z-10 absolute" multiple="multiple" name="files[]" />
                <div className="h-full w-full  absolute z-1 flex justify-center items-center top-0"> 
                    <div className="flex flex-col space-y-1">
                        <div className="text-magenta-500 text-6xl text-center"><i class="fa-thin fa-cloud-arrow-up"></i></div>
                        <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                        <div className="text-base font-bold">{`Drag and Drop a file`} <span className='text-magenta-500 underline decoration-1'>Browse</span></div>
                        <div className='text-xs text-slate-500 text-center '>Supported formates: JPEG, PNG, </div>
                    </div>
                </div> 
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                {files.map((file, key) => {
                    return (
                        <div key={key} className="overflow-hidden relative">
                            <i onClick={() => { removeImage(file.name)}} className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer"></i>            
                            <Image alt="" fill={true} className="h-20 w-20 rounded-md" src={URL.createObjectURL(file)}/>
                        </div>
                    )
                })}
            </div>

          
           
        </div> 
      </div> 
    </>
  );
};

export default DragDropfile;