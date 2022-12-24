import React from 'react'

const End = ({darkMode, setToken}) => {
    const handlerLogOut = () => {
        setToken("")
        localStorage.clear()
    }
  return (
    <section className={darkMode ? "dark end" : "end"}>
        <div className="container">
            <div className="socials">
                <a href="">
                    <i class="fa-brands fa-instagram"></i> 
                </a>
                <a href="">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </div>
            <p onClick={handlerLogOut}>LOG OUT</p>
        </div>
    </section>
  )
}

export default End