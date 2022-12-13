import React from 'react'
import './SecondPage.scss'
import Categories from '../components/Categories'
import SecondCards from '../components/SecondCards'
import Inputs from '../components/Inputs'

const SecondPage = () => {
  return (
    <div className='main'>
      <Inputs />
      <div className="container">
        <Categories />
      </div>
      <SecondCards />
    </div>
  )
}

export default SecondPage