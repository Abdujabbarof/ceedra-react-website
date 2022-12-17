import React from 'react'
import lime from '../Images/lime.svg'
import bottom from '../Images/bottom-leaf.svg'
import right from '../Images/right-leaf.svg'
import nut from '../Images/nut.svg'

const Seeds = ({darkMode}) => {
  return (
    <section className={darkMode ? "seeds dark" : "seeds"}>
        <div className="container">
            <h3>We sell seeds </h3>
            <p>that always sprout and gardening supplies which never break</p>

            <img className='lime' src={lime} alt="" />
            <img className='bottom' src={bottom} alt="" />
            <img src={right} alt="" className="right" />
            <img className='nut' src={nut} alt="" />
        </div>
    </section>
  )
}

export default Seeds