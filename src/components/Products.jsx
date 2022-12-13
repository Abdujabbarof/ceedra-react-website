import React from 'react'
import Cards from './Cards'
import Categories from './Categories'

const Products = () => {
  return (
    <section className="universal">
        <div className="container">
            <div className="top">
                <h1>Our products.</h1>

                <button>View all (20)</button>
            </div>

            <Categories />
            <Cards num="6" />
        </div>
    </section>
  )
}

export default Products