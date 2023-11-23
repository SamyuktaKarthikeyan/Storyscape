import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate();
    const onclicker=()=>{
        navigate('/chapters');
    }
  return (
    <div className='navbar'>
        <div className="navhead">
            <h1>Storyscape</h1>
        </div>
        <div className="navbtn">
            <button onClick={onclicker}>Explore</button>
        </div>
    </div>
  )
}

export default Navbar