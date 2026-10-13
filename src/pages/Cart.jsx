import { Link, useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 0 : 0;

  const total = subtotal + delivery;

  return (
    <main className="cart-page">

      {/* HEADER */}
      <section className="cart-header">
        <p className="cart-small">YOUR CART</p>

        <h1>Your skincare essentials.</h1>

        <p>
          Review your selected products before checkout.
        </p>
      </section>


      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <section className="empty-cart">

          <h2>Your cart is empty.</h2>

          <p>
            Add your favourite Skin Edit essentials to your cart.
          </p>

          <Link
            to="/shop"
            className="continue-shopping-button"
          >
            Continue Shopping
          </Link>

        </section>
      ) : (

        <section className="cart-content">

          {/* CART ITEMS */}
          <div className="cart-items">

            {cartItems.map((item) => (

              <article
                className="cart-item"
                key={item.id}
              >

                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>


                <div className="cart-item-details">

                  <p className="cart-item-category">
                    {item.category}
                  </p>

                  <h2>{item.name}</h2>

                  <p className="cart-item-price">
                    ₹{item.price}
                  </p>


                  {/* QUANTITY */}
                  <div className="quantity-row">

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, -1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, 1)
                      }
                    >
                      +
                    </button>

                  </div>


                  {/* REMOVE */}
                  <button
                    type="button"
                    className="remove-button"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </article>

            ))}

          </div>


          {/* ORDER SUMMARY */}
          <aside className="order-summary">

            <p className="summary-small">
              ORDER SUMMARY
            </p>

            <h2>Cart Total</h2>


            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>


            <div className="summary-row">
              <span>Delivery</span>
              <span>Free</span>
            </div>


            <div className="summary-total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>


            {/* PROCEED TO CHECKOUT */}
            <button
              type="button"
              className="checkout-button"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>


            {/* CONTINUE SHOPPING */}
            <Link
              to="/shop"
              className="continue-shopping"
            >
              Continue Shopping
            </Link>

          </aside>

        </section>

      )}

    </main>
  );
}

export default Cart;