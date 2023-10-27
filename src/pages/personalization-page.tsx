import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import background from "../assets/mobile/background.svg";
import buttonNext from "../assets/result/button-next.svg";
import thanksPlaying from "../assets/result/thanks-playing.svg";
// import { createClient } from "@supabase/supabase-js";
// import { v4 as uuidv4 } from "uuid";
import SliderImage from "../components/carousel/ResultSlider";
import HeaderSoundAndBackClose from "../components/mobile/HeaderSoundAndClose";
import TextUserName from "../components/text/TextUserName";

import ButtonBaseComponents from "../components/mobile/ButtonBase";
import { ECO_LEVEL } from "../constants/level";

import SharePage from "../components/ModalsShare";

// const supabase = createClient("google.com", "as");


const ResultPage = () => {
  const { state: dataQuestions } = useLocation();
  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
  };

  console.log("dataQuestionsdataQuestionsdataQuestions", dataQuestions)

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
    // return <img src={thanksPlaying} alt="" />;
    return (
      <div style={{width:"100%"}}>
        {SliderImage()}
      </div>)
    ;
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

  const submitScores = async () => {
    // const result = await supabase.from("scoreboard").insert({
    //     id: uuidv4(),
    //     created_at: new Date().toISOString(),
    //     player,
    //     avatar,
    //     score
    // });
    // if(result.status === HTTP_CREATED){
    //     // TODO this will bring to public live scoreboard
    //     // navigate('/public-live-score')
    // }
}
  

  return (
    <div className="h-screen bg-cover bg-center" style={backgroundImageStyle}>
      <HeaderSoundAndBackClose onClickClose={() => navigate("/")} />
      <div style={textScoreBoard} className="pt-20 pb-4">
        {renderResultText()}
      </div>
      <div className="flex flex-col justify-center items-center">
          <div className="justify-center items-center" style={{ display:"Block", width:"100%" }}>
              <div className="pb-6" style={{ marginLeft:"35%", marginRight:"35%" }}>{renderImage()}</div>
          </div>
          {/*
          if 0 correct showing this
          <img src={thanksPlaying} alt="" /> 
          */}
          <TextUserName />
          <ButtonBaseComponents
            image={buttonNext}
            label={"NEXT"}
            classTextStyling={{
              fontSize: "20px",
              fontWeight: "700px"
            }}
            onClick={() => console.log("dadada")}
          />
      </div>
      {isShowBasicModal && <SharePage onClose={onClose} />}
    </div>
  );
};

export default ResultPage;
