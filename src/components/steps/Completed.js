import React from "react";
import completed from "../../assets/completed.png";
import Button from "../elements/Button";
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
      <div className="w-full md:w-[70%] mx-auto">
        <Button input1={"Launch"} input2={"optional"} />
      </div>
    </>
  );
}

export default Completed;
