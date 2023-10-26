import { useNavigate } from "react-router-dom";
import liveScoreBoard from "../assets/live-scoreboard-button.svg";
import playButtonImg from "../assets/play-button.svg";
const Button = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <img
        className="pl-8 pr-8 pb-4"
        onClick={() => navigate("/instruction-page")}
        src={playButtonImg}
        alt=""
      />
      <img
        className="pl-8 pr-8"
        onClick={() => navigate("/live-score-page")}
        src={liveScoreBoard}
        alt=""
      />
    </div>
  );
};

export default Button;
