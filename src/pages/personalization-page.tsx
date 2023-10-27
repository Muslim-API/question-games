import { useState, useEffect } from "react";
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

import { FormEvent } from "react";

import SharePage from "../components/ModalsShare";

// const supabase = createClient("google.com", "as");


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
  const [userName, setUserName] = useState("");
  

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
          {renderText("CONGRATULATION!")}
          {renderQuestionScore(total+"")}
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
    label: string,
    isNotFound?: boolean
  ) => {
    if (isNotFound) {
      return <div> </div>;
    }
    let point = parseInt(label) * 10;
    return (
      <div
        style={{ fontSize: "11px" }}
        className="flex justify-center items-center text-center font-normal"
      >
        You have earned {point} points!
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

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  const handleChange = (event: Event) => {
    setUserName((event.target as HTMLInputElement).value);
  };
  

  return (
    <div className="h-screen bg-cover bg-center" style={backgroundImageStyle}>
      <HeaderSoundAndBackClose onClickClose={() => navigate("/")} />
      <div style={textScoreBoard} className="pt-20 pb-4">
        {renderResultText()}
      </div>
      <div className="flex flex-col justify-center items-center">
          <div className="justify-center items-center" style={{ display:"Block", width: width > 788 ? '25%' : '85%' }}>
              <div className="pb-6" >{renderImage()}</div>
          </div>
          {/*
          if 0 correct showing this
          <img src={thanksPlaying} alt="" /> 
          */}
          <TextUserName 
            value = {userName}
            type = "text"
            onChange = {handleChange}
          />
          <ButtonBaseComponents
            image={buttonNext}
            label={"NEXT"}
            classTextStyling={{
              fontSize: "20px",
              fontWeight: "700px"
            }}
            onClick={(eve) => {
              navigate("/personal-contribution-page",  { state: {dataQuestions:dataQuestions,userName:userName} });
            }}
          />
      </div>
      {isShowBasicModal && <SharePage onClose={onClose} />}
    </div>
  );
};

export default ResultPage;
