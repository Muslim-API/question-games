import React from "react";
import homeScreenBg from "../../assets/bg-landscape.svg";
import homeScreenImg from "../../assets/home-screen-img.svg";
import useBreakpoint from "../../utils/useBreakPoint";
import HomeScreenButton from "../HomeScreenButton";
const HomeScreen = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${homeScreenBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "480px",
  };
  const { windowSize } = useBreakpoint();
  const additionalPadding = windowSize.height <= 400;
  return (
    <div style={backgroundImageStyle}>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col justify-center items-center h-screen">
          <div
            className={`flex flex-col pb-12 ${
              additionalPadding ? "pt-20" : ""
            }`}
          >
            <img src={homeScreenImg} alt="" />
          </div>
          <HomeScreenButton />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
