import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>CAN 2025 Morocco</h2>
          
        </div>
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
             <li>
           <a href="#matches">Matches</a>
           </li>
           
            <li>
               <a href="#groups">Groups</a>
               </li>
            
              <li>
               <a href="#stadiums">Stadiums</a>
               </li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Contact</h3>
          <p>Email: info@can2025.ma</p>
          <p>Phone: +212 600 000 000</p>
        
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 CAN Morocco. All rights reserved.</p>
      </div>
    </footer>
  );
}
