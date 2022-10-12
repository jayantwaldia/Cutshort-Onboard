import { createContext, useState } from "react";
import { displayStep } from "../db/displayStep";
import { userPlan } from "../db/userPlan";
import Welcome from "../components/steps/Welcome";
import Setup from "../components/steps/Setup";
import Plan from "../components/steps/Plan";
import Completed from "../components/steps/Completed";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const StepperContext = createContext(null);

export const StepperContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState({
    fullName: "",
    displayName: "",
    workSpaceName: "",
    workSpaceUrl: "",
    typeOfPlan: "",
  });

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

  const handleClick = (input1 = "", input2 = "") => {
    if (input1 !== "" && input2 !== "") {
      let newStep = currentStep;
      newStep++;
      newStep > 0 && newStep <= displayStep.length && setCurrentStep(newStep);
    } else if (input1 === "Launch") {
      return;
    } else {
      toast.warn("Form values required!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
        formState,
        setFormState,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
