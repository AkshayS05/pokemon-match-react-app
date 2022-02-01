import React from "react";
import "./Winner.css";
export default function Winner({ turns, shuffleCards }) {
  return (
    <div className="winner-backdrop">
      <div className="winner">
        <h2>
          Congratulations! you have found all the matches in {turns} turns
        </h2>
      </div>
      <button onClick={() => shuffleCards()}>Close</button>
    </div>
  );
}
