import React from "react";
import '../../../Styles/category.css'
// IMAGES
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";
import { Col, Container, Row } from "reactstrap";

const categoryData = [
  {
    display: "FastFood",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizaa",
    imgUrl: categoryImg02,
  },
  {
    display: "Row Mate",
    imgUrl: categoryImg03,
  },
  {
    display: "FastFood",
    imgUrl: categoryImg04,
  },
];
const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item ,index) => (
           
            
          <Col lg="3" md="4" sm='6' xs='6' className="mb-4">
            <div className="category_Item d-flex align-items-center gap-3">
              <div className="category_img">
                <img src={item.imgUrl} alt="" />
                
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))
         
        }
      </Row>
    </Container>
  );
};

export default Category;
