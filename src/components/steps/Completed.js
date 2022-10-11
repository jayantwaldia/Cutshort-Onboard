import React from "react";
import completed from "../../assets/completed.png";
import FormHeading from "../layout/FormHeading";

function Completed() {
  return (
    <>
      <img
        src={completed}
        alt="check logo"
        className="mx-auto m-10 transition-opacity duration-500 ease-out"
      />
      <FormHeading />
    </>
  );
}

export default Completed;
