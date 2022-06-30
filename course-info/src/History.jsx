import React from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        <p>The App is used by pressing the buttons</p>
      </div>
    );
  }
  return (
    <div>
      <p>Button press history: {props.allClicks.join(" ")}</p>
    </div>
  );
};
export default History;
