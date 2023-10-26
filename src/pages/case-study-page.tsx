import { useOrientation } from "@uidotdev/usehooks";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../assets/close.svg";
import CaseStudy from "../pages/mobile/case-study-page";

const CaseStudyScreen = () => {
  const navigate = useNavigate();

  const orientation = useOrientation();

  if (isMobile && orientation.angle === 0) {
    return <CaseStudy />;
  }

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm min-h-screen bg-regal-blue">
      <div className="py-4 px-4">
        <div className="flex">
          <CloseIcon onClick={() => navigate(-1)} />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-2xl text-white font-bold text-center">
          Page Case Study
        </p>
      </div>
    </div>
  );
};

export default CaseStudyScreen;
