import React, { useState } from "react";
import "../../styles/Home.css";

function Home() {
  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  }
  const [advice, setAdvice] = useState("");

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-container_title">ADVICE #117</div>
        <div className="main-container_body">
          "
          {advice.length == 0
            ? "It is easy to sit up and take notice, what's difficult is getting up and taking action."
            : advice}
          "
        </div>
        <div className="main-container_footer">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cinepolis-hosting.appspot.com/o/Advice%20Generator%2Fpattern-divider-mobile.svg?alt=media&token=112f7709-e435-433c-aa58-cc21432202ef"
            alt=""
          />
        </div>
        <div className="main-container_button">
          <div className="dice" onClick={fetchAdvice}>
            {" "}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cinepolis-hosting.appspot.com/o/Advice%20Generator%2Ficon-dice.svg?alt=media&token=89e70703-24ff-4e39-b4e7-6920fb2d3029"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
