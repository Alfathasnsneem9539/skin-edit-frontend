import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>SKIN EDIT</h2>

          <p>
            Simple skincare essentials,
            thoughtfully made for everyday care.
          </p>
        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Us</Link>
          <Link to="/routine">Routine</Link>
        </div>


        {/* CUSTOMER CARE */}
        <div className="footer-column">
          <h3>CUSTOMER CARE</h3>

          <Link to="/shop">Skincare</Link>
          <Link to="/routine">Our Routine</Link>
          <Link to="/about">About Skin Edit</Link>
        </div>


        {/* CONNECT */}
        <div className="footer-column">
          <h3>CONNECT</h3>

          <p>Instagram</p>
          <p>Email</p>
          <p>Contact Us</p>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Skin Edit. All rights reserved.
        </p>

        <p>
          Skincare, simplified.
        </p>

      </div>

    </footer>
  );
}

export default Footer;