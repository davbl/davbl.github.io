import "./hero-marquee.css";
// Images - col1
import Fw1 from "./img/flywire1.png";
import Fw2 from "./img/flywire2.png";
import Fw3 from "./img/flywire3.png";
import Fw4 from "./img/flywire4.png";
import Fw5 from "./img/flywire5.png";
// Images - col2
import hand from "./img/xray-hand.png";
import hip from "./img/xray-hip.png";
import angiogram from "./img/angiogram.png";
import brain from "./img/brain.png";
import pace from "./img/xray-pace.png";
// Images - col2
import prot1 from "./img/prot1.png";
import prot2 from "./img/prot2.png";
import prot3 from "./img/prot3.png";
import prot4 from "./img/prot4.png";
import prot5 from "./img/prot5.png";

function HeroMarquee() {
  return (
    <div className="marquee-container">
      {/* Column 1 */}
      <div className="marquee-column">
        {/* Track 1 */}
        <div className="marquee-track">
          <div className="marquee-rectangle">
            <img src={Fw1} alt="" className="img" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw3} alt="" className="img" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw5} alt="" className="img fw5" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw2} alt="" className="img" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw4} alt="" className="img" />
          </div>
        </div>

        {/* Track 2 */}
        <div className="marquee-track">
          <div className="marquee-rectangle">
            <img src={Fw1} alt="" className="img" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw3} alt="" className="img" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw5} alt="" className="img fw5" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw2} alt="" className="img" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw4} alt="" className="img" />
          </div>
        </div>

        {/* Track 3 - for big monitors */}
        <div className="marquee-track">
          <div className="marquee-rectangle">
            <img src={Fw1} alt="" className="img" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw3} alt="" className="img" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw5} alt="" className="img fw5" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw2} alt="" className="img" />
          </div>
          <div className="marquee-rectangle">
            <img src={Fw4} alt="" className="img" />
          </div>
        </div>

        {/* Column 1 end */}
      </div>

      {/* Column 2 */}
      <div className="marquee-column">
        {/* Track 1 */}
        <div className="marquee-track reverse">
          <div className="marquee-rectangle">
            <img src={hand} alt="" className="hand" />
          </div>
          <div className="marquee-rectangle">
            <img src={brain} alt="" className="brain" />
          </div>
          <div className="marquee-rectangle">
            <img src={hip} alt="" className="hip" />
          </div>
          <div className="marquee-rectangle">
            <img src={angiogram} alt="" className="angiogram" />
          </div>
          <div className="marquee-rectangle">
            <img src={pace} alt="" className="pace" />
          </div>
        </div>

        {/* Track 2 */}
        <div className="marquee-track reverse">
          <div className="marquee-rectangle">
            <img src={hand} alt="" className="hand" />
          </div>
          <div className="marquee-rectangle">
            <img src={brain} alt="" className="brain" />
          </div>
          <div className="marquee-rectangle">
            <img src={hip} alt="" className="hip" />
          </div>
          <div className="marquee-rectangle">
            <img src={angiogram} alt="" className="angiogram" />
          </div>
          <div className="marquee-rectangle">
            <img src={pace} alt="" className="pace" />
          </div>
        </div>

        {/* Track 3 - for big monitors */}
        <div className="marquee-track reverse">
          <div className="marquee-rectangle">
            <img src={hand} alt="" className="hand" />
          </div>
          <div className="marquee-rectangle">
            <img src={brain} alt="" className="brain" />
          </div>
          <div className="marquee-rectangle">
            <img src={hip} alt="" className="hip" />
          </div>
          <div className="marquee-rectangle">
            <img src={angiogram} alt="" className="angiogram" />
          </div>
          <div className="marquee-rectangle">
            <img src={pace} alt="" className="pace" />
          </div>
        </div>

        {/* Column 2 end */}
      </div>

      {/* Column 3 */}
      <div className="marquee-column ">
        {/* Track 1 */}
        <div className="marquee-track">
          <div className="marquee-rectangle">
            <img src={prot1} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot2} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot3} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot4} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot5} alt="" className="protein" />
          </div>
        </div>

        {/* Track 2 */}
        <div className="marquee-track">
          <div className="marquee-rectangle">
            <img src={prot1} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot2} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot3} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot4} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot5} alt="" className="protein" />
          </div>
        </div>

        {/* Track 3 - for big monitors */}
        <div className="marquee-track">
          <div className="marquee-rectangle">
            <img src={prot1} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot2} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot3} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot4} alt="" className="protein" />
          </div>
          <div className="marquee-rectangle">
            <img src={prot5} alt="" className="protein" />
          </div>
        </div>

        {/* Column 3 end */}
      </div>
      {/* Container end */}
    </div>
  );
}

export default HeroMarquee;
