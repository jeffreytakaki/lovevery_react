import React, { useState, useEffect } from 'react'
import './App.scss';

import { getProducts } from './services'
import { Product, BreadCrumb, Form } from './components'


function App() {
    const [products, setProducts] = useState({});
    const [customer, setCustomer] = useState({});
    const [featuredProduct, setFeaturedProduct] = useState({});
    const [showProduct, setShowProduct] = useState(false)

    useEffect(async () => {
        const retrieveProducts = await getProducts();

        if(retrieveProducts) {

          // lets paint the page;
          setFeaturedProduct(retrieveProducts[0])

          // build look up table
            let obj = {};
            let count = 0;
            for(let i = 0; i < retrieveProducts.length; i++) {
                  obj[count] = retrieveProducts[i];
                  obj[count + 1] = retrieveProducts[i];
                  count = count + 2
            }
            setProducts(obj)
        }
  
    }, [])
    

    const getCustomerProfile = ({name, birthday}) => {
        // date format: '1986-01-05'
        if(typeof name === 'string' && birthday) {
            // setCustomer({name, birthday})
        }

        if(birthday) {
          const age = getAge(new Date(birthday));
          if(age !== false) {
            setCustomer({name, birthday})
            setFeaturedProduct(products[age])
            setShowProduct(true)
          }
        }
        
    }

    const getAge = (birthday) => {
        const today = {
            year: new Date().getYear(),
            month: new Date().getMonth()
        }
        const birthDate = {
            year: birthday.getYear(),
            month: birthday.getMonth()
        }

        const yearDiff = today.year - birthDate.year;
        const ageInMonths =  ((today.month + (12*yearDiff)) - birthDate.month);
        return (ageInMonths == 12) ? 11 : ageInMonths;
    }

    return (
      <div className="App">
          {!customer.birthday && <Form onLoadOnly={true} cb={getCustomerProfile} />}
          {customer.birthday && <BreadCrumb product={featuredProduct} />}
          {customer.birthday && <Product product={featuredProduct} customer={customer} getCustomerProfile={getCustomerProfile} />}        
      </div> 
    );
}

export default App;
