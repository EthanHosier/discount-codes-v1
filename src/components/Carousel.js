import React from 'react'
import OfferCard from './Cards/OfferCard'

const CARD_WIDTH = 400;
const Carousel = () => {
    
  return (
    <div id="carouselId" className="carousel slide mt-5 " data-bs-ride="carousel">
        <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
        </ol>
        <div className="carousel-inner " role="listbox">
            <div className="carousel-item active ">
            <OfferCard 
                text="slide1" 
                primaryImg="https://media.istockphoto.com/id/1265900812/photo/aerial-view-of-london-and-the-tower-bridge.jpg?s=612x612&w=0&k=20&c=-2j6QgZyeveMcGzuWmgLYqC7zXTkcSBnayuZsDqs5KQ="
                secondaryImg="https://www.kindpng.com/picc/m/105-1055012_tesco-logo-black-and-white-hd-png-download.png"
                width={CARD_WIDTH}
                buttonText={"View offer"}
            />
            </div>
            <div className="carousel-item">
                <OfferCard 
                    primaryImg="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                    secondaryImg="https://www.kindpng.com/picc/m/105-1055012_tesco-logo-black-and-white-hd-png-download.png"
                    text="slide2"
                    width={CARD_WIDTH}
                    buttonText={"View offer"}

                />
            </div>
            <div className="carousel-item">
                <OfferCard 
                    primaryImg="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                    secondaryImg="https://www.kindpng.com/picc/m/105-1055012_tesco-logo-black-and-white-hd-png-download.png"
                    text="slide3"
                    width={CARD_WIDTH}
                    buttonText={"View offer"}

                />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span className="carousel-control-prev-icon " aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel