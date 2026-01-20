
import "../styles/matches.css";
import morocco from "../components/flags/angola.png";
import mali from "../components/flags/mali.png";
import comores from "../components/flags/Cameroon.png";
import zambia from "../components/flags/zambia.png";
import angola from "../components/flags/angola.png";
import egypt from "../components/flags/Egypt.png";
import southAfrica from "../components/flags/South Africa.png";
import zimbabwe from "../components/flags/Zimbabwe.png";

export default function Matches() {
  const matches = [
    { date: "21 Déc", time: "20:00", home: "Maroc", away: "Comores", score: "2-0",
     stadium: "S.Moulay Abdellah RABAT", homeFlag: morocco, awayFlag: comores },
    { date: "22 Déc", time: "15:00", home: "Mali", away: "Zambie", score: "1-1",
     stadium: "S.Mohamed V Casablanca", homeFlag: mali, awayFlag: zambia },
    { date: "26 Déc", time: "18:30", home: "Zambie", away: "Comores", score: "0-0",
     stadium: "S.Moulay Abdellah RABAT", homeFlag: zambia, awayFlag: comores },
    { date: "26 Déc", time: "21:00", home: "Maroc", away: "Mali", score: "1-1", 
     stadium: "S.Moulay Abdellah RABAT", homeFlag: morocco, awayFlag: mali },
    { date: "29 Déc", time: "20:00", home: "Zambie", away: "Maroc", score: "0-3",
     stadium: "S.Moulay Abdellah RABAT", homeFlag: zambia, awayFlag: morocco },
    { date: "29 Déc", time: "20:00", home: "Comores", away: "Mali", score: "0-0",
     stadium: "S.Mohamed V Casablanca", homeFlag: comores, awayFlag: mali },
    { date: "22 Déc", time: "18:00", home: "Afrique du Sud", away: "Angola", score: "1-1",
     stadium: "Grand stade Marrakech", homeFlag: southAfrica, awayFlag: angola },
    { date: "22 Déc", time: "21:00", home: "Zimbabwe", away: "Egypte", score: "1-2",
     stadium: "Grand stade Agadir", homeFlag: zimbabwe, awayFlag: egypt },
    { date: "26 Déc", time: "13:30", home: "Zimbabwe", away: "Angola", score: "1-1",
     stadium: "Grand stade Marrakech", homeFlag: zimbabwe, awayFlag: angola },
    { date: "26 Déc", time: "16:00", home: "Egypte", away: "Afrique du Sud", 
     score: "1-0", stadium: "Grand stade Agadir", homeFlag: egypt, awayFlag: southAfrica },
    { date: "29 Déc", time: "17:00", home: "Zimbabwe", away: "Afrique du Sud",
     score: "2-3", stadium: "Grand stade Marrakech", homeFlag: zimbabwe, awayFlag: southAfrica },
    { date: "29 Déc", time: "17:00", home: "Angola", away: "Egypte", score: "0-1",
     stadium: "Grand stade Agadir", homeFlag: angola, awayFlag: egypt },
  ];

  return (
    <section className="matches-section" id="matches">
      <h2 className="section-title">Matches</h2>

      <div className="matches-slider">
        <div className="matches-track">
          {matches.map((match, index) => (
            <div className="match-card" key={index}>
              <div className="match-header">
                <span>{match.date}</span>
                <span>{match.time}</span>
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

              <p className="score">{match.score}</p>
              <p className="stadium">{match.stadium}</p>
            </div>
          ))}

          {matches.map((match, index) => (
            <div className="match-card" key={"dup-" + index}>
              <div className="match-header">
                <span>{match.date}</span>
                <span>{match.time}</span>
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

              <p className="score">{match.score}</p>
              <p className="stadium">{match.stadium}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
