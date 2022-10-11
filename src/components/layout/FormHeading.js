import React, { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

function FormHeading() {
  const { currentStep, displayStep, formState } = useContext(StepperContext);
  return (
    <div className="w-full mx-auto">
      <p className="text-2xl md:text-3xl font-semibold text-gray-700 tracking-wide">
        {currentStep === 4
          ? `Congratulations, ${formState.fullName}!`
          : `${displayStep[currentStep - 1].main}`}
      </p>
      <p className="text-gray-500 font-normal mt-3">
        {displayStep[currentStep - 1].sub}
      </p>
    </div>
  );
}

export default FormHeading;
