import React,  { useState, useEffect } from 'react';
import moment from 'moment';
import Error from '../Error';


const Form = ({onLoadOnly, customer, cb}) => {
    const [form, setForm] = useState({name: customer ? customer.name : '',  birthday: customer ? customer.birthday : ''})
    const [calendar, setCalendar] = useState({min: '', max: ''})
    const [error, setError] = useState('')
    const handleChange = e => {
        let temp = {...form};
        temp[e.target.name] = e.target.value;
        setForm(temp)
    }


    const setCalendarMax = () => {
        const max = new Date().toISOString().substring(0, 10);
        const min = new Date();
        min.setFullYear( min.getFullYear() - 1 );

        setCalendar({
            min: min.toISOString().substring(0, 10),
            max
        })
    }

    const handleDateValidation = () => {
        // let's do some validation
        
        const isValid = moment(form.birthday, "YYYY-MM-DD", true).isValid()

        // must have the right format
        if(!isValid) {
            setError('Please enter a valid date');
            return false
        }
    
        const today = new Date();
        const enteredDate = new Date(form.birthday);
        const diff = Math.floor((Date.parse(today) - Date.parse(form.birthday)) / 86400000);
    
        // date must be between 0 and 12 months old
        if(Math.abs(enteredDate.getFullYear - today.getFullYear()) > 1 || diff > 364) {
            setError('Please enter a valid date')
            return false;
        }
    
        // date may not occur in the future
        if(today < new Date(form.birthday)) {
            setError('Please enter a birthday of 12 months or less');
            return false
        } 

        // all validations pass. 
        setError('')
        return true;
    }

    useEffect(() => {
        setCalendarMax()

        if(!onLoadOnly && handleDateValidation()) {
            cb(form)
        }

    },[form.birthday])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit form only for onload') 
        if(onLoadOnly && handleDateValidation()) {
            cb(form)
        }
        
    }

    return (
        <div className={`form-container ${onLoadOnly ? 'welcome' : ''}`}>
            {onLoadOnly && <h1>Let's start with your child's information</h1>}
            <form className={`product-form`} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Your child's name (optional)</label>
                    <input type="text" name="name" onChange={handleChange} value={form.name}/>
                </div>
                <div>
                    <label htmlFor="birthday">Birth date/due date </label>
                    <input type="date" name="birthday" onChange={handleChange} placeholder="Birthday" value={form.birthday} min={calendar.min} max={calendar.max}/>
                </div>
                <div>
                    <input type="submit" className="submit-form-btn" value={onLoadOnly ? 'Show Kit' : 'Subscribe Now'} />
                </div>
            </form>
            {error && <Error msg={error} />}
        </div>
    )
}

export default Form
