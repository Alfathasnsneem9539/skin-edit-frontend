import { Link } from "react-router-dom";

function ProductCard({
  product,
  cartItems,
  setCartItems,
  wishlistItems,
  setWishlistItems,
}) {

  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const existingProduct = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };


  // =========================
  // WISHLIST
  // =========================

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const alreadyInWishlist = wishlistItems.some(
      (item) => item.id === product.id
    );

    if (alreadyInWishlist) {
      setWishlistItems(
        wishlistItems.filter(
          (item) => item.id !== product.id
        )
      );
    } else {
      setWishlistItems([
        ...wishlistItems,
        product,
      ]);
    }
  };


  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );


  return (

    <div className="product-card">

      {/* PRODUCT IMAGE + DETAILS LINK */}

      <Link
        to={`/product/${product.id}`}
        className="product-card-link"
      >

        <div className="product-image-container">

          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

        </div>

      </Link>


      {/* PRODUCT INFORMATION */}

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>


        {/* Product name is NOT a link */}

        <h3 className="product-name">
          {product.name}
        </h3>


        <p className="product-price">
          ₹{product.price}
        </p>


        {/* ACTIONS */}

        <div className="product-actions">

          <button
            className="add-cart-button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>


          <button
            className={`wishlist-button ${
              isWishlisted ? "active" : ""
            }`}
            onClick={handleWishlist}
            aria-label="Add to wishlist"
          >
            {isWishlisted ? "♥" : "♡"}
          </button>

        </div>

      </div>

    </div>

  );
}

export default ProductCard;