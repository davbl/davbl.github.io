import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>
        Software + <br />
        Biology
      </h1>

      <p>
        Hi, I’m Dave and I make software tools for biology and healthcare. I
        have senior experience in design, junior in software development, and
        training in molecular biology.
      </p>

      <div className="hero-details">
        <button>Origin story</button>

        <div className="fine-print">
          <span>☉</span>
          <p>
            Fine print: Only projects related to biology and healthcare are
            showcased on this site.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
