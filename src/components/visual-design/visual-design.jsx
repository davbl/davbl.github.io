import { useEffect, useRef, useState } from "react";
import { Squircle } from "corner-smoothing";

import "./visual-design.css";
import compNeuro from "./img/comp-neuro.avif";
import stickers from "./img/stickers.avif";
import fig1 from "./img/figure-1.avif";
import fig2 from "./img/figure-2.avif";
import multitasking from "./img/multi-tasking.avif";
import elspac from "./img/elspac.avif";
import abyky from "./img/abyky.avif";
import MobileLayout from "./vis-design-mobile";
import TabletLayout from "./vis-design-tablet";

// Handle different bento order for different screen sizes
function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (event) => setMatches(event.matches);

    // Modern browsers
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

function VisDesign() {
  const isTablet = useMediaQuery("(max-width: 1000px)");
  // Change mobile pixel value if changed in css file
  const isMobile = useMediaQuery("(max-width: 700px)");
  const images = {
    compNeuro,
    stickers,
    fig1,
    fig2,
    multitasking,
    elspac,
    abyky,
  };
  const bentoRef = useRef(null);
  const ticking = useRef(false); // useRef to maintain ticking state across renders

  // Get scroll position for scroll animation
  useEffect(() => {
    function handleScroll() {
      if (!bentoRef.current) return;

      // Only proceed if there's no pending animation frame
      if (!ticking.current) {
        requestAnimationFrame(() => {
          // Get the section's position relative to the viewport
          const rect = bentoRef.current.getBoundingClientRect();
          const sectionTop = rect.top;
          const windowHeight = window.innerHeight;

          // Calculate relative scroll position
          const relativeScroll = Math.max(0, windowHeight - sectionTop);

          // Update the custom CSS variable for use in animations
          document.documentElement.style.setProperty(
            "--scroll-position",
            relativeScroll
          );

          // Reset the ticking flag
          ticking.current = false;
        });

        // Set the flag to true to prevent multiple requests
        ticking.current = true;
      }
    }

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation on component mount

    // Clean up the scroll listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <section>
      {/* Section heading */}
      <div>
        <h2>Visual Design</h2>
        <h3>A handful of specimens</h3>
      </div>

      {/* Bento grid */}
      <div className="visdesign-bento" ref={bentoRef}>
        {isMobile ? (
          <MobileLayout images={images} />
        ) : isTablet ? (
          <TabletLayout images={images} />
        ) : (
          // Desktop layout
          <>
            {/* Col 1 */}
            <div className="col1">
              {/* Comp neuro - row 1 */}
              <Squircle
                className="piece"
                cornerRadius={20}
                borderWidth={1.5}
                cornerSmoothing={0.8}>
                <Squircle cornerRadius={16} cornerSmoothing={0.8}>
                  <img
                    src={compNeuro}
                    alt="A pixel art image with a blue, pixelated background. It has a pink, pixelated brain illustration on the right, and the words 'comp' and 'neuro' in bold pixelated font on the left. Below, there's a pink 'START' button, also in pixel art style."
                  />
                </Squircle>
              </Squircle>

              {/* Row 2 */}
              <div className="row2">
                {/* Fig 1 */}
                <Squircle
                  className="piece"
                  cornerRadius={20}
                  borderWidth={1.5}
                  cornerSmoothing={0.8}>
                  <Squircle cornerRadius={16} cornerSmoothing={0.8}>
                    <img
                      src={fig1}
                      alt="A diagram comparing sufficient and limited cognitive processing resources. It shows two human profiles with labeled brain areas. The top row, labeled 'Sufficient Processing Resources,' shows a brain image with bright areas leading to a full plate of food. The bottom row, labeled 'Limited Processing Resources,' shows a dimly labeled brain area leading to a plate with only one food item."
                    />
                  </Squircle>
                </Squircle>

                {/* Fig 2 */}
                <Squircle
                  className="piece"
                  cornerRadius={20}
                  borderWidth={1.5}
                  cornerSmoothing={0.8}>
                  <Squircle cornerRadius={16} cornerSmoothing={0.8}>
                    <img
                      src={fig2}
                      alt="A diagram of the working memory model, titled 'Central Executive.' It shows two components linked to the Central Executive: the 'Visuospatial Sketchpad,' represented by a blue diamond with an eye, handling visual and spatial information, and the 'Phonological Loop,' represented by an orange circle with an ear, handling verbal and auditory information. A note suggests combining tasks from different components for efficient multitasking."
                    />
                  </Squircle>
                </Squircle>
              </div>

              {/* Multitasking - row 3 */}
              <Squircle
                className="piece"
                cornerRadius={20}
                borderWidth={1.5}
                cornerSmoothing={0.8}>
                <Squircle cornerRadius={16} cornerSmoothing={0.8}>
                  <img
                    src={multitasking}
                    alt="A humorous collage-style illustration of a surgeon. A speech bubble from the surgeon reads, 'Oh no, why did I open so many browser tabs?' The scene includes various hand-drawn elements and visual cues like a bed and a patient's face on the side, emphasizing a humorous take on multitasking and mental overload."
                  />
                </Squircle>
              </Squircle>
            </div>

            {/* Col 2 */}
            <div className="col2">
              {/* Stickers */}
              <Squircle
                className="piece"
                cornerRadius={20}
                borderWidth={1.5}
                cornerSmoothing={0.8}>
                <Squircle cornerRadius={16} cornerSmoothing={0.8}>
                  <img
                    src={stickers}
                    alt="A collection of science-themed sticker illustrations. Top row includes: a red oxygen molecule, a bacteriophage virus, and a test tube with liquid marked in gradients. Middle row: a mitochondrion, an antibody structure, and a circular plasmid. Bottom row: a sticker that reads 'From black to red or your gel is dead,' illustrating electrophoresis setup with color cues."
                  />
                </Squircle>
              </Squircle>

              {/* Elspac */}
              <Squircle
                className="piece"
                cornerRadius={20}
                borderWidth={1.5}
                cornerSmoothing={0.8}>
                <Squircle cornerRadius={16} cornerSmoothing={0.8}>
                  <img
                    src={elspac}
                    alt="A set of icons for various food categories. There are two rows: the top row includes gray circles with icons labeled FRUIT, EGGS, FISH, OILS, MEAT, and VEGGIES, each represented by an apple, egg, fish, oil droplet, drumstick, and carrot respectively. The bottom row mirrors the icons but in colored circles (yellow for fruit, beige for eggs, blue for fish, yellow for oils, brown for meat, and orange for veggies)."
                  />
                </Squircle>
              </Squircle>

              {/* Abyky */}
              <Squircle
                className="piece"
                cornerRadius={20}
                borderWidth={1.5}
                cornerSmoothing={0.8}>
                <Squircle cornerRadius={16} cornerSmoothing={0.8}>
                  <img
                    src={abyky}
                    alt="An icon set titled 'Abyky Icon Set' on a purple background. It contains four sections: 'Standard,' 'Review,' 'Negative,' and 'Positive.' Each section has icons with labels beneath. 'Standard' includes icons for Pull Request (red flower), Edited (watering can), New Comment (green bird), and Mention (orange spiral shell). 'Review' includes Review Assigned (bee), No Reviewer Assigned (honeycomb), and Waiting for Review (beehive). 'Negative' includes Changes Requested (ladybug), Closed (pruning shears), and Open for too Long (cactus). 'Positive' includes Approved (four-leaf clover) and Merged (butterfly)."
                  />
                </Squircle>
              </Squircle>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default VisDesign;