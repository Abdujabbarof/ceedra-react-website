import React from 'react'
import fire from '../Images/fire.svg'
import seedra from '../Images/seedra.svg'
import bg_bottom from '../Images/bg-bottom.svg'
import right from '../Images/left-leaf.svg'
import left from '../Images/left.svg'

const Showcase = ({darkMode}) => {
  return (
    <section className={darkMode ? "showcase dark" : "showcase"}>
        <div className="container">
        <div className="left">
            <h1>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
            <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</p>

            <div className="price">
            <img src={fire} />
            <h2>$12.56</h2>
            <h3>$15.56</h3>
            </div>

            <div className="buttons">
            <button className='btn'>Add to card</button>
            <button className='btn second'>Discover</button>
            </div>
        </div>
        <div className="right">
            <img className='seedra' src={seedra} alt="img" />
            <img className='bottom' src={bg_bottom} alt="img" />
            <img className='right' src={right} alt="img" />
            <img className='left-le' src={left} alt="img" />
        </div>
        </div>
    </section>
  )
}

export default Showcase