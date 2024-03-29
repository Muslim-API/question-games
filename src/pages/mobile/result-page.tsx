import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import background from "../../assets/mobile/background.svg";
import buttonResult from "../../assets/result/button-result.svg";
import ecoAmateur from "../../assets/result/eco-amateur.svg";
import ecoChampion from "../../assets/result/eco-champion.svg";
import ecoExpert from "../../assets/result/eco-expert.svg";
import ecoHobbyist from "../../assets/result/eco-hobbyist.svg";
import ecoLegend from "../../assets/result/eco-legend.svg";
import thanksPlaying from "../../assets/result/thanks-playing.svg";
import HeaderSoundAndBackClose from "../../components/mobile/HeaderSoundAndClose";

import ButtonBaseComponents from "../../components/mobile/ButtonBase";
import { ECO_LEVEL } from "../../constants/level";

import SharePage from "../../components/ModalsShare";

const ResultPage = () => {
  const { state: dataQuestions } = useLocation();
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

  const [isShowBasicModal, setIsShowBasicModal] = useState(false);

  const onClose = () => {
    setIsShowBasicModal(false);
  };

  const Buttons = [
    {
      id: "btnShare",
      label: "Share",
      onClick: () => setIsShowBasicModal(true),
    },
    {
      id: "btnCaseStudy",
      label: "Case Study",
      onClick: () => navigate("/case-study-page"),
    },
    {
      id: "btnScoreBoard",
      label: "Scoreboard",
      onClick: () => navigate("/live-score-page"),
    },
  ];

  const data: { [key: string]: number } = dataQuestions ?? {};
  const total: number = Object.values(data).reduce(
    (acc, value) => acc + value,
    0
  );

  const renderImage = () => {
    switch (total) {
      case 0:
        return <img src={thanksPlaying} alt="" />;
      case 1:
        return <img src={ecoHobbyist} alt="" />;
      case 2:
        return <img src={ecoAmateur} alt="" />;
      case 3:
        return <img src={ecoExpert} alt="" />;
      case 4:
        return <img src={ecoChampion} alt="" />;
      case 5:
        return <img src={ecoLegend} alt="" />;
      default:
        return <img src={thanksPlaying} alt="" />;
    }
  };

  const renderResultText = () => {
    if (dataQuestions) {
      return (
        <div>
          {renderText("YOU ARE AN")}
          {renderText(ECO_LEVEL[total])}
          {renderQuestionScore(total)}
        </div>
      );
    }
    return renderNoDataFound();
  };

  const renderNoDataFound = () => {
    return (
      <div>
        {renderText("THANK YOU")}
        {renderText("FOR PLAYING!")}
        {renderQuestionScore("", true)}
      </div>
    );
  };

  const renderText = (label: string) => {
    return <div className="flex justify-center items-center">{label}</div>;
  };

  const renderQuestionScore = (
    label: string | number,
    isNotFound?: boolean
  ) => {
    if (isNotFound) {
      return <div> </div>;
    }
    return (
      <div
        style={{ fontSize: "11px" }}
        className="flex justify-center items-center text-center font-normal"
      >
        You answered {label} out of 5 questions correctly.
      </div>
    );
  };

  return (
    <div className="h-screen bg-cover bg-center" style={backgroundImageStyle}>
      <HeaderSoundAndBackClose onClickClose={() => navigate("/")} />
      <div style={textScoreBoard} className="pt-20 pb-4">
        {renderResultText()}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="pb-6">{renderImage()}</div>
        <div className="font-normal">
          {Buttons.map((key) => {
            return (
              <ButtonBaseComponents
                key={key.id}
                image={buttonResult}
                label={key.label}
                classStyling=""
                onClick={key.onClick}
              />
            );
          })}
        </div>
      </div>
      {isShowBasicModal && <SharePage onClose={onClose} />}
    </div>
  );
};

export default ResultPage;
