import { Outlet, useNavigate } from "react-router-dom";
import backgroundQuestion from "../../assets/mobile/background-question.svg";
import { ReactComponent as BackArrowIcon } from "../../assets/mobile/button-back.svg";
import { ReactComponent as ButtonMusic } from "../../assets/mobile/button-music.svg";
import btnOption from "../../assets/mobile/option.svg";
import imageQuestion from "../../assets/mobile/sustainability.svg";

const HomeScreen = () => {
  let numberOfQuestion = 1;
  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundQuestion})`,
  };
  const textQuestionNumber = {
    fontFamily: "BioRhyme",
    fontSize: "12px",
    fontWeight: "400",
    lineHight: "15px",
    letterSpacing: "0em",
    color: "#601609",
  };

  const textQeustion = {
    fontFamily: "BioRhyme",
    fontSize: "16px",
    fontWeight: "700",
    lineHight: "18px",
    letterSpacing: "0em",
    color: "#512507",
  };

  const bgColor = {
    background:
      "linear-gradient(180deg, #FFFAF8 60%, #FFF7E7 83.33%, rgba(255, 235, 172, 0.2) 100%)",
  };

  const textOption = {
    fontFamily: "BioRhyme",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "22px",
    letterSpacing: "0em",
    color: "#512507",
  };

  return (
    <div className="h-screen bg-cover bg-center" style={backgroundImageStyle}>
      <div className="absolute left-10 top-10">
        <BackArrowIcon onClick={() => navigate(-1)} />
      </div>
      <div className="absolute top-10 right-10">
        <ButtonMusic />
      </div>
      <div
        style={bgColor}
        className="box-border rounded-t-3xl border-2 mt-8 h-full"
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={imageQuestion} alt="" />
          </div>
          <div>
            <p style={textQuestionNumber} className="text-center">
              Question {numberOfQuestion}/5
            </p>
          </div>
          <div className="w-4/5 h-40 overflow-auto mt-5">
            <p style={textQeustion} className="text-center">
              What do the terms, Paris Agreement, Kyoto Protocol and Durban
              Platform, have in common?
            </p>
          </div>
          <div className="mt-5 z-20" style={textOption}>
            They are names of Mission Impossible movies
          </div>
          <div className="-mt-10 z-10">
            <img src={btnOption} alt="" />
          </div>
          <div className="mt-5 z-20" style={textOption}>
            They are historical events in the last century
          </div>
          <div className="-mt-10 z-10">
            <img src={btnOption} alt="" />
          </div>
          <div className="mt-5 z-20" style={textOption}>
            They are climate change actions agreed by the United Nations
          </div>
          <div className="-mt-10 z-10">
            <img src={btnOption} alt="" />
          </div>
          <div className="mt-5 z-20" style={textOption}>
            World peace
          </div>
          <div className="-mt-10 z-10">
            <img src={btnOption} alt="" />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HomeScreen;
