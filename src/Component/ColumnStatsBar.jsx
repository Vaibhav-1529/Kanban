import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setcurrentCol } from "../Slices/taskSlice";

function ColumnStatusBar({ setIsaddtaskbox, colkey }) {
  const columns = useSelector((state) => state.app.columns);
  const columnNames = Object.keys(columns);
  const dispatch = useDispatch();

  let totalTasks = 0;
  let completedTasks = 0;

  columnNames.forEach((col) => {
    columns[col].forEach((task) => {
      totalTasks++;
      if (task.completed) completedTasks++;
    });
  });

  const pendingTasks = totalTasks - completedTasks;

  function handleadd() {
    dispatch(setcurrentCol(colkey)); // Set the current column
    setIsaddtaskbox(true);           // Show the AddtaskBox
  }

  const items = [
    { icon: "fa-plus", label: "Add Task", onClick: handleadd },
    { icon: "fa-pen-to-square", label: `Edit Column Name` },
    { icon: "fa-list", label: `Total Tasks: ${totalTasks}` },
    { icon: "fa-check", label: `Completed Tasks: ${completedTasks}` },
    {
      icon: "fa-clock",
      label: `Pending Tasks: ${pendingTasks}`,
      type: "regular",
    },
  ];

  return (
    <div className="fixed top-1/4 left-0 z-50 group">
      <div className="flex flex-col bg-indigo-600 text-white w-10 group-hover:w-40 rounded-r-xl shadow-lg overflow-hidden transition-all duration-300">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={item.onClick}
            className="flex items-center gap-3 p-2 hover:bg-indigo-700 transition cursor-pointer"
          >
            <i
              className={`${
                item.type === "regular" ? "fa-regular" : "fa-solid"
              } ${item.icon}`}
            ></i>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColumnStatusBar;
