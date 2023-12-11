import React from "react";
import { useLoaderData } from "react-router-dom";

export default function MatchDetail() {
  const match = useLoaderData();
  console.log("Inside Match Detail:", match);
  return (
    <div className="match-detail-board">
      <h1>Match Detail</h1>
      <p>
        {match.player1} VS {match.player2}
      </p>
      <p>Date: {match.date}</p>
      <p>
        Score: {match.score_1} vs {match.score_2}
      </p>
      <p>
        {match.winner ? `Winner:${match.winner}` : "The matching is paused."}
      </p>
    </div>
  );
}
