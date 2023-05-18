import React,{useRef} from "react";
import Helmat from "../Component/Helmet/Helmet";
import CommonSection from "../Component/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
const Register = () => {
    const signUpNameRef = useRef()
    const signUpPasswordRed=useRef()
    const signEmailRef = useRef()
    const submitHandler =(e)=>{
      e.preventDefault()
    }

  return (
    <Helmat title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form_group">
                    <input type="text" placeholder="Full Name" required ref={signUpNameRef} />
                  <input type="email" placeholder="Enter your Email" required ref={signEmailRef}/>
                  <input type="password" placeholder="Enter your Password" required ref={signUpPasswordRed}/>
                </div>
                <button type="submit" className="AddToCart_button">Sign Up</button>
              </form>
              <Link to="/login">Already have an account?Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmat>
  );
};

export default Register;
