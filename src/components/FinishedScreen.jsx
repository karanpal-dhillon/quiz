import { useQuiz } from "../QuizContext";

const FinishedScreen = () => {
  const { points, dispatch, highScore, maxPoints } = useQuiz();
  const percentage = Math.ceil((points / maxPoints) * 100);
  return (
    <>
      <p className="result">
        You scored {points} out of {maxPoints}({percentage}%)
      </p>
      <p className="highscore">Highscore {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishedScreen;
