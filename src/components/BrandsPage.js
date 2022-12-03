import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BrandsPage = () => {
  const [brands, setBrands] = useState()
  
  useEffect(()=>{
    const arr = new Array(24)

    for(let i = 0; i < arr.length; i ++){
      arr[i] = i
    }

    setBrands(arr)
    
  },[])

  return (
    <div className="container-fluid bg-light-grey py-5 d-flex align-items-center flex-column">
        <h2>Brands</h2>
         <div className='container d-flex flex-wrap justify-content-center bg-grey  pt-4 pb-4 ' id="offer-categories-page-cat-container">
        {brands?.map((c,i) =>{
          return <Link to="/brand" className='link-dark'><div className=" d-flex flex-column align-items-center m-3 grow py-3 bg-white custom-rounded offer-categories-page-category " >          
              <img class= "brands-page-img" src='https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png'/> 
              <p>Brand {i}</p>
              </div>
            </Link>
        })}
        </div>
        
    </div>
  )
}

export default BrandsPage