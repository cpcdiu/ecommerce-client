import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w11/12 mx-auto flex pt-[100px] justify-center min-h-[calc(100vh-65px)]">
      <ScaleLoader />
    </div>
  );
};

export default Loader;
