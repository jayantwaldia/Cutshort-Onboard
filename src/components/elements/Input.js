import React, { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import user from "../../assets/user.png";
import Button from "../elements/Button";
import team from "../../assets/group.png";

function Input() {
  const { currentStep, displayStep, userPlan, formState, setFormState } =
    useContext(StepperContext);
  switch (currentStep) {
    case 1:
      return (
        <div className="w-full md:w-[70%] mx-auto">
          <form className="flex flex-col">
            <label
              htmlFor="fullName"
              className="block mb-2 text-md font-medium text-gray-900 mt-10 text-left"
            >
              {displayStep[currentStep - 1].input1}
            </label>
            <input
              type="text"
              id="fullName"
              value={formState.fullname}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  fullName: e.target.value,
                })
              }
              className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Steve Jobs"
              required
              autoComplete="off"
            />
            <label
              htmlFor="displayName"
              className="block mb-2 text-md font-medium text-gray-900 mt-5 text-left"
            >
              {displayStep[currentStep - 1].input2}
            </label>
            <input
              type="text"
              id="displayName"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  displayName: e.target.value,
                })
              }
              className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Steve"
              required
              autoComplete="off"
            />
            <Button />
          </form>
        </div>
      );
    case 2:
      return (
        <div className="w-full md:w-[70%] mx-auto">
          <form className="flex flex-col">
            <label
              htmlFor="workSpaceName"
              className="block mb-2 text-md font-medium text-gray-900 mt-10 text-left"
            >
              {displayStep[currentStep - 1].input1}
            </label>
            <input
              type="text"
              id="workSpaceName"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  workSpaceName: e.target.value,
                })
              }
              className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Eden"
              required
              autoComplete="off"
            />
            <label
              htmlFor="workSpaceUrl"
              className="block mb-2 text-md font-medium text-gray-900 mt-5 text-left"
            >
              {displayStep[currentStep - 1].input2}{" "}
              {displayStep[currentStep - 1].optional ? (
                <span className="text-gray-300">(optional)</span>
              ) : (
                ""
              )}
            </label>
            <input
              type="text"
              id="workSpaceUrl"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  workSpaceUrl: e.target.value,
                })
              }
              className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Example"
              required
              autoComplete="off"
            />
            <Button />
          </form>
        </div>
      );

    case 3:
      return (
        <>
          <div className="flex justify-between gap-10 w-full md:w-[70%] mx-auto mt-8">
            <div className="flex flex-col gap-1 p-8 text-left rounded-md border-2 hover:border-[#664DE5] cursor-pointer">
              <img src={user} alt="single user" className="w-5 mb-2"></img>
              <p className="font-bold text-md">
                {userPlan[currentStep - 3].title}
              </p>
              <p className="text-sm">{userPlan[currentStep - 3].text}</p>
            </div>
            <div className="flex flex-col gap-1 p-8 text-left rounded-md border-2 hover:border-[#664DE5] cursor-pointer">
              <img src={team} alt="single user" className="w-5 mb-2"></img>
              <p className="font-bold text-md">
                {userPlan[currentStep - 2].title}
              </p>
              <p className="text-sm">{userPlan[currentStep - 2].text}</p>
            </div>
          </div>
          <div className="w-full md:w-[70%] mx-auto">
            {" "}
            <Button />
          </div>
        </>
      );
  }
}

export default Input;
