import React from 'react'
import cardImg from '../Images/cardimg.svg'

const Details = ({data}) => {
    console.log(data);
  return (
    <section className='details'> 
        <div className="container">
            <div className="left">
                <img src={cardImg} alt="" />
            </div>
            <div className="right">
                <h1>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</h1>

                <h4>ID: 1</h4>

                <div className="bottom">
                    <div className="text">
                        <span>$15.56</span>
                        <h2>$12.56</h2>
                    </div>

                    <button>Add to card</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details