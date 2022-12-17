import React from 'react'
import BlogCards from './BlogCards'

const Blogs = ({darkMode}) => {
  return (
    <section className={darkMode ? "universal dark" : "universal"}>
        <div className="container">
            <div className="top">
                <h1 className={darkMode ? "white" : "h1"}>Our blog.</h1>

                <button>Go to our blog</button>
            </div>

            <BlogCards />
        </div>
    </section>
  )
}

export default Blogs