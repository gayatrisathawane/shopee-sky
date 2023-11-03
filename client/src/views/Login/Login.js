import React, { useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios'
import loginimg from './asset/loginform.png'
import { Link } from 'react-router-dom';

import showToast from 'crunchy-toast';
import Navbar from '../../components/Navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const login = async () => {

    const response = await axios.post('/login', {
      email, password
    })
    showToast(response?.data?.message ,'success', 8000)

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
      showToast('you alredy login .....','success', 8000)
        window.location.href='/'
    }
},[])

  return (
    <div>
      <Navbar />
    
      <div className=' container login-main-container mt-5'>
        <div className='row'>

          <div className='col-md-5'>
            <div className=''>
            <img src={loginimg} alt="pic" className='mt-4 ms-5 login-img' />
            </div>
             
          </div>

          <div className='col-md-7'>
            <div className='login-form'>
              <form >
                <h1 className=' text-center login-heading mt-5'> Login </h1>
                  
                <div class="mb-2">
                
                  <input type="email" className="form-control" id="email" value={email}
                      placeholder='Enter a your email'
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }} />
                </div>

                <div class="mb-2">
                
                  <input type="password" className="form-control " id="password" value={password}
              placeholder='Enter a your password'
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
