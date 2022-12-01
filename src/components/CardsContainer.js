import React, { useEffect } from 'react'
import OfferCard from './Cards/OfferCard'

const CardsContainer = ({offers}) => {

    useEffect(()=>{
        console.log(offers)
    },[offers])

  return (
    <div className='d-flex flex-wrap justify-content-center px-0' id="cards-container" >
        {!!offers && offers.map(off => {
            return <OfferCard primaryImg={off.primaryImg} 
                            secondaryImg = {off.secondaryImg}
                            text={off.text}
                            discountCode={off.discountCode}
                            linkUrl={off.linkUrl}
                            width={300}
                            height={350}
                            buttonText={off.buttonText}
                            description={off.description}
                            icon={off.icon}
                    />
                   
                    
        })}
    </div>
  )
}

export default CardsContainer