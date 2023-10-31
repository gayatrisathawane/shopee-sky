import React, { useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios'
import loginimg from './asset/loginform.png'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const login = async () => {

    const response = await axios.post('/login', {
      email, password
    })
    alert(response?.data?.message)

    if (response?.data?.success) {

      localStorage.setItem('user', JSON.stringify(response?.data?.data))

      window.location.href = '/'

    }
  }

  useEffect(()=>{
    const storeUser = JSON.parse(localStorage.getItem('user') || '{}')
     console.log(storeUser)
    if(storeUser?.email)
    {
        alert('you alredy login .....')
        window.location.href='/'
    }
},[])

  return (
    <div>
      <Navbar />
      <div className='containe login-main-container mt-5'>
        <div className='row'>

          <div className='col-md-5'>
            <div >
              <img src={loginimg} alt="pic" className='mt-4 ms-3' />
            </div>

          </div>
          <div className='col-md-7'>
            <div className='p-5'>
              <form >
                <h1 className=' text-center'> Login </h1>
                <div class="mb-2">
                  <label htmlFor="email" className="form-label  fs-4">Email:</label>
                  <input type="email" className="form-control" id="email" value={email}

                    onChange={(e) => {
                      setEmail(e.target.value)
                    }} />
                </div>

                <div class="mb-2">
                  <label htmlFor="password" className="form-label  fs-4">Password:</label>
                  <input type="password" className="form-control" id="password" value={password}

                    onChange={(e) => {
                      setPassword(e.target.value)
                    }} />
                </div>

                <button className='button btn-login' type="button" onClick={login}>Login</button>

                <p className='text-white text-center mt-3'><Link to='/signup' className='text-decoration-none'>Need an account ? Create one here ...!</Link></p>

              </form>
            </div>
          </div>

        </div>
      </div>


    </div>



  )
}

export default Login
