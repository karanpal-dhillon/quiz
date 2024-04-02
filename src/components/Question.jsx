import { useQuiz } from "../QuizContext";
import PropTypes from "prop-types";
const Question = ({ children }) => {
  const { questions, index } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      {children}
    </div>
  );
};

Question.propTypes = {
  children: PropTypes.node,
};
export default Question;
