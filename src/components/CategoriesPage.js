import React from 'react'

import { faBowlFood, faPlaneDeparture, faMasksTheater, faShirt, faHeart, faPlug, faHouse, faCar, faSchool, faChildReaching, faMoneyCheckDollar, faGift } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CATEGORIES = [
    {
      name: "Food & Drink" ,
      icon: faBowlFood
    },
  
  
    {
      name: "Travel & Accomodation" ,
      icon: faPlaneDeparture
    },
  
    {
      name: "Leisure & Entertainment" ,
      icon: faMasksTheater
    },
  
    {
      name: "Clothing & Fashion" ,
      icon: faShirt
    },
  
  
    {
      name: "Health & Beauty" ,
      icon: faHeart
    },
  
    {
      name: "Electronics" ,
      icon: faPlug
    },
  
    {
      name: "Home & Garden" ,
      icon: faHouse
    },
    
    {
      name: "Gifts" ,
      icon: faGift
    },
  
    {
      name: "Automotive" ,
      icon: faCar
    },
  
    {
      name: "Education" ,
      icon: faSchool
    },
  
    {
      name: "Baby & Child" ,
      icon: faChildReaching
    },
  
    {
      name: "Finance" ,
      icon: faMoneyCheckDollar
    },
  
  
  ]

const CategoriesPage = () => {
  return (
    <div className="container-fluid bg-light-grey py-5 d-flex align-items-center flex-column">
        <h2>Offer Categories</h2>

        <div className='container d-flex flex-wrap justify-content-center bg-grey  pt-4 pb-4 ' id="offer-categories-page-cat-container">
        {CATEGORIES.map((c,i) =>{
          return <div className=" d-flex flex-column align-items-center m-3 grow py-3 bg-white custom-rounded offer-categories-page-category " >
            
            <FontAwesomeIcon icon={c.icon} className="display-3 py-3"/> 
            <p>{c.name}</p>
            
            </div>
        })}
        </div>
    
    </div>
  )
}

export default CategoriesPage