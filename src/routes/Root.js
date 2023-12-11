import Nav from "../Nav";
import { Outlet } from "react-router-dom";
import LeaderBoard from "../components/LeaderBoard";
import { getPlayers } from "../api";
import { useState, useEffect } from "react";

export default function Root() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayers().then((data) => {
      console.log(data);
      setPlayers(data);
      setLoading(false);
    });
    // Set the interval to refresh the data every 5 seconds
    const interval = setInterval(() => {
      getPlayers().then((data) => {
        console.log(data);
        setPlayers(data);
        setLoading(false);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Nav />
      {/* loading message*/}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <LeaderBoard players={players} />
          {/*Where we want the dynamic content */}
          <Outlet context={[players]} />
        </>
      )}
    </div>
  );
}
