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
                <div className="row product-name"><h1>{product.name}</h1></div>
                <div className="row info">
                    {/* make stars dynamic */}
                    <p className="stars"><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span> reviews</p>
                    <p className="info-section">Suitable for {product.shortDescription}</p>
                    <p className="info-section">Part of play kits</p>
                </div>
                <div className="row description">
                    <p>{product.description}</p>
                    
                </div>
                <div className="row">
                    <Form cb={getCustomerProfile} />
                </div>
                <div className="row badges">
                    <ul>
                        <li>
                            <img src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/award-Gold-Seal.jpg?v=17803765802197558746" alt=""/>
                        </li>
                        <li>
                            <img src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/logo-popsugar.jpg?v=10007697976388939276" alt=""/>
                        </li>
                        <li>
                            <img src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/logo-time.jpg?v=5048907371150288037" alt=""/>
                        </li>
                        <li>
                            <img src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/logo-brain.jpg?v=1787845069685178932" alt=""/>
                        </li>
                        <li>
                            <img src="//cdn.shopify.com/s/files/1/2386/2119/t/12/assets/logo-scarymommy.jpg?v=14971868908308590644" alt=""/>
                        </li>
                    </ul>
                </div>

                
            </div>
            
            
        </div>
    )
}

export default Product