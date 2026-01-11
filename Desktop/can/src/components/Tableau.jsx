
import "../styles/tableau.css";
import { groups } from "../data/groupsData";

export default function Tableau() {
  return (
    <section className="tableau">
      {groups.map((group, index) => (
        <div className="table-card" key={index}>
          <h3>{group.name}</h3>

          <div className="table-head">
            <span>Team</span>
            <span>GD</span>
            <span>PTS</span>
          </div>

          {group.teams.map((team, i) => (
            <div className="table-row" key={i}>
              <div className="team-info">
                <img src={team.flag} alt={team.name} />
                <span>{team.name}</span>
              </div>
              <span className={team.gd > 0 ? "plus" : team.gd < 0 ? "minus" : ""}>
                {team.gd > 0 ? `+${team.gd}` : team.gd}
              </span>
              <span className="pts">{team.pts}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
