import React from "react";
// import instructionModalImg from "../assets/instruction-modal.svg";
// import { useNavigate } from "react-router-dom";
// import { useOrientation } from "@uidotdev/usehooks";
// import InstructionMobile from "../pages/mobile/instruction-page";
// import { isMobile } from "react-device-detect";
import InstructionScreenResponsive from "./responsive-page/InstructionScreen";

const InstructionScreen = () => {
  // const navigate = useNavigate();
  // const orientation = useOrientation();
  // if (isMobile && orientation.angle === 0) {
  //   return <InstructionMobile />;
  // }
  // return (
  //   <div className="sm:mx-auto sm:w-full sm:max-w-sm min-h-screen bg-regal-blue">
  //     <div className="min-h-screen flex justify-center items-center">
  //       <img
  //         onClick={() => navigate("/question/1")}
  //         src={instructionModalImg}
  //         alt=""
  //       />
  //     </div>
  //   </div>
  // );
  return <InstructionScreenResponsive />;
};

export default InstructionScreen;
