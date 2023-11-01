import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [user, setUser] = useState({});

  useEffect(() => {

    const userStore = JSON.parse(localStorage.getItem(('user') || '{}'))
    setUser(userStore)

  }, [])



  return (
    <div className='d-flex justify-content-between navbar-container p-2 align-items-center'>

      <div className='logo-container'>
        <p><Link to='/' className='logo'> 🛒 ShoppeSky</Link> </p>
      </div>

      <div>
        <div className='nav-link-container'>
          <Link to='/login' className='nav-links'>Login</Link>
          <Link to='/signup' className='nav-links'>Signup</Link>
          <Link to='/myorders' className='nav-links'>MyOrders</Link>
        </div>

      </div>

      <div>

        <span className='text-light fs-4 ms-2'>Hello,{user?.name || 'user'}</span>


        {
          user?.name ? (
            <span className='text-light fs-5 ms-3 curser-pointer' onClick={() => {
              localStorage.removeItem('user')
              window.location.href = '/login'
            }}> Logout</span>

          ) : null
        }


      </div>



    </div>

  )
}

export default Navbar
