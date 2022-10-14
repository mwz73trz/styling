import "../App.css";
import playerData from "../data/playerData";

const Players = () => {
  return (
    <div className="teams-container">
      {playerData.map((ele) => (
        <div className="team-root">
          <h1>{ele.name}</h1>
          <p>{ele.number}</p>
          <p>{ele.team}</p>
          <p>{ele.position}</p>
          <p>{ele.sport}</p>
        </div>
      ))}
    </div>
  );
};

export default Players;
