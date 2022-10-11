import React from "react";
import Button from "../elements/Button";

function StepperControl({ currentStep, displayStep, handleClick }) {
  return (
    <Button
      currentStep={currentStep}
      displayStep={displayStep}
      handleClick={handleClick}
    />
  );
}

export default StepperControl;
