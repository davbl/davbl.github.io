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
      <h3 className="subheading">Pleasure to have worked with</h3>

      <div className="logos-container">
        <div className="marquee">
          <img src={mycroft} alt="Mycroft AI logo" loading="lazy" />
          <img src={ntx} alt="NeurotechX logo" width="178" loading="lazy" />
          <img src={drverde} alt="Doctor Verde logo" loading="lazy" />
          <img src={bola} alt="Bola AI logo" loading="lazy" />
          <img src={kisk} alt="KISK logo" loading="lazy" />
          <img src={abyky} alt="Abyky logo" loading="lazy" />
          <img src={progress} alt="Progress Forum logo" loading="lazy" />
        </div>

        <div className="marquee">
          <img src={mycroft} alt="Mycroft AI logo" loading="lazy" />
          <img src={ntx} alt="NeurotechX logo" width="178" loading="lazy" />
          <img src={drverde} alt="Doctor Verde logo" loading="lazy" />
          <img src={bola} alt="Bola AI logo" loading="lazy" />
          <img src={kisk} alt="KISK logo" loading="lazy" />
          <img src={abyky} alt="Abyky logo" loading="lazy" />
          <img src={progress} alt="Progress Forum logo" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Logos;
