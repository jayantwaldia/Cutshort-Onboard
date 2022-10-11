import React from "react";

function Mainview({ children }) {
  return (
    <div className="px-6 md:px-10 pt-5 h-screen mx-auto max-w-3xl bg-white">
      {children}
    </div>
  );
}

export default Mainview;
