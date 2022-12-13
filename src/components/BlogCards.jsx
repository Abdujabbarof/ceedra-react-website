import React from 'react'
import './BlogCards.scss'
import leafs from '../Images/leafes.svg'
import berry from '../Images/berries.svg'
import women from '../Images/women.svg'

const arr = [
    {
        id: 1,
        h2: "How to plant spinach correctly in winter",
        p: "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
        img: leafs
    },
    {
        id: 2,
        h2: "How to plant spinach correctly in winter",
        p: "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
        img: women
    },
    {
        id: 3,
        h2: "How to plant spinach correctly in winter",
        p: null,
        img: berry
    },
    {
        id: 4,
        h2: "How to plant spinach correctly in winter",
        p: null,
        img: berry
    }
]

const BlogCards = () => {
  return (
    <div className="wrap">
        <div className="blogsWrap">
        {
            arr.map(item => (
                <div className="card" key={item.id}>
                    <div className="text">
                        <span><i class="fa-solid fa-clock"></i> 12.09.2021</span>
                        <h2>{item.h2}</h2>
                        <p>{item.p}</p>
                        <button>Read</button>
                    </div>

                    <img className='bg' src={item.img} alt="" />
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default BlogCards