import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'


const ProductCard = ({ _id, name, price,productImg, description }) => {

  return (

    <div>
      
  
    <div className='product-card'>

        <img src={productImg} alt={name}  className='product-img'/>
        <h2 className='product-name'>{name}</h2> 
        <p className='product-description'>{description}</p>
         <p className='product-price'> ₹ {price}</p> 
         <Link className='button buy-now-btn ' 

              onClick={()=>{
              window.location.href=`/buy/${_id}`
              }}
         
         
         >Buy now</Link>

      
    </div>
    </div>
  )
}

export default ProductCard
