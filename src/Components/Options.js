function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((curr, index) => (
        <button
          className={`btn btn-option 
          ${hasAnswered && index === answer ? "answer" : ""} 
          ${
            hasAnswered
              ? `${index === question.correctOption ? "  correct" : "  wrong"}`
              : ""
          } `}
          key={curr}
          disabled={answer !== null}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {curr}
        </button>
      ))}
    </div>
  );
}
// ${index === question.correctOption ? "correct" : "wrong"}`
export default Options;
