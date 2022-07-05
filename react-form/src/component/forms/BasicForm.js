import React,{useState} from 'react'
import axios from "axios";
const BasicForm = () => {

    const [input,setInput]=useState({
        name:'',
        email:'',
        phone:'',
        date:''
    })
    
    function handleChange(event){
        const {name,value}=event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        console.log(input);
        const newTest={
            name:input.name,
            email:input.email,
            phone:input.phone,
            date:input.date
        }
        axios.post('http://localhost:3001/create',newTest)
    }
  return (
    <>
    <form >
        <div>
            <label htmlFor='text'>Name</label>
            <input type="text" name="name" id="name" autoComplete="off" value={input.name} onChange={handleChange}
             />
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" autoComplete="off" value={input.email} onChange={handleChange}
             />
        </div>
        <div>
            <label htmlFor='phone'>phone</label>
            <input type="number" name="phone" value={input.phone}   onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='date'>Date</label>
            <input type="date" value={input.date} name="date"   onChange={handleChange} />
        </div>

        <button  onClick={handleClick}>Submit</button>
    </form>

    
    </>
  )
}

export default BasicForm