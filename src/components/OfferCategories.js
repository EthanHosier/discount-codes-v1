import { faBowlFood, faCar, faChildReaching, faGift, faHeart, faHouse, faMasksTheater, faMoneyCheckDollar, faPlaneDeparture, faPlug, faSchool, faShirt, faShoppingBag, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

//seperated purely for maintainability

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

const OfferCategories = () => {

  return (
    <>
      <h2 className='mt-3 mb-4'>Offer Categories</h2>
      <div className='container row mb-5 bg-white rounded pl-5 pt-4 pb-4 '>

        {CATEGORIES.map((c,i) =>{
          return <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex my-3 grow"><strong><a id="xxx" href={`/categories/${c.name}`} ><FontAwesomeIcon icon={c.icon} className="fa-icon-category text-warning"/> {c.name}</a></strong></div>
        })}
      
      </div>
    </>
  )
}

export default OfferCategories