import { ButtonBase, Typography } from "@mui/material";
import ButtonMusic from "../../assets/mobile/button-music.svg";
import homeScreenBg from "../../assets/mobile/homescreen.svg";
import homeScreenImg from "../../assets/mobile/image-homescreen.svg";

import { useNavigate } from "react-router-dom";
import playButtonImg from "../../assets/mobile/button-play.svg";
import liveScoreBoard from "../../assets/mobile/button-scoreboard.svg";

const HomeScreen = () => {
  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${homeScreenBg})`,
  };

  const textPlay = {
    fontFamily: "BioRhyme",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "20px",
    fontWeight: "700",
    lineHight: "31px",
    letterSpacing: "0em",
    color: "#601609",
  };

  const textScoreboard = {
    fontFamily: "BioRhyme",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "22px",
    letterSpacing: "0em",
    color: "#601609",
  };

  return (
    <div className="h-screen bg-cover bg-center" style={backgroundImageStyle}>
      <div className="absolute top-10 right-4">
        <ButtonBase onClick={() => {}}>
          <img src={ButtonMusic} alt="" />
        </ButtonBase>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <img src={homeScreenImg} alt="" />
        </div>
        <div className="pb-2.5">
          <ButtonBase onClick={() => navigate("/instruction-page")}>
            <img src={playButtonImg} alt="" />
            <Typography style={textPlay} className="absolute">
              PLAY
            </Typography>
          </ButtonBase>
          <div className="pb-2.5">
            <ButtonBase onClick={() => navigate("/live-score-page")}>
              <img src={liveScoreBoard} alt="" />
              <Typography style={textScoreboard} className="absolute">
                SCOREBOARD
              </Typography>
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
