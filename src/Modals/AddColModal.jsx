import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../Slices/taskSlice';
function AddColModal({ setIsOpen }) {
  const [columnName, setColumnName] = useState('');
  const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn(columnName));
    setIsOpen(false)
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-40 z-50">
      <div className="w-[90%] max-w-md bg-white p-6 rounded-md shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4 text-center">Add New Column</h2>
        
        <form  className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Column Name"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
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
          onClick={()=>{setIsOpen(false)}}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default AddColModal;
