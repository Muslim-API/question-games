import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import liveScore from "../assets/livescore/public-live-score.svg";
import background from "../assets/mobile/background.svg";
import playButtonImg from "../assets/mobile/button-play.svg";


import HeaderSoundAndBackClose from "../components/mobile/HeaderSoundAndClose";

import ButtonBaseComponents from "../components/mobile/ButtonBase";

import ProgressScoreBoard from "../components/progress/scoreboard";

import AvatarUserScore from "../components/userscores/avatar";

import { SupabaseContext } from "../utils/socket";

const PublicLiveScore = () => {
  const navigate = useNavigate();
  const supabase = useContext(SupabaseContext);
  const [user, setUser] = useState<string>()

  const handleInserts = (payload: any) => {
    // setUser(payload?.new?.player)
   console.log("paayyload", payload)
  }

  useEffect(() => {
    const scoreboardChannel = supabase
      .channel('scoreboard') 
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'scoreboard' }, handleInserts)
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


  return (
    <div className="h-screen bg-cover bg-center" style={backgroundImageStyle}>
      <HeaderSoundAndBackClose onClickClose={() => navigate("/")} />
      <div className="flex flex-col justify-center items-center pt-24">
        <ProgressScoreBoard />
      </div>
      <div className="flex flex-col justify-center items-center pt-16">
        <div className="pb-6">{renderImage()}</div>
        <div className="pt-4 pb-4"><AvatarUserScore /></div>
        <ButtonBaseComponents
          image={playButtonImg}
          label={"PLAY"}
          classTextStyling={{
            fontSize: "20px",
            fontWeight: "700px"
          }}
          onClick={() => console.log("dadada")}
        />
        { user }
        {/* <ul>
        {scoreboard?.map((score: any) => (
          <li key={score.id}>{score.username}: {score.score}</li>
        ))}
      </ul> */}
      </div>
    </div>
  );
};

export default PublicLiveScore;