import { Link, useNavigate } from "react-router-dom";

function Navbar({ cartItems, wishlistItems }) {

  const navigate = useNavigate();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlistItems.length;


  return (

    <nav className="navbar">

      <Link to="/" className="logo">
        SKIN EDIT
      </Link>


      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/shop">
          Shop
        </Link>

        <Link to="/about">
          About Us
        </Link>

        <Link to="/routine">
          Routine
        </Link>

      </div>


      <div className="nav-actions">

        {/* PROFILE */}

        <button
          className="profile-nav-button"
          onClick={() => navigate("/profile")}
          aria-label="Profile"
          title="Profile"
        >
          ♙
        </button>


        {/* WISHLIST */}

        <Link
          to="/wishlist"
          className="nav-icon"
        >

          ♡

          {wishlistCount > 0 && (
            <span className="nav-count">
              {wishlistCount}
            </span>
          )}

        </Link>


        {/* CART */}

        <Link
          to="/cart"
          className="nav-icon"
        >

          🛒

          {cartCount > 0 && (
            <span className="nav-count">
              {cartCount}
            </span>
          )}

        </Link>

      </div>

    </nav>

  );
}

export default Navbar;