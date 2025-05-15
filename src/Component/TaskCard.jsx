import React, { useState } from "react";
import { edittask } from "../Slices/taskSlice";
import { useDispatch, useSelector } from "react-redux";

function TaskCard({
  item,
  colkey,
  index,
  innerRef,
  draggableProps,
  dragHandleProps,
}) {
  const [isEdit, setIsedit] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const dispatch = useDispatch();
  const currentCol = useSelector((state) => state.app.currentCol);
  const isSelected = currentCol == colkey;

  const handleSave = () => {
    dispatch(edittask({ colkey, index, item: { title, description } }));
    setIsedit(false);
  };

  return (
    <>
      {!isEdit ? (
        <div ref={innerRef} {...draggableProps} {...dragHandleProps}>
          <div
            key={index}
            className={`relative top-0 left-0 p-3 rounded-md shadow-sm border transition-colors duration-300 ${
              isSelected
                ? "bg-indigo-200 hover:bg-indigo-300 border-indigo-500"
                : "bg-indigo-100 hover:bg-indigo-200 border-transparent hover:border-indigo-400"
            }`}
            onDoubleClick={(e) => {
              e.stopPropagation();
              setIsedit(true);
            }}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                setIsedit(true);
              }}
              className="absolute p-1 top-2 right-2 cursor-pointer"
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </div>
            <h3 className="font-semibold text-indigo-800">{item.title}</h3>
<p className="text-sm text-gray-700 whitespace-pre-wrap break-words">
  {item.description}
</p>
          </div>
        </div>
      ) : (
        <div
          className={`p-3 rounded-md shadow-sm space-y-2 border ${
            isSelected ? "bg-indigo-200 border-indigo-500" : "bg-indigo-100 border-indigo-400"
          }`}
          ref={innerRef}
          {...draggableProps}
          {...dragHandleProps}
        >
          <div className="flex justify-end gap-2">
            <i
              onClick={(e) => {
                e.stopPropagation();
                setIsedit(false);
              }}
              className="fa-solid fa-xmark text-xl font-bold text-indigo-600 cursor-pointer"
            ></i>
            <i
              onClick={(e) => {
                e.stopPropagation();
                handleSave();
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
      )}
    </>
  );
}

export default TaskCard;
