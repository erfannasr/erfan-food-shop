import React, { useState, useEffect } from "react";
// COMPONENT
import Helmet from "../Component/Helmet/Helmet";
import Category from "../Component/UI/Category/Category";
import TestimonialSlider from "../Component/UI/slider/TestimonialSlider";
// STRAP
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
// IMAGES
import heroIMG from "../assets/images/hero.png";
import feautreImg01 from "../assets/images/service-01.png";
import feautreImg02 from "../assets/images/service-02.png";
import feautreImg03 from "../assets/images/service-03.png";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductsCard from "../Component/UI//products-card/ProductsCard";

import whyImg from "../assets/images/location.png";

import netWorkImg from "../assets/images/network.png";

// STYLES
import "../Styles/hero-section.css";
import "../Styles/home.css";
// Routes
import { Link } from "react-router-dom";
//product

import products from "../assets/fake-data/products";
const featureData = [
  {
    title: "Quick Delivery",
    imgURL: feautreImg01,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, rem.",
  },
  {
    title: "Super Dine In",
    imgURL: feautreImg02,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, rem.",
  },
  {
    title: "Easy Pick Up",
    imgURL: feautreImg03,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, rem.",
  },
];
const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allproducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filtredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filtredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filterdProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filterdProducts);
    }
    if (category === "PIZZA") {
      const filterdProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filterdProducts);
    }
    if (category === "BREAD") {
      const filterdProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filterdProducts);
    }
  }, [category]);
  return (
    <Helmet title="home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="mb-3">Easy way to make an order </h5>
                <h1 className="mb-4 hero_title">
                  <span>ERFAN</span> Just wait <br /> food{" "}
                  <span>At your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  quasi minus debitis quisquam laudantium vel sapiente, nostrum
                  modi.
                </p>
                <div className="hero_btn d-flex align-items-center gap-5 mt-4">
                  <button className="order_btn d-flex align-items-center justify-centent-between">
                    Order now <i className="ri-arrow-right-s-line"></i>{" "}
                  </button>

                  <button className="all_foods_btn">
                    {" "}
                    <Link to="/foods">See All Foods</Link>
                  </button>
                </div>
                <div className="hero_service d-flex align-items-center gap-5 mt-3">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shopping_icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shopping charge
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <span className="shopping_icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure Ceckout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroIMG} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">what we serve</h5>
              <h2 className="feature_title">Just site back at home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, fugit!
              </p>
              <p className="feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                eius?
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div className="feature_items text-center px-5 py-3">
                  <img src={item.imgURL} alt="feautre" className="w-28 mb-4" />
                  <h5 className="fw-bold">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="Food_category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`All_btn ${
                    category === "ALL" ? "FoodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "FoodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "FoodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizaa
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "FoodBtnActive" : ""
                  }  `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allproducts.map((item) => (
              <Col lg="3" md="6" sm='6' key={item.id} className="mt-5s">
                <ProductsCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why_tasty-traet">
                <h2 className="tasty_traet-title mb-4">
                  Why <span> Tasty Treat? </span>
                </h2>
                <p className="tasty_traet-desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate vitae labore totam, consequuntur voluptatem
                  provident molestias? Tempora neque pariatur accusamus.
                </p>

                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex align-items-center">
                      {" "}
                      <i class="ri-checkbox-circle-line"></i>
                      Fresh and tasty Foods{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit, rerum!
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex align-items-center">
                      {" "}
                      <i className="ri-checkbox-circle-line"></i>
                      Quality support{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eligendi, natus?
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-title d-flex align-items-center">
                      {" "}
                      <i className="ri-checkbox-circle-line"></i>
                      Order form any location{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eligendi, natus?
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb=5 ">
              <h2>Hot pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductsCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial_subtitle mb-5">Tesimonial</h5>
                <h2 className="testimonial_title mb-4">What our <span>customers</span> are saying</h2>
                <p className="testimonial_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum reprehenderit velit hic deleniti consequatur? Quia repellat ad labore dolores voluptatibus.</p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={netWorkImg} alt="net" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
