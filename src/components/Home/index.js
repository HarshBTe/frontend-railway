import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081')
    .then(res => {
      if(res.data.Status === "Success") {
         setAuth(true)
         setName(res.data.name)
      }
      else{
        setAuth(false)
        setMessage(res.data.Error)
      }
    })
    .then(err => console.log(err));
  }, [])


  const clickDelete = () => {
    axios.get('http://localhost:8081/logout')
    .then(res => {
       location.reload(true);
    }).catch(err => console.log(err));
  }

  const navigate = useNavigate()
  const clickBook = () => {
    navigate('/bookticket')

  }

  return ( 
    <>
    <h1 className='heading'> Welcome to Railway Reservation System </h1>
    <div className='maincontainer'> 
      {
         auth ? 
         <div className='auth-container'>
             <h3>You are Authorized --- {name} </h3>
             <div className='button-container'>
             <button onClick={clickBook}> Book Ticket </button>
             <button onClick={clickDelete}> Logout </button>
             </div>
         </div>
         :
         <div className='auth-container'>
             <h3>{message}</h3>
             <h3> Login Now </h3>
             <Link to="/login"> Login </Link>
          </div>
      }
        
    </div>
    </>
  )
}

export default Home