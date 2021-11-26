import { createContext, useContext, ReactNode, useState } from "react";
import questions from "../questions.json";

type QuestionsContextTypes = {
  currentQuestionIndex: number;
  currentQuestion: {
    id: string;
    question: string;
    alternatives: {
      alt: string;
      id: string;
    }[];
    right_answer: string;
  };
  incrementRightAnswersTotal: () => void;
  incrementCurrentQuestionIndex: () => void;
  nextQuestion: () => void;
  questionsLength: number;
  rightAnswersTotal: number;
  restartQuiz: () => void;
};

const QuestionsContext = createContext<QuestionsContextTypes>(
  {} as QuestionsContextTypes
);

type Props = {
  children: ReactNode;
};

export function QuestionsContextProvider({ children }: Props) {
  console.log(questions);
  const questionsLength = questions.length;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  const [rightAnswersTotal, setRightAnswersTotal] = useState(0);

  function incrementRightAnswersTotal() {
    setRightAnswersTotal((previousValue) => ++previousValue);
  }

  function incrementCurrentQuestionIndex() {
    setCurrentQuestionIndex((previousValue) => ++previousValue);
  }

  function nextQuestion() {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }

  function restartQuiz() {
    setCurrentQuestionIndex(1);
    setCurrentQuestion(questions[currentQuestionIndex]);
  }

  return (
    <QuestionsContext.Provider
      value={{
        currentQuestionIndex,
        currentQuestion,
        incrementRightAnswersTotal,
        incrementCurrentQuestionIndex,
        nextQuestion,
        questionsLength,
        rightAnswersTotal,
        restartQuiz,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(QuestionsContext);
  return context;
}
