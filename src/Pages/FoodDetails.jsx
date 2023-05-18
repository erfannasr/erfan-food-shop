import React, { useState, useEffect } from "react";
import { useFetcher, useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";

// Component
import Helmet from "../Component/Helmet/Helmet";
import CommonSection from "../Component/UI/common-section/CommonSection";
import products from "../assets/fake-data/products";
import ProductCart from "../Component/UI/products-card/ProductsCard";
import { cartAction } from "../store/shopping-cart/cartSlice";
// Styles
import "../Styles/product-details.css";

const FoodDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [tab, setTab] = useState("desc");
  const [perviewImg, setPerviewImg] = useState(product.image01);

  const [enteredName ,setEnteredName]= useState('')
  const [enteredEmail, setEntereEmail]= useState('')
  const [reviewMsg , setRiviewMsg] =useState('')

  const { title, price, category, desc, image01 } = product;

  const realtedProduct = products.filter((item) => category === item.category);
  const dispatch = useDispatch()
  const addItem = ()=>{
    dispatch(cartAction.addItem({
        id,
        title,
        price,
        image01
    }))
  }
  const submitHandler =e=>{
    e.preventDefault()
    
  }
 
  useEffect(()=>{
   setPerviewImg(product.image01)
  },[ product ])

  useEffect(()=>{
  window.scrollTo(0,250)
   
  },[product])

  return (
    <Helmet title="product-details">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="porduct_images">
                <div
                  className="img_item mb-2"
                  onClick={() => setPerviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img_item mb-2"
                  onClick={() => setPerviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>
                <div
                  className="img_item"
                  onClick={() => setPerviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="products_main-img">
                <img src={perviewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single_product-content">
                <h2 className="product_title mb-3"> {title} </h2>
                <span className="product_price">
                  Price: <span>${price}</span>{" "}
                </span>
                <p className="category mb-5 ">
                  Category: <span>{category}</span>
                </p>

                <button onClick={addItem} className="addToCart_btn">Add to Cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div
                className="tabs d-flex align-items-center gap-5 py-3
                    "
              >
                <h6
                  className={`${tab === "desc" ? "tab_active" : ""} `}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "tab_active" : ""} `}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab_Content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab_form  mb-3 s">
                  <div className="review pt-5">
                    <p className="user_name mb-0">Erfan Nasr</p>
                    <p className="user_email">erfannasrolahi8@gmail.com</p>
                    <p className="feedback_text"> great products</p>
                  </div>

                  <div className="review">
                    <p className="user_name mb-0">Erfan Nasr</p>
                    <p className="user_email">erfannasrolahi8@gmail.com</p>
                    <p className="feedback_text"> great products</p>
                  </div>

                  <div className="review">
                    <p className="user_name mb-0">Erfan Nasr</p>
                    <p className="user_email">erfannasrolahi8@gmail.com</p>
                    <p className="feedback_text"> great products</p>
                  </div>

                  <form className="form" onSubmit={submitHandler}>
                    <div className="form_group">
                      <input type="text" placeholder="Enter your name" onChange={e=> setEnteredName(e.target.value)} required />
                    </div>

                    <div className="form_group">
                      <input type="text" placeholder="Enter your email" onChange={e=>setEntereEmail(e.target.value)} required/>
                    </div>

                    <div className="form_group">
                      <textarea
                        rows={6}
                        type="text"
                        placeholder="Write youre review"
                        onChange={e=> setRiviewMsg(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="addToCart_btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mb-5 mt-4">
              <h2 className="realted_product-title">You might also like</h2> 
            </Col>
            {realtedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
