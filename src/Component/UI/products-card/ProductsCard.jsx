import React from "react";
import '../../../Styles/product-cart.css'
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartAction } from "../../../store/shopping-cart/cartSlice";
const ProductsCard = (props) => {

     
     const dispatch = useDispatch()
    const {id ,title, price, image01}= props.item;
     const addToCart =()=>{
      dispatch(cartAction.addItem({
        id,
        title,
        image01,
        price,
      }))
     }

  return (
    <div className="product_item">
      <div className="product_img">
        <img src={image01} alt="pppp" className="w-50" />
      </div>

      <div className="product_content">
         <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
         <div className="d-flex align-items-center justify-content-between">
            <span className="product_price"> ${price}</span>
            <button className="AddToCart_btn" onClick={addToCart}> Add to cart</button>
         </div>
      </div>
    </div>
  );
};

export default ProductsCard;
