import React, {useEffect, useState} from 'react'
import CardsContainer from './CardsContainer'
import SlickCarousel from './SlickCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faFire, faHourglass2} from '@fortawesome/free-solid-svg-icons'
import OfferCategories from './OfferCategories'
const Homepage = () => {
  
  const [data,setData] = useState([])
  const [data2, setData2] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    const arr = new Array(12)
    for(let i = 0; i< arr.length; i++){
      arr[i] = 
      {
        primaryImg: "https://upload.wikimedia.org/wikipedia/en/d/d8/JD_Sports_logo.svg",
        secondaryImg: "https://www.transparentpng.com/thumb/50-off/mD3qe9-50-off-clipart-photos.png",
        description:"Use this exclusive code and take 10% off and free delivery!",
        discountCode:"code",
        linkUrl:"asdsa",
        buttonText: "View Offer",
        icon:faFire,
      }
    }
    setData(arr)


    const arr2 = new Array(10)
    for(let i = 0; i< arr.length; i++){
      arr2[i] = 
      {
        primaryImg: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lady-apples-at-organic-farmers-market-royalty-free-image-1627315148.jpg?crop=0.66682xw:1xh;center,top&resize=480:*",
        secondaryImg: "https://1000logos.net/wp-content/uploads/2020/07/Asos-Logo.jpg",
        description:"Use this exclusive code and take 10% off and free delivery!",
        discountCode:"code",
        linkUrl:"asdsa",
        buttonText: "View Offer",
        icon:faHourglass2,
      }
    }
    setData2(arr2)

    const arr3 = new Array(4)
    for(let i = 0; i< arr.length; i++){
      arr3[i] = "https://www.discountvouchers.co.uk/images/banners/homepage/dvblogsitebanner2021.1630506672.jpg"
    }
    setImages(arr3)
  }, [])
  
  
  return (
   <>
     

    
      <div className='container-fluid d-flex flex-column align-items-center bg-light-grey'>
        
        <h2 className='my-4'>Our Top Brands</h2>
        <SlickCarousel logos="x" multipleItems/>
        <div className='container d-flex mt-5 mr-5 flex-row-reverse'>
          <a href='/brands' className='link-dark mb-2'> <strong>All Brands <FontAwesomeIcon icon={faArrowRight}/></strong></a>
        </div>
      </div>

        <div className='container-fluid d-flex justify-content-center align-items-center flex-column rounded bg-white'>
          <h2 className='my-5'>Today's 
          <span className='text-warning'> HOT<FontAwesomeIcon icon={faFire} />
          </span> Offers</h2>        
          <CardsContainer offers={data}/>

        </div>
        
     
        

       
        <div className='container-fluid d-flex flex-column align-items-center bg-light-grey'>

        <OfferCategories/>
        <div className='container d-flex mt-4 mb-5 mr-5 flex-row-reverse'>
          <a href='/categories' className='link-dark'> <strong>All Categories <FontAwesomeIcon icon={faArrowRight}/></strong></a>
        </div>
      </div>


      <div className='container-fluid'>
        <div className='container p-5'>
          <h2><strong>How to <span className="text-warning">save</span> with website.com</strong></h2>
          <p className='mt-3'>
          Lorem ipsum dolor sit amet. Ut ipsa debitis a quaerat tenetur qui quia maiores? Qui labore obcaecati ut minima beatae sed <span className="text-warning">dolores</span> architecto et saepe obcaecati. Eos blanditiis accusamus ut dolorum fugiat et suscipit libero. Ad sint atque ea rerum consequuntur cum voluptatem deleniti.
          Sit veniam temporibus sit Quis nisi qui laudantium <span className="text-warning">praesentium id omnis voluptatem</span>. Non illum adipisci in ipsam sapiente eos odit repellendus quo nesciunt tempore non possimus obcaecati? Et consectetur deleniti ad rerum enim a accusantium <span className="text-warning">magnam eos provident rerum qui nemo</span> voluptatem et dolorem consequatur in odio alias.
          </p>
          <p>Lorem ipsum dolor sit amet. Sed quia aliquam qui itaque aperiam in maiores aliquam vel aliquam nemo:</p>
          <ul>
            <li>Non animi minus cum</li>
            <li>Nam nihil dolor qui consectetur dicta</li>
            <li>Cum delectus doloribus id rerum odit sed blanditiis voluptatem eum odio!</li>
          </ul>
          <p>
          Qui necessitatibus facilis eum fugiat quae sed architecto cupiditate sit harum quibusdam! Ut neque repellendus id officiis consequatur aut <span className="text-warning">explicabo accusamus et nostrum architecto</span>. Aut nihil debitis est tenetur ducimus et enim voluptatem.
          </p>
        </div>
      </div>  

      <div className='container-fluid bg-light-grey p-5 d-flex align-items-center flex-column'>
        <h2 className='mb-4'>Offers <span className='text-warning'>Ending Soon <FontAwesomeIcon icon={faHourglass2}/></span></h2>
        <SlickCarousel offers={data2} multipleItems/>
      </div>
    </>
  )
}

export default Homepage