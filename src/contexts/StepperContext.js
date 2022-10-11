import { createContext } from "react";

export const StepperContext = createContext(null);

export const StepperContextProvider = ({ children }) => {
  return <StepperContextProvider value={{}}>{children}</StepperContextProvider>;
};
