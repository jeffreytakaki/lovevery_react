import React,  { useState, useEffect } from 'react';


const Form = ({cb}) => {
    const [form, setForm] = useState({name: "", birthday: ""})
    const [calendar, setCalendar] = useState({min: '', max: ''})

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

    useEffect(() => {
        setCalendarMax()
    },[])

    const submit = (e) => {
        e.preventDefault();
        setForm({name: "", birthday: ""})
        cb(form)

    }

    return (
        <form className="product-form" onSubmit={submit}>
            <div>
                <label htmlFor="name">Your child's name (optional)</label>
                <input type="text" name="name" onChange={handleChange} value={form.name}/>
            </div>
            <div>
                <label htmlFor="birthday">Birth date/due date </label>
                <input type="date" name="birthday" onChange={handleChange} placeholder="Birthday" value={form.birthday} min={calendar.min} max={calendar.max}/>
            </div>
            <div>
                <input type="submit" className="submit-form-btn" value="Subscribe Now" />
            </div>
        </form>
    )
}

export default Form
