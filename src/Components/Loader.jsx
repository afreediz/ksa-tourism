import React from "react";
// import "./Loader.css"
import Lottie from "lottie-react"
import hi from "./hi.json"

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Lottie animationData={hi}/>
      {/* <div className="txt" id="txt">
        <b>L</b>
        <b>O</b>
        <b>A</b>
        <b>D</b>
        <b>I</b>
        <b>N</b>
        <b>G</b>
      </div> */}
    </div>
  );
}

export default Loader;
