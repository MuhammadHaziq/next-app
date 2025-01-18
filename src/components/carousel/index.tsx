"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselComponent() {
  console.log("Carousel Component");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/400/200" />
          </div>
        </Slider>
      </div>
    </>
  );
}
