import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const login = async() =>{

    const response = await axios.post('/login',{
      email,password
    })
      alert(response?.data?.message)

      if(response?.data?.success){

        localStorage.setItem('user',JSON.stringify(response?.data?.data))

        window.location.href='/'

      }
  }
  return (
    <div className='main-container'>
      <form className='login-form-container'>
        <h1 className='text-white text-center'> Login </h1>
        <div class="mb-2">
          <label htmlFor="email" className="form-label text-light fs-4">Email:</label>
          <input type="email" className="form-control" id="email" value={email}

            onChange={(e) => {
              setEmail(e.target.value)
            }} />
        </div>

        <div class="mb-2">
          <label htmlFor="password" className="form-label text-light fs-4">Password:</label>
          <input type="password" className="form-control" id="password" value={password}

            onChange={(e) => {
              setPassword(e.target.value)
            }} />
        </div>

        <button className='button  btn-login' type="button" onClick={login}>Login</button>
      </form>

    </div>
  )
}

export default Login
