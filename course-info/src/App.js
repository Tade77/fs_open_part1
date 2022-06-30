import { useState } from "react";
import "./App.css";
import Button from "./Button";
import History from "./History";

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeft = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };
  const handleRight = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };
  return (
    <div className="App">
      {left}
      <Button handleClick={handleLeft} text="left" />
      <Button handleClick={handleRight} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
