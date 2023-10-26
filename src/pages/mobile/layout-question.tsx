import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import backgroundQuestion from "../../assets/mobile/background-question.svg";
import HeaderSoundAndBackButton from "../../components/mobile/HeaderSoundAndBack";
const LayoutQuestion = () => {
  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundQuestion})`,
  };

  return (
    <div style={backgroundImageStyle} className="h-screen bg-cover bg-center">
      <HeaderSoundAndBackButton onClickBack={() => navigate(-1)} />
      <div className="h-screen flex flex-col">
        <div className="basis-6 invisible"></div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutQuestion;
