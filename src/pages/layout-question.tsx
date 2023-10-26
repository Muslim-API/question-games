import React from "react";
// import { useOrientation } from "@uidotdev/usehooks";
// import { isMobile } from "react-device-detect";
// import { Outlet, useNavigate, useParams } from "react-router-dom";
// import { ReactComponent as BackArrowIcon } from "../assets/back-arrow.svg";
// import LayoutQuestionMobile from "../pages/mobile/layout-question";
import LayoutQuestionScreen from "./responsive-page/LayoutQuestionScreen";

function LayoutQuestion() {
  // let { numberOfQuestion } = useParams();

  // const navigate = useNavigate();

  // const orientation = useOrientation();

  // if (isMobile && orientation.angle === 0) {
  //   return <LayoutQuestionMobile />;
  // }

  // return (
  //   <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
  //     <div className="sm:mx-auto sm:w-full sm:max-w-sm min-h-screen">
  //       <div className="py-8 px-8">
  //         <div className="flex">
  //           <BackArrowIcon onClick={() => navigate(-1)} />
  //           <p className="ml-28">Question {numberOfQuestion}/5</p>
  //         </div>
  //       </div>

  //       <Outlet />
  //     </div>
  //   </div>
  // );
  return <LayoutQuestionScreen />;
}

export default LayoutQuestion;
