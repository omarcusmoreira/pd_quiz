import { Header } from "../Header";
import { Container as StyledContainer } from "./styles";
export const Container: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <Header />
      {children}
    </StyledContainer>
  );
};
