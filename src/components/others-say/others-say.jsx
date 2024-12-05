import { Squircle } from "corner-smoothing";
import "./others-say.css";
import derick from "./img/derick.png";
import steve from "./img/steve.png";
import { SquareArrowUpRight } from "lucide-react";

function OthersSay() {
  return (
    <section>
      {/* Section heading */}
      <div>
        <h2>What others say</h2>
        <h3 className="h3-others-say">Competence sparks joy</h3>
      </div>

      {/* Quotes container */}
      <div className="quotes-container">
        {/* DERICK */}
        <Squircle
          className="derick-card quote-card"
          cornerRadius={20}
          cornerSmoothing={0.8}>
          <blockquote>
            <p>
              David is a great asset on a team. One of the things I admire most
              about him is his never-ending quest for knowledge. He is a life
              long learner and is incredibly self-motivated. He is constantly
              asking why, which is the exact mindset you want in a valuable
              designer. Although I worked with David in a design capacity, I
              have no doubt he will succeed at whatever he puts his mind to.
            </p>
            <p>
              At Mycroft, he grew to become a leader in UX design. His constant
              push to improve the quality of the product was a positive
              influence at Mycroft. David was involved in the UX of our voice
              user interface, the complex account management for our product,
              the presentation website for Mycroft AI, pitch decks, packaging,
              promotional material and much more. He has a great understanding
              of user-centered design, clean visual design, and a knack for good
              typography.
            </p>
            <p>
              On top of all this, David has a great personality, is always
              positive, and has a solid work ethic. I highly recommend
              David.&quot; ■
            </p>
          </blockquote>

          {/* Person info */}
          <div className="person-info">
            {/* Photo */}
            <Squircle
              className="photo-derick"
              cornerRadius={20}
              borderWidth={1.5}
              cornerSmoothing={0.8}>
              <Squircle cornerRadius={16} cornerSmoothing={0.8}>
                <img
                  src={derick}
                  alt="Portrait photo of Derick Schweppe."
                  width="96"
                  height="96"
                />
              </Squircle>
            </Squircle>

            {/* Text */}
            <div>
              <a
                href="https://www.linkedin.com/in/derick-schweppe-62581231/"
                target="_blank">
                <div className="name-and-icon">
                  <h5>Derick Schweppe</h5>
                  <SquareArrowUpRight
                    size={16.5}
                    strokeWidth={2}
                    className="icon"
                  />
                </div>
              </a>

              <p>
                Lead Product Designer
                <br />
                Garmin
              </p>
            </div>
          </div>
        </Squircle>

        {/* STEVE */}
        <Squircle
          className="steve-card quote-card"
          cornerRadius={20}
          cornerSmoothing={0.8}>
          <blockquote>
            <p>
              David has a combination of talents, including strong aesthetic
              sensibilities, the ability to view the work through the eyes of a
              user, and artistic talent that combine with his raw intelligence
              and natural curiosity to produce outstanding and beautiful
              user-centric work. And by user I mean in the broadest sense – the
              product could be a physical device, a website or a pitch deck for
              investors. All come out looking and feeling professional and well
              thought out.
            </p>
            <p>
              David also has an innate desire to understand the &quot;why&quot;
              behind whatever he is doing. This reflects the deep level of
              caring he has for his work and drives others to challenge their
              assumptions. Undoubtedly, any product or project will be better
              with his involvement.
            </p>
            <p>
              Finally, his work ethic is strong. He will always get the job done
              and done right. I whole-heartedly recommend David to anyone
              considering him for their organization!&quot; ■
            </p>
          </blockquote>

          {/* Person info */}

          <div className="person-info">
            {/* Photo */}
            <Squircle
              className="photo-steve"
              cornerRadius={20}
              borderWidth={1.5}
              cornerSmoothing={0.8}>
              <Squircle cornerRadius={16} cornerSmoothing={0.8}>
                <img
                  src={steve}
                  alt="Portrait photo of Steve Penrod."
                  width="96"
                  height="96"
                />
              </Squircle>
            </Squircle>

            {/* Text */}
            <div>
              <a
                href="https://www.linkedin.com/in/steve-penrod-60b1813/"
                target="_blank">
                <div className="name-and-icon">
                  <h5>Steve Penrod</h5>
                  <SquareArrowUpRight
                    size={16.5}
                    strokeWidth={2}
                    className="icon"
                  />
                </div>
              </a>

              <p>
                Sr. Director of Product Development
                <br />
                TripleBlind
              </p>
            </div>
          </div>
        </Squircle>
      </div>
    </section>
  );
}

export default OthersSay;
