const BASE_URL = process.env.REACT_APP_API_URL;

console.log(BASE_URL);

// Get all players
export const getPlayers = async () => {
  const response = await fetch(`${BASE_URL}/players`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

// Register a player
export const registerPlayer = async (fullname) => {
  const response = await fetch(`${BASE_URL}/players`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullname: fullname,
      wins: 0,
      cumulative_score: 0,
    }),
  });

  const data = await response.json();
  return data;
};

// Get all matches and expand the player objects
export const getMatches = async () => {
  const response = await fetch(
    `${BASE_URL}/matches?_expand=player1&_expand=player2`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

// Find a match by id and expand the player objects
export const getMatchById = async (id) => {
  const response = await fetch(
    `${BASE_URL}/matches/${id}?expand=_player1&_expand=player2`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

// Create a match
export const createMatch = async (player1, player2, next_server_1) => {
  const response = await fetch(`${BASE_URL}/matches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      player1: player1,
      player2: player2,
      winner: null,
      score_1: 0,
      score_2: 0,
      next_server_1: next_server_1,
    }),
  });

  const data = await response.json();
  return data;
};
