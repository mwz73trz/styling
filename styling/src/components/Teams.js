import "../App.css";
import teamsData from "../data/teamsData";

const Teams = () => {
  return (
    <div className="teams-container">
      {teamsData.map((ele) => (
        <div className="team-root">
          <h3>{ele.team}</h3>
          <p>{ele.description}</p>
          <small>{ele.created_date}</small>
        </div>
      ))}
    </div>
  );
};

export default Teams;
