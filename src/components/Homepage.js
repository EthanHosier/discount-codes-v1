import React, {useEffect, useState} from 'react'
import CardsContainer from './CardsContainer'
import SlickCarousel from './SlickCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFire} from '@fortawesome/free-solid-svg-icons'
const Homepage = () => {
  
  const [data,setData] = useState([])
  
  useEffect(() => {
    const arr = new Array(12)
    for(let i = 0; i< arr.length; i++){
      arr[i] = 
      {
        primaryImg: "https://www.shutterstock.com/image-vector/woman-man-clothes-accessories-collection-260nw-1488991403.jpg",
        secondaryImg: "https://1000logos.net/wp-content/uploads/2020/07/Asos-Logo.jpg",
        description:"Use this exclusive code and take 10% off and free delivery!",
        discountCode:"code",
        linkUrl:"asdsa",
        buttonText: "View Offer",
        icon:faFire,
      }
    }
    console.log(arr)
    setData(arr)
  }, [])
  
  
  return (
    <div className='container-fluid flex flex-col'>
      <div className='container-fluid d-flex justify-content-center p-5'>
        <h1>Logo</h1>
      </div>

      <div className='container-fluid d-flex flex-column align-items-center bg-light-grey'>
        <h2 className='my-5'>Our Top Brands</h2>
        <SlickCarousel/>
      </div>

      <div className='container-fluid d-flex flex-column align-items-center  bg-light-grey'>
        <div className='container-fluid d-flex justify-content-center'>
          <h2 className='my-5'>Today's 
          <span className='text-warning'> HOT<FontAwesomeIcon icon={faFire} />
          </span> Offers</h2>
        </div>
        
        <CardsContainer offers={data}/>
      </div>
            
    </div>
  )
}

export default Homepage