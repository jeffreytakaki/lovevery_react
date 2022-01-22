import React, { useState, useEffect } from 'react'
import './App.scss';

import { getProducts } from './services'
import { Product, Form } from './components'


function App() {
    const [products, setProducts] = useState([]);
    const [customer, setCustomer] = useState({});

    useEffect(async () => {
        const retrieveProducts = await getProducts();
        setProducts(retrieveProducts)
    }, [])
    

    const getCustomerProfile = ({name, birthday}) => {
        
        // date format: '1986-01-05'
        if(typeof name === 'string' && birthday) {
            setCustomer({name, birthday})
        }


        const age = getAge(new Date(birthday));

        console.log("age ->", age)

    }

    const getAge = (birthday) => {

      const today = getWeekNumber(new Date());
      const birthDate = getWeekNumber(birthday);
      let yearDiff = today[0] - birthDate[0]; // should return the differences in years
      let weeks = 0;

      if(yearDiff > 1) {
        // child is older than 1
        
      } else {
        let age = (today[1] + (52*yearDiff)) - birthDate[1]
        
        weeks = Math.ceil(age);
      }

      return weeks
    }

    const getWeekNumber = (dateString)=>  {
        // Copy date so don't modify original
        dateString = new Date(Date.UTC(dateString.getFullYear(), dateString.getMonth(), dateString.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        dateString.setUTCDate(dateString.getUTCDate() + 4 - (dateString.getUTCDay()||7));
        // Get first day of year
        const yearStart = new Date(Date.UTC(dateString.getUTCFullYear(),0,1));
        // Calculate full weeks to nearest Thursday
        const weekNo = Math.ceil(( ( (dateString - yearStart) / 86400000) + 1)/7);
        // Return array of year and week number
        return [dateString.getUTCFullYear(), weekNo];
    }

    return (
      <div className="App">
        <Form cb={getCustomerProfile} />

        {customer.name && <Product />}
        
      </div> 
    );
}

export default App;
