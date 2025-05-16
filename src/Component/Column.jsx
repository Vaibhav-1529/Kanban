import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { setcurrentCol } from "../Slices/taskSlice";
import ColumnStatsBar from "./ColumnStatsBar";
import AddtaskBox from "./AddtaskBox";
function Column({ colkey }) {
  const data = useSelector((state) => state.app);
  const [isaddtaskbox, setIsaddtaskbox] = useState(false);
  const currentCol = data.currentCol;
  const items = data.columns[colkey];
  const dispatch = useDispatch();

  function handlecolclick() {
    if (currentCol == colkey) dispatch(setcurrentCol(""));
    else dispatch(setcurrentCol(colkey));
  }
  const isSelected = currentCol === colkey;
  return (
    <div
      onClick={handlecolclick}
      className={`w-64 min-w-[16rem] h-[calc(100vh-100px)] rounded-md p-4 space-y-4 transition-colors duration-300 flex flex-col overflow-y-auto custom-scroll border
        ${
          isSelected
            ? "bg-indigo-100 border-indigo-500 shadow-lg"
            : "bg-white border-gray-200 hover:bg-indigo-50 hover:border-indigo-300"
        }
      `}
    >
      {isSelected && <ColumnStatsBar setIsaddtaskbox={setIsaddtaskbox} />}
      <h2 className="text-xl font-bold text-center mb-2 text-indigo-700">
        {colkey}
      </h2>

      <Droppable droppableId={colkey}>
        {({ droppableProps, innerRef, placeholder }) => (
          <>
            <div className="h-full" ref={innerRef} {...droppableProps}>
              {items.length ? (
                <div className="space-y-3">
                  {isaddtaskbox && 
                    <AddtaskBox
                      setIsaddtaskbox={setIsaddtaskbox}
                      colkey={colkey}
                    />}

                  {items.map((item, index) => (
                    <Draggable
                      draggableId={`${colkey}-${index}`}
                      key={`${colkey}-${index}`}
                      index={index}
                    >
                      {({
                        draggableProps,
                        innerRef,
                        placeholder,
                        dragHandleProps,
                      }) => (
                        <>
                          <TaskCard
                            colkey={colkey}
                            item={item}
                            index={index}
                            innerRef={innerRef}
                            draggableProps={draggableProps}
                            dragHandleProps={dragHandleProps}
                          />
                          {placeholder} 
                        </>
                      )}
                    </Draggable>
                  ))}
                </div>
              ) : ( !isaddtaskbox?
                <div className="h-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
                  No tasks yet
                </div>:<AddtaskBox
                      setIsaddtaskbox={setIsaddtaskbox}
                      colkey={colkey}
                    />
              )}
            </div>
            {placeholder}
          </>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
