import { useNavigate } from "react-router-dom";
import playButtonImg from "../assets/mobile/button-play.svg";
import liveScoreBoard from "../assets/mobile/button-scoreboard.svg";
const Button = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        className="pl-8 pr-8"
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
