import { Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './style.css';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  width: 251,
  borderRadius: 25,
  border: '2px solid rgba(177, 85, 18, 1)',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'rgba(96, 22, 9, 1)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'rgba(194, 252, 126, 1)',
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
            }}>
            {value}
        </Typography>
    )
}

const renderCircular = (value: string | number) => {
    return (
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center" style={{
            border: '2px solid rgba(212, 150, 73, 1)'
        }}>
            { renderText(value) }
        </div>
    )
}

export default function ProgressBar() {
  return (
    <div>
        <Stack direction="row" spacing={0}>
            { renderCircular(0) }
            <BorderLinearProgress variant="determinate" value={50} />
            { renderCircular(500) }
        </Stack>
    </div>
  )
}