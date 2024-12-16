import "./bola.css";

import bola1 from "./img/bola1-1800h.avif";
import bola2 from "./img/bola2-1800h.avif";
import bola3 from "./img/bola3-1800h.avif";
import bola4 from "./img/bola4-1800h.avif";
import bola5 from "./img/bola5-1800h.avif";
import bola6 from "./img/bola6-1800h.avif";
import bola7 from "./img/bola7-1800h.avif";
import bola8 from "./img/bola8-1800h.avif";
import bola9 from "./img/bola9-1800h.avif";
import bola10 from "./img/bola10-1800h.avif";
import bola11 from "./img/bola11-1800h.avif";
import bola12 from "./img/bola12-2658w.avif";
import bola13 from "./img/bola13-2658w.avif";

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
        <img
          src={bola4}
          alt="Missing teeth screen"
          className="app-screen"
          loading="lazy"
        />
        <img
          src={bola5}
          alt="Settings screen"
          className="app-screen"
          loading="lazy"
        />
        <img
          src={bola6}
          alt="App training screen"
          className="app-screen"
          loading="lazy"
        />
        <img
          src={bola7}
          alt="Perio index screen"
          className="app-screen"
          loading="lazy"
        />
        <img
          src={bola8}
          alt="Send feedback screen"
          className="app-screen"
          loading="lazy"
        />
        <img
          src={bola9}
          alt="Clinical notes screen"
          className="app-screen"
          loading="lazy"
        />
        <img
          src={bola10}
          alt="Clinical templates screen"
          className="app-screen"
          loading="lazy"
        />
        <img
          src={bola11}
          alt="Edit template screen"
          className="app-screen"
          loading="lazy"
        />
        <div className="shadow-screen"></div>
      </div>

      {/* Desktop screenshots */}
      <div className="desktop-screenshots">
        <img
          src={bola12}
          alt="Bola AI Welcome email"
          className="desktop-screen"
          loading="lazy"
        />
        <img
          src={bola13}
          alt="Bola AI Help Center homepage"
          className="desktop-screen"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Bola;
