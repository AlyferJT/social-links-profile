import React, { useState } from "react";

function Button(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  const styleOnOver = {
    backgroundColor: "hsl(75, 94%, 57%)",
    color: "black",
    transition: ".1s all",
  };

  return (
    <a href={props.link} target="__blank">
      <button
        style={isMouseOver ? styleOnOver : {}}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        className="profile-social__btn"
      >
        {props.title}
      </button>
    </a>
  );
}

export default Button;
