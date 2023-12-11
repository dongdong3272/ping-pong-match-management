import { Link, redirect } from "react-router-dom";

export default function SingleMatchCard(props) {
  return (
    <div>
      <h1>
        {props.match.player1} VS {props.match.player2}
      </h1>
      <p>Date: 2023-10-23 13:00PST</p>
      <p>
        Score: {props.match.score_1} vs {props.match.score_2}
      </p>
      <p>
        {props.match.winner
          ? `Winner:${props.match.winner}`
          : "The matching is paused."}
      </p>
      {/* Clicking the Link will redirect user to the MatchDetail route */}
      <Link to={`/match/${props.match.id}`}>
        {props.match.winner ? "View Statistics" : "Start/Continue Match"}
      </Link>
    </div>
  );
}
