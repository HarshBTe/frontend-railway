import {useNavigate} from 'react-router-dom'
import './index.css'

const BookTicket = () => {

    const navigate = useNavigate()
    const formSubmit = (event) => {
        event.preventDefault();
        
        navigate('/booked')
    }
     
    return (
    <div className='maincontainer'>
        <h2> Enter Details of Journey </h2>
        <form onSubmit={formSubmit}>
        <label htmlFor="source"> Source Station </label>
        <input type="text" placeholder="Enter Source" name="source" />

            <label htmlFor="destination">Destination Station </label>
            <input type="text" placeholder="Enter Destination" name="destination" />

            <button type="submit"> Book Now </button>

        </form>
    </div>
    )
}

export default BookTicket