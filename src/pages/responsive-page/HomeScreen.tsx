import React from "react";
import { ButtonBase, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import homeScreenImgMobile from "../../assets/mobile/image-homescreen.svg";
import playButtonImg from "../../assets/mobile/button-play.svg";
import liveScoreBoard from "../../assets/mobile/button-scoreboard.svg";
const HomeScreen = () => {
  const navigate = useNavigate();

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
    <div className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center min-h-[600px] image-bg-home">
      <div className="flex flex-col justify-center items-center h-screen screen-desktop-lanscape">
        <div>
          <img src={homeScreenImgMobile} alt="" />
        </div>
        <div className="tbn-padding">
          <div className="pb-2.5">
            <ButtonBase onClick={() => navigate("/instruction-page")}>
              <img src={playButtonImg} alt="" />
              <Typography style={textPlay} className="absolute">
                PLAY
              </Typography>
            </ButtonBase>
          </div>
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
