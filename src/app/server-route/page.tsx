import CarouselComponent from "@/components/carousel";
import serverSideFunction from "@/utils/serverSideFunction";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function ServerRoutePage() {
  console.log("Server Route Page");
  const result = serverSideFunction();
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };
  return (
    <>
      <h1>Server Route Page</h1>
      {result}
      <CarouselComponent />
      {/** Check Error after uncomment this code because we can not use direct
      third party in server components */}
      {/* <div className="image-slider-container">
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
      </div> */}
    </>
  );
}
