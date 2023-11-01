import React from 'react'
import './ProductCard.css'

const ProductCard = ({ name, price,productImg, description }) => {
  return (
    <div className='product-card'>

        <img src={productImg} alt={name}  className='product-img'/>
        <h2 className='product-name'>{name}</h2> 
        <p className='product-description'>{description}</p>
         <p className='product-price'> ₹ {price}</p> 
         <button className='button buy-now-btn'>Buy now</button>

      
    </div>
  )
}

export default ProductCard
