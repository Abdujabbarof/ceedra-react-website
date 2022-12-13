import React from 'react'

const Inputs = () => {
  return (
    <section className="searchInputs">
        <div className="container">
            <form>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Search' />
            </form>

            <select>
                <option value="Most expensive">Most expensive</option>
                <option value="Most expensive">Most expensive</option>
                <option value="Most expensive">Most expensive</option>
            </select>
        </div>
    </section>
  )
}

export default Inputs