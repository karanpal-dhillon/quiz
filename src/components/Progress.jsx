import { useQuiz } from "../QuizContext";
const Progress = () => {
  const { questions, index, points, answer, maxPoints } = useQuiz();
  return (
    <div className="progress">
      <progress
        max={questions.length}
        value={index + Number(answer !== null)}
      />
      <p>
        Question {index + 1} /{questions.length}
      </p>
      <p>
        {points}/{maxPoints}
      </p>
    </div>
  );
};

export default Progress;
