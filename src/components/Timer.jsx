import { useEffect } from "react";
import { useQuiz } from "../QuizContext";

const Timer = () => {
  const { secondsRemaining, dispatch } = useQuiz();
  useEffect(
    function() {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch],
  );
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  return (
    <p className="timer">
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
};

export default Timer;
