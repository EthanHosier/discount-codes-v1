import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import OfferCard from "./Cards/OfferCard";

const SlickCarousel = ({offers,multipleItems, logos, images}) =>{

    const [slider,setSlider] = useState();

    useEffect(()=>{
        if(!slider) return
        slider.slickPlay();
    }, [slider])

    const settings = !!multipleItems 
    ?
    {
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
            breakpoint: offers? 1200: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: offers? 1000: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: offers? 775: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              

            }
          }
        ]
      }
    :
    {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    ;

    return (
      <div className="container">
        <Slider ref={s => setSlider(s)} {...settings}>
        
          {
          offers?  
          offers.map((off,i) =>{
            return <OfferCard primaryImg={off.primaryImg} 
            secondaryImg = {off.secondaryImg}
            text={off.text}
            discountCode={off.discountCode}
            linkUrl={off.linkUrl}
            width={275}
            height={350}
            buttonText={off.buttonText}
            description={off.description}
            icon={off.icon}
            />
          })
          :
          images?
          images.map((e,i)=>{
            return <img src={e}></img>
          })
          :
          logos?
          [...Array(12)].map((e, i) =>{
            return <div className="mx-0 d-flex justify-content-center align-items-center rounded-circle bg-white" id="carousel-logo-container">
            <img className="carousel-logo rounded" src="https://1000logos.net/wp-content/uploads/2020/07/Asos-Logo.jpg" />
          </div>
          })
          :
          <p>ERROR: NO CONTENTS SPECIFIED</p>
          }

        </Slider>
      </div>
    );
}

export default SlickCarousel;