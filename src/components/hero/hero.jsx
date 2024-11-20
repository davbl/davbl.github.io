import { Link } from "react-router-dom";
import { ScrollText } from "lucide-react";

import HeroMarquee from "./hero-marquee";
import "./hero.css";
import HeroText from "../../assets/hero-text.svg";

function Hero() {
  return (
    <section className="hero">
      <HeroMarquee />

      <h1>
        <img src={HeroText} alt="Software & Biology" />
      </h1>

      <p>
        Hi, I’m Dave – I design and develop software tools for biology and
        healthcare. I’m trained in molecular biology and have experience with
        small-scale{" "}
        <Link to="/fundraising" className="link">
          bioscience fundraising
        </Link>
        .
      </p>

      <div className="btn-and-fine-print">
        <Link to="/origin">
          <button>
            <ScrollText size={15} strokeWidth={2} />
            Origin story
          </button>
        </Link>

        <div className="fine-print">
          {/* <span>☉</span> */}
          {/* <BadgeInfo size={15} strokeWidth={2} className="icon" /> */}
          <p>
            Fine print: Only projects related to bio & health are showcased on
            the site.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
