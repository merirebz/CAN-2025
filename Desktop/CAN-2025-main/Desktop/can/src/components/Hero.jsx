

import "../styles/hero.css";

export default function Hero() {
  const goToGroups = () => {
    const section = document.getElementById("groups");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          CAN <span>2025</span>
        </h1>
        <h3>MOROCCO</h3>

        <div className="hero-buttons">
          <button className="primary" onClick={goToGroups}>
            View Groups
          </button>
        </div>
      </div>
    </section>
  );
}
