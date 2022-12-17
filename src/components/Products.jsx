import React from 'react'
import Cards from './Cards'
import Categories from './Categories'

const Products = ({darkMode}) => {
  return (
    <section className={darkMode ? "universal dark" : "universal"}>
        <div className="container">
            <div className="top">
                <h1 className={darkMode ? "white" : "h1"}>Our products.</h1>

                <button>View all (20)</button>
            </div>

            <Categories />
            <Cards num="6" />
        </div>
    </section>
  )
}

export default Products