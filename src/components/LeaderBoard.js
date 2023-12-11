export default function LeaderBoard(props) {
  const playersSortedByScore = props.players.sort((a, b) => {
    if (a.wins < b.wins) {
      return 1;
    }
    if (a.wins > b.wins) {
      return -1;
    }
    if (a.cumulative_score > b.cumulative_score) {
      return 1;
    }
    if (a.cumulative_score < b.cumulative_score) {
      return -1;
    }
    return 0;
  });
  const playerElement = playersSortedByScore.map((player) => (
    <li key={player.id}>
      {player.fullname} - {player.wins} wins - {player.cumulative_score} points
    </li>
  ));

  return (
    <div className="leader-board">
      <ul>
        {playerElement.length === 0 ? <p>No players yet</p> : playerElement}
      </ul>
    </div>
  );
}
