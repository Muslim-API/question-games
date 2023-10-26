import { MouseEventHandler } from "react";
import imgCorrectAnswer from "../../assets/modal-correct-answer.svg";
import imgInCorrectAnswer from "../../assets/modal-incorrect-answer.svg";

const Modal = ({
  isCorrectAnswer,
  valCorrectAnswer,
  valDesc,
  onCancel,
}: {
  isCorrectAnswer: boolean;
  valCorrectAnswer: string;
  valDesc: string;
  onCancel: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      onClick={onCancel}
      className="fixed flex items-center justify-center bg-[#00000099] top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] min-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full flex justify-center">
        {isCorrectAnswer ? (
          <img src={imgCorrectAnswer} alt="" />
        ) : (
          <img src={imgInCorrectAnswer} alt="" />
        )}

        <div className="absolute top-52">
          <div className="px-20 py-0">
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
