import React from 'react'
import './categories.scss'
import leaf from '../Images/leaf.svg'

let arr = [
    {
        id: 1,
        img: leaf,
        text: "ALL"
    },
    {
        id: 2,
        img: leaf,
        text: "BUNDLES"
    },
    {
        id: 3,
        img: leaf,
        text: "HERBS"
    },
    {
        id: 4,
        img: leaf,
        text: "VEGETABLES"
    },
    {
        id: 5,
        img: leaf,
        text: "FRUITS"
    },
    {
        id: 6,
        img: leaf,
        text: "SUPPLIES"
    },
    {
        id: 7,
        img: leaf,
        text: "FLOWERS"
    }
]

const Categories = () => {
  return (
    <div className='categories'>
        <div className="wrap">
        {
            arr.map(item => (
                <div key={item.id} className="item">
                    <img src={item.img} alt="" />
                    <h4>{item.text}</h4>
                </div> 
            ))
        }
        </div>
    </div>
  )
}

export default Categories