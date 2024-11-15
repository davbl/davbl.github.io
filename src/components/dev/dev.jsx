import ProjectDescription from "./project-description";
import { Squircle } from "corner-smoothing";
import "./dev.css";
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
        <h3 className="subheading">And UX/UI</h3>
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
            <Squircle cornerRadius={14} cornerSmoothing={0.8}>
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
              alt="TODO: A screenshot of the Welcome screen from the Bola AI app for Windows."
            />

            <img
              src={bolaTeeth}
              alt="TODO: A screenshot of the Welcome screen from the Bola AI app for Windows."
            />
          </Squircle>

          <ProjectDescription
            title="Bola AI"
            link=""
            text="Dental voice AI for Windows and Chrome. Brought on for UX/UI. Built with:"
            color="#668CFF"
            chips={["Figma"]}
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
            <Squircle cornerRadius={14} cornerSmoothing={0.8}>
              <img
                src={analyzer}
                alt="A looping video showing how the DNA/RNA Analyzer works."
              />
            </Squircle>
          </Squircle>

          <ProjectDescription
            title="DNA/RNA Analyzer"
            link="https://dnarna.streamlit.app"
            text="Get standard bioinformatics stats, and more, for your DNA or RNA sequence. Built with:"
            color="#ff4b4b"
            chips={["Streamlit"]}
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
              alt="TODO: Screenshot of the uppermost portion of the FM FAQ webpage, displayed on an iPhone."
            />

            <img
              src={fmHero}
              alt="Screenshot of the uppermost portion of the FM FAQ webpage, displayed on an iPhone."
            />

            <img
              src={fmGenetic}
              alt="TODO: Screenshot of the uppermost portion of the FM FAQ webpage, displayed on an iPhone."
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
            <Squircle cornerRadius={14} cornerSmoothing={0.8}>
              <img
                src={am}
                alt="A looping video showing how the AlphaMissense Browser works."
              />
            </Squircle>
          </Squircle>

          <ProjectDescription
            title="AlphaMissense Browser"
            // link=""
            text={
              <>
                Search the{" "}
                <a
                  href="https://deepmind.google/discover/blog/a-catalogue-of-genetic-mutations-to-help-pinpoint-the-cause-of-diseases/"
                  target="_blank">
                  AlphaMissense
                </a>{" "}
                dataset without a Jupyter notebook. Built with:
              </>
            }
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
