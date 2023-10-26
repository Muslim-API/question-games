import { MouseEventHandler } from "react";
import questionImageOne from "../assets/question-bucket-1.svg";
import questionImageTwo from "../assets/question-bucket-2.svg";
import questionImageThree from "../assets/question-bucket-3.svg";
import questionImageFour from "../assets/question-bucket-4.svg";
import questionImageFive from "../assets/question-bucket-5.svg";

import answerCorrect from "../assets/mobile/answer-correct.svg";
import answerIncorrect from "../assets/mobile/answer-wrong.svg";
import boxWood from "../assets/mobile/box-wood.svg";
import btnNextAnswer from "../assets/mobile/button-next-answer.svg";

const textStyle = {
  fontFamily: "BioRhyme",
  fontSize: "24px",
  fontWeight: "700",
  lineHight: "37px",
  letterSpacing: "0em",
  color: "#FEFEFF",
};
const textCorrect = {
  fontFamily: "BioRhyme",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "18px",
  letterSpacing: "0em",
  color: "#601609",
};
const textNext = {
  fontFamily: "BioRhyme",
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "31px",
  letterSpacing: "0em",
  color: "#601609",
};

const Modal = ({
  isCorrectAnswer,
  bucketNumber,
  valCorrectAnswer,
  valDesc,
  onCancel,
  isMobile,
}: {
  isCorrectAnswer: boolean;
  bucketNumber: string;
  valCorrectAnswer: string;
  valDesc: string;
  onCancel: MouseEventHandler<HTMLDivElement>;
  isMobile?: boolean;
}) => {
  const getImage = () => {
    switch (bucketNumber) {
      case "1":
        return questionImageOne;
      case "2":
        return questionImageTwo;
      case "3":
        return questionImageThree;
      case "4":
        return questionImageFour;
      case "5":
        return questionImageFive;
    }
    return questionImageOne;
  };

  return isMobile === true ? (
    <div
      onClick={onCancel}
      className="fixed bg-[#00000099] flex flex-col justify-center items-center h-screen w-full"
    >
      <div className="-mb-11 z-20" style={textStyle}>
        {isCorrectAnswer === false ? "INCORRECT" : "CORRECT"}
      </div>
      <div className="mb-6 z-10">
        <img
          src={isCorrectAnswer === false ? answerIncorrect : answerCorrect}
          alt=""
        />
      </div>

      <div
        style={textCorrect}
        className="-mb-80 z-20 w-52 h-64 grid gap-2 grid-rows-2"
      >
        <div className="z-10 w-52 h-30">
          <img src={getImage()} alt="" />
        </div>
        <div style={textCorrect} className="z-20 w-52 h-32 overflow-auto">
          {/* <p className="text-center">Correct answer: {valCorrectAnswer}</p> */}
          <p className="text-center text-xs">{valDesc}</p>
        </div>
      </div>
      <div className="mb-3 z-0">
        <img src={boxWood} alt="" />
      </div>
      <div className="-mt-12 z-20" style={textNext}>
        NEXT
      </div>
      <div className="-mt-12 -mb-7 z-10">
        <img src={btnNextAnswer} alt="" />
      </div>
    </div>
  ) : (
    <div
      onClick={onCancel}
      className="fixed bg-[#00000099] top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] min-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full flex justify-center">
        <div className="absolute top-52 bg-white">
          <div className="px-20 py-0">
            <img src={getImage()} alt="" />
            <p className="text-center font-semibold text-sm">
              Correct answer: {valCorrectAnswer}
            </p>
            <p className="text-center text-xs">{valDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
