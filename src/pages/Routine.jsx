import products from "../data/products";
import "./Routine.css";

function Routine() {
  const getProduct = (category) =>
    products.find((product) => product.category === category);

  const morningRoutine = [
    {
      step: "01",
      title: "Cleanse",
      description:
        "Wet your face, use 1–2 pumps of cleanser and gently massage over the face. Rinse thoroughly and pat dry.",
      amount: "1–2 pumps",
      product: getProduct("Cleanser"),
    },
    {
      step: "02",
      title: "Tone",
      description:
        "Apply 4–5 drops of toner to clean skin using your palms or fingertips. Gently press into the skin.",
      amount: "4–5 drops",
      product: getProduct("Toner"),
    },
    {
      step: "03",
      title: "Treat",
      description:
        "Apply 2–3 drops of Vitamin C serum to your face and neck. Gently spread until absorbed.",
      amount: "2–3 drops",
      product: getProduct("Serum"),
    },
    {
      step: "04",
      title: "Moisturize",
      description:
        "Apply 1–2 pumps of moisturizer evenly over your face and neck to keep the skin hydrated.",
      amount: "1–2 pumps",
      product: getProduct("Moisturizer"),
    },
    {
      step: "05",
      title: "Protect",
      description:
        "Apply sunscreen generously as the final morning skincare step. Reapply when needed, especially after sweating or outdoor activities.",
      amount: "2-finger amount",
      product: getProduct("Sunscreen"),
    },
  ];

  const eveningRoutine = [
    {
      step: "01",
      title: "Cleanse",
      description:
        "Use 1–2 pumps of cleanser on damp skin. Gently massage your face and rinse thoroughly.",
      amount: "1–2 pumps",
      product: getProduct("Cleanser"),
    },
    {
      step: "02",
      title: "Tone",
      description:
        "Apply 4–5 drops of toner to clean skin. Gently press it into your face and allow it to settle.",
      amount: "4–5 drops",
      product: getProduct("Toner"),
    },
    {
      step: "03",
      title: "Treat",
      description:
        "Apply 2–3 drops of Vitamin C serum evenly over your face and neck.",
      amount: "2–3 drops",
      product: getProduct("Serum"),
    },
    {
      step: "04",
      title: "Moisturize",
      description:
        "Finish your skincare routine with 1–2 pumps of moisturizer. Apply evenly to face and neck.",
      amount: "1–2 pumps",
      product: getProduct("Moisturizer"),
    },
    {
      step: "05",
      title: "Lip Care",
      description:
        "Apply a thin layer of lip balm directly to your lips. Reapply whenever your lips feel dry.",
      amount: "1–2 swipes",
      product: getProduct("Lip Care"),
    },
  ];

  const RoutineCard = ({ item }) => {
    if (!item.product) return null;

    return (
      <article className="routine-card">

        {/* PRODUCT IMAGE */}
        <div className="routine-card-image">
          <img
            src={item.product.image}
            alt={item.product.name}
          />
        </div>

        {/* STEP NUMBER */}
        <div className="routine-card-number">
          {item.step}
        </div>

        {/* PRODUCT DETAILS */}
        <div className="routine-card-content">

          <p className="routine-card-step">
            STEP {item.step}
          </p>

          <h3>{item.title}</h3>

          <p className="routine-product-name">
            {item.product.name}
          </p>

          <p className="routine-card-description">
            {item.description}
          </p>

          <div className="routine-usage">
            <div className="usage-item">
              <span className="usage-label">AMOUNT</span>
              <span className="usage-value">
                {item.amount}
              </span>
            </div>

            <div className="usage-item">
              <span className="usage-label">USE</span>
              <span className="usage-value">
                {item.title}
              </span>
            </div>
          </div>

        </div>

      </article>
    );
  };

  return (
    <main className="routine-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="routine-hero">

        <p className="routine-small">
          YOUR ROUTINE
        </p>

        <h1>
          A simple routine.
          <br />
          Thoughtfully edited.
        </h1>

        <p className="routine-hero-description">
          A simple step-by-step guide to using your
          Skin Edit essentials in the right order.
        </p>

      </section>


      {/* =====================================================
          MORNING
      ===================================================== */}

      <section className="routine-section morning-section">

        <div className="routine-section-header">

          <div>
            <p className="routine-label">
              01 — MORNING ROUTINE
            </p>

            <h2>
              Start your day simply.
            </h2>
          </div>

          <p>
            Cleanse, refresh, treat, hydrate and protect
            your skin with five simple steps.
          </p>

        </div>


        <div className="routine-list">

          {morningRoutine.map((item) => (
            <RoutineCard
              key={`morning-${item.step}`}
              item={item}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          EVENING
      ===================================================== */}

      <section className="routine-section evening-section">

        <div className="routine-section-header">

          <div>
            <p className="routine-label">
              02 — EVENING ROUTINE
            </p>

            <h2>
              Wind down your routine.
            </h2>
          </div>

          <p>
            Keep your evening skincare simple with
            gentle cleansing, hydration and lip care.
          </p>

        </div>


        <div className="routine-list">

          {eveningRoutine.map((item) => (
            <RoutineCard
              key={`evening-${item.step}`}
              item={item}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          ROUTINE GUIDE
      ===================================================== */}

      <section className="routine-guide">

        <p className="routine-small">
          THE SKIN EDIT WAY
        </p>

        <h2>
          Keep your routine simple.
        </h2>

        <p>
          Start with lighter skincare steps and finish
          with products that moisturize or protect the skin.
          Consistency is key to maintaining a routine.
        </p>

      </section>

    </main>
  );
}

export default Routine;