import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Slices/taskSlice";
function AddTaskModal({ setIsOpen }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [columnName, setColumnName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      title,
      description,
      columnName,
    };
    console.log(item);
          if (
        title?.trim() &&
        description?.trim() &&
        columnName?.trim()
           ){
    dispatch(addTask(item));
    setIsOpen(false);}
    else{
      alert("enter valid details")
    }
  };
  const cols = Object.keys(useSelector((state) => state.app.columns));
  console.log();
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-40 z-50">
      <div className="w-[90%] max-w-md bg-white p-6 rounded-md shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4 text-center">Add New task</h2>

        <form className="flex flex-col gap-4">
          <select onChange={(e) => setColumnName(e.target.value)}>
              <option value="" selected>
                Choose value
              </option>
            {cols.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Add Column
          </button>
        </form>

        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default AddTaskModal;
