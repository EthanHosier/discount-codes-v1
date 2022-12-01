import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import OfferCard from "./Cards/OfferCard";

//TODO: update so that is more universal, depending on input (has input for both offers, and logos)
const SlickCarousel = ({offers}) =>{

    const [slider,setSlider] = useState();

    useEffect(()=>{
        if(!slider) return
        slider.slickPlay();
    }, [slider])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
      <div className="container">
        <Slider ref={s => setSlider(s)} {...settings}>
        
          {!offers? [...Array(12)].map((e, i) =>{
            return <div className="mx-0 d-flex justify-content-center align-items-center rounded-circle bg-white" id="carousel-logo-container">
            <img className="carousel-logo rounded" src="https://1000logos.net/wp-content/uploads/2020/07/Asos-Logo.jpg" />
          </div>
          }) : 

          offers.map((off,i) =>{
            return <OfferCard primaryImg={off.primaryImg} 
            secondaryImg = {off.secondaryImg}
            text={off.text}
            discountCode={off.discountCode}
            linkUrl={off.linkUrl}
            width={200}
            height={350}
            buttonText={off.buttonText}
            description={off.description}
            icon={off.icon}
    />
          })
          }

        </Slider>
      </div>
    );
}

export default SlickCarousel;