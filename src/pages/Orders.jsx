import { Link } from "react-router-dom";
import "./Orders.css";

function Orders({ orders = [] }) {
  return (
    <main className="orders-page">

      {/* HEADER */}
      <section className="orders-header">

        <p className="orders-small">
          MY ACCOUNT
        </p>

        <h1>
          My Orders
        </h1>

        <p>
          View and manage your Skin Edit orders.
        </p>

      </section>


      {/* ORDERS */}
      {orders.length === 0 ? (

        <section className="orders-empty">

          <div className="orders-empty-icon">
            ✓
          </div>

          <p className="orders-empty-small">
            NO ORDERS YET
          </p>

          <h2>
            Your orders will appear here.
          </h2>

          <p>
            Once you place an order, you can view your
            order details and status here.
          </p>

          <Link
            to="/shop"
            className="orders-shop-button"
          >
            Start Shopping
          </Link>

        </section>

      ) : (

        <section className="orders-list">

          {orders.map((order) => (

            <article
              className="order-card"
              key={order.id}
            >

              {/* ORDER TOP */}
              <div className="order-top">

                <div>

                  <p className="order-label">
                    ORDER ID
                  </p>

                  <h2>
                    #{order.id}
                  </h2>

                </div>

                <span className="order-status">
                  {order.status}
                </span>

              </div>


              {/* DATE */}
              <div className="order-date">

                <span>
                  Order Date
                </span>

                <strong>
                  {order.date}
                </strong>

              </div>


              {/* PRODUCTS */}
              <div className="order-products">

                {order.items.map((item) => (

                  <div
                    className="order-product"
                    key={item.id}
                  >

                    <div className="order-product-image">

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                    </div>


                    <div className="order-product-details">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        Quantity: {item.quantity}
                      </p>

                    </div>


                    <strong className="order-product-price">
                      ₹{item.price * item.quantity}
                    </strong>

                  </div>

                ))}

              </div>


              {/* TOTAL */}
              <div className="order-bottom">

                <span>
                  Total
                </span>

                <strong>
                  ₹{order.total}
                </strong>

              </div>

            </article>

          ))}


          {/* CONTINUE SHOPPING */}
          <div className="orders-actions">

            <Link
              to="/shop"
              className="orders-continue-button"
            >
              Continue Shopping
            </Link>

          </div>

        </section>

      )}

    </main>
  );
}

export default Orders;