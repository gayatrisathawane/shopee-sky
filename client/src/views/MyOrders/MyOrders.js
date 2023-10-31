import React, { useState ,useEffect} from 'react'
import './MyOrders.css'
import Navbar from './../../components/Navbar/Navbar'

const MyOrders = () => {

  const[user,setUser]= useState({});

  useEffect(()=>{
    const storeUser = JSON.parse(localStorage.getItem('user' || '{}'))

    if(storeUser?.email){

      setUser(storeUser)

    }else{

      alert('you are not logged in !...')
      window.location.href='/login'

    }
  } ,[])

  return (
    <div>
        <Navbar/>
        <h1>THIs is my order page</h1>
      
    </div>
  )
}

export default MyOrders
