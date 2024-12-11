import "./hero-marquee.css";
// Images - col1
import Fw1 from "./img/flywire1.avif";
import Fw2 from "./img/flywire2.avif";
import Fw3 from "./img/flywire3.avif";
import Fw4 from "./img/flywire4.avif";
import Fw5 from "./img/flywire5.avif";
// Images - col2
import hand from "./img/xray-hand.png";
import hip from "./img/xray-hip.png";
import angiogram from "./img/angiogram.png";
import brain from "./img/brain.png";
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
        {/* Track 1 */}
        <div className="marquee-track">
          <div className="marquee-rectangle">
            {/* FlyWire img */}
            <img
              src={Fw1}
              alt="50 largest neurons of the fly brain connectome. Tyler Sloan and Amy Sterling for FlyWire, Princeton University, (Dorkenwald et al., 2024)"
              className="img"
              loading="eager"
            />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img
              src={Fw3}
              alt="Bolt Neurons identified and proofread by Salil Bidaye and rendered by Amy Sterling for FlyWire."
              className="img"
              loading="eager"
            />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img
              src={Fw5}
              alt="CT1 neurons identified by Zhihao Zheng and proofread by Seung Lab. Rendered by Amy Sterling for FlyWire."
              className="img fw5"
              loading="eager"
            />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img src={Fw2} alt="" className="img" loading="eager" />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img
              src={Fw4}
              alt="Keystone neurons (il3LN6) identified by Philipp Schlegel of Jefferis Lab and proofread in FlyWire by labs of Jefferis, Lee, Murthy, and Seung. Rendered by Amy Sterling for FlyWire."
              className="img"
              loading="eager"
            />
          </div>
        </div>

        {/* Track 2 */}
        <div className="marquee-track">
          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img
              src={Fw1}
              alt="50 largest neurons of the fly brain connectome. Tyler Sloan and Amy Sterling for FlyWire, Princeton University, (Dorkenwald et al., 2024)"
              className="img"
              loading="eager"
            />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img
              src={Fw3}
              alt="Bolt Neurons identified and proofread by Salil Bidaye and rendered by Amy Sterling for FlyWire."
              className="img"
              loading="eager"
            />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img
              src={Fw5}
              alt="CT1 neurons identified by Zhihao Zheng and proofread by Seung Lab. Rendered by Amy Sterling for FlyWire."
              className="img fw5"
              loading="eager"
            />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img src={Fw2} alt="" className="img" loading="eager" />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img
              src={Fw4}
              alt="Keystone neurons (il3LN6) identified by Philipp Schlegel of Jefferis Lab and proofread in FlyWire by labs of Jefferis, Lee, Murthy, and Seung. Rendered by Amy Sterling for FlyWire."
              className="img"
              loading="eager"
            />
          </div>
        </div>

        {/* Track 3 - for big monitors */}
        <div className="marquee-track">
          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img
              src={Fw1}
              alt="50 largest neurons of the fly brain connectome. Tyler Sloan and Amy Sterling for FlyWire, Princeton University, (Dorkenwald et al., 2024)"
              className="img"
              loading="eager"
            />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img
              src={Fw3}
              alt="Bolt Neurons identified and proofread by Salil Bidaye and rendered by Amy Sterling for FlyWire."
              className="img"
              loading="eager"
            />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img
              src={Fw5}
              alt="CT1 neurons identified by Zhihao Zheng and proofread by Seung Lab. Rendered by Amy Sterling for FlyWire."
              className="img fw5"
              loading="eager"
            />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img src={Fw2} alt="" className="img" loading="eager" />
          </div>

          {/* FlyWire img */}
          <div className="marquee-rectangle">
            <img
              src={Fw4}
              alt="Keystone neurons (il3LN6) identified by Philipp Schlegel of Jefferis Lab and proofread in FlyWire by labs of Jefferis, Lee, Murthy, and Seung. Rendered by Amy Sterling for FlyWire."
              className="img"
              loading="eager"
            />
          </div>
        </div>

        {/* Column 1 end */}
      </div>

      {/* Column 2 - imaging */}
      <div className="marquee-column">
        {/* Track 1 */}
        <div className="marquee-track reverse">
          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={hand}
              alt="An x-ray of a left hand."
              className="hand"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={brain}
              alt="A brain MRI, sagittal view."
              className="brain"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={hip}
              alt="An x-ray of a hip joint implant."
              className="hip"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={angiogram}
              alt="A brain angiogram."
              className="angiogram"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={pace}
              alt="An x-ray of an implanted pacemaker."
              className="pace"
              loading="eager"
            />
          </div>
        </div>

        {/* Track 2 */}
        <div className="marquee-track reverse">
          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={hand}
              alt="An x-ray of a left hand."
              className="hand"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={brain}
              alt="A brain MRI, sagittal view."
              className="brain"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={hip}
              alt="An x-ray of a hip joint implant."
              className="hip"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={angiogram}
              alt="A brain angiogram."
              className="angiogram"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={pace}
              alt="An x-ray of an implanted pacemaker."
              className="pace"
              loading="eager"
            />
          </div>
        </div>

        {/* Track 3 - for big monitors */}
        <div className="marquee-track reverse">
          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={hand}
              alt="An x-ray of a left hand."
              className="hand"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={brain}
              alt="A brain MRI, sagittal view."
              className="brain"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={hip}
              alt="An x-ray of a hip joint implant."
              className="hip"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={angiogram}
              alt="A brain angiogram."
              className="angiogram"
              loading="eager"
            />
          </div>

          {/* imaging img */}
          <div className="marquee-rectangle">
            <img
              src={pace}
              alt="An x-ray of an implanted pacemaker."
              className="pace"
              loading="eager"
            />
          </div>
        </div>

        {/* Column 2 end */}
      </div>

      {/* Column 3 - proteins */}
      <div className="marquee-column ">
        {/* Track 1 */}
        <div className="marquee-track">
          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot1}
              alt="A cartoon render of the assembly of the phiX174 DNA binding protein."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot2}
              alt="A cartoon render of IH/M structure of the Nuclear Pore Complex."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot3}
              alt="A cartoon render of 4KTC."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot4}
              alt="A render of aquaporin structure."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot5}
              alt="A cartoon render of exosome interior."
              className="protein"
              loading="eager"
            />
          </div>
        </div>

        {/* Track 2 */}
        <div className="marquee-track">
          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot1}
              alt="A cartoon render of the assembly of the phiX174 DNA binding protein."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot2}
              alt="A cartoon render of IH/M structure of the Nuclear Pore Complex."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot3}
              alt="A cartoon render of 4KTC."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot4}
              alt="A render of aquaporin structure."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot5}
              alt="A cartoon render of exosome interior."
              className="protein"
              loading="eager"
            />
          </div>
        </div>

        {/* Track 3 - for big monitors */}
        <div className="marquee-track">
          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot1}
              alt="A cartoon render of the assembly of the phiX174 DNA binding protein."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot2}
              alt="A cartoon render of IH/M structure of the Nuclear Pore Complex."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot3}
              alt="A cartoon render of 4KTC."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot4}
              alt="A render of aquaporin structure."
              className="protein"
              loading="eager"
            />
          </div>

          {/* protein img */}
          <div className="marquee-rectangle">
            <img
              src={prot5}
              alt="A cartoon render of exosome interior."
              className="protein"
              loading="eager"
            />
          </div>
        </div>

        {/* Column 3 end */}
      </div>
      {/* Container end */}
    </div>
  );
}

export default HeroMarquee;
