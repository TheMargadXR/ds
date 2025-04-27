import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-[#007f73] text-white font-semi py-2 px-6 rounded-md md:ml-8 hover:bg-[#4CCD99] 
    duration-100"
    >
      {props.children}
    </button>
  );
};

export default Button;
