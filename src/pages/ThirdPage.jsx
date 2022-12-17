import React, { useState, useEffect } from 'react'
import './ThirdPage.scss'
import cardImg from '../Images/cardimg.svg'
import Details from '../components/Details'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ThirdPage = ({darkMode}) => {
  const { id } = useParams()
  const [userData, setUserData] = useState([])

  const datas = () => {
    axios.get('https://fakestoreapi.com/products/' + id)
    .then((res) => {
      setUserData(res.data)
    })
  }

  useEffect(() => {
    datas()
  }, [])
 
  return (
    <section className={darkMode ? "details dark" : "details"}> 
        <div className="container">
            <div className="left">
                <img src={userData.image} alt="" />
            </div>
            <div className="right">
                <h1 className={darkMode ? "white" : ""}>{userData.title}</h1>

                <h4 className={darkMode ? "white" : ""}>ID: {userData.id}</h4>

                <div className="bottom">
                    <div className="text">
                        <span>$150.56</span>
                        <h2 className={darkMode ? "white" : ""}>{userData.price}$</h2>
                    </div>

                    <button>Add to card</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ThirdPage