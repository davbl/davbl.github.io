import "./bola.css";

import bola1 from "./img/bola1.avif";
import bola2 from "./img/bola2.avif";
import bola3 from "./img/bola3.avif";
import bola4 from "./img/bola4.avif";
import bola5 from "./img/bola5.avif";
import bola6 from "./img/bola6.avif";
import bola7 from "./img/bola7.avif";
import bola8 from "./img/bola8.avif";
import bola9 from "./img/bola9.avif";
import bola10 from "./img/bola10.avif";
import bola11 from "./img/bola11.avif";
import bola12 from "./img/bola12.avif";
import bola13 from "./img/bola13.avif";

function Bola() {
  return (
    <div className="subpage-container">
      {/* Heading */}
      <h2>Bola AI</h2>
      <h3>UI Screenshots</h3>

      {/* App screenshots */}
      <div className="app-screenshots">
        <img src={bola1} alt="Register app screen" className="app-screen" />
        <img src={bola2} alt="Welcome screen" className="app-screen" />
        <img src={bola3} alt="Home screen" className="app-screen" />
        <img src={bola4} alt="Missing teeth screen" className="app-screen" />
        <img src={bola5} alt="Settings screen" className="app-screen" />
        <img src={bola6} alt="App training screen" className="app-screen" />
        <img src={bola7} alt="Perio index screen" className="app-screen" />
        <img src={bola8} alt="Send feedback screen" className="app-screen" />
        <img src={bola9} alt="Clinical notes screen" className="app-screen" />
        <img
          src={bola10}
          alt="Clinical templates screen"
          className="app-screen"
        />
        <img src={bola11} alt="Edit template screen" className="app-screen" />
        <div className="shadow-screen"></div>
      </div>

      {/* Desktop screenshots */}
      <div className="desktop-screenshots">
        <img
          src={bola12}
          alt="Bola AI Welcome email"
          className="desktop-screen"
        />
        <img
          src={bola13}
          alt="Bola AI Help Center homepage"
          className="desktop-screen"
        />
      </div>
    </div>
  );
}

export default Bola;
