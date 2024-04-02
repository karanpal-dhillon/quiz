/* eslint-disable no-case-declarations */
export const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * 30,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        answer: null,
        index: state.index + 1,
      };
    case "finish": {
      return {
        ...state,
        status: "finished",
        highScore:
          state.highScore > state.points ? state.highScore : state.points,
      };
    }
    case "restartQuiz": {
      return { ...state, index: 0, status: "ready", answer: null, points: 0 };
    }

    case "tick": {
      return {
        ...state,
        secondsRemaining: state["secondsRemaining"] - 1,
        status: state.secondsRemaining > 0 ? state.status : "finished",
      };
    }

    default:
      throw new Error("Unknown action");
  }
};
