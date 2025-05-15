import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddTaskModal from './AddTaskModal';

function Navbar() {
  const [isOpen,setIsOpen]=useState(false);
  const dispatch=useDispatch();
  return (
    <>
    {
      isOpen&& <AddTaskModal setIsOpen={setIsOpen}/>
    }
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto py-3 px-4 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-2">
          <div className="font-bold text-xl  rounded-sm text-purple-600 rotate-90" ><i className="fa-solid fa-bars"></i></div>
          <h2 className="font-bold text-xl text-gray-800">kanban</h2>
        </div>

        {/* Right Section: Controls */}
        <div className="flex items-center gap-4">
          {/* Dark/Light Toggle */}
          <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 gap-2">
            <i className="fa-solid fa-moon text-gray-600"></i>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-purple-600 relative transition-all duration-300">
                <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full peer-checked:translate-x-5 transform transition-all duration-300" />
              </div>
            </label>
            <i className="fa-solid fa-sun text-yellow-400"></i>
          </div>

          {/* Add Task Button */}
          <button
          onClick={(e)=>{
            e.stopPropagation();
            setIsOpen(true);
          }}
           className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
            + Add New Task
          </button>

          {/* Menu Icon */}
          <i className="fa-solid fa-ellipsis-vertical text-gray-600 text-xl cursor-pointer"></i>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
