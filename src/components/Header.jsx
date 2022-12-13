import React from 'react'
import logo from '../Images/logo.svg'
import like from '../Images/heart.svg'
import cart from '../Images/cart.svg'
import menu from '../Images/Menu.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
            <input type="checkbox" id='checkbox' />

            <Link to="/">
                <img src={logo} alt="" />
            </Link>

            <nav>
                <ul>
                    <li><Link to="/second">ALL PRODUCTS</Link></li>
                    <li><Link to="#">ABOUT SEEDRA</Link></li>
                    <li><Link to="#">OUR BLOG</Link></li>
                    <li><Link to="#">CONTACTS</Link></li>
                </ul>

                <form>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                    </a>

                    <div className="input">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="search" placeholder='Search' />
                    </div>
                </form>
            </nav>

            <div className="buttons">
                <button><img src={like} alt="" /></button>
                <button><img src={cart} alt="" /></button>
                <label htmlFor='checkbox' className="btn">
                    <img src={menu} alt="" />
                </label>
            </div>

        </div>
    </header>
  )
}

export default Header