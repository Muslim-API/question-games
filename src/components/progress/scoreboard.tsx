import { Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./style.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  width: 251,
  borderRadius: 25,
  margin: 0,
  border: "2px solid rgba(177, 85, 18, 1)",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "rgba(96, 22, 9, 1)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: "linear-gradient(#77D64C, #51AA22)",
  },
}));

const renderText = (value: string | number) => {
  return (
    <Typography
      style={{
        fontFamily: "BioRhyme",
        fontSize: "8px",
        fontWeight: "700",
        color: "rgba(96, 22, 9, 1)",
      }}
    >
      {value}
    </Typography>
  );
};

const renderCircular = (
  value: string | number,
  style?: React.CSSProperties
) => {
  const defaultStyle = {
    border: "2px solid rgba(212, 150, 73, 1)",
    position: "relative",
    zIndex: 9,
    top: -3,
    ...style,
  } as React.CSSProperties;
  return (
    <div
      className="w-7 h-7 rounded-full bg-white flex items-center justify-center"
      style={defaultStyle}
    >
      {renderText(value)}
    </div>
  );
};

export default function ProgressBar() {
  return (
    <div>
      <Stack direction="row" spacing={0}>
        {renderCircular(0, {
          left: 10,
        })}
        <BorderLinearProgress variant="determinate" value={100} />
        {renderCircular(500, {
          left: -10,
          zIndex: 9,
        })}
      </Stack>
    </div>
  );
}
