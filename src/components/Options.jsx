import { useQuiz } from "../QuizContext";

const Options = () => {
  const { questions, answer, dispatch, index } = useQuiz();
  const question = questions[index];
  const hasAnswered = answer != null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} ${hasAnswered
              ? question.correctOption === index
                ? "correct"
                : "wrong"
              : ""
            }`}
          key={index}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
