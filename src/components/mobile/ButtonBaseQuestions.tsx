/* eslint-disable jsx-a11y/alt-text */
import { ButtonBase, Typography } from "@mui/material";
import { MouseEventHandler } from "react";
import btnOption from "../../assets/mobile/option.svg";
import btnSelectedOption from "../../assets/mobile/selected-option.svg";
import btnSubmit from "../../assets/mobile/submit.svg";

const ButtonBaseQuestionsComponents = ({
  option,
  onClick,
  isClicked,
  isSubmitButton,
  styleClass,
}: {
  isClicked?: boolean;
  option: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isSubmitButton?: boolean;
  styleClass: string;
}) => (
  <div className={styleClass}>
    <ButtonBase style={{}} onClick={onClick}>
      {!isSubmitButton && (
        <img src={isClicked ? btnSelectedOption : btnOption} />
      )}
      {isSubmitButton && <img src={btnSubmit} />}
      <Typography
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "BioRhyme",
          fontSize: "12px",
          fontWeight: "400",
          color: "#601609",
          outline: "none",
          cursor: "pointer",
          width: "280px",
          lineHeight: "10px",
        }}
      >
        {option}
      </Typography>
    </ButtonBase>
  </div>
);
export default ButtonBaseQuestionsComponents;
