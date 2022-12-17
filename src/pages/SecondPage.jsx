import React from 'react'
import './SecondPage.scss'
import Categories from '../components/Categories'
import SecondCards from '../components/SecondCards'
import Inputs from '../components/Inputs'

const SecondPage = ({darkMode}) => {
  return (
    <div className={darkMode ? "main dark": "main"}>
      <Inputs />
      <div className="container">
        <Categories />
      </div>
      <SecondCards />
    </div>
  )
}

export default SecondPage