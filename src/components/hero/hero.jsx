import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BadgeInfo } from "lucide-react";
// import { ScrollText, BadgeInfo } from "lucide-react";

import "./hero.css";
import HeroText from "../../assets/hero-text.svg";
import HeroMarquee from "./hero-marquee";

// Import images for Fundraising subpage - to preload them on hover
import { preloadImages } from "../../utils/preloadImages";
import buck from "../../pages/fundraising/img/buck.avif";
import campisi from "../../pages/fundraising/img/campisi.avif";

// Variable to track if hero-text reveal animation has run
let hasAnimated = false;

function Hero() {
  const handleFundraisingHover = () => {
    preloadImages([buck, campisi]);
  };

  // Keep track if hero-text reveal animation has run
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setAnimate(true);
      hasAnimated = true;
    }
  }, []);

  // Render
  return (
    <section className="hero-section">
      {/* Bg marquee */}
      <HeroMarquee />

      <div className="hero-mobile">
        {/* Hero svg */}
        <h1>
          <img
            src={HeroText}
            className={animate ? "reveal" : ""}
            alt="Software & Biology"
            loading="eager"
          />
        </h1>

        {/* Bigger text */}
        <div className="bigger-text">
          <p>
            Hi, I’m Dave – I design and develop software tools for biology and
            healthcare.
          </p>{" "}
          {/* Second paragraph */}
          <p>
            I’m trained in molecular biology and have experience with
            small-scale{" "}
            <Link
              to="/fundraising"
              className="link"
              onMouseEnter={handleFundraisingHover}>
              bioscience&nbsp;fundraising
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Small text */}
      <div className="small-text-container">
        {/* Origin story */}
        {/* <Link to="/origin" className="small-text story">
          <ScrollText size={14} strokeWidth={2} />
          <p>Origin story</p>
        </Link> */}

        {/* Fine print */}
        <div className="small-text">
          <p>
            <BadgeInfo size={14} strokeWidth={2} className="icon" />
            Fine print: Only projects related to bio & health are showcased on
            the site.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
