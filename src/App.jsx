import {
  Header,
  Error,
  Main,
  Loader,
  StartScreen,
  Question,
  Options,
  NextButton,
  FinishedScreen,
  Timer,
} from "./components";

import Progress from "./components/Progress";
import { useQuiz } from "./QuizContext";

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question>
              <Options />
            </Question>
            <Timer />
            <NextButton />
          </>
        )}
        {status === "finished" && <FinishedScreen />}
      </Main>
    </div>
  );
}

export default App;
