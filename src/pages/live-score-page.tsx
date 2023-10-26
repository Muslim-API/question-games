import { useNavigate } from "react-router-dom";
import homeScreenImg from "../assets/home-screen-img.svg";
import progressImg from "../assets/progress.svg";
import playButtonImg from "../assets/play-button.svg";
import { ReactComponent as CloseIcon } from "../assets/close.svg";
import { useOrientation } from "@uidotdev/usehooks";
import LiveScorePage from "../pages/mobile/live-score-page";
import { isMobile } from "react-device-detect";

const LiveScoreScreen = () => {
  const navigate = useNavigate();

  const orientation = useOrientation();

  if (isMobile && orientation.angle === 0) {
    return <LiveScorePage />;
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
          LIVE SCOREBOARD
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
