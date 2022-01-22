import React from 'react';
import Form from './Form/Form'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const Product = ({product, getCustomerProfile}) => {

        console.log('Product ->', product);
        
 
    return (
        <div className="container">
            
            <div className="section">
                <Carousel showArrows={true} showIndicators={false} showStatus={false} >
                {product.images?.map(image => (
                    <div key={image.id}>
                        <img src={image.url} />
                    </div>
                ))}
                </Carousel>
            </div>
            <div className="section">
                <div className="row"><h1>{product.name}</h1></div>
                <div className="row info">
                    {/* make stars dynamic */}
                    <p className="stars"><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> reviews</p>
                    <p>Suitable for {product.shortDescription}</p>
                    <p>Part of play kits</p>
                </div>
                <div className="row">
                    {product.description}
                </div>
                <div className="row">
                    <Form cb={getCustomerProfile} />
                </div>

                
            </div>
            
            
        </div>
    )
}

export default Product
