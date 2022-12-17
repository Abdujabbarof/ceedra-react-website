import React from 'react'
import girl from '../Images/girl.svg'
import frame from '../Images/frame.svg'

const Helps = ({darkMode}) => {
  return (
    <section className={darkMode ? "helps dark" : "helps"}>
        <div className="container">
            <div className="left">
                <h1 className={darkMode ? "white" : "h1"}>Seedra helps to grow fast and efficiant</h1>
                <p className={darkMode ? "white" : "h1"}>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George <br /><br />

                Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. 
                Your easy growing experience is our guarantee
                Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more
                <br /><br />
                Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
            </div>
            <div className="right">
                <img src={girl} className="girl" alt="" />
                <img src={frame} className="frame" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Helps