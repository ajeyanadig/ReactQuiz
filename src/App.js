import { useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Main from "./Main";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import StartScreen from "./StartScreen";
//loading,error,ready,active,finished
const initialState = {
  questions: [],
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, status: "ready", questions: action.payload };

    case "dataFailed":
      return { ...state, status: "error" };

    case "loading":
      return { ...state, status: "loading" };

    default:
      throw new Error("Something is wrong in the reducer");
  }
}
function App() {
  let [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "dataReceived", payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "dataFailed" });
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen questions={questions} />}
      </Main>
    </div>
  );
}

export default App;
