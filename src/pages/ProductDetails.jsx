import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails({
  cartItems,
  setCartItems,
  wishlistItems,
  setWishlistItems,
}) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  // If product doesn't exist
  if (!product) {
    return (
      <main className="product-not-found">

        <p className="product-small">
          PRODUCT NOT FOUND
        </p>

        <h1>
          Sorry, this product doesn't exist.
        </h1>

        <Link
          to="/shop"
          className="back-shop-button"
        >
          Back to Shop
        </Link>

      </main>
    );
  }


  // Check if product is already in cart
  const isInCart = cartItems.some(
    (item) => item.id === product.id
  );


  // Check if product is already in wishlist
  const isInWishlist = wishlistItems.some(
    (item) => item.id === product.id
  );


  // Add product to cart
  const handleAddToCart = () => {

    if (!isInCart) {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

  };


  // Add/remove product from wishlist
  const handleWishlist = () => {

    if (isInWishlist) {

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


  return (

    <main className="product-details-page">

      {/* BACK TO SHOP */}

      <div className="product-back">

        <Link to="/shop">
          ← Back to Shop
        </Link>

      </div>


      {/* PRODUCT DETAILS */}

      <section className="product-details">

        {/* PRODUCT IMAGE */}

        <div className="product-details-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>


        {/* PRODUCT INFORMATION */}

        <div className="product-details-content">

          <p className="product-category">
            {product.category}
          </p>

          <h1>
            {product.name}
          </h1>

          <p className="product-price">
            ₹{product.price}
          </p>


          <div className="product-description">

            <p>
              {product.description}
            </p>

          </div>


          {/* ACTION BUTTONS */}

          <div className="product-actions">

            <button
              className="add-cart-button"
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              {isInCart
                ? "Added to Cart"
                : "Add to Cart"}
            </button>


            <button
              className={`wishlist-button ${
                isInWishlist
                  ? "wishlist-active"
                  : ""
              }`}
              onClick={handleWishlist}
            >
              {isInWishlist
                ? "♥ In Wishlist"
                : "♡ Add to Wishlist"}
            </button>

          </div>


          {/* PRODUCT INFORMATION */}

          <div className="product-info">

            {/* HOW TO USE */}

            <div className="info-item">

              <span>
                HOW TO USE
              </span>

              <p>
                {product.howToUse}
              </p>

            </div>


            {/* RECOMMENDED AMOUNT */}

            <div className="info-item">

              <span>
                RECOMMENDED AMOUNT
              </span>

              <p>
                {product.recommendedAmount}
              </p>

            </div>


            {/* INGREDIENTS */}

            <div className="info-item">

              <span>
                INGREDIENTS
              </span>

              <p>
                {product.ingredients}
              </p>

            </div>


            {/* SUITABLE FOR */}

            <div className="info-item">

              <span>
                SUITABLE FOR
              </span>

              <p>
                {product.suitableFor}
              </p>

            </div>


            {/* ROUTINE STEP */}

            <div className="info-item">

              <span>
                ROUTINE
              </span>

              <p>
                {product.routineStep}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PRODUCT STORY */}

      <section className="product-story">

        <p className="product-small">
          SKIN EDIT ESSENTIAL
        </p>

        <h2>
          Simple products.
          <br />
          Thoughtful routines.
        </h2>

        <p>
          Every Skin Edit essential is designed to
          fit naturally into an uncomplicated
          everyday skincare routine.
        </p>

      </section>

    </main>

  );
}

export default ProductDetails;