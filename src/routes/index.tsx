import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home/index";
import { Quiz } from "../pages/Quiz";
import { Results } from "../pages/Results";
import { QuestionsContextProvider } from "../hooks/useQuestions";

export const Routes = () => {
  return (
    <QuestionsContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Switch>
      </BrowserRouter>
    </QuestionsContextProvider>
  );
};
