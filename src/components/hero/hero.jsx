import "./hero.css";
import { ScrollText } from "lucide-react";
// import { BadgeInfo } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <h1>
        Software + <br />
        Biology
      </h1>

      <p>
        Hi, I’m Dave – I design and develop software tools for biology and
        healthcare. I’m trained in molecular biology and have experience with
        small-scale bioscience fundraising.
      </p>

      <div className="btn-and-fine-print">
        <button>
          <ScrollText size={15} strokeWidth={2} />
          Origin story
        </button>

        <div className="fine-print">
          {/* <span>☉</span> */}
          {/* <BadgeInfo size={15} strokeWidth={2} className="icon" /> */}
          <p>
            Fine print: Only projects related to bio & health are showcased on
            the site. Most have been of lower complexity so far.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
