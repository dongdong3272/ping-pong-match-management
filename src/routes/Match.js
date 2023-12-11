import MatchDashboard from "../components/MatchDashboard";
import NewMatchStarter from "../components/NewMatchStarter";
import { useOutletContext } from "react-router-dom";
import { getMatches } from "../api";
import { useState, useEffect } from "react";

export default function Match() {
  const [matches, setMatches] = useState([]);
  const [players] = useOutletContext();
  // Get all matches
  useEffect(() => {
    getMatches().then((data) => {
      console.log(data);
      setMatches(data);
    });
    // Set the interval to refresh the data every 5 seconds
    const interval = setInterval(() => {
      getMatches().then((data) => {
        console.log(data);
        setMatches(data);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="match-board">
      <h1>Match</h1>
      <MatchDashboard matches={matches} />
      <NewMatchStarter players={players} />
    </div>
  );
}
