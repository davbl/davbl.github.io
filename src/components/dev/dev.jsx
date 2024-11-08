import ProjectDescription from "./project-description";
import "./dev.css";
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

      {/* Grid */}
      <div className="dev-bento">
        {/* AM Browser */}
        <div className="am-browser project">
          <div className="cover"></div>
          <ProjectDescription
            title="AlphaMissense Browser"
            link=""
            text="Search the AlphaMissense dataset without a Jupyter notebook. Built with:"
            color="#ff5b42"
            chips={["Flask", "SQLite", "Unpoly", "Tailwind"]}
          />
        </div>

        {/* Bola */}
        <div className="bola project">
          <div className="cover">
            <img src={bola} alt="" />
          </div>

          <ProjectDescription
            title="Bola AI"
            link=""
            text="Dental voice AI for Windows and Chrome. Brought on for UX/UI. Built with:"
            color="#668CFF"
            chips={["Figma"]}
          />
        </div>

        {/* FM */}
        <div className="fm project">
          <div className="cover">
            <img src={fm} alt="" />
          </div>

          <ProjectDescription
            title="FM FAQ"
            link="https://dnarna.co/fmfaq/"
            text="Frequently asked questions about fructose malabsorption. Built with:"
            color="#4E8CFF"
            chips={["HTML", "CSS"]}
          />
        </div>

        {/* Analyzer */}
        <div className="analyzer project">
          <div className="cover">
            <img className="vid" src={analyzer} alt="" />
          </div>
          <ProjectDescription
            title="DNA/RNA Analyzer"
            link="https://dnarna.streamlit.app"
            text="Get standard bioinformatics stats, and more, for your DNA or RNA sequence. Built with:"
            color="#ff4b4b"
            chips={["Streamlit"]}
          />
        </div>

        {/* Staph */}
        <div className="staph project">
          <div className="cover">
            <img className="vid" src={staph} alt="" />
          </div>

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
    </section>
  );
}

export default Dev;
