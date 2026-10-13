import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home({
  cartItems,
  setCartItems,
  wishlistItems,
  setWishlistItems,
}) {
  return (
    <main className="home">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            SKINCARE, SIMPLIFIED
          </p>

          <h1>
            Your skin.
            <br />
            Edited simply.
          </h1>

          <p className="hero-description">
            Thoughtfully designed skincare essentials
            for your everyday routine.
          </p>

          <Link
            to="/shop"
            className="shop-button"
          >
            Shop Skincare
          </Link>

        </div>


        {/* HERO IMAGE */}

        <div className="hero-image">

          <img
            src="/images/hero-home.png"
            alt="Skin Edit skincare collection"
          />

        </div>

      </section>


      {/* =====================================================
          FEATURED PRODUCTS
      ===================================================== */}

      <section className="featured-products">

        <div className="section-heading">

          <p>
            OUR ESSENTIALS
          </p>

          <h2>
            Skincare, edited for you.
          </h2>

        </div>


        <div className="product-grid">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}

              cartItems={cartItems}
              setCartItems={setCartItems}

              wishlistItems={wishlistItems}
              setWishlistItems={setWishlistItems}
            />

          ))}

        </div>

      </section>


      {/* =====================================================
          WHY SKIN EDIT
      ===================================================== */}

      <section className="why-skin-edit">

        <div className="section-heading">

          <p>
            WHY SKIN EDIT
          </p>

          <h2>
            Simple skincare. Thoughtfully made.
          </h2>

        </div>


        <div className="benefits">

          <div className="benefit">

            <span>01</span>

            <h3>
              Simple Routine
            </h3>

            <p>
              Effective essentials designed to keep
              your everyday skincare routine simple.
            </p>

          </div>


          <div className="benefit">

            <span>02</span>

            <h3>
              Thoughtful Care
            </h3>

            <p>
              Carefully selected ingredients made for
              comfortable everyday skincare.
            </p>

          </div>


          <div className="benefit">

            <span>03</span>

            <h3>
              Everyday Essentials
            </h3>

            <p>
              Easy-to-use products created to fit
              naturally into your daily routine.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          YOUR ROUTINE
      ===================================================== */}

      <section className="routine-preview">

        <div className="routine-content">

          <p className="routine-small">
            YOUR ROUTINE
          </p>

          <h2>
            Build a routine
            <br />
            that works for you.
          </h2>

          <p>
            Discover a simple step-by-step skincare
            routine and learn how to use your Skin Edit
            essentials in the right order.
          </p>

          <Link
            to="/routine"
            className="routine-button"
          >
            Explore Routine
          </Link>

        </div>


        <div className="routine-steps">

          <div className="routine-step">
            <span>01</span>

            <h3>
              Cleanse
            </h3>

            <p>
              Start with a gentle cleanser.
            </p>
          </div>


          <div className="routine-step">
            <span>02</span>

            <h3>
              Tone
            </h3>

            <p>
              Refresh and prep your skin.
            </p>
          </div>


          <div className="routine-step">
            <span>03</span>

            <h3>
              Treat
            </h3>

            <p>
              Add your serum to the routine.
            </p>
          </div>


          <div className="routine-step">
            <span>04</span>

            <h3>
              Moisturize
            </h3>

            <p>
              Keep your skin comfortable and hydrated.
            </p>
          </div>


          <div className="routine-step">
            <span>05</span>

            <h3>
              Protect
            </h3>

            <p>
              Finish with daily SPF.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          SKINCARE TIPS
      ===================================================== */}

      <section className="skincare-tips">

        <div className="section-heading">

          <p>
            SKINCARE TIPS
          </p>

          <h2>
            Little changes, better routines.
          </h2>

        </div>


        <div className="tips-grid">

          <article className="tip-card">

            <span>01</span>

            <h3>
              Keep it simple
            </h3>

            <p>
              A consistent routine with a few useful
              products can be easier to maintain.
            </p>

          </article>


          <article className="tip-card">

            <span>02</span>

            <h3>
              Layer thoughtfully
            </h3>

            <p>
              Apply lightweight skincare products before
              heavier creams and finish your morning
              routine with sunscreen.
            </p>

          </article>


          <article className="tip-card">

            <span>03</span>

            <h3>
              Stay consistent
            </h3>

            <p>
              Give your routine time and focus on using
              your products consistently.
            </p>

          </article>

        </div>

      </section>

    </main>
  );
}

export default Home;