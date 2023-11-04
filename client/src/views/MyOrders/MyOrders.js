import React, { useState, useEffect } from 'react'
import './MyOrders.css'
import {Link, useParams} from 'react-router-dom'
import Navbar from './../../components/Navbar/Navbar'
import axios from 'axios';


const MyOrders = () => {

  const { _id }= useParams();



  const STATUS_BADGES = {
    "pending": "text-danger",
    "delivered": "text-success",
    "shipped": "text-warning"
  }

  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);



  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem('user' || '{}'))

    if (storeUser?.email) {

      setUser(storeUser)

    } else {

      alert('you are not logged in !...')
      window.location.href = '/login'

    }
  }, [])


  const UserOrder = async () => {
    const storeUser = JSON.parse(localStorage.getItem('user' || '{}'))
    const usetId = storeUser._id
    const response = await axios.get(`/orders/user/${usetId}`)
    setOrders(response?.data?.data)


  }

  useEffect(() => {
    UserOrder()

  }, [user])

  const calculateTotalAmount = () => {
    let total = 0;
    orders?.forEach((order) => {
      const { product, quantity } = order;
      total += product.price * quantity;
    });
    return total;
  };



  return (
    <div>
      <Navbar />
     {/* <Link to='/'> <span className='fs- bg-dark text-light ps-2 pe-2'>⬅</span></Link>  */}
    
     
      <div className='card-order mt-4'>
      <p className='text-center  fs-1'> My  Orders</p>

        {
          orders?.map((order) => {
            const { product, quantity, shipping_address, status, delivery_charges } = order;
            return (
              <div className='my-order-card'>
                <div>

                  <div className=''>
                    <img src={product.productImg} alt={product.name} className='myorder-product-img' />
                  </div>
                </div>

                <div>
                  <div className='ps-5 pt-4'>
                    <Link  to={`/buy/${product._id}`} 
                    className='myorder-product-name'>{product.name}</Link><br/>
                    <span className='fw-bold'> Qty:{quantity} </span> <span className='fw-bold ms-5 text-info'> Price: ₹ {product.price}/- </span>
                    <p className='mt-2 totalamount'>
                      <span className='text-danger fw-bold'>Amount =  ₹ {product.price * quantity}
                      </span></p>
                    <p className='mt-2 fw-bold'>shipping address: {shipping_address}</p>
                    <p className={`status ${STATUS_BADGES[status]}`}> {status} </p>

                    <p className='fw-bold'>Delivery charges: ₹ {delivery_charges}</p>

                    
                  </div>

                </div>


              </div>



            )
          })
        }
         

        <h4 className='total-amount'>TOTAL AMOUNT :  ₹
          <span className=' me-3'>{calculateTotalAmount()}</span> </h4>

      </div>


    </div>


  )
}

export default MyOrders
