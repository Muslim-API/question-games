/* eslint-disable jsx-a11y/alt-text */
import { ButtonBase, Typography } from "@mui/material";
import { MouseEventHandler } from "react";
// import buttonResult from "../../assets/result/button-result.svg";

type TextStyling = {
  fontSize: string;
  fontWeight: string;

}

const ButtonBaseComponents = ({
  image,
  label,
  classStyling,
  classTextStyling,
  onClick,
}: {
  image: string;
  label: string;
  classStyling?: string;
  classTextStyling?: TextStyling;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => (
  <div className="pb-2.5">
    <ButtonBase style={{}} className={classStyling} onClick={onClick}>
      {/* <img src={buttonResult} /> */}
      <img src={image} />
      <Typography
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "BioRhyme",
          fontSize: "14px",
          fontWeight: "400",
          color: "#601609",
          ...classTextStyling
        }}
      >
        {label}
      </Typography>
    </ButtonBase>
  </div>
);
export default ButtonBaseComponents;
