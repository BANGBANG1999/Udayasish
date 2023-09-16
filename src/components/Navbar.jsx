import React, {useState} from 'react'
import "./Navbar.css"
import Contact from './Contact';


function Navbar() {
  
  return (
    <div className='navbar_section'>
      <div className="navbar_container">
        <div className="links">
            <img className="logo" src="/img/udayasish.png">

            </img>
            <div className="list">
                <li className='li'>Home</li>
                <li className='li'>Studio</li>
                <li className='li'>Works</li>
                <li className='li'>Contact</li>
            </div>
        </div>
        <div className="icons">
            <img className="search" src="/img/search.png"></img>
            <button className="hire">Hire me</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
