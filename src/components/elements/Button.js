import React from "react";

function Button({ currentStep, displayStep, handleClick }) {
  return (
    <button
      onClick={(e) => handleClick(e)}
      type="submit"
      className="text-center w-[70%] mt-10 px-3 py-3 rounded-md border border-transparent bg-[#664DE5] text-sm font-medium text-white shadow-sm hover:bg-[#644dd6] focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {currentStep === displayStep.length
        ? "Launch Cutshort"
        : "Create Workspace"}
    </button>
  );
}

export default Button;
