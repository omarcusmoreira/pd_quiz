import { useState } from "react";
import { Container, Content } from "./styles";
import { Container as PageContainer } from "../../components/Container";
import { useQuestions } from "../../hooks/useQuestions";
import { Link } from "react-router-dom";

export function Quiz() {
  const {
    currentQuestion,
    currentQuestionIndex,
    incrementRightAnswersTotal,
    incrementCurrentQuestionIndex,
    nextQuestion,
    questionsLength,
  } = useQuestions();

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  console.log(selectedAnswer);

  function checkAnswer() {
    setIsAnswerCorrect(
      currentQuestion.right_answer === selectedAnswer ? true : false
    );
    setIsChecked(true);

    incrementCurrentQuestionIndex();
  }

  function renderNextQuestion() {
    nextQuestion();
    setIsChecked(false);
    setIsAnswerCorrect(false);
    isAnswerCorrect && incrementRightAnswersTotal();
  }

  return (
    <PageContainer>
      <Container>
        <Content>
          <div>
            <h1>
              {currentQuestion.id}. {currentQuestion.question}
            </h1>
            <div>
              {currentQuestion.alternatives.map(({ alt, id }) => {
                return (
                  <label
                    key={id}
                    className={
                      id === selectedAnswer && isChecked
                        ? isAnswerCorrect
                          ? "right_answer"
                          : "wrong_answer"
                        : " "
                    }
                  >
                    <input
                      type="radio"
                      id={id}
                      name="option_"
                      onChange={({ target }) => setSelectedAnswer(target.id)}
                      disabled={isChecked}
                    />
                    {alt}
                  </label>
                );
              })}
            </div>
          </div>

          {isChecked ? (
            currentQuestionIndex < questionsLength ? (
              <button
                type="button"
                onClick={renderNextQuestion}
                className="next_button"
              >
                NEXT
              </button>
            ) : (
              <Link to="/results">
                <button
                  type="button"
                  onClick={() => {
                    isAnswerCorrect && incrementRightAnswersTotal();
                  }}
                  className="finish_button"
                >
                  FINISH
                </button>
              </Link>
            )
          ) : (
            <button
              type="button"
              onClick={checkAnswer}
              disabled={selectedAnswer === "" ? true : false}
            >
              CHECK
            </button>
          )}
        </Content>
      </Container>
    </PageContainer>
  );
}
