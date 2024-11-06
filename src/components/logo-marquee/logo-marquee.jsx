import "./logo-marquee.css";
import mycroft from "./img/mycroft-ai-logo.svg";
import ntx from "./img/ntx-logo.png";
import drverde from "./img/dr-verde-logo.svg";
import bola from "./img/bola-ai-logo.svg";
import kisk from "./img/kisk-logo.svg";
import abyky from "./img/abyky-logo.svg";
import progress from "./img/progress-forum-logo.svg";

function Logos() {
  return (
    <section className="logos-section">
      {/* TODO: change <p> to appropriate <h> */}
      <p className="logos-heading">Pleasure to have worked with</p>

      <div className="logos-container">
        <div className="marquee">
          <img src={mycroft} alt="Mycroft AI logo" />
          <img src={ntx} alt="NeurotechX logo" width="178" />
          <img src={drverde} alt="Doctor Verde logo" />
          <img src={bola} alt="Bola AI logo" />
          <img src={kisk} alt="KISK logo" />
          <img src={abyky} alt="Abyky logo" />
          <img src={progress} alt="Progress Forum logo" />
        </div>

        <div className="marquee">
          <img src={mycroft} alt="Mycroft AI logo" />
          <img src={ntx} alt="NeurotechX logo" width="178" />
          <img src={drverde} alt="Doctor Verde logo" />
          <img src={bola} alt="Bola AI logo" />
          <img src={kisk} alt="KISK logo" />
          <img src={abyky} alt="Abyky logo" />
          <img src={progress} alt="Progress Forum logo" />
        </div>
      </div>
    </section>
  );
}

export default Logos;
