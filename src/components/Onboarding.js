import { useState } from "react";
import { displayStep } from "../db/displayStep";
import Welcome from "./steps/Welcome";
import Setup from "./steps/Setup";
import Plan from "./steps/Plan";
import Logo from "./elements/Logo";
import Stepper from "./stepper/Stepper";
import StepperControl from "./stepper/StepperControl";
import Completed from "./steps/Completed";

function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);

  const display = (step) => {
    switch (step) {
      case 1:
        return <Welcome />;
      case 2:
        return <Setup />;
      case 3:
        return <Plan />;
      case 4:
        return <Completed />;
      default:
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    let newStep = currentStep;
    newStep++;
    newStep > 0 && newStep <= displayStep.length && setCurrentStep(newStep);
  };

  return (
    <div className="flex flex-col w-[100%] text-black text-center mx-auto items-center">
      <Logo />
      <div className="md:w-[70%] container horizontal m-5">
        {" "}
        <Stepper displayStep={displayStep} currentStep={currentStep} />
      </div>

      <div>
        <div>{display(currentStep)}</div>
      </div>

      <div className="w-[100%] md:w-[70%]">
        <form className="flex flex-col w-[80%] mx-auto">
          <label
            htmlFor="fullName"
            className="block mb-2 text-md font-medium text-gray-900 mt-10 text-left"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Steve Jobs"
            required
            autoComplete="off"
          />
          <label
            htmlFor="displayName"
            className="block mb-2 text-md font-medium text-gray-900 mt-5 text-left"
          >
            Display Name
          </label>
          <input
            type="text"
            id="displayName"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Steve"
            required
            autoComplete="off"
          />
          <StepperControl
            currentStep={currentStep}
            displayStep={displayStep}
            handleClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
}

export default Onboarding;
