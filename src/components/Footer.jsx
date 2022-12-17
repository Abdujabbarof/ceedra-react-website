import React from 'react'
import logo from '../Images/bigLogo.svg'
import { Link } from 'react-router-dom'

const Footer = ({darkMode}) => {
  return (
    <footer className={darkMode ? "dark" : "header"}>
        <ul className="container">
            <li><Link to="/second">ALL PRODUCTS</Link></li>
            <li><Link to="/third">ABOUT SEEDRA</Link></li>
            <li className='not'><Link>OUR BLOG</Link></li>
            <Link className='logo'>
                <img src={logo} alt="" />
            </Link>
            <li><Link>Terms&Conditions</Link></li>
            <li><Link>Privacy Policy</Link></li>
        </ul>
    </footer>
  )
}

export default Footer