import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Shop({
  cartItems,
  setCartItems,
  wishlistItems,
  setWishlistItems,
}) {
  return (
    <main className="shop-page">

      {/* SHOP HEADER */}
      <section className="shop-header">
        <p className="shop-small">SHOP SKIN EDIT</p>

        <h1>Skincare essentials.</h1>

        <p className="shop-description">
          Explore our carefully selected skincare essentials.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="shop-content">
        <div className="shop-product-grid">

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

    </main>
  );
}

export default Shop;