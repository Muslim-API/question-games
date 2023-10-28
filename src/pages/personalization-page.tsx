
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import background from "../assets/mobile/background.svg";
import buttonNext from "../assets/result/button-next.svg";
import thanksPlaying from "../assets/result/thanks-playing.svg";

import SliderImage from "../components/carousel/ResultSlider";

import HeaderSoundAndBackClose from "../components/mobile/HeaderSoundAndClose";
import TextUserName from "../components/text/TextUserName";

import ButtonBaseComponents from "../components/mobile/ButtonBase";
import { ECO_LEVEL } from "../constants/level";

import { FormEvent } from "react";

import SharePage from "../components/ModalsShare";
import avatar_default from "../assets/avatar/avatar_1.svg";

 


const ResultPage = () => {
  const { state: dataQuestions } = useLocation();
  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
  };

  const supabase = createClient("https://zgogwulfztkwjlkmkuxv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpnb2d3dWxmenRrd2psa21rdXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3NjUxMjMsImV4cCI6MjAxMzM0MTEyM30.ZEYrZCP_tuJCM0tDPatn0eGe7r6wv4nIwmoM6CSb3Z4");


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
  const [avatar, setAvatar] = useState(avatar_default);

  console.log('avatar', avatar)

  const HTTP_CREATED = 201;
  

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
    if(total < 1) {
      return <img src={thanksPlaying} alt="" />;
    }
    return (
      <div style={{width:"100%"}}>
        {<SliderImage setAvatar={setAvatar} />}
      </div>)
    ;
  };
  

  const renderResultText = () => {
    
    if (dataQuestions) {
        if(total < 1) {
          return renderNoDataFound();
        }
        return (
          <div>
            {renderText("CONGRATULATION!", "24px", "800")}
            {renderQuestionScore(total+"")}
          </div>
        )
    }
    return renderNoDataFound();
  };

  const renderNoDataFound = () => {
    return (
      <div>
        {renderText("THANK YOU", "24px", "800")}
        {renderText("FOR PLAYING!", "24px", "800")}
      </div>
    );
  };

  const renderText = (label: string, fontSize: string, fontWeight: string ) => {
    
    return <div 
    style={{ fontSize: fontSize, fontWeight: fontWeight }}
    className="flex justify-center items-center">{label}</div>;
    
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
        style={{ fontSize: "16px", fontWeight: "400" }}
        className="flex justify-center items-center text-center font-normal"
      >
        You have earned {point} points!
      </div>
    );
  };

  const submitScores = async () => {
    const player = userName;
    const score = total;
    const result = await supabase.from("scoreboard").insert({
        id: uuidv4(),
        created_at: new Date().toISOString(),
        player,
        avatar,
        score
    });
    if(result.status === HTTP_CREATED){
        // TODO this will bring to public live scoreboard
        // navigate('/public-live-score')
        navigate("/personal-contribution-page",  { state: {dataQuestions:dataQuestions,userName:userName,avatar:avatar} });
    }
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

  const renderImageByPoint = () => {
    if(total > 0) {
      return (<div className="justify-center items-center" style={{ display:"Block", width: width > 788 ? '25%' : '95%' }}>
        <div className="" style={{ paddingBottom:"24px" }}>{renderImage()}</div>
      </div>)
    }else {
      return (<div>{renderImage()}</div>)
    }
  }
  

  return (

    <div className="h-screen bg-cover bg-center" style={backgroundImageStyle}>
      <HeaderSoundAndBackClose onClickClose={() => navigate("/")} />
      <div style={textScoreBoard} className="pt-20 pb-4">
        {renderResultText()}
      </div>
      <div className="flex flex-col justify-center items-center" >
          {renderImageByPoint()}
         
          <TextUserName 
            value = {userName}
            type = "text"
            totalPoint = {total}
            onChange = {handleChange}
          />
          <ButtonBaseComponents
            image={buttonNext}
            label={"NEXT"}
            classTextStyling={{
              fontSize: "20px",
              fontWeight: "700px",
            }}
            onClick={(eve) => {
              if(total < 1) {
                navigate("/");
              }else {
                submitScores()
              }
             
              
            }}
          />
      </div>
      {isShowBasicModal && <SharePage onClose={onClose} />}
    </div>
  );
};

export default ResultPage;
