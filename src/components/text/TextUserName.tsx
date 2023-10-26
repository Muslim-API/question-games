import { TextField } from "@mui/material";

import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      boxShadow: '0px 0px 10px rgba(212, 150, 73, 0.25)', 
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
        boxShadow: '0px 0px 10px rgba(212, 150, 73, 0.25)',
      },
        borderRadius: '25px',
    },
    '& .MuiOutlinedInput-input': {
        background: '#fff',
        boxShadow: 'inset 0 0 20px rgba(239, 171, 86, 0.25)',
        borderRadius: '25px',
        height: '10px',
        '&::placeholder': {
            fontSize: '14px',
            fontWeight: '800px',
            textAlign: 'center', 
            color: '#C5C3C3',
            fontFamily: 'BioRhyme',
        },
    },
    width: '320px',
    boxShadow: '0px 0px 10px rgba(212, 150, 73, 0.25)',
    borderRadius: '25px', 
    height: '40px',
    fontFamily: 'BioRhyme',
  });


export default function TextUserName() {
  return (
    <div className="pb-8">
        <CssTextField id="custom-css-outlined-input" placeholder="Enter your name"/>
    </div>
  );
}
