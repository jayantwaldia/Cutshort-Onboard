import React, { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

function Button({ input1, input2 }) {
  const { currentStep, handleClick, displayStep } = useContext(StepperContext);
  return (
    <button
      onClick={() => handleClick(input1, input2)}
      type="button"
      className={`text-center w-full mt-10 px-3 py-3 rounded-md border border-transparent bg-[#664DE5] text-sm font-medium text-white shadow-sm hover:bg-[#644dd6] focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      {currentStep === displayStep.length
        ? "Launch Cutshort"
        : "Create Workspace"}
    </button>
  );
}

export default Button;

// className={`text-center w-full mt-10 px-3 py-3 rounded-md border border-transparent bg-[#664DE5] text-sm font-medium text-white shadow-sm hover:bg-[#644dd6] focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2 ${
//   input1 === "" && input2 === ""
//     ? "bg-black text-white font-bold border border-[#664DE5]"
//     : ""
// }`}
