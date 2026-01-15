import "../styles/navbar.css";

export default function Navbar() {
  const goToGroups = () => {
    const section = document.getElementById("groups");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>CAN 2025</h2>
        <span>Morocco</span>
      </div>

      <ul className="menu">
        <li>
       <a href="#matches">Matches</a>
      </li>
      <li onClick={goToGroups}>Groups</li>
        <li>
       <a href="#stadiums" target="_black">Stadiums</a>
      </li>
      
      </ul>
    </nav>
  );
}



