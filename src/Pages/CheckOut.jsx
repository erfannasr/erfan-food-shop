import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../Component/UI/common-section/CommonSection";
import Helmet from "../Component/Helmet/Helmet";
import "../Styles/checkout.css";
const CheckOut = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNember] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [enterCity, setenterCity] = useState("");
  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);
  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Addres</h6>{" "}
              <form className="checkout_form" onSubmit={submitHandler}>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form_group">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    required
                    onChange={(e) => setEnterNember(e.target.value)}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setenterCity(e.target.value)}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button className="AddToCart_button">Payment</button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout_bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal:<span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between">
                  Shipping:<span>${shippingCost}</span>
                </h6>
                <div className="checkout_total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total:<span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CheckOut;
