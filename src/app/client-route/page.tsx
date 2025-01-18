"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientSideFunction from "@/utils/clientSideFunction";

// import serverSideFunction from "@/utils/serverSideFunction";
/** Check Difference After Remove from utile server-only import after that check browser logs */
export default function ClientRoutePage() {
  console.log("Client Route Page");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const result = clientSideFunction();

  //   const result = serverSideFunction();
  return (
    <>
      <h1>Client Route Page</h1>
      {result}
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
