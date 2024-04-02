import { useEffect, useContext } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import { reducer } from "./reducer";
import { useReducer } from "react";

const QuizContext = createContext(null);

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const maxPoints = questions.map((q) => q.points).reduce((a, b) => a + b, 0);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("http://localhost:8000/questions");
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({
          type: "dataFailed",
        });
      }
    }
    loadData();
  }, []);
  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        secondsRemaining,
        dispatch,
        maxPoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("context is used outside quiz context");
  return context;
}

QuizProvider.propTypes = {
  children: PropTypes.node,
};
export { QuizProvider, useQuiz };
