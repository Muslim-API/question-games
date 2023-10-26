import _ from "lodash";
import { useEffect, useState } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";

import QuestionsButton from "../components/mobile/ButtonBaseQuestions";

import { useOrientation } from "@uidotdev/usehooks";
import { isMobile } from "react-device-detect";
import Modal from "../components/Modal";

import { questions as QuestionOne } from "../constants/questions1";
import { questions as QuestionTwo } from "../constants/questions2";
import { questions as QuestionThree } from "../constants/questions3";
import { questions as QuestionFour } from "../constants/questions4";
import { questions as QuestionFive } from "../constants/questions5";

interface Questions {
  answer: string;
  followup_text: string;
  question: string;
  options: string[];
}

type Answer = {
  [key: string]: any;
};

const getResources = (params: number) => {
  switch (params) {
    case 1:
      return QuestionOne;
    case 2:
      return QuestionTwo;
    case 3:
      return QuestionThree;
    case 4:
      return QuestionFour;
    case 5:
      return QuestionFive;
  }
  return QuestionOne;
};

const defaultQuestions: Questions = {
  answer: "",
  followup_text: "",
  question: "",
  options: [],
};

const QuestionScreen = () => {
  const orientation = useOrientation();

  const navigate = useNavigate();

  const [questionResults, setQuestionResults] = useState<Answer>({});

  const [userAnswer, setUserAnswer] = useState<string>("");

  const [questions, setQuestions] = useState<Questions>(defaultQuestions);

  const [image, setImage] = useState<any>();

  const [isShowingSubmit, setIsShowingSubmit] = useState(false);

  const [isShowBasicModal, setIsShowBasicModal] = useState({
    isShow: false,
    valCorrectAnswer: "",
    valDesc: "",
    isCorrectAnswer: false,
  });

  const { numberOfQuestion }: Readonly<Params<string>> = useParams();

  useEffect(() => {
    const { image, questions: question } = getResources(
      Number(numberOfQuestion) ?? 1
    );

    const getQuestions: Questions = _.sample(question) as any;

    setQuestions(getQuestions);

    setImage(image);

    setIsShowingSubmit(false);

    setUserAnswer("");
  }, [numberOfQuestion]);

  const handleClickedAnswer = (userAnswer: string) => {
    setUserAnswer(userAnswer);
    setIsShowingSubmit(true);
  };

  const handleSubmit = () => {
    const questionAnswer = questions?.answer;

    const validateAnswer = questionAnswer === userAnswer ?? false;

    setQuestionResults((prevState) => ({
      ...prevState,
      [numberOfQuestion ?? "1"]: validateAnswer,
    }));

    setIsShowBasicModal({
      isShow: true,
      valCorrectAnswer: questionAnswer,
      isCorrectAnswer: validateAnswer,
      valDesc: questions?.followup_text,
    });
  };

  const onCancel = () => {
    setIsShowBasicModal({
      ...isShowBasicModal,
      isShow: false,
    });

    const questionAnswer = questions?.answer;

    const validateAnswer = questionAnswer === userAnswer ?? false;

    if (Number(numberOfQuestion) <= 4) {
      navigate(`/question/${Number(numberOfQuestion) + 1}`);
    } else {
      setQuestionResults((prevState) => ({
        ...prevState,
        [numberOfQuestion ?? "1"]: validateAnswer,
      }));
      navigate("/personalization-page", { state: questionResults });
    }
  };

  const textQuestionNumber = {
    fontFamily: "BioRhyme",
    fontSize: "11px",
    fontWeight: "400",
    lineHight: "15px",
    letterSpacing: "0em",
    color: "#601609",
  };

  const textQeustion = {
    fontFamily: "BioRhyme",
    fontSize: "16px",
    fontWeight: "400",
    lineHight: "18px",
    letterSpacing: "0em",
    color: "#512507",
  };
  const bgColor = {
    background:
      "linear-gradient(180deg, #FFFAF8 60%, #FFF7E7 83.33%, rgba(255, 235, 172, 0.2) 100%)",
  };

  return isMobile && orientation.angle === 0 ? (
    <>
      <div
        style={bgColor}
        className="h-full justify-center items-center border-2 rounded-t-3xl border-transparant"
      >
        <div className="pb-3">
          <img className="m-auto px-6 h-52 w-80" src={image} alt="" />
        </div>
        <div className="px-5">
          <p style={textQuestionNumber} className="text-center">
            Question {numberOfQuestion}/5
          </p>
        </div>
        <div className="px-5">
          <div className="m-auto justify-center overflow-auto h-20 items-center">
            <p style={textQeustion} className="text-center">
              {questions?.question}
            </p>
          </div>
        </div>
        <div className="px-5">
          <div className="grid grid-rows-4 gap-3.5 m-auto h-52">
            {questions?.options.map((data: string, index: number) => (
              <QuestionsButton
                onClick={() => handleClickedAnswer(data)}
                key={`${data} + ${index + 1}`}
                option={data}
                isClicked={userAnswer === data}
                styleClass="pb-2.5 text-center md:ml-36 md:mr-36 lg:ml-36 lg:mr-36"
              />
            ))}
          </div>
        </div>
        {isShowingSubmit ? (
          <div className="pt-5 m-auto">
            <QuestionsButton
              onClick={() => handleSubmit()}
              key={"Submit"}
              option={"Submit"}
              isClicked={false}
              isSubmitButton={true}
              styleClass="pb-2.5 text-center md:ml-36 md:mr-36 lg:ml-36 lg:mr-36"
            />
          </div>
        ) : (
          <div className="pt-5 m-auto px-5 invisible">
            <QuestionsButton
              onClick={() => {}}
              key={"Submit"}
              option={"Submit"}
              isClicked={false}
              isSubmitButton={false}
              styleClass="pb-2.5 text-center md:ml-36 md:mr-36 lg:ml-36 lg:mr-36"
            />
          </div>
        )}
      </div>
      {isShowBasicModal.isShow && (
        <Modal
          bucketNumber={numberOfQuestion ?? "1"}
          valCorrectAnswer={isShowBasicModal.valCorrectAnswer}
          valDesc={isShowBasicModal.valDesc}
          isCorrectAnswer={isShowBasicModal.isCorrectAnswer}
          onCancel={onCancel}
          isMobile={true}
        />
      )}
    </>
  ) : null;
};

export default QuestionScreen;
