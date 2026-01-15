
import "../styles/stadiums.css";

import moulayHassan from "../components/Stade/moulay.jpg";
import StadeAgadir  from "../components/Stade/StadeAgadir.jpeg";
import tanger from "../components/Stade/Tanger.jpeg";
import mara from "../components/Stade/mara.jpg";
import casa from "../components/Stade/casa.jpg";
import fes from "../components/Stade/fes.png";
import MoulayAbdellah from "../components/Stade/MoulayAbdellah.jpeg";
import olympique from "../components/Stade/olympique.jpg";
import ElBarid from "../components/Stade/ElBarid.jpg";

export default function Stadiums() {
  const stadiums = [
    { name:"Stade Moulay El Hassan", city:"Rabat", capacity:67000, img:moulayHassan },
    { name:"Grand Stade d’Agadir", city:"Agadir", capacity:53000, img:StadeAgadir},
    { name:"Grand Stade de Tanger", city:"Tanger", capacity:45000, img:tanger },
    { name:"Grand Stade de Marrakech", city:"Marrakech", capacity:67000, img:mara},
    { name:"Stade Mohammed V", city:"Casablanca", capacity:53000, img:casa },
    { name:"Stade de Fès", city:"Fès", capacity:45000, img:fes },
    { name:"Stade Moulay Abdellah", city:"Rabat", capacity:45000, img:MoulayAbdellah },
    { name:"Stade Olympique", city:"Rabat", capacity:45000, img:olympique },
    { name:"Stade El Barid", city:"Rabat", capacity:45000, img:ElBarid },
  ];

  return (
    <section id="stadiums" className="stadiums">
      <h2 className="section-title">Stadiums of Morocco</h2>

      <div className="stadium-grid">
        {stadiums.map((s,i)=>(
          <div key={i} className="stadium-card">
            <div className="stadium-img">
              <img src={s.img} alt={s.name} />
            </div>

            <div className="stadium-info">
              <h3>{s.name}</h3>
              <p className="city">{s.city}</p>
              <p className="capacity">Capacity: {s.capacity.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
