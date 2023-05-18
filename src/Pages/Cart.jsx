import React from "react";
import CommonSection from "../Component/UI/common-section/CommonSection";
import Helmet from "../Component/Helmet/Helmet";
import "../Styles/cart-page.css";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import noadd from "../assets/images/NOADD.png";
import {cartAction} from '../store/shopping-cart/cartSlice' 
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount =useSelector(state => state.cart.totalAmount)
 
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">
                  Your Cart Is Empty <img src={noadd} alt="" className="w-25 " />{" "}
                </h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                     {
                        cartItems.map( item=> <Tr  item={item}  key={item.id}/>)
                     }
                  </tbody>
                </table>
              )}
              
                <div className="mt-4">
                    <h6>Subtitle: <span className="cart_subtotal">${totalAmount}</span></h6>
                    <p>Taxes and Shipping Will Calculate at Checkout</p>
                    <div className="cart_page-btn">
                        <button className="AddToCart_button me-4"> <Link to='/foods'>Continue Shopping</Link> </button>
                        <button className="AddToCart_button"> <Link to='/checkout'>Proceed to checkout</Link> </button>
                    </div>
                </div>
               
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const {  id,image01, title, price, quantity } = props.item;
  const  dispatch = useDispatch()
  
  const deleteItem = ()=>{
    dispatch(cartAction.deleteItem(id))
  }
  return (
    <tr>
      <td className="text-center cart_img-box" > <img src={image01} alt=""  /> </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart_item-delete " >
        <i className="ri-delete-bin-6-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};
export default Cart;
