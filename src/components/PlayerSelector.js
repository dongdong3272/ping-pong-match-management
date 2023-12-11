export default function PlayerSelector(props) {
  // Create a dropdown menu that lists all the players
  // in the props.players array.
  const playerElement = props.players.map((player) => {
    return (
      <li key={player.id}>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => props.handleChange(player.id)}
        >
          {player.fullname}
        </button>
      </li>
    );
  });
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.selectedPlayer === null
          ? "Select Player"
          : props.players.find((player) => player.id === props.selectedPlayer)
              .fullname}
      </button>
      <ul className="dropdown-menu">
        {playerElement.length === 0 ? <p>No players yet</p> : playerElement}
      </ul>
    </div>
  );
}
