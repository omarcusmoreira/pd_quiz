import { Container, Content } from "./styles";
import { Container as PageContainer } from "../../components/Container";

import welcomeImage from "../../assets/welcome.svg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <PageContainer>
      <Container>
        <Content>
          <main>
            <h2>
              Just started learning HTML? Test your HTML knowledge by answering
              these 10 common interview questions!
            </h2>
            <Link to="/quiz">
              <button type="button" onClick={() => {}}>
                TAKE THE QUIZ
              </button>
            </Link>
          </main>
          <div>
            <img src={welcomeImage} alt="Welcome!" />
          </div>
        </Content>
      </Container>
    </PageContainer>
  );
}
