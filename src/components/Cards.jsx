import React, { useEffect, useState } from 'react'
import img from '../Images/cardimg.svg'
import star from '../Images/star.svg'
import cart from '../Images/cart.svg'
import like from '../Images/like2.svg'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Cards = ({num}) => {

    const [userData, setUserData] = useState([])

    const datas = () => {
        axios.get(`https://fakestoreapi.com/products?limit=` + num)
        .then((res) => {
            setUserData(res.data)
        })
    }

    useEffect(() => {
        datas();
    }, [])
    
  return (
    <div className='cardsWrap'>
        {
            userData.map(data => {
                return (
                    <div className="card" key={data.id}>
                        <img className='product' src={data.image} alt="" />

                        <div className="like">
                            <img src={like} alt="" />
                        </div>

                        <div className="stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p>({data.id})</p>
                        </div>

                        <h4>{data.title}</h4>

                        <div className="buy">
                            <h2>{data.price}$</h2>
                            <Link to={`/second/${data.id}`} className="btn"><img src={cart} alt="" /></Link>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cards