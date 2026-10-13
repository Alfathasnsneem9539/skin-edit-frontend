import React from "react";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-small">
            ABOUT SKIN EDIT
          </p>

          <h1>
            Skincare,
            <br />
            thoughtfully edited.
          </h1>

          <p className="about-hero-description">
            Skin Edit is built around one simple idea:
            skincare should feel easy, thoughtful, and
            comfortable to use every day.
          </p>

        </div>

        <div className="about-hero-image">
          <img
            src="/images/about-hero.png"
            alt="Skin Edit skincare collection"
          />
        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="about-story">

        <div className="about-section-label">

          <span>01</span>

          <p>
            OUR STORY
          </p>

        </div>

        <div className="about-story-main">

          {/* IMAGE — LEFT */}

          <div className="about-story-image">

            <img
              src="/images/our-story.png"
              alt="Skin Edit skincare collection"
            />

          </div>


          {/* CONTENT — RIGHT */}

          <div className="about-story-content">

            <h2>
              Less confusion.
              <br />
              More thoughtful care.
            </h2>

            <p>
              We created Skin Edit with a simple purpose:
              to make everyday skincare easier to understand
              and easier to follow.
            </p>

            <p>
              Instead of overwhelming your routine with
              unnecessary steps, we focus on carefully selected
              essentials that fit naturally into everyday life.
            </p>

            <p>
              From cleansing and toning to treating,
              moisturizing, and protecting, every step has
              a place in a simple routine.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="about-philosophy">

        <div className="about-philosophy-header">

          <p className="about-small">
            OUR PHILOSOPHY
          </p>

          <h2>
            Simple principles.
            <br />
            Thoughtful skincare.
          </h2>

        </div>

        <div className="philosophy-grid">

          <div className="philosophy-card">

            <span>01</span>

            <h3>
              Keep It Simple
            </h3>

            <p>
              We believe an effective skincare routine
              does not need to feel complicated.
            </p>

          </div>

          <div className="philosophy-card">

            <span>02</span>

            <h3>
              Choose Thoughtfully
            </h3>

            <p>
              Every essential is designed to have a
              meaningful place in your everyday routine.
            </p>

          </div>

          <div className="philosophy-card">

            <span>03</span>

            <h3>
              Stay Consistent
            </h3>

            <p>
              Good skincare is about building simple
              habits that you can comfortably maintain.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY SKIN EDIT
      ===================================================== */}

      <section className="about-why">

        {/* IMAGE — LEFT */}

        <div className="about-why-image">

          <img
            src="/images/why-skin-edit.png"
            alt="Skin Edit skincare essentials"
          />

        </div>


        {/* CONTENT — RIGHT */}

        <div className="about-why-content">

          <p className="about-small">
            WHY SKIN EDIT
          </p>

          <h2>
            Your routine,
            <br />
            without the clutter.
          </h2>

          <p className="about-why-description">
            Skin Edit brings your everyday skincare
            essentials together in one simple routine.
            Each product is designed to work naturally
            within your daily skincare steps.
          </p>

          <div className="about-features">

            <div className="about-feature">

              <span>01</span>

              <div>
                <h3>
                  Everyday Essentials
                </h3>

                <p>
                  Simple products made for everyday use.
                </p>
              </div>

            </div>

            <div className="about-feature">

              <span>02</span>

              <div>
                <h3>
                  Easy to Follow
                </h3>

                <p>
                  Clear steps that make your routine easier.
                </p>
              </div>

            </div>

            <div className="about-feature">

              <span>03</span>

              <div>
                <h3>
                  Thoughtfully Selected
                </h3>

                <p>
                  Essentials chosen to fit naturally together.
                </p>
              </div>

            </div>

            <div className="about-feature">

              <span>04</span>

              <div>
                <h3>
                  Made for Your Routine
                </h3>

                <p>
                  Skincare that fits into everyday life.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR PROMISE
      ===================================================== */}

      <section className="about-promise">

        <div className="about-promise-content">

          <p className="about-small">
            OUR PROMISE
          </p>

          <h2>
            Skincare should
            <br />
            feel simple.
          </h2>

          <p>
            We want Skin Edit to make your skincare routine
            feel clear, comfortable, and easy to maintain.
            No unnecessary complexity — just thoughtful
            everyday essentials.
          </p>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <p className="about-small">
          YOUR SKINCARE ROUTINE
        </p>

        <h2>
          Ready to edit
          <br />
          your routine?
        </h2>

        <a
          href="/shop"
          className="about-cta-button"
        >
          Shop Skincare
        </a>

      </section>

    </main>
  );
}

export default About;