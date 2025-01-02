import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";
import "./logo-marquee.css";

// Images
import mycroft from "./img/mycroft-ai-logo.svg";
import ntx from "./img/ntx-logo.avif";
import drverde from "./img/dr-verde-logo.svg";
import bola from "./img/bola-ai-logo.svg";
import kisk from "./img/kisk-logo.svg";
import abyky from "./img/abyky-logo.svg";
import progress from "./img/progress-forum-logo.svg";

function Logos() {
  // Detect if user prefers reduced motion
  const prefersReducedMotion = useMediaQuery({
    query: "(prefers-reduced-motion: reduce)",
  });

  // Define breakpoints for responsive gradientWidth
  const isSmallScreen = useMediaQuery({ query: "(max-width: 650px)" });

  // Determine gradientWidth based on screen size
  let gradientWidth = 150; // Default for large screens
  if (isSmallScreen) {
    gradientWidth = 75;
  }

  return (
    <section className="logos-section">
      <h3 className="subheading">Pleasure to have worked with</h3>

      <Marquee
        className="logo-track"
        speed={40}
        gradient={true}
        gradientColor={"#2d3040"}
        gradientWidth={gradientWidth}
        play={!prefersReducedMotion}>
        <img src={mycroft} alt="Mycroft AI logo" />
        <img src={ntx} alt="NeurotechX logo" width="178" />
        <img src={drverde} alt="Doctor Verde logo" />
        <img src={bola} alt="Bola AI logo" />
        <img src={kisk} alt="KISK logo" />
        <img src={abyky} alt="Abyky logo" />
        <img src={progress} alt="Progress Forum logo" />
      </Marquee>
    </section>
  );
}

export default Logos;
