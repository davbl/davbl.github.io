import "./biomed.css";
import { Squircle } from "corner-smoothing";

function Biomed() {
  return (
    <section>
      <div className="heading">
        <h2>Biomedical</h2>
        <h3>The flip side</h3>
      </div>

      <div className="bio-bento">
        <Squircle
          cornerRadius={16}
          borderWidth={1.5}
          className="card techniques">
          <h4>Techniques</h4>
          <p>
            Gel electrophoresis, PCR, primer design, restriction digestion,
            restriction mapping, miniprep, bacterial transformation,
            electroporation, mammalian cell culture
          </p>
        </Squircle>

        <Squircle cornerRadius={16} borderWidth={1.5} className="card labs">
          <h4>Laboratories</h4>
          <p>
            Timmons Lab, University of Kansas
            <br />
            Open Science Network, Vancouver
          </p>
        </Squircle>

        <Squircle
          cornerRadius={16}
          borderWidth={1.5}
          className="card organisms">
          <h4>Organisms</h4>
          <p>E. coli, S. cerevisiae, C. elegans, HEK293</p>
        </Squircle>

        <Squircle cornerRadius={16} borderWidth={1.5} className="card neuro">
          <h4>Learn Neuroscience</h4>
          <p>
            A collection of resources for learning about the brain, nervous
            system, and neurotechnology. Books, online courses, videos,
            subreddits, twitter accounts, podcasts, and newsletters.
          </p>
        </Squircle>

        <Squircle
          cornerRadius={16}
          borderWidth={1.5}
          className="card red-cross">
          <h4>American Red Cross</h4>
          <p>
            Our team of ~10 volunteers organized Community Blood Drives, made
            reusable pads for Tanzanian girls and women, and carried out a Home
            Fire Preparedness campaign.
          </p>
        </Squircle>

        <Squircle cornerRadius={16} borderWidth={1.5} className="card award">
          <h4>Mark L. Morris, Jr. Award</h4>
          <p>
            My award-winning project for an Entrepreneurship class (2015) was a
            business plan for a fictional company offering automated EKG
            interpretation using ML.
          </p>
        </Squircle>
      </div>
    </section>
  );
}

export default Biomed;
