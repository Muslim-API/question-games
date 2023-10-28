import { findImageByName } from "../../pages/public-live-score";
import { Typography } from "@mui/material";

export default function avatars({ user }: any) {
  const imageStyle = {
    height: "42px",
    width: "42px",
    backgroundImage: `url(${findImageByName(user.avatar)})`,
    backgroundSize: "cover",
  };
  return (
    <div style={imageStyle}>
      <div className="flex flex-col justify-center items-center mt-9">
        <Typography
          variant="caption"
          color="white"
          fontSize={4}
          fontWeight={"bold"}
        >
          {user.player}
        </Typography>
      </div>
    </div>
  );
}
