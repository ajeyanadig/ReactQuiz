function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <h3>{numQuestions} questions to test your react master</h3>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
