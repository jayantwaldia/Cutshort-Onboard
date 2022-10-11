import { useContext } from "react";
import Logo from "./elements/Logo";
import Stepper from "./stepper/Stepper";

import { StepperContext } from "../contexts/StepperContext";

function Onboarding() {
  const { currentStep, display, displayStep } = useContext(StepperContext);

  return (
    <div className="flex flex-col w-[100%] text-black text-center mx-auto items-center">
      <Logo />
      <div className="md:w-[70%] container horizontal m-10">
        <Stepper displayStep={displayStep} currentStep={currentStep} />
      </div>

      <div className="w-[100%] md:w-[90%]">
        <div>{display(currentStep)}</div>
      </div>
    </div>
  );
}

export default Onboarding;
