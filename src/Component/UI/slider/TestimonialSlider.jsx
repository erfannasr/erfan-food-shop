import React from "react";
import Slider from "react-slick";

// IMAGES
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import '../../../Styles/slider.css'

const TestimonialSlider = () => {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ab
          dolores tempora quia? In facere numquam quia vero nam deleniti.
        </p>

        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava01} alt="image" className=" rounded" />
          <h6>ERFAN</h6>
        </div>
      </div>

      <div>
        <p className="review_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ab
          dolores tempora quia? In facere numquam quia vero nam deleniti.
        </p>

        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava02} alt="image" className=" rounded" />
          <h6>ERFAN</h6>
        </div>
      </div>

      <div>
        <p className="review_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ab
          dolores tempora quia? In facere numquam quia vero nam deleniti.
        </p>

        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava03} alt="image" className=" rounded" />
          <h6>ERFAN</h6>
        </div>
      </div>
     
    </Slider>
  );
};

export default TestimonialSlider;
