import React from 'react'
import OfferCard from './Cards/OfferCard'

const OffersPage = ({brandName}) => {
  return (
    <div className='container-fluid bg-light-grey p-5'>
     

      <div className='container'>
        <div className='row'>
          
          <div className="col-lg-8 order-lg-1 ">
          <div class="d-flex justify-content-start align-items-stretch mb-2">
            <div class="d-lg-none d-flex justify-content-center align-items-center" style={{maxWidth: "150px", borderRadius: "20px", padding: "5px", backgroundColor: "white", marginRight: "10px"}}>
              <img style={{width: "100%", height: "auto", backgroundColor: "white"}} alt="logo Argos" width="200" height="115" src="https://cdn-discountcode.mirror.co.uk/img/argos%20new%20logo.png?v=638018737516917562" class=" ng-lazyloaded"/>
            </div>
            <div class="d-flex flex-column justify-content-center ms-3">
              <h3 class="mirror-discounts-title-shop-mobile">{brandName} Discount Codes December 2022</h3>
              <p class="mirror-discounts-subtitle-shop-mobile"> Tested and Verified {brandName} Promo Codes &amp; Voucher Codes</p>
            </div>
          </div>

          {[...Array(10)].map((x, i) =>
    <OfferCard percentOff={10} description="Use this exclusive code and take 10% off and free delivery!" buttonText="Get Offer" type="Code"  long />
          )}
            
          </div>
          <div className="col-lg-4 order-lg-12">
            
          <div className='container bg-white d-flex justify-content-center rounded py-3'>
            <img alt="logo Argos" src="https://cdn-discountcode.mirror.co.uk/img/argos%20new%20logo.png?v=638018737516917562" class=" ng-lazyloaded"/>
          </div>
            
            <div className='container bg-white p-5 my-3'>FILTER</div>

            <div>
              <p><strong>Ut nisi fugit hic harum quas est dolorum suscipit.</strong></p>
              <p>Lorem ipsum dolor sit amet. Quo voluptatum eveniet eos aspernatur vero aut eaque velit. At ullam odio nam error temporibus et vitae cumque. Vel facere cumque vel consectetur sunt ut optio consequatur sit nobis eaque eos maiores unde rem tenetur porro qui molestiae libero. Est voluptas repudiandae non nemo voluptatem ut laboriosam accusantium ut ullam labore qui voluptas amet. Sed consequuntur ipsum et iure consequatur est libero numquam ab voluptas veritatis At voluptates unde. In molestias nihil eum blanditiis sapiente et maxime quae qui asperiores fuga a blanditiis tempore ex aspernatur quia. Est natus ducimus aut totam repudiandae et veniam labore aut numquam facere nam nulla amet eos accusantium libero.</p>
              <p>Ut tempora sint qui nemo optio est accusamus quasi sit ipsum omnis rem autem nobis qui laudantium fugit non accusamus ratione. Id assumenda dolor aut necessitatibus inventore et quis dolorem in ipsam modi aut nobis nesciunt non dolores fuga 33 odio velit. Et accusamus pariatur aut veritatis porro quo repudiandae consequuntur ut tempora aspernatur aut consequatur harum. Et sint dolor et numquam nobis id doloremque deserunt. Quo soluta accusamus eum sapiente voluptas ea quia ipsa.</p>
              <p>Eum natus dolores aut modi laudantium eum beatae quas aut debitis recusandae quo quia nostrum. Ex doloremque sint sit debitis quis est tempora fugit id consectetur quia. Ut fugit nesciunt qui labore nostrum aut earum facere sed nihil praesentium. At perferendis ullam vel quidem voluptates et dolor omnis qui excepturi dolor! Qui assumenda quos et molestias distinctio vel accusantium dicta eos velit quibusdam. Et internos autem a excepturi numquam ex veniam accusamus a quis internos in dolorem Quis ut iste libero ut possimus repellendus. Sed ducimus dicta id nesciunt voluptate ex ipsam totam in necessitatibus sint.</p>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default OffersPage