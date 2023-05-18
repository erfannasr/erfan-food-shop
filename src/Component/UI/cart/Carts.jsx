import React from "react";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import NOADD from "../../../assets/images/NOADD.png";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice.js";
import "../../../Styles/shopping-cart.css";
const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart_container">
      <ListGroup className="cart">
        <div className="cart_close">
          <span onClick={toggleCart}>
            <i className="ri-close-line"></i>
          </span>
        </div>
        <div className="cart_item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center">
              <img src={NOADD} alt="" className="w-50" />
              No item added to the cart
            </h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} onClose={toggleCart} />
            ))
          )}
        </div>
        <div className="cart_bottom d-flex align-items-center justify-content-between">
          <h6>
            subtitle :$<span>{totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout">Checkout</Link>{" "}
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
