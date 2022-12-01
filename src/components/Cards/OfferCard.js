import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

/*TODO: 1. set so that icon is different colors depending on icon
        2. fix card css so that 'builds' it from bottom up. This way ensures there is space for button and text, then image is squished into remaining space
*/
const OfferCard = ({primaryImg, secondaryImg, description, buttonText, height, width,icon}) => {
  
  const styles = {
    height:`${height}px`,
    width: `${width}px`
  }
  
  
  return (
    <div className='rounded bg-white shadow grow' style={styles}>
      <img src={primaryImg} className='card-primary-img w-100 rounded '/>
      <img src={secondaryImg} className='w-30 card-secondary-img rounded'/>      
      <div className='d-flex flex-column align-items-center mt-2'>
        <p><span className={'text-warning'}><FontAwesomeIcon icon={icon}/></span><strong>{" "+description}</strong></p>
        <button type="button" className="btn btn-warning">{buttonText}</button>
      </div>
    
    </div>
  )
}

export default OfferCard