import React, {useEffect, useState} from 'react'
import CardsContainer from './CardsContainer'
import SlickCarousel from './SlickCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock, faFire, faHourglass, faHourglass1, faHourglass2, faHourglass3} from '@fortawesome/free-solid-svg-icons'
const Homepage = () => {
  
  const [data,setData] = useState([])
  const [data2, setData2] = useState([])

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
    setData(arr)


    const arr2 = new Array(10)
    for(let i = 0; i< arr.length; i++){
      arr2[i] = 
      {
        primaryImg: "https://www.shutterstock.com/image-vector/woman-man-clothes-accessories-collection-260nw-1488991403.jpg",
        secondaryImg: "https://1000logos.net/wp-content/uploads/2020/07/Asos-Logo.jpg",
        description:"Use this exclusive code and take 10% off and free delivery!",
        discountCode:"code",
        linkUrl:"asdsa",
        buttonText: "View Offer",
        icon:faHourglass2,
      }
    }
    setData2(arr2)
  }, [])
  
  
  return (
   <>
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
        <h2>Offers <span className='text-warning'>Ending Soon <FontAwesomeIcon icon={faHourglass2}/></span></h2>
        <SlickCarousel offers={data2}/>
      </div>
    </>
  )
}

export default Homepage