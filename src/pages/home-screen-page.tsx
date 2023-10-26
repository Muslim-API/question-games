import React from "react";
// import { useOrientation } from "@uidotdev/usehooks";
// import { isMobile } from "react-device-detect";
// import DesktopHomeScreen from "../components/desktop/Home";
// import MobileHomeScreen from "../components/mobile/Home";
// import MobileHomeScreen from "../components/mobile/HomeDesign";
import HomeScreenResponsive from "./responsive-page/HomeScreen";

const HomeScreen = () => {
  // const orientation = useOrientation();
  // if (isMobile && orientation.angle === 0) {
  //   return <MobileHomeScreen />;
  // }
  // return <DesktopHomeScreen />;
  return <HomeScreenResponsive />;
};

export default HomeScreen;
