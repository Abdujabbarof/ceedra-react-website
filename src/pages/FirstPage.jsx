import React from 'react'
import Blogs from '../components/Blogs'
import Clients from '../components/Clients'
import Helps from '../components/Helps'
import Products from '../components/Products'
import Seeds from '../components/Seeds'
import Showcase from '../components/Showcase'

import './FirstPage.scss'

const FirstPage = () => {
  return (
    <>
      <Showcase />
      <Seeds />
      <Products />
      <Blogs />
      <Clients />
      <Helps />
    </>
  )
}

export default FirstPage