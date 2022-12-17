import React from 'react'
import profile from '../Images/profile.svg'
import star from '../Images/star.svg'

const Clients = ({darkMode}) => {
  return (
    <section className={darkMode ? "clients dark" : "clients"}>
            <h1 className={darkMode ? "white" : ""}>What out clients say</h1>
            <div className="wrap">
                <div className="cardsWrap">
                    <div className={darkMode ? "card dark" : "card"}>
                        <div className="top">
                            <img src={profile} alt="" />
                            <div className="text">
                                <h5 className={darkMode ? "white" : ""}>Carla Samantoes-Diego</h5>
                                <p className={darkMode ? "white" : ""}>12.09.2021</p>
                            </div>
                        </div>
                        <div className="stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p className={darkMode ? "white" : ""}>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George
                        Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                    </div>

                    <div className={darkMode ? "card dark" : "card"}>
                        <div className="top">
                            <img src={profile} alt="" />
                            <div className="text">
                                <h5 className={darkMode ? "white" : ""}>Carla Samantoes-Diego</h5>
                                <p className={darkMode ? "white" : ""}>12.09.2021</p>
                            </div>
                        </div>
                        <div className="stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p className={darkMode ? "white" : ""}>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George
                        Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                    </div>

                    <div className={darkMode ? "card dark" : "card"}>
                        <div className="top">
                            <img src={profile} alt="" />
                            <div className="text">
                                <h5 className={darkMode ? "white" : ""}>Carla Samantoes-Diego</h5>
                                <p className={darkMode ? "white" : ""}>12.09.2021</p>
                            </div>
                        </div>
                        <div className="stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p className={darkMode ? "white" : ""}>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George
                        Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Clients