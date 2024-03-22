function StartScreen({ questions }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <h3>{questions.length} questions to test your react master</h3>
      <button className="btn">Let's start</button>
    </div>
  );
}

export default StartScreen;
