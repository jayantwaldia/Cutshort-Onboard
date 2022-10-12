import React from "react";
import { ToastContainer } from "react-toastify";

function Mainview({ children }) {
  return (
    <div className="px-6 md:px-10 pt-5 h-screen mx-auto max-w-3xl bg-white">
      {children}
      <ToastContainer />
    </div>
    
  );
}

export default Mainview;
