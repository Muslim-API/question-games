import Stack from '@mui/material/Stack';
import dummy from "./dummy.svg";

export default function avatars() {
const imageStyle ={
    height: '32px',
    width: '32px'
}
  return (
    <Stack direction="row" spacing={0}>
        <img style={imageStyle} src={dummy} />
        <img style={imageStyle} src={dummy} />
        <img style={imageStyle} src={dummy} />
        <img style={imageStyle} src={dummy} />
        <img style={imageStyle} src={dummy} />
        <img style={imageStyle} src={dummy} />
    </Stack>
  )
}