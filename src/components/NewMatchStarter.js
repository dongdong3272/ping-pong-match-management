import PlayerSelector from "./PlayerSelector";
import { createMatch } from "../api";
import { useState } from "react";

export default function NewMatchStarter(props) {
  // Use states to store the selected players.
  // The default value of the states should be null.
  const [player1_id, setPlayer1] = useState(null);
  const [player2_id, setPlayer2] = useState(null);
  const [player1first, setPlayer1first] = useState(false);
  // Create a function to handle the click event of the "Start Match" button.
  // The function should call the API to start a match with the selected players.
  // The function should also reset the selected players to null.
  const handleStartMatch = () => {
    // Two players must be selected.
    if (player1_id === null || player2_id === null) {
      alert("Please select two players.");
      return;
    }
    // Two players cannot be the same.
    if (player1_id === player2_id) {
      alert("Please select two different players.");
      return;
    }
    // call the API to start a match with the selected players.
    createMatch(player1_id, player2_id, player1first);
    setPlayer1(null);
    setPlayer2(null);
  };
  // Create a function to handle the change event of the player selector.
  // The function should update the selected player.
  const handlePlayer1Change = (id) => {
    setPlayer1(id);
  };
  const handlePlayer2Change = (id) => {
    setPlayer2(id);
  };
  // Create a function to handle the change event of the checkbox.
  // The function should update the server.
  const handleServerChange = (event) => {
    setPlayer1first((oldVal) => !oldVal);
  };

  return (
    <div>
      <h1>NewMatchStarter</h1>
      <span>Player 1: </span>
      <PlayerSelector
        players={props.players}
        selectedPlayer={player1_id}
        handleChange={handlePlayer1Change}
      />
      <span>Player 2: </span>
      <PlayerSelector
        players={props.players}
        selectedPlayer={player2_id}
        handleChange={handlePlayer2Change}
      />
      {/* Create a checkbox to represent the server*/}
      <span>Player 1 serves first: </span>
      <input type="checkbox" onChange={handleServerChange} />
      <br />
      <button onClick={handleStartMatch}>Start Match</button>
    </div>
  );
}
