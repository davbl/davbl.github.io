import { Squircle } from "corner-smoothing";
import PropTypes from "prop-types";

function TabletLayout({ images }) {
  return (
    <>
      {/* Col 1 */}
      <div className="col1">
        {/* Comp neuro */}
        <Squircle
          className="piece"
          cornerRadius={20}
          borderWidth={1.5}
          cornerSmoothing={0.8}>
          <Squircle cornerRadius={16} cornerSmoothing={0.8}>
            <img
              src={images.compNeuro}
              alt="A pixel art image with a blue, pixelated background. It has a pink, pixelated brain illustration on the right, and the words 'comp' and 'neuro' in bold pixelated font on the left. Below, there's a pink 'START' button, also in pixel art style."
              loading="lazy"
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
              src={images.elspac}
              alt="A set of icons for various food categories. There are two rows: the top row includes gray circles with icons labeled FRUIT, EGGS, FISH, OILS, MEAT, and VEGGIES, each represented by an apple, egg, fish, oil droplet, drumstick, and carrot respectively. The bottom row mirrors the icons but in colored circles (yellow for fruit, beige for eggs, blue for fish, yellow for oils, brown for meat, and orange for veggies)."
              loading="lazy"
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
              src={images.abyky}
              alt="An icon set titled 'Abyky Icon Set' on a purple background. It contains four sections: 'Standard,' 'Review,' 'Negative,' and 'Positive.' Each section has icons with labels beneath. 'Standard' includes icons for Pull Request (red flower), Edited (watering can), New Comment (green bird), and Mention (orange spiral shell). 'Review' includes Review Assigned (bee), No Reviewer Assigned (honeycomb), and Waiting for Review (beehive). 'Negative' includes Changes Requested (ladybug), Closed (pruning shears), and Open for too Long (cactus). 'Positive' includes Approved (four-leaf clover) and Merged (butterfly)."
              loading="lazy"
            />
          </Squircle>
        </Squircle>

        {/* Multitasking */}
        <Squircle
          className="piece"
          cornerRadius={20}
          borderWidth={1.5}
          cornerSmoothing={0.8}>
          <Squircle cornerRadius={16} cornerSmoothing={0.8}>
            <img
              src={images.multitasking}
              alt="A humorous collage-style illustration of a surgeon. A speech bubble from the surgeon reads, 'Oh no, why did I open so many browser tabs?' The scene includes various hand-drawn elements and visual cues like a bed and a patient's face on the side, emphasizing a humorous take on multitasking and mental overload."
              loading="lazy"
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
              src={images.stickers}
              alt="A collection of science-themed sticker illustrations. Top row includes: a red oxygen molecule, a bacteriophage virus, and a test tube with liquid marked in gradients. Middle row: a mitochondrion, an antibody structure, and a circular plasmid. Bottom row: a sticker that reads 'From black to red or your gel is dead,' illustrating electrophoresis setup with color cues."
              loading="lazy"
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
              src={images.fig2}
              alt="A diagram of the working memory model, titled 'Central Executive.' It shows two components linked to the Central Executive: the 'Visuospatial Sketchpad,' represented by a blue diamond with an eye, handling visual and spatial information, and the 'Phonological Loop,' represented by an orange circle with an ear, handling verbal and auditory information. A note suggests combining tasks from different components for efficient multitasking."
              loading="lazy"
            />
          </Squircle>
        </Squircle>

        {/* Fig 1 */}
        <Squircle
          className="piece"
          cornerRadius={20}
          borderWidth={1.5}
          cornerSmoothing={0.8}>
          <Squircle cornerRadius={16} cornerSmoothing={0.8}>
            <img
              src={images.fig1}
              alt="A diagram comparing sufficient and limited cognitive processing resources. It shows two human profiles with labeled brain areas. The top row, labeled 'Sufficient Processing Resources,' shows a brain image with bright areas leading to a full plate of food. The bottom row, labeled 'Limited Processing Resources,' shows a dimly labeled brain area leading to a plate with only one food item."
              loading="lazy"
            />
          </Squircle>
        </Squircle>
      </div>
    </>
  );
}

// Define prop types
TabletLayout.propTypes = {
  images: PropTypes.shape({
    compNeuro: PropTypes.string.isRequired,
    stickers: PropTypes.string.isRequired,
    fig1: PropTypes.string.isRequired,
    fig2: PropTypes.string.isRequired,
    multitasking: PropTypes.string.isRequired,
    elspac: PropTypes.string.isRequired,
    abyky: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabletLayout;
