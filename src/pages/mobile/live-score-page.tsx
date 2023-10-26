import { ButtonBase, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import background from "../../assets/mobile/background.svg";
import playButtonImg from "../../assets/mobile/button-play.svg";
import homeScreenImg from "../../assets/mobile/image-homescreen.svg";
import HeaderSoundAndBackButton from "../../components/mobile/HeaderSoundAndBack";
import ScoreBoard from "../../components/mobile/LiverScoreSlider";

const LiveScoreScreen = () => {
  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
  };
  const textScoreBoard = {
    fontFamily: "BioRhyme",
    fontSize: "20px",
    fontWeight: "800",
    lineHight: "31px",
    letterSpacing: "0em",
    color: "#FEFEFF",
  };

  const textPlay = {
    fontFamily: "BioRhyme",
    fontSize: "20px",
    fontWeight: "700",
    lineHight: "31px",
    letterSpacing: "0em",
    color: "#601609",
  };

  // 0 > 500 > 1000 > 2000 > 5000 > 10000 > 20000

  return (
    <div className="h-screen bg-cover bg-center" style={backgroundImageStyle}>
      <HeaderSoundAndBackButton onClickBack={() => navigate("/")} />
      <div
        style={textScoreBoard}
        className="flex justify-center items-center pt-20"
      >
        LIVE SCOREBOARD
      </div>
      <div className="flex justify-center items-center pt-5">
        <ScoreBoard />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <img src={homeScreenImg} alt="" />
        </div>
        <ButtonBase onClick={() => navigate("/instruction-page")}>
          <img src={playButtonImg} alt="" />
          <Typography style={textPlay} className="absolute">
            PLAY
          </Typography>
        </ButtonBase>
      </div>
    </div>
  );
};

export default LiveScoreScreen;
