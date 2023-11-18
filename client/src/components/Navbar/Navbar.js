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
    <div className='navbar-main-container p-2'>

      <div className='logo-container'>
        <p><Link to='/' className='logo'> 🛒 ShoppeSky</Link> </p>
      </div>

      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}

      <div >
        <div className='nav-link-container'>
          <Link to='/login' className=' nav-links '>Login</Link>
          <Link to='/signup' className='nav-links'>Signup</Link>
          <Link to='/myorders' className=' nav-links text-light'>MyOrders</Link>
        </div>

      </div>

      <div>

        <span className='text-light fs-5'>Hello 👋,{user?.name || 'user'}</span>


        {
          user?.name ? (
            <span className='text-light fs-5 ms-3 curser-pointer' onClick={() => {
              localStorage.removeItem('user')
              window.location.href = '/login'
            }}> Logout </span>

          ) : null
        }


      </div>



    </div>
/* <div>
    <nav className="navbar navbar-expand-lg  bg-navbar">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/"> 🛒 ShoppeSky</Link>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"></span>
    </button>
    <div className="collapse navbar-collapse text-light" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-">
      <li class="nav-item">
          <Link className="nav-links text-light  mt-" aria-current="page" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-links text-light mt-" aria-current="page" href="/signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links text-light mt-" href="/myorders">MyOrders</Link>
        </li>
      
      </ul>
      <span class="navbar-text">
      <span className='text-light fs-'>Hello 👋,{user?.name || 'user'}</span>

      {
    user?.name ? (
       <p className='text-light fs- ms-3 curser-pointer mt-2' onClick={() => {
        localStorage.removeItem('user')
        window.location.href = '/login'
      }}> Logout </p>

   ) : null   }
      </span>
    </div>
  </div>
</nav>

 


</div> */

  )
}

export default Navbar
