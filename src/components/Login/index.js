import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './index.css'

const Login = () => {
    
  const [values, setValues] = useState({
    email: '',
    password: ''
 })
 const navigate = useNavigate()
 axios.defaults.withCredentials = true;
 const formSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', values)
      .then(res => {
        if(res.data.Status === "Success") {
           navigate('/')
        }
        else{
          alert(res.data.Error)
        }
      })
      .then(err => console.log(err));
 }

    return (
  
      <div className='maincontainer'>
        <h1>Login</h1>
        <form onSubmit={formSubmit}>

            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter Email" name="email"
            onChange={e => setValues({...values, email: e.target.value})} />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" name="password"
            onChange={e => setValues({...values, password: e.target.value})} />

            <button type="submit"> Login </button>
            <Link to='/register'> <p> Click to Register </p></Link>
        </form>
      </div>
    )
  
}
export default Login