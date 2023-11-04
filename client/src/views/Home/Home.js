import React, { useEffect, useState } from 'react'
import Navbar from './../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import axios from 'axios'
import './Home.css'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  const [products ,setProduct] = useState([]);
  const[search,setSearch]= useState('');


  const loadProducts = async () =>{

    const response= await axios.get('/Products')
    setProduct(response?.data?.data)
  }

  useEffect(()=>{
    loadProducts()

  },[])


    const searchProduct = async() =>{
      if(search ==='') {
        loadProducts();
        return
      }

      const response =await axios.get(`/searchproduct?q=${search}`)
      setProduct(response?.data?.data)
  
  }

  

  useEffect(()=>{

    searchProduct()
  

  }, [search] )
  return (
    <div>
        <Navbar/>

        <input type="text" value={search} className='mt-3 searchbar' onChange={(e)=>{
          setSearch(e.target.value)
        }}/>
        <div className='products-cards'>
       {

        products?.map((product,i)=>{
          const { _id, name, price, productImg, description }=product
          return(
            <ProductCard
             key={i} 
             name={name} 
             price={price} 
              productImg={productImg} 
              description={description}
              _id = { _id }/>
          )

        })

       }

       {
        products.length ===0 ?<h2> Product not found </h2> :null
       }
       </div> 
       <Footer/>
    </div>
  )
}

export default Home
