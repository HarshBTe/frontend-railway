import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register';
import BookTicket from './components/BookTicket';
import BookedTicket from './components/BookedTicket';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/bookticket" element={<BookTicket />} />
        <Route path="/booked" element={<BookedTicket />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
