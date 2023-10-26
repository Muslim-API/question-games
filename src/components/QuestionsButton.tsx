import { MouseEventHandler } from "react";
import btnOption from "../assets/mobile/option.svg";
import btnSelectedOption from "../assets/mobile/selected-option.svg";

const textOption = {
  fontFamily: "BioRhyme",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "22px",
  letterSpacing: "0em",
  color: "#512507",
};

const Button = ({
  className,
  option,
  onClick,
  selectedAnswer,
}: {
  className: string;
  option: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  selectedAnswer: string;
}) => {
  return (
  <button onClick={onClick} className={className}>
    <div className="md:ml-36 md:mr-36">
      <img src={selectedAnswer === option ? btnSelectedOption : btnOption} alt="" />
    </div>
    <div className="-mt-10" style={textOption}>
      {option}
    </div>
  </button>);
};

export default Button;
