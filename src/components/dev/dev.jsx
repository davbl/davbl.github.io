import ProjectDescription from "./project-description";
import { Squircle } from "corner-smoothing";
import "./dev.css";
import am from "./img/am.avif";
import bola from "./img/bola.png";
import fm from "./img/fm.png";
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
        {/* Grid items: */}
        {/* AM BROWSER */}
        <div className="am-browser project">
          <Squircle className="cover" cornerRadius={16} cornerSmoothing={0.8}>
            <Squircle cornerRadius={14} cornerSmoothing={0.8}>
              <img
                src={am}
                alt="A looping video showing how the AlphaMissense Browser works."
              />
            </Squircle>
          </Squircle>

          <ProjectDescription
            title="AlphaMissense Browser"
            link=""
            text="Search the AlphaMissense dataset without a Jupyter notebook. Built with:"
            color="#ff5b42"
            chips={["Flask", "SQLite", "Unpoly", "Tailwind"]}
          />
        </div>

        {/* BOLA */}
        <div className="bola project">
          <Squircle className="cover" cornerRadius={16} cornerSmoothing={0.8}>
            <img
              src={bola}
              alt="A screenshot of the Welcome screen from the Bola AI app for Windows."
            />
          </Squircle>

          <ProjectDescription
            title="Bola AI"
            link=""
            text="Dental voice AI for Windows and Chrome. Brought on for UX/UI. Built with:"
            color="#668CFF"
            chips={["Figma"]}
          />
        </div>

        {/* FM FAQ */}
        <div className="fm project">
          <Squircle className="cover" cornerRadius={16} cornerSmoothing={0.8}>
            <img
              src={fm}
              alt="Screenshot of the uppermost portion of the FM FAQ webpage, displayed on an iPhone."
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

        {/* ANALYZER */}
        <div className="analyzer project">
          <Squircle className="cover" cornerRadius={16} cornerSmoothing={0.8}>
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

        {/* STAPH */}
        <div className="staph project">
          <Squircle className="cover" cornerRadius={16} cornerSmoothing={0.8}>
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
      </div>
      {/* Grid end */}
    </section>
  );
}

export default Dev;
