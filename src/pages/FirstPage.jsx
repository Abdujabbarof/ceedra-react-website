import React from 'react'
import Blogs from '../components/Blogs'
import Clients from '../components/Clients'
import Helps from '../components/Helps'
import Products from '../components/Products'
import Seeds from '../components/Seeds'
import Showcase from '../components/Showcase'

import './FirstPage.scss'

const FirstPage = ({darkMode}) => {
  return (
    <>
      <Showcase darkMode={darkMode} />
      <Seeds darkMode={darkMode} />
      <Products darkMode={darkMode} />
      <Blogs darkMode={darkMode} />
      <Clients darkMode={darkMode} />
      <Helps darkMode={darkMode} />
    </>
  )
}

export default FirstPage