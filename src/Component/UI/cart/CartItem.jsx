import React from "react";

import { ListGroupItem } from "reactstrap";
import productImg from "../../../assets/images/product_01.1.jpg";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../store/shopping-cart/cartSlice";

import "../../../Styles/cart-item.css";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import { createAction } from "@reduxjs/toolkit";
const CartItem = ({item}) => {
  
  const { id, title, price, image01, quantity  } = item;

     const dispatch = useDispatch()
     const increaseItem = ()=> {
        dispatch(cartAction.addItem({
          id,
          title,
          price,
          image01,
        }))
     }
   
     const decreaceItem =()=>{
      dispatch(cartAction.removeItem(id))
     }
     const deleteItem =()=>{
      dispatch(cartAction.deleteItem(id))
     }
  return (
    <ListGroupItem className="border-0 cart_item">
      <div className="cart_item-info d-flex gap-2">
        <img src={image01} alt="" />

        <div className="cart_product-info d-flex align-items-center gap-5 w-100 justify-content-between">
          <div>
            <h6 className="cart_product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart_products-price">
              {quantity}x <span>$ {price}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase_decrease-btn">
              <span className="increase_btn" onClick={increaseItem}>
              <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease_btn" onClick={decreaceItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete_btn" onClick={deleteItem}>
            <i className="ri-close-circle-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
