import { createContext, useState } from "react";
import { displayStep } from "../db/displayStep";
import { userPlan } from "../db/userPlan";
import Welcome from "../components/steps/Welcome";
import Setup from "../components/steps/Setup";
import Plan from "../components/steps/Plan";
import Completed from "../components/steps/Completed";

export const StepperContext = createContext(null);

export const StepperContextProvider = ({ children }) => {
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
    <StepperContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        display,
        handleClick,
        displayStep,
        userPlan,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
