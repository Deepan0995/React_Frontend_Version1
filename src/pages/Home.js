import React from "react";

export default function Home() 
{
  return (
    <div className="container-cover">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-vector/online-shopping-poster-with-realistic-alarm-clock-product-cart-gifts-phone-vector-illustration_548887-250.jpg?w=1060&t=st=1684401385~exp=1684401985~hmac=d3eeea65bf0bd23ed6a8b8f26a8cbed01ab8c2eb4f2580624f01691fd23f755d"
              className="d-block w-100"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
