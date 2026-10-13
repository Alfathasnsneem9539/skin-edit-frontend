import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout({ cartItems, setCartItems, addOrder }) {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );

  const shipping = subtotal > 0 ? 50 : 0;

  const total = subtotal + shipping;


  const handleSubmit = (e) => {
    e.preventDefault();

    // CREATE NEW ORDER
    const newOrder = {
      id: `SE${Date.now()}`,

      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),

      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
        image: item.image,
      })),

      subtotal: subtotal,

      shipping: shipping,

      total: total,

      status: "Placed",
    };


    // SAVE ORDER
    addOrder(newOrder);


    // CLEAR CART
    setCartItems([]);


    // GO TO SUCCESS PAGE
    navigate("/order-success");
  };


  return (
    <main className="checkout-page">

      <div className="checkout-container">

        {/* HEADER */}

        <div className="checkout-header">

          <p className="checkout-small">
            CHECKOUT
          </p>

          <h1>
            Complete your order
          </h1>

          <p>
            Enter your details and review your order
            before placing it.
          </p>

        </div>


        {/* EMPTY CART */}

        {cartItems.length === 0 ? (

          <div className="checkout-empty">

            <h2>
              Your cart is empty
            </h2>

            <p>
              Add some products before proceeding to checkout.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="checkout-shop-button"
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          <div className="checkout-content">

            {/* CUSTOMER DETAILS */}

            <form
              className="checkout-form"
              onSubmit={handleSubmit}
            >

              <div className="checkout-section">

                <p className="checkout-section-small">
                  01 — DELIVERY INFORMATION
                </p>

                <h2>
                  Your details
                </h2>


                <div className="checkout-fields">

                  <div className="checkout-field">

                    <label>
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />

                  </div>


                  <div className="checkout-field">

                    <label>
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                    />

                  </div>


                  <div className="checkout-field">

                    <label>
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />

                  </div>


                  <div className="checkout-field">

                    <label>
                      Address
                    </label>

                    <textarea
                      placeholder="Enter your delivery address"
                      rows="4"
                      required
                    ></textarea>

                  </div>


                  <div className="checkout-row">

                    <div className="checkout-field">

                      <label>
                        City
                      </label>

                      <input
                        type="text"
                        placeholder="City"
                        required
                      />

                    </div>


                    <div className="checkout-field">

                      <label>
                        Pincode
                      </label>

                      <input
                        type="text"
                        placeholder="Pincode"
                        required
                      />

                    </div>

                  </div>

                </div>

              </div>


              {/* PAYMENT */}

              <div className="checkout-section">

                <p className="checkout-section-small">
                  02 — PAYMENT
                </p>

                <h2>
                  Payment method
                </h2>


                <div className="payment-option">

                  <input
                    type="radio"
                    id="cod"
                    name="payment"
                    value="cod"
                    defaultChecked
                  />

                  <label htmlFor="cod">

                    <strong>
                      Cash on Delivery
                    </strong>

                    <span>
                      Pay when your order arrives.
                    </span>

                  </label>

                </div>


                <div className="payment-option">

                  <input
                    type="radio"
                    id="test-payment"
                    name="payment"
                    value="test"
                  />

                  <label htmlFor="test-payment">

                    <strong>
                      Test Payment
                    </strong>

                    <span>
                      Sandbox payment for development.
                    </span>

                  </label>

                </div>

              </div>


              {/* PLACE ORDER */}

              <button
                type="submit"
                className="place-order-button"
              >
                Place Order — ₹{total}
              </button>

            </form>


            {/* ORDER SUMMARY */}

            <aside className="checkout-summary">

              <p className="checkout-section-small">
                YOUR ORDER
              </p>

              <h2>
                Order Summary
              </h2>


              <div className="checkout-products">

                {cartItems.map((item) => (

                  <div
                    className="checkout-product"
                    key={item.id}
                  >

                    <div className="checkout-product-image">

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                    </div>


                    <div className="checkout-product-info">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        Qty: {item.quantity || 1}
                      </p>

                      <span>
                        ₹
                        {item.price *
                          (item.quantity || 1)}
                      </span>

                    </div>

                  </div>

                ))}

              </div>


              <div className="checkout-summary-row">

                <span>
                  Subtotal
                </span>

                <span>
                  ₹{subtotal}
                </span>

              </div>


              <div className="checkout-summary-row">

                <span>
                  Shipping
                </span>

                <span>
                  ₹{shipping}
                </span>

              </div>


              <div className="checkout-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{total}
                </strong>

              </div>


              <button
                type="button"
                className="back-to-cart"
                onClick={() => navigate("/cart")}
              >
                ← Back to Cart
              </button>

            </aside>

          </div>

        )}

      </div>

    </main>
  );
}

export default Checkout;