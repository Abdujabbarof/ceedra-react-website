import React, { useState } from 'react'
import './Login.scss'
import axios from 'axios'

function Login({token, setToken}) {
  const [userName, setUserName] = useState("mor_2314")
  const [password, setPassword] = useState("83r5^_")
  const [error, setError] = useState("")

  const loginHandler = (e) =>{
    e.preventDefault()
    setUserName("")
    setPassword("")
    setError("")
    
    axios({
      url: 'https://fakestoreapi.com/auth/login',
      method: 'post',
      data: {
        username: userName,
        password: password
      } 
    }).then((res) => {
      console.log(res.data);
      setToken(res.data);
      localStorage.setItem("userToken", res.data.token)
    }).catch((err) => {
      console.log(err.response.data);
      setError(err.response.data)
      alert(err.response.data)
    })


  }

  return (
    <div className='login'>
        <form className='form' onSubmit={loginHandler}>
            <input type="text" placeholder='Enter your email' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default Login