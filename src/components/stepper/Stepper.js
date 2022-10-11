import React, { useEffect, useRef, useState } from "react";

function Stepper({ displayStep, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    //
    const newStep = [...steps];
    let count = 0;
    while (count < newStep.length) {
      // current step
      if (count === stepNumber) {
        newStep[count] = {
          ...newStep[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step completed
      else if (count < stepNumber) {
        newStep[count] = {
          ...newStep[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step pending
      else {
        newStep[count] = {
          ...newStep[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newStep;
  };
  useEffect(() => {
    //
    const stepState = displayStep.map((step, index) => {
      Object.assign(
        {},
        {
          main: step.main,
          subHead: step.sub,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      );
    });

    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [displayStep, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
              step.selected
                ? "bg-[#664DE5] text-white font-bold border border-[#664DE5]"
                : ""
            }`}
          >
            {step.completed ? (
              <span className="text-white">{index + 1}</span>
            ) : (
              index + 1
            )}
          </div>
        </div>
        <div className="flex-auto border-t-2 transition duration-500 ease-in-out"></div>
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
}

export default Stepper;
