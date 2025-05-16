import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddColumn from "./AddColumn";
import Column from "./Column";
import { DragDropContext } from "@hello-pangea/dnd";
import { handleDragEnd } from "../Slices/taskSlice";
function DashBoard() {
  const cols = useSelector((state) => state.app.columns);
  const keyList = Object.keys(cols);
  const dispatch=useDispatch();
  const handleDrop = (result) => {
    console.log(result);
    dispatch(handleDragEnd(result))
  };
  return (
    <div className=" w-[1400px] flex flex-nowrap gap-4 p-4 overflow-x-auto">
      <DragDropContext onDragEnd={handleDrop}>
        {keyList.map((item, index) => (
          <Column colkey={item} key={index} />
        ))}
      </DragDropContext>
      <AddColumn />
    </div>
  );
}

export default DashBoard;
