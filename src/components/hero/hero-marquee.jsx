import "./hero-marquee.css";
// Images - col1
import Fw1 from "./img/flywire1.avif";
import Fw2 from "./img/flywire2.avif";
import Fw3 from "./img/flywire3.avif";
import Fw4 from "./img/flywire4.avif";
import Fw5 from "./img/flywire5.avif";
// Images - col2
import hand from "./img/xray-hand.avif";
import hip from "./img/xray-hip.avif";
import angiogram from "./img/angiogram.avif";
import brain from "./img/brain.avif";
import pace from "./img/xray-pace.avif";
// Images - col2
import prot1 from "./img/prot1.avif";
import prot2 from "./img/prot2.avif";
import prot3 from "./img/prot3.avif";
import prot4 from "./img/prot4.avif";
import prot5 from "./img/prot5.avif";

function HeroMarquee() {
  return (
    <div className="marquee-container">
      {/* Column 1 - FlyWire */}
      <div className="marquee-column">
        {/* Repeat the track of 5 images 3 times to prevent gaps on large screens */}
        {Array.from({ length: 3 }).map((_, trackIndex) => (
          <div className="marquee-track" key={trackIndex}>
            {/* FlyWire img */}
            <div className="marquee-rectangle">
              <img
                src={Fw1}
                // gtp recommends empty alt for purely decorative images, to prevent noisy screen reader experience
                alt=""
                className="img"
                loading="eager"
              />
            </div>

            {/* FlyWire img */}
            <div className="marquee-rectangle">
              <img src={Fw3} alt="" className="img" loading="eager" />
            </div>

            {/* FlyWire img */}
            <div className="marquee-rectangle">
              <img src={Fw5} alt="" className="img fw5" loading="eager" />
            </div>

            {/* FlyWire img */}
            <div className="marquee-rectangle">
              <img src={Fw2} alt="" className="img" loading="eager" />
            </div>

            {/* FlyWire img */}
            <div className="marquee-rectangle">
              <img src={Fw4} alt="" className="img" loading="eager" />
            </div>
            {/* Track end ↓ */}
          </div>
        ))}
        {/* Column 1 end ↓ */}
      </div>

      {/* Column 2 - Imaging */}
      <div className="marquee-column">
        {/* Repeat the track of 5 images 3 times to prevent gaps on large screens */}
        {Array.from({ length: 3 }).map((_, trackIndex) => (
          <div className="marquee-track reverse" key={trackIndex}>
            {/* imaging img */}
            <div className="marquee-rectangle">
              <img src={hand} alt="" className="hand" loading="eager" />
            </div>

            {/* imaging img */}
            <div className="marquee-rectangle">
              <img src={brain} alt="" className="brain" loading="eager" />
            </div>

            {/* imaging img */}
            <div className="marquee-rectangle">
              <img src={hip} alt="" className="hip" loading="eager" />
            </div>

            {/* imaging img */}
            <div className="marquee-rectangle">
              <img
                src={angiogram}
                alt=""
                className="angiogram"
                loading="eager"
              />
            </div>

            {/* imaging img */}
            <div className="marquee-rectangle">
              <img src={pace} alt="" className="pace" loading="eager" />
            </div>
            {/* Track end ↓ */}
          </div>
        ))}
        {/* Column 2 end ↓ */}
      </div>

      {/* Column 3 - Proteins */}
      <div className="marquee-column ">
        {/* Repeat the track of 5 images 3 times to prevent gaps on large screens */}
        {Array.from({ length: 3 }).map((_, trackIndex) => (
          <div className="marquee-track" key={trackIndex}>
            {/* protein img */}
            <div className="marquee-rectangle">
              <img src={prot1} alt="" className="protein" loading="eager" />
            </div>

            {/* protein img */}
            <div className="marquee-rectangle">
              <img src={prot2} alt="" className="protein" loading="eager" />
            </div>

            {/* protein img */}
            <div className="marquee-rectangle">
              <img src={prot3} alt="" className="protein" loading="eager" />
            </div>

            {/* protein img */}
            <div className="marquee-rectangle">
              <img src={prot4} alt="" className="protein" loading="eager" />
            </div>

            {/* protein img */}
            <div className="marquee-rectangle">
              <img src={prot5} alt="" className="protein" loading="eager" />
            </div>
            {/* Track end ↓ */}
          </div>
        ))}
        {/* Column 3 end ↓ */}
      </div>
      {/* Container end ↓ */}
    </div>
  );
}

export default HeroMarquee;
