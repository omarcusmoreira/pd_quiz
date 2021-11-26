import { Container, Content } from "./styles";
import { useQuestions } from "../../hooks/useQuestions";
import { Container as PageContainer } from "../../components/Container";
import winImg from "../../assets/winner.svg";
import loseImg from "../../assets/loser.svg";
import { Link } from "react-router-dom";

export function Results() {
  const { rightAnswersTotal, restartQuiz } = useQuestions();

  return (
    <PageContainer>
      <Container>
        <Content>
          <div>
            <img
              src={rightAnswersTotal > 6 ? winImg : loseImg}
              alt="Congrats!"
            />
          </div>

          <main>
            <h1>{rightAnswersTotal}/10</h1>
            <h2>{rightAnswersTotal > 6 ? "Congratulations!" : "Try again!"}</h2>
            <p>
              {rightAnswersTotal > 6
                ? "You are an Expert in HTML. Don't worry about your interview and just go for it! Take a deep breath and shine!"
                : "It was not this time! But don't worry, there are tons of great content in this website so you can study some more and pass the next time!"}
            </p>
            <Link to="/">
              <button type="button" onClick={() => {}}>
                BACK
              </button>
            </Link>
          </main>
        </Content>
      </Container>
    </PageContainer>
  );
}
