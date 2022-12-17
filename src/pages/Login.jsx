import React from 'react'
import './Login.scss'

function Login() {
  return (
    <div className='login'>
        <form>
            <input type="text" placeholder='Enter your email' />
            <input type="password" placeholder='Enter your password' />
            <button>Log In</button>
        </form>
    </div>
  )
}

export default Login