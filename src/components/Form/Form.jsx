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
        cb(form)
    }

    return (
        <form onSubmit={submit}>
            <label htmlFor="name">Child's name:</label>
            <input type="text" name="name" onChange={handleChange} placeholder="Enter name" value={form.name}/>
            <label htmlFor="birthday">Child's Birthdate: </label>
            <input type="date" name="birthday" onChange={handleChange} placeholder="Birthday" value={form.birthday} min={calendar.min} max={calendar.max}/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form
