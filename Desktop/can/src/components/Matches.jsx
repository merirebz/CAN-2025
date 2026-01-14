import "../styles/matches.css";


import morocco from "../components/flags/maroc.png";
import mali from "../components/flags/mali.png";
import senegal from "../components/flags/sen.png";
import nigeria  from "../components/flags/nig.png";
export default function Matches() {
  const matches = [
    {
      group: "Group A",
      date: "12 Jan 2025",
      time: "18:00",
      stadium: "Stade Mohammed V",
      home: "Morocco",
      away: "Mali",
      homeFlag: morocco,
      awayFlag: mali,
    },
    {
      group: "Group D",
      date: "13 Jan 2025",
      time: "21:00",
      stadium: "Stade de Rabat",
      home: "Senegal",
      away: "Nigeria",
      homeFlag: senegal,
      awayFlag: nigeria,
    },
  ];

  return (
    <section className="matches-section" id="matches">
      <h2 className="section-title">Matches</h2>

      <div className="matches-container">
        {matches.map((match, index) => (
          <div className="match-card" key={index}>
            <div className="match-header">
              <span>{match.group}</span>
              <span>{match.date} • {match.time}</span>
            </div>

            <div className="teams">
              <div className="team">
                <img src={match.homeFlag} alt={match.home} />
                <p>{match.home}</p>
              </div>

              <span className="vs">VS</span>

              <div className="team">
                <img src={match.awayFlag} alt={match.away} />
                <p>{match.away}</p>
              </div>
            </div>

            <p className="stadium">{match.stadium}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
