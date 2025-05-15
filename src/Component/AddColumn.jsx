import React, { useState } from "react";
import AddColModal from "../Modals/AddColModal";

export default function AddColumn() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <AddColModal setIsOpen={setIsOpen} />}
      <div
        onClick={() => setIsOpen(true)}
        className="min-w-64 h-[calc(100vh-100px)] cursor-pointer flex justify-center items-center bg-gray-200 border-2 border-dashed border-gray-400 hover:bg-gray-300 transition-all duration-300 rounded-md"
      >
        <span className="text-gray-600 font-semibold text-lg">+ Add Column</span>
      </div>
    </>
  );
}
