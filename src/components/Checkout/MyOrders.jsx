import React, { useState, useEffect } from "react";
import getMyOrders from "../../hooks/getMyOrders";
import { useCart } from "../../context/CartProvider";
import classes from "./myorders.module.css";
import TimeAgo from "javascript-time-ago";
import { useAuth } from "../../context/AuthProvider";
// English.
import en from "javascript-time-ago/locale/en";
import Skeleton from "react-loading-skeleton";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  let checkEmptyCart = new URLSearchParams(window.location.search).get(
    "emptyCart"
  );
  const { user } = useAuth();
  let { emptyCart } = useCart();

  useEffect(() => {
    // Simulate a GET request to /api/orders/my
    (async () => {
      setOrders([]);
      let orders = await getMyOrders();
      if (!orders) return setLoading(false);
      setLoading(false);
      setOrders(orders);
    })(); //
    if (checkEmptyCart != null) {
      emptyCart();
    }
  }, [user]);

  return (
    <div>
      <h1>My Orders</h1>
      {loading ? (
        <p className={classes.skeletonContainer}>
          <Skeleton height={100} count={5} />
        </p>
      ) : (
        <div>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <ul className={classes.container}>
              {orders.map((order) => (
                <li key={order.orderId} className={classes.orderContainer}>
                  <p className={classes.order_status}>
                    {order.completed ? "✅" : "❌"}
                  </p>
                  <div className={classes.order_info}>
                    <p>
                      Order Created At:{" "}
                      {timeAgo.format(new Date(order.createdAt))}
                    </p>
                    <p>Shipping Address: {order.shippingAddress}</p>
                    <p>
                      Paid Amount: <b>{order.paidAmount / 100}</b> $
                    </p>

                    <h3>Items:</h3>
                    <ul>
                      {order.basket.map((item, index) => (
                        <li key={index}>
                          <p>
                            {item.quantity} X{" "}
                            {item.price_data.product_data.name.split("_")[0]}
                            <b>
                              {" "}
                              Total:{" "}
                              {(item.quantity * item.price_data.unit_amount) /
                                100}{" "}
                              $
                            </b>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
