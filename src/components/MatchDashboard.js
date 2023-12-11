import SingleMatchCard from "./SingleMatchCard";

export default function MatchDashboard(props) {
  const matchElement = props.matches.map((match) => {
    return <SingleMatchCard key={match.id} match={match} />;
  });

  return (
    <>
      <h2>Current Matches</h2>
      <ul>
        {matchElement.length === 0 ? <p>No matches yet</p> : matchElement}
      </ul>
    </>
  );
}
