import { useEffect } from "react";
import { SquareArrowUpRight } from "lucide-react";
import "./fundraising.css";

// Images
import buck from "./img/buck.avif";
import campisi from "./img/campisi.avif";
import ceitec from "./img/ceitec.avif";
import mraz from "./img/mraz.avif";

function Fundraising() {
  useEffect(() => {
    window.scrollTo(0, 0); // Always top
  }, []);

  // Render
  return (
    <div className="subpage-container fundraising-container">
      {/* HEADING */}
      <div>
        <h2>Fundraising</h2>
        <h3>More money more science</h3>
      </div>
      {/* Intro */}
      <p className="intro">
        With my help, a few bioscience institutions have received small-scale
        funding. In the future, I hope to do more and go bigger to support
        research I care about.
      </p>

      <div className="institution-list">
        {/* BUCK */}
        <div className="institution">
          {/* Cover images */}
          <div className="institution-cover">
            <img
              src={buck}
              alt="Aerial photo of the Buck Institute building in California."
            />
            <img
              src={campisi}
              alt="Photo of late Judy Campisi in discussion with another Buck scientist in front of a microscope."
            />
          </div>
          <p className="caption">
            Second photo: Late{" "}
            <a
              className="underline"
              href="https://www.cell.com/cell/fulltext/S0092-8674(24)00183-1"
              target="_blank"
              rel="noopener">
              Judy Campisi
            </a>{" "}
            (left) with another Buck scientist. Photography by: Winni
            Wintermeyer and Buck Institute.
          </p>

          {/* Institution description */}
          <a
            className="institution-link"
            href="https://www.buckinstitute.org"
            target="_blank"
            rel="noopener">
            <h4>Buck Institute for Research on Aging</h4>
            <SquareArrowUpRight
              className="arrow-icon buck-icon"
              strokeWidth={1.5}
              size={23}
            />
          </a>
          <p className="location cali">California, USA</p>
          <p className="institution-description">
            An independent biomedical research institute that researches aging
            and age-related disease. The mission of the Buck Institute is to
            extend the healthy years of life.{" "}
            <a
              className="bracket-link"
              href="https://en.m.wikipedia.org/wiki/Buck_Institute_for_Research_on_Aging"
              target="_blank"
              rel="noopener">
              [1]
            </a>
          </p>
          <div className="label">Healthspan</div>
        </div>

        {/* CEITEC */}
        <div className="institution">
          {/* Cover images */}
          <div className="institution-cover">
            <img
              src={ceitec}
              alt="Photo of a modern lobby inside the Central European Institute of Technology (CEITEC) building."
              loading="lazy"
            />
            <img
              src={mraz}
              alt="Photo of two scientists from the Center for Molecular Medicine. On the right is Marek Mraz who leads one of the 7 research groups at the Center."
              loading="lazy"
            />
          </div>
          <p className="caption">
            Second photo:{" "}
            <a
              className="underline"
              href="https://www.ceitec.eu/microenvironment-of-immune-cells/rg115"
              target="_blank"
              rel="noopener">
              Marek Mraz
            </a>{" "}
            (right) leads one of the 7 research groups at the Center for
            Molecular Medicine at CEITEC. Photography by: Jiri Kratochvil and
            CEITEC.
          </p>

          {/* Institution description */}
          <a
            className="institution-link"
            href="https://www.ceitec.eu/molecular-medicine/rp7"
            target="_blank"
            rel="noopener">
            <h4>Center for Molecular Medicine</h4>
            <SquareArrowUpRight
              className="arrow-icon ceitec-icon"
              strokeWidth={1.5}
              size={23}
            />
          </a>
          <h5>@ Central European Institute of Technology (CEITEC)</h5>
          <p className="location brno">Brno, Czech Republic</p>
          <p className="institution-description long-description">
            CMM is deepening our understanding of basic molecular mechanisms in
            many diseases, especially cancer. Researchers focus on various types
            of leukemia and several solid tumors. They investigate immune cell
            microenvironment, B and T cell receptor repertoires, and more.{" "}
            <a
              className="bracket-link"
              href="https://www.ceitec.eu/molecular-medicine/rp7"
              target="_blank"
              rel="noopener">
              [2]
            </a>
          </p>
          <div className="label">Cancer</div>
        </div>
      </div>
    </div>
  );
}

export default Fundraising;
