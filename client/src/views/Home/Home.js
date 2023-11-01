import React, { useEffect, useState } from 'react'
import Navbar from './../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import axios from 'axios'

const Home = () => {
  const [products ,setProduct] = useState([]);


  const loadProducts = async () =>{

    const response= await axios.get('/Products')
    setProduct(response?.data?.data)
  }

  useEffect(()=>{
    loadProducts()

  },[])
  return (
    <div>
        <Navbar/>
        <div className='d-flex justify-content-around flex-wrap'>

       {

        products.map((product,i)=>{
          const { name, price, productImg, description }=product
          return(
            <ProductCard key={i} name={name} price={price}  productImg={productImg} description={description}/>
          )

        })

       }
       </div>
      
    </div>
  )
}

export default Home
