import React, { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

function FormHeading() {
  const { currentStep, displayStep } = useContext(StepperContext);
  return (
    <div className="w-full md:w-[90%] mx-auto">
      <p className="text-2xl md:text-3xl font-semibold text-gray-700 tracking-wide">
        {displayStep[currentStep - 1].main}
      </p>
      <p className="text-gray-500 font-normal mt-3">
        {displayStep[currentStep - 1].sub}
      </p>
    </div>
  );
}

export default FormHeading;
