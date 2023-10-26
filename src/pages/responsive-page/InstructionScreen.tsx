import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderSoundAndBackButton from "../../components/mobile/HeaderSoundAndBack";
import instruction from "../../assets/mobile/instruction.svg";
import boxInstruction from "../../assets/mobile/box-instruction.svg";
import btnNext from "../../assets/mobile/button-next.svg";

const InstructionScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center image-bg-instruction min-h-[600px]">
      <HeaderSoundAndBackButton onClickBack={() => navigate(-1)} />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="z-20 w-full text-center -mb-12 instruction-text-label">
          INSTRUCTIONS
        </div>
        <div className="z-10 flex w-full justify-center box-label-text">
          <img src={instruction} alt="" />
        </div>
        <div className="z-20 flex justify-center items-center overflow-auto text-box w-72 h-36 -mb-60 box-instruction-text">
          <p className="text-center instruction-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            convallis dapibus erat id mattis.
          </p>
        </div>
        <div className="z-0 flex w-full justify-center">
          <img src={boxInstruction} alt="" />
        </div>
        <div className="z-10 flex w-full justify-center -mt-20 btn-next">
          <img onClick={() => navigate("/question/1")} src={btnNext} alt="" />
        </div>
      </div>
    </div>
    // </div>
  );
};
export default InstructionScreen;
