import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <main className="order-success-page">

      <div className="success-box">

        <div className="success-check">
          ✓
        </div>

        <p className="success-label">
          ORDER CONFIRMED
        </p>

        <h1>
          Thank you for shopping with Skin Edit.
        </h1>

        <p className="success-text">
          Your order has been placed successfully.
          Thank you for choosing Skin Edit.
        </p>


        <div className="success-buttons">

          <Link
            to="/orders"
            className="success-button primary"
          >
            View My Orders
          </Link>


          <Link
            to="/shop"
            className="success-button secondary"
          >
            Continue Shopping
          </Link>


          <Link
            to="/cart"
            className="view-cart-button"
          >
            View My Cart
          </Link>

        </div>

      </div>

    </main>
  );
}

export default OrderSuccess;