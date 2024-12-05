import { Squircle } from "corner-smoothing";
import ProjectDescription from "./project-description";
import "./dev.css";

// Cover images and vids
import am from "./img/am.avif";
import bolaWelcome from "./img/bola-welcome.png";
import bolaTeeth from "./img/bola-teeth.png";
import bolaIndex from "./img/bola-index.png";
import fmHero from "./img/fm-hero.png";
import fmWhatis from "./img/fm-whatis.png";
import fmGenetic from "./img/fm-genetic.png";
import analyzer from "./img/analyzer.avif";
import staph from "./img/staph.avif";

function Dev() {
  return (
    <section>
      {/* Section heading */}
      <div className="heading">
        <h2>Development</h2>
        <h3 className="h3-dev">And UX/UI</h3>
      </div>

      {/* Grid container */}
      <div className="dev-bento">
        {/* Grid items ↓ */}

        {/* STAPH */}
        <div className="project staph">
          <Squircle
            className="cover staph-outline"
            cornerRadius={20}
            cornerSmoothing={0.8}
            borderWidth={1.5}>
            <Squircle
              cornerRadius={14}
              cornerSmoothing={0.8}
              className="vid staph-vid">
              <img
                src={staph}
                alt="A looping video showing how the Grapes of Staph webtool works."
              />
            </Squircle>
          </Squircle>

          <ProjectDescription
            title="Grapes of Staph"
            link="https://dnarna.co/grapes-of-staph"
            text={
              <>
                Is it <em>S. aureus</em>? A simple demo app for lab diagnostics.
                Built with:
              </>
            }
            color="#9381EB"
            chips={["React", "Vite", "Zustand"]}
          />
        </div>

        {/* BOLA */}
        <div className="project bola">
          <Squircle
            className="cover bola-outline"
            cornerRadius={20}
            cornerSmoothing={0.8}
            borderWidth={1.5}>
            <img
              src={bolaWelcome}
              alt="A screenshot of the Welcome screen from the Bola AI app for Windows."
            />

            <img
              src={bolaIndex}
              alt="A screenshot of the Perio Index screen."
            />

            <img
              src={bolaTeeth}
              alt="A screenshot of the Missing Teeth screen."
            />
          </Squircle>

          <ProjectDescription
            title="Bola AI"
            link="/bola"
            text="Dental voice AI for Windows and Chrome. Brought on for UX/UI. Built with:"
            color="#668CFF"
            chips={["Figma", "Illustrator"]}
            isLocal={true}
          />
        </div>

        {/* ANALYZER */}
        <div className="project analyzer">
          <Squircle
            className="cover analyzer-outline"
            cornerRadius={20}
            cornerSmoothing={0.8}
            borderWidth={1.5}>
            <Squircle
              cornerRadius={14}
              cornerSmoothing={0.8}
              className="vid analyzer-vid">
              <img
                src={analyzer}
                alt="A looping video showing how the DNA/RNA Analyzer works."
              />
            </Squircle>
          </Squircle>

          <ProjectDescription
            title="DNA/RNA Analyzer"
            link="https://dnarna.streamlit.app"
            text="Enter a DNA or RNA sequence and get standard bioinformatics stats, and more. Built with:"
            color="#ff4b4b"
            chips={["Streamlit", "Pandas", "Altair"]}
          />
        </div>

        {/* FM FAQ */}
        <div className="project fm">
          <Squircle
            className="cover fm-outline"
            cornerRadius={20}
            cornerSmoothing={0.8}
            borderWidth={1.5}>
            <img
              src={fmWhatis}
              alt="A screenshot of two cards from the Fructose Malabsorption FAQ webpage, displayed on an iPhone. The first card is titled 'What is fructose?' and the second one is 'What is fructose malabsorption?'."
            />

            <img
              src={fmHero}
              alt="A screenshot of the uppermost portion of the FM FAQ webpage."
            />

            <img
              src={fmGenetic}
              alt="Another screenshot of two cards from the webpage, this time 'Is it genetic?' and 'Is fructose malabsorption fructose intolerance?'."
            />
          </Squircle>

          <ProjectDescription
            title="FM FAQ"
            link="https://dnarna.co/fmfaq/"
            text="Frequently asked questions about fructose malabsorption. Built with:"
            color="#4E8CFF"
            chips={["HTML", "CSS"]}
          />
        </div>

        {/* AM BROWSER */}
        <div className="project am-browser">
          <Squircle
            className="cover am-browser-outline"
            cornerRadius={20}
            cornerSmoothing={0.8}
            borderWidth={1.5}>
            <Squircle
              cornerRadius={14}
              cornerSmoothing={0.8}
              className="vid am-vid">
              <img
                src={am}
                alt="A looping video showing how the AlphaMissense Browser works."
              />
            </Squircle>
          </Squircle>

          <ProjectDescription
            title="AlphaMissense Browser"
            // link=""
            text="Get a pathogenicity score for your missense mutation. Built with:"
            color="#ff5b42"
            chips={["Flask", "SQLite", "Unpoly", "Tailwind"]}
            isUnderConstruction={true}
          />
        </div>
        {/* Last item end */}
      </div>
      {/* Grid end */}
    </section>
  );
}

export default Dev;
