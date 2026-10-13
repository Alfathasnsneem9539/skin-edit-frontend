import { Link } from "react-router-dom";

function Wishlist({
  wishlistItems,
  setWishlistItems,
  cartItems,
  setCartItems,
}) {
  const removeFromWishlist = (id) => {
    setWishlistItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const addToCart = (product) => {
    setCartItems((items) => {
      const existing = items.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...items,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <main className="wishlist-page">

      {/* HEADER */}
      <section className="wishlist-header">
        <p className="wishlist-small">
          YOUR WISHLIST
        </p>

        <h1>
          Things you love.
        </h1>

        <p className="wishlist-description">
          Your saved skincare essentials.
        </p>
      </section>


      {/* EMPTY WISHLIST */}
      {wishlistItems.length === 0 ? (

        <section className="empty-wishlist">

          <h2>
            Your wishlist is empty.
          </h2>

          <p>
            Save your favourite skincare products here.
          </p>

          <Link
            to="/shop"
            className="wishlist-shop-button"
          >
            Explore Skincare
          </Link>

        </section>

      ) : (

        /* WISHLIST PRODUCTS */
        <section className="wishlist-content">

          <div className="wishlist-grid">

            {wishlistItems.map((product) => (

              <article
                className="wishlist-card"
                key={product.id}
              >

                {/* IMAGE */}
                <div className="wishlist-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <button
                    className="wishlist-remove"
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    aria-label="Remove from wishlist"
                  >
                    ♥
                  </button>

                </div>


                {/* DETAILS */}
                <div className="wishlist-info">

                  <p className="wishlist-category">
                    {product.category}
                  </p>

                  <h2>
                    {product.name}
                  </h2>

                  <p className="wishlist-price">
                    ₹{product.price}
                  </p>

                  <button
                    className="wishlist-cart-button"
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    Add to Cart
                  </button>

                </div>

              </article>

            ))}

          </div>

        </section>

      )}

    </main>
  );
}

export default Wishlist;