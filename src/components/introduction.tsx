import React from "react";
import "../cssComponents/introduction.css";

const Introduction = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div>
      <div ref={ref} id="introduction" className="introduction">
        <div id="nameIntroduction" className="fade-in">
          <p>Sebastian Eriksson</p>
          <h1>Computer Engineer</h1>
        </div>
      </div>
    </div>
  );
});

export default Introduction;
