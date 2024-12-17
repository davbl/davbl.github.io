import { Squircle } from "corner-smoothing";
import "./biomed.css";

// Images
import techniques from "./img/techniques-4x.avif";
import labs from "./img/labs-4x.avif";
import organisms from "./img/organisms-4x.avif";
import brain from "./img/brain-4x.avif";
import redCross from "./img/red-cross-4x.avif";
import award from "./img/award-4x.avif";

function Biomed() {
  return (
    <section>
      {/* Section heading */}
      <div>
        <h2 className="h2-biomedical">Biomedical</h2>
        <h3 className="">The flip side</h3>
      </div>

      {/* Bento grid */}
      <div className="bio-bento">
        {/* Techniques */}
        <Squircle
          className="techniques card"
          cornerRadius={20}
          borderWidth={1.5}
          cornerSmoothing={0.8}>
          <div className="card-header">
            {/* Photo */}
            <Squircle
              className="photo-outline orange-outline"
              cornerRadius={20}
              borderWidth={1.5}
              cornerSmoothing={0.8}>
              <Squircle
                className="photo-squircle"
                cornerRadius={16}
                cornerSmoothing={0.8}>
                <img
                  src={techniques}
                  alt="A photo of a scientist working with a microcentrifuge tube and a biopsy punch inside a biosafety cabinet."
                  width="96"
                  height="96"
                  loading="lazy"
                />
              </Squircle>
            </Squircle>

            <h4>Techniques</h4>
          </div>

          <p>
            Gel electrophoresis, PCR, primer design, restriction digestion,
            restriction mapping, miniprep, bacterial transformation,
            electroporation, mammalian cell culture
          </p>
        </Squircle>

        {/* Labs */}
        <Squircle
          className="labs card"
          cornerRadius={20}
          borderWidth={1.5}
          cornerSmoothing={0.8}>
          <div className="card-header">
            {/* Photo */}
            <Squircle
              className="photo-outline orange-outline"
              cornerRadius={20}
              borderWidth={1.5}
              cornerSmoothing={0.8}>
              <Squircle
                className="photo-squircle"
                cornerRadius={16}
                cornerSmoothing={0.8}>
                <img
                  src={labs}
                  alt="A photo of a scientist in a laboratory examining a sample through a light microscope."
                  width="96"
                  height="96"
                  loading="lazy"
                />
              </Squircle>
            </Squircle>

            <h4>Laboratories</h4>
          </div>

          <p>
            Timmons Lab, University of Kansas
            <br />
            Open Science Network, Vancouver
          </p>
        </Squircle>

        {/* Organisms */}
        <Squircle
          className="organisms card"
          cornerRadius={20}
          borderWidth={1.5}
          cornerSmoothing={0.8}>
          <div className="card-header">
            {/* Photo */}
            <Squircle
              className="photo-outline orange-outline"
              cornerRadius={20}
              borderWidth={1.5}
              cornerSmoothing={0.8}>
              <Squircle
                className="photo-squircle"
                cornerRadius={16}
                cornerSmoothing={0.8}>
                <img
                  src={organisms}
                  alt="Microscopic view of a few C. elegans worms with visible internal structures on an agar plate."
                  width="96"
                  height="96"
                  loading="lazy"
                />
              </Squircle>
            </Squircle>

            <h4>Organisms</h4>
          </div>

          <p>
            <span>E.&nbsp;coli, S.&nbsp;cerevisiae, C.&nbsp;elegans,</span>{" "}
            HEK293
          </p>
        </Squircle>

        {/* Neuro */}
        <Squircle
          className="neuro card"
          cornerRadius={20}
          borderWidth={1.5}
          cornerSmoothing={0.8}>
          <div className="card-header">
            {/* Photo */}
            <Squircle
              className="photo-outline neuro-outline"
              cornerRadius={20}
              borderWidth={1.5}
              cornerSmoothing={0.8}>
              <Squircle
                className="photo-squircle"
                cornerRadius={16}
                cornerSmoothing={0.8}>
                <img
                  src={brain}
                  alt="A photo of several coronal brain slices showing cortical and subcortical structures."
                  width="96"
                  height="96"
                  loading="lazy"
                />
              </Squircle>
            </Squircle>

            <h4>
              Learn <br />
              Neuroscience
            </h4>
          </div>

          <p>
            A collection of{" "}
            <a
              href="https://dvbl.notion.site/Learn-Neuroscience-66dc61f4f4de4003874f3aa9d27846a5"
              target="_blank"
              rel="noopener">
              resources
            </a>{" "}
            for learning about the brain, nervous system, and neurotechnology.
            Books, online courses, videos, subreddits, twitter accounts,
            podcasts, and newsletters.
          </p>
        </Squircle>

        {/* Red Cross */}
        <Squircle
          className="red-cross card"
          cornerRadius={20}
          borderWidth={1.5}
          cornerSmoothing={0.8}>
          <div className="card-header">
            {/* Photo */}
            <Squircle
              className="photo-outline red-outline"
              cornerRadius={20}
              borderWidth={1.5}
              cornerSmoothing={0.8}>
              <Squircle
                className="photo-squircle"
                cornerRadius={16}
                cornerSmoothing={0.8}>
                <img
                  src={redCross}
                  alt="A photo of an American Red Cross volunteer wearing a vest covered in handwritten thank-you messages and signatures on the back."
                  width="96"
                  height="96"
                  loading="lazy"
                />
              </Squircle>
            </Squircle>

            <h4>American Red Cross</h4>
          </div>

          <p>
            Our team of ~10 volunteers organized Community Blood Drives, made
            reusable pads for Tanzanian girls and women, and carried out a Home
            Fire Preparedness campaign.
          </p>
        </Squircle>

        {/* Award */}
        <Squircle
          className="award card"
          cornerRadius={20}
          borderWidth={1.5}
          cornerSmoothing={0.8}>
          <div className="card-header">
            {/* Photo */}
            <Squircle
              className="photo-outline red-outline heartbeat"
              cornerRadius={20}
              borderWidth={1.5}
              cornerSmoothing={0.8}>
              <Squircle
                className="photo-squircle"
                cornerRadius={16}
                cornerSmoothing={0.8}>
                <img
                  src={award}
                  alt="A photo of a realistic hard plastic heart model showing major arteries and veins."
                  width="96"
                  height="96"
                  loading="lazy"
                />
              </Squircle>
            </Squircle>

            <h4>Mark L. Morris, Jr. Award</h4>
          </div>

          <p>
            My award-winning project for an Entrepreneurship class (2015) was a
            business plan for a fictional company offering automated EKG
            interpretation using ML.
          </p>
        </Squircle>
        {/* bento grid end ↓ */}
      </div>
    </section>
  );
}

export default Biomed;
