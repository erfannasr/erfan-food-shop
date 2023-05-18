import React, { useState, useEffect } from "react";
import Halmet from "../Component/Helmet/Helmet";
import CommonSection from "../Component/UI/common-section/CommonSection";
import "../Styles/all-foods.css";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductsCart from "../Component/UI/products-card/ProductsCard";
import ReactPaginate from "react-paginate";
import "../Styles/pagination.css";
const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  
  const productPrePage = 8;
  const visitedPage = pageNumber * productPrePage;
  const displayPage = products.slice(visitedPage, visitedPage + productPrePage);
  const pageCount = Math.ceil(products.length / productPrePage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);  

  };
  return (
   
  
    <Halmet title="All-Foods">
      <CommonSection title="All Foods" />
     
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs='12'>
              <div className="search_widget d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="Im looking for.."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                 
                <span>
                  <i className="ri-search-2-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs='12' className="mb-5">
              <div className="sorting_widget text-end">
                <select className="w-50">
                  <option value="">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
               
        
            </Col>
            {displayPage
              .filter((item) => {
                if (setSearchTerm.value === "") return item;
                if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
                  return item;
              })
              .map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  <ProductsCart item={item} />
                </Col>
              ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Back"
                nextLabel="Next"
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Halmet>
  );
};

export default AllFoods;
