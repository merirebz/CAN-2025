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
        <li>Matches</li>
        <li onClick={goToGroups}>Groups</li>
        <li>Tableau</li>
      
      </ul>
    </nav>
  );
}



