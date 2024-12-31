import { Squircle } from "corner-smoothing";
import Video from "./video";
import ProjectDescription from "./project-description";
import "./dev.css";

// Detect OS and browser -> for am video container bg color
import { useEffect, useState } from "react";
import { detectBrowserAndOS } from "../../utils/browserDetect";

// Cover images
import bolaWelcome from "./img/bola-welcome-1800h.avif";
import bolaTeeth from "./img/bola-teeth-1800h.avif";
import bolaIndex from "./img/bola-index-1800h.avif";
import fmHero from "./img/fm-hero.avif";
import fmWhatis from "./img/fm-whatis.avif";
import fmGenetic from "./img/fm-genetic.avif";

// Vids - avif
import staphAvifHi from "./img/staph/staph-1500h-60fps-av1.avif";
import staphAvifMid from "./img/staph/staph-1198h-60fps-av1.avif";
import staphAvifLo from "./img/staph/staph-850h-60fps-av1.avif";
import analyzerAvifHi from "./img/analyzer/analyzer-1506h-60fps-av1.avif";
import analyzerAvifMid from "./img/analyzer/analyzer-1198h-60fps-av1.avif";
import analyzerAvifLo from "./img/analyzer/analyzer-854h-60fps-hevc-notAV1.avif";
import amAvifHi from "./img/am/am-1502h-60fps-av1.avif";
import amAvifMid from "./img/am/am-1198h-60fps-av1.avif";
import amAvifLo from "./img/am/am-854h-60fps-av1.avif";

// Vids - MP4 hevc for Safari
import staphMp4Hi from "./img/staph/staph-1500h-60fps-hevc.mp4";
import staphMp4Mid from "./img/staph/staph-1198h-60fps-hevc.mp4";
import staphMp4Lo from "./img/staph/staph-850h-60fps-hevc.mp4";
import analyzerMp4Hi from "./img/analyzer/analyzer-1502h-60fps-hevc.mp4";
import analyzerMp4Mid from "./img/analyzer/analyzer-1198h-60fps-hevc.mp4";
import analyzerMp4Lo from "./img/analyzer/analyzer-854h-60fps-hevc.mp4";
import amMp4Hi from "./img/am/am-1502h-60fps-hevc.mp4";
import amMp4Mid from "./img/am/am-1198h-60fps-hevc.mp4";
import amMp4Lo from "./img/am/am-854h-60fps-hevc.mp4";

// Posters
import staphPoster from "./img/staph/staph-poster.avif";
import analyzerPoster from "./img/analyzer/analyzer-poster.avif";
// Commented out due to grey color in poster interpreted differently than grey color in video
// import amPoster from "./img/am/am-poster.avif";

// Bola subpage - preload first 3 images on link hover
import { preloadImages } from "../../utils/preloadImages";
import bola1 from "../../pages/bola/img/bola1-1800h.avif";
import bola2 from "../../pages/bola/img/bola2-1800h.avif";
import bola3 from "../../pages/bola/img/bola3-1800h.avif";

function Dev() {
  // Preload images for bola subpage on hover
  const handleBolaHover = () => {
    preloadImages([bola1, bola2, bola3]);
  };

  // Detect OS and browser -> for am video container bg color
  const [bgClass, setBgClass] = useState("am-vid-dark"); // Default class

  useEffect(() => {
    const { isMac, isFirefox, isSafari } = detectBrowserAndOS();
    // console.log(
    //   `isMac: ${isMac}, isFirefox: ${isFirefox}, isIos: ${isIos}, isSafari: ${isSafari}`
    // );

    if (isMac && isSafari) {
      setBgClass("am-vid-mid");
    } else if (isFirefox) {
      setBgClass("am-vid-light");
    } else {
      setBgClass("am-vid-dark");
    }
  }, []);

  // Render
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
          {/* Outline */}
          <Squircle
            className="cover staph-outline"
            cornerRadius={20}
            cornerSmoothing={0.8}
            borderWidth={1.5}>
            {/* Video canvas */}
            <Squircle
              cornerRadius={14}
              cornerSmoothing={0.8}
              className="vid-canvas staph-vid">
              {/* Video component */}
              <Video
                srcAvifHi={staphAvifHi}
                srcAvifMid={staphAvifMid}
                srcAvifLo={staphAvifLo}
                srcMp4Hi={staphMp4Hi}
                srcMp4Mid={staphMp4Mid}
                srcMp4Lo={staphMp4Lo}
                ariaLabel="A short looping video showing how the Grapes of Staph webtool works."
                poster={staphPoster}
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
            onMouseEnter={handleBolaHover}
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
              className="vid-canvas analyzer-vid">
              {/* Video component */}
              <Video
                srcAvifHi={analyzerAvifHi}
                srcAvifMid={analyzerAvifMid}
                srcAvifLo={analyzerAvifLo}
                srcMp4Hi={analyzerMp4Hi}
                srcMp4Mid={analyzerMp4Mid}
                srcMp4Lo={analyzerMp4Lo}
                ariaLabel="A short looping video showing how the DNA/RNA Analyzer works."
                poster={analyzerPoster}
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
              className={`vid-canvas ${bgClass}`}>
              {/* Video component */}
              <Video
                srcAvifHi={amAvifHi}
                srcAvifMid={amAvifMid}
                srcAvifLo={amAvifLo}
                srcMp4Hi={amMp4Hi}
                srcMp4Mid={amMp4Mid}
                srcMp4Lo={amMp4Lo}
                ariaLabel="A short looping video showing how the AlphaMissense Browser works."
                // Commented out due to grey in poster interpreted differently than grey in video
                // poster={amPoster}
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
