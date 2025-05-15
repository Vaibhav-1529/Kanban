import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Slices/taskSlice";

function AddtaskBox({isSelected,setIsaddtaskbox,colkey}) {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const dispatch=useDispatch();
    function handleSave(e){
            e.preventDefault();
            const item = {
              title,
              description,
              columnName:colkey,
            };
            console.log(item);
                  if (
                title?.trim() &&
                description?.trim() &&
                colkey?.trim()
                   ){
            dispatch(addTask(item));
            setIsaddtaskbox(false);}
            else{
              alert("enter valid details")
            }
    }
    function handleChangeName(){
        
    }
  return (
      <div
        className={`w-full h-auto top-3 rounded-md shadow-sm space-y-2 border ${
          isSelected
            ? "bg-indigo-200 border-indigo-500"
            : "bg-indigo-100 border-indigo-400"
        }`}
      >
        <div className="flex justify-end gap-2">
          <i
            onClick={(e) => {
              e.stopPropagation();
              setIsaddtaskbox(false);
            }}
            className="fa-solid fa-xmark text-xl font-bold text-indigo-600 cursor-pointer"
          ></i>
          <i
            onClick={(e) => {
              e.stopPropagation();
              handleSave(e);
            }}
            className="fa-solid fa-check text-xl font-bold text-indigo-600 cursor-pointer"
          ></i>
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-2 py-1 border rounded bg-indigo-200 text-sm outline-none"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-2 py-1 border rounded text-sm resize-none bg-indigo-200 outline-none overflow-hidden auto-grow"
          style={{ height: "auto", minHeight: "3rem" }}
          rows="1"
        />
      </div>
  );
}

export default AddtaskBox;
