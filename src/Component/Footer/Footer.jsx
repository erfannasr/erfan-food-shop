import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "../../Styles/footer.css";
import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
     

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer_logo text-start"  >
              <ScrollToTop />
              <img src={logo} alt=""  />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit obcaecati 
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title"> Delivery Time</h5>
            <ListGroup className="delivery_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Sundat-Thursday </span>
                <p>10:00am - 11pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Friday-Saturday</span>
                <p>OFF DAY</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title"> Contact</h5>
            <ListGroup className="delivery_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <p>Location: Iran,Isfahan,Varzaneh </p>
              </ListGroupItem>

              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Phone:+98 09387826830 </span>
              </ListGroupItem>

              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Email: erfannasrolahi8@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title"> newsletter</h5>
            <p>erfan nasrollahi hastam TEST</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your Email" />
              <span>
                <i className="ri-send-plane-line"></i>{" "}
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 ">
          <Col lg="6" md="6" className="">
            <p className="copyright_text">&copy; Copyright-2023-ERFAN-SITE </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social_links d-flex align-items-center gap-4 justify-content-end">
              <p className="mb-0">Follow</p>
              <span>
                <Link to="">
                  <i className="ri-facebook-fill"></i>
                </Link>
              </span>

              <span>
                <Link to="">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>

              <span>
                <Link to="">
                  <i className="ri-github-fill"></i>
                </Link>
              </span>

              <span>
                <Link to="">
                  <i className="ri-telegram-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
