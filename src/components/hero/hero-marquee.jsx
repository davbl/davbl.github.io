import "./hero-marquee.css";

function HeroMarquee() {
  return (
    <div className="marquee-container">
      {/* Column 1 */}
      <div className="marquee-column">
        {/* Track 1 */}
        <div className="marquee-track">
          <div className="marquee-rectangle">1</div>
          <div className="marquee-rectangle">2</div>
          <div className="marquee-rectangle">3</div>
          <div className="marquee-rectangle">4</div>
        </div>

        {/* Track 2 */}
        <div className="marquee-track">
          <div className="marquee-rectangle">1</div>
          <div className="marquee-rectangle">2</div>
          <div className="marquee-rectangle">3</div>
          <div className="marquee-rectangle">4</div>
        </div>
        {/* Column 1 end */}
      </div>

      {/* Column 2 */}
      <div className="marquee-column">
        {/* Track 1 */}
        <div className="marquee-track reverse">
          <div className="marquee-rectangle">5</div>
          <div className="marquee-rectangle">6</div>
          <div className="marquee-rectangle">7</div>
          <div className="marquee-rectangle">8</div>
        </div>

        {/* Track 2 */}
        <div className="marquee-track reverse">
          <div className="marquee-rectangle">5</div>
          <div className="marquee-rectangle">6</div>
          <div className="marquee-rectangle">7</div>
          <div className="marquee-rectangle">8</div>
        </div>
        {/* Column 2 end */}
      </div>

      {/* Column 3 */}
      <div className="marquee-column ">
        {/* Track 1 */}
        <div className="marquee-track">
          <div className="marquee-rectangle">9</div>
          <div className="marquee-rectangle">10</div>
          <div className="marquee-rectangle">11</div>
          <div className="marquee-rectangle">12</div>
        </div>

        {/* Track 2 */}
        <div className="marquee-track">
          <div className="marquee-rectangle">9</div>
          <div className="marquee-rectangle">10</div>
          <div className="marquee-rectangle">11</div>
          <div className="marquee-rectangle">12</div>
        </div>
        {/* Column 3 end */}
      </div>
      {/* Container end */}
    </div>
  );
}

export default HeroMarquee;
