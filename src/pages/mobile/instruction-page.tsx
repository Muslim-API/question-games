import HeaderSoundAndBackButton from "../../components/mobile/HeaderSoundAndBack";
import background from "../../assets/mobile/background.svg";
import instruction from "../../assets/mobile/instruction.svg";
import boxInstruction from "../../assets/mobile/box-instruction.svg";
import btnNext from "../../assets/mobile/button-next.svg";

import { useNavigate } from "react-router-dom";

const InstructionScreen = () => {
  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
  };
  const textStyle = {
    fontFamily: "BioRhyme",
    fontSize: "20px",
    fontWeight: "700",
    lineHight: "31px",
    letterSpacing: "0em",
    color: "#FEFEFF",
  };

  const textInstruction = {
    fontFamily: "BioRhyme",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "18px",
    letterSpacing: "0em",
  };
  return (
    <div className="h-screen bg-cover bg-center" style={backgroundImageStyle}>
      <HeaderSoundAndBackButton onClickBack={() => navigate(-1)} />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="-mb-12 z-20" style={textStyle}>
          INSTRUCTIONS
        </div>
        <div className="mb-4 z-10">
          <img src={instruction} alt="" />
        </div>
        <div
          style={textInstruction}
          className="-mb-52 z-20 w-64 h-28 overflow-auto"
        >
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            convallis dapibus erat id mattis.
          </p>
        </div>
        <div className="z-0">
          <img src={boxInstruction} alt="" />
        </div>
        <div className="-mt-16 z-10">
          <img onClick={() => navigate("/question/1")} src={btnNext} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InstructionScreen;
