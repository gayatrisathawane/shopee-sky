import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div>
    <section class="">
 
    <footer className="text-center text-white  footer">
   
      <div class="container p-4 pb-0">
       
    
          <p class="d-flex justify-content-center align-items-center">
            <span class="me-3">Register for free</span>
            <Link type="button" className="btn btn-outline-light btn-rounded" to="/signup">
              Sign up!
            </Link>
          </p>
      
     
      </div>
    
  
  
      <div class="text-center p-3">
        © 2020 Copyright:
        <a className='text-decoration-none text-light' href>
             GayatriSathawane@gmail.com</a>
      </div>
   
    </footer>
    </section>
    </div>
  
  )
}

export default Footer
