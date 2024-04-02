import { useQuiz } from "../QuizContext";
const StartScreen = () => {
  const { questions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{questions.lenght} questions to test your React Mastry</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets start
      </button>
    </div>
  );
};

export default StartScreen;
