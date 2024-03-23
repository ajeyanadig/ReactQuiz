import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  let minutes = String(parseInt(secondsRemaining / 60)).padStart(2, "0");
  let seconds = String(parseInt(secondsRemaining % 60)).padStart(2, "0");
  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
  );
}

export default Timer;
