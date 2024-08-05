import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './index.css'

const Register = () => {

     const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
     })
     const navigate = useNavigate()
     const formSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/register', values)
          .then(res => {
            if(res.data.Status === "Success") {
               navigate('/login')
            }
            else{
              alert("Error")
            }
          })
          .then(err => console.log(err));
     }
      
    return (
  
      <div className='maincontainer'>
        <h1>Register</h1>
        <form onSubmit={formSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter Name" name="name"
        onChange={e => setValues({...values, name: e.target.value})} />

            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter Email" name="email"
                   onChange={e => setValues({...values, email: e.target.value})}/>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" name="password"
            onChange={e => setValues({...values, password: e.target.value})}/>

            <button type="submit"> Register </button>

            <Link to='/login'> <p> Click to Login </p></Link>

        </form>
      </div>
    )
}

export default Register