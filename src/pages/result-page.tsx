import { useOrientation } from "@uidotdev/usehooks";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../assets/close.svg";
import homeScreenImg from "../assets/home-screen-img.svg";
import playButtonImg from "../assets/play-button.svg";
import progressImg from "../assets/progress.svg";
import ResultPage from "../pages/mobile/result-page";

const LiveScoreScreen = () => {
  const navigate = useNavigate();

  const orientation = useOrientation();

  if (isMobile && orientation.angle === 0) {
    return <ResultPage />;
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
          YOU ARE AN
          ECO - LEGEND
        </p>

        <img className="px-4 py-1" src={progressImg} alt="" />

        <img src={homeScreenImg} alt="" />
        <div className="flex flex-col -mt-10">
          <img
            onClick={() => navigate("/instruction-page")}
            src={playButtonImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LiveScoreScreen;
