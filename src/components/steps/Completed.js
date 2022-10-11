import React from "react";
import completed from "../../assets/completed.png";

function Completed() {
  return (
    <div>
      <img src={completed} />
      <p className="text-2xl md:text-3xl font-semibold text-gray-700 tracking-wide">
        Congratulations, Jayant!
      </p>
      <p className="text-gray-500 font-normal mt-3">
        You have completed onboarding, you can start using the Cutshort!
      </p>
    </div>
  );
}

export default Completed;
