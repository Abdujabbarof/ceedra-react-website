import React from 'react'
import BlogCards from './BlogCards'

const Blogs = () => {
  return (
    <section className='universal'>
        <div className="container">
            <div className="top">
                <h1>Our blog.</h1>

                <button>Go to our blog</button>
            </div>

            <BlogCards />
        </div>
    </section>
  )
}

export default Blogs