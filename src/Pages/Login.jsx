import React,{useRef} from "react";
import Helmat from "../Component/Helmet/Helmet";
import CommonSection from "../Component/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
const Login = () => {
    const loginNameRef = useRef()
    const loginPasswordRed=useRef()
    const submitHandler =(e)=>{
      e.preventDefault()
    }

  return (
    <Helmat title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form_group">
                  <input type="email" placeholder="Enter your Email" required ref={loginNameRef}/>
                  <input type="password" placeholder="Enter your Password" required ref={loginPasswordRed}/>
                </div>
                <button type="submit" className="AddToCart_button">Login</button>
              </form>
              <Link to="/register">Don't have an account? Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmat>
  );
};

export default Login;
