import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import liveScore from "../assets/livescore/public-live-score.svg";
import background from "../assets/mobile/background.svg";
import playButtonImg from "../assets/mobile/button-play.svg";
// import AvatarFloat from "../assets/avatar/avatar_floating.svg";
import { AVATAR } from "../constants/avatar";

import HeaderSoundAndBackClose from "../components/mobile/HeaderSoundAndClose";

import ButtonBaseComponents from "../components/mobile/ButtonBase";

import ProgressScoreBoard from "../components/progress/scoreboard";

import AvatarUserScore from "../components/userscores/avatar";

import { SupabaseContext } from "../utils/socket";
import { AnimatePresence, motion } from "framer-motion";
import { Stack, Typography } from "@mui/material";

export interface UserType {
  id: number;
  player: string;
  avatar: string;
  score: number;
}
export const findImageByName = (name: string) => {
  const result = AVATAR.find((avatar) => avatar.name === name);
  return result ? result.image : null;
};
export const isOdd = (number: number) => {
  return number % 2 === 1;
};
const PublicLiveScore = () => {
  const navigate = useNavigate();
  const supabase = useContext(SupabaseContext);
  const [userList, setUserList] = useState<UserType[]>([]);
  const [showingUsers, setShowingUsers] = useState<UserType>();
  const [visibleUserIndex, setVisibleUserIndex] = useState<boolean>(true);

  const handleInserts = (payload: any) => {
    const newUser: UserType = {
      id: payload.new.id,
      player: payload.new.player,
      avatar: payload.new.avatar,
      score: payload.new.score as number,
    };

    setUserList((prevState) => [...prevState, newUser]);
    setShowingUsers(newUser);
    setVisibleUserIndex(true);
    setTimeout(() => {
      setVisibleUserIndex(false);
    }, 3000); // 3000 milliseconds (3 seconds)
    // setUser(payload?.new?.player)
    // setUser((current) => [...current, payload]);
  };
  useEffect(() => {
    const scoreboardChannel = supabase
      .channel("scoreboard")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "scoreboard" },
        handleInserts
      )
      .subscribe();
    return () => {
      scoreboardChannel.unsubscribe();
    };
  }, [supabase]);

  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
  };

  const renderImage = () => {
    return <img src={liveScore} alt="" />;
  };
  const FadingComponent = ({ isVisible, user }: any) => {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={`user-${user.id}`}
            style={
              motionWrapper(userList.length, user.avatar) as React.CSSProperties
            }
            initial={initialSetup}
            animate={animateSetup(isVisible)}
            transition={transitionSetup}
            exit={exitMotion}
          >
            <div className="flex flex-col items-center mb-7" style={scoreWrap}>
              <Typography variant="body1" style={textScoreBoard}>
                {`+${user.score} Points`}
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Typography
                variant="caption"
                color="white"
                fontSize={8}
                fontWeight={"bold"}
              >
                {user.player}
              </Typography>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  return (
    <div className="h-screen bg-cover bg-center" style={backgroundImageStyle}>
      <HeaderSoundAndBackClose onClickClose={() => navigate("/")} />
      <div className="flex flex-col justify-center items-center pt-24">
        <ProgressScoreBoard />
      </div>
      <div className="flex flex-col justify-center items-center pt-16">
        <div className="pb-6">{renderImage()}</div>
        <div style={{ position: "absolute" }}>
          {showingUsers && (
            <FadingComponent isVisible={visibleUserIndex} user={showingUsers} />
          )}
        </div>
        <div className="pt-4 pb-4">
          <Stack direction="row" spacing={0}>
            {userList &&
              userList.map(
                (user, index) =>
                  index < 5 && (
                    <AvatarUserScore user={user} key={`user-${user.id}`} />
                  )
              )}
          </Stack>
        </div>
        <ButtonBaseComponents
          image={playButtonImg}
          label={"PLAY"}
          classTextStyling={{
            fontSize: "20px",
            fontWeight: "700px",
          }}
          onClick={() => console.log("dadada")}
        />
        {/* {user} */}
        {/* <ul>
        {scoreboard?.map((score: any) => (
          <li key={score.id}>{score.username}: {score.score}</li>
        ))}
      </ul> */}
      </div>
    </div>
  );
};

const textScoreBoard = {
  textShadow: "1px 2px black",
  fontFamily: "BioRhyme",
  fontSize: 20,
  fontWeight: "800",
  lineHeight: 1,
  color: "#FEFEFF",
};

const initialSetup = { opacity: 0, y: 350 };
const animateSetup = (isVisible: boolean) => {
  return {
    opacity: isVisible ? 1 : 0,
    y: 0,
    scale: [1, 1, 2, 1, 1],
    transition: { duration: 2 },
  };
};
const transitionSetup = {
  duration: 2,
  ease: "easeIn",
  repeatDelay: 1,
};
const exitMotion = {
  opacity: 0,
  y: 50,
  transition: { duration: 2, ease: "easeOut", repeatDelay: 1 },
};

const motionWrapper = (length: number, avatarString: string) => {
  return {
    position: "absolute",
    left: isOdd(length) ? -100 : 10,
    top: isOdd(length) ? -68 : -220,
    backgroundImage: `url(${findImageByName(avatarString)})`,
    width: 80,
    height: 82,
  };
};

const scoreWrap = {
  position: "relative",
  left: 45,
  top: -10,
} as React.CSSProperties;

export default PublicLiveScore;
