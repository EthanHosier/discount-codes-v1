import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

/*TODO: 1. set so that icon is different colors depending on icon
        2. fix card so that the secondary image is positioned relatively - (idk like 60% down then half the height or sumin)
*/
const OfferCard = ({primaryImg, secondaryImg, description, buttonText, height, width,icon, long, code, type, percentOff}) => {
  
  const styles = {
    height:`${height}px`,
    width: `${width}px`
  }
  
  
  return (
    <>
    {long? 
    
    <div className='rounded bg-white shadow grow d-flex justify-content-center p-3'>
      <div className=' d-flex flex-column mx-2 align-items-center justify-content-center'>
        <h6>{type}</h6>
        {!!percentOff?
        <p className='display-5 font-weight-bold text-warning'><strong>{percentOff}%</strong></p>
        :
        <FontAwesomeIcon icon={icon}/>  
        }
      </div>
      
      <h6 className='m-3 d-flex justify-content-center align-items-center'>{description}</h6>
    
      <button type="button" className="btn btn-warning my-4 text-nowrap">{buttonText}</button>
    </div>

    
    
    :

    <div className='rounded bg-white shadow grow' style={styles}>
      <img src={primaryImg} className='card-primary-img w-100 rounded '/>
      <img src={secondaryImg} className='w-30 card-secondary-img rounded'/>      
      <div className='d-flex flex-column align-items-center mt-2 px-3'>
        <p><span className={'text-warning'}><FontAwesomeIcon icon={icon}/></span><strong>{" "+description}</strong></p>
        <button type="button" className="btn btn-warning">{buttonText}</button>
      </div>
    </div>
    }
  </>
    
  )
}

export default OfferCard