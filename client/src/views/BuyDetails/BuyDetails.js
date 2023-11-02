import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const BuyDetails = () => {
    const { _id } = useParams();

    const [productDetails, setproductDetails] = useState({})

    let [quantity, SetQuantity] = useState(1)
    const[shippingAdress,setShippingAddress]=useState('')
    const[deliverycharges,setDeliveryCharges]= useState(0)


    const loadProductDetails = async () => {

        const response = await axios.get(`/products/${_id}`)

        setproductDetails(response?.data?.data)
    }


    useEffect(() => {
        loadProductDetails()

    })


    const increQuantity = () => {

        SetQuantity(++quantity)
    }

    const decrQuantity = () => {

        if (quantity === 1) return

        SetQuantity(--quantity)
    }


    const orderPlace = async() =>{

        const userStore = JSON.parse(localStorage.getItem('user'))

        const obje= {
            user:userStore?._id,
            product:productDetails._id,
            quantity:quantity ,
            shipping_address:shippingAdress,
            delivery_charges:deliverycharges 
        }

        const response = await axios.post('/orders',obje)

        alert(response?.data?.message)

        if(response?.data.success)
        {
            window.location.href="/myorders"
        }
    }



    return (
        <div>

            <div className='d-flex'>
                <div>
                    <img src={productDetails.productImg} alt={productDetails.name} />

                </div>

                <div>
                    <div>
                        <h1>{productDetails.name}</h1>
                        <h2>Price :{productDetails.price}</h2>
                        <p>{productDetails.description}</p>
                        <button type="button" onClick={increQuantity}>+</button>
                        {quantity}
                        <button type="button" onClick={decrQuantity}>-</button><br/><br/>

                        <input type="text" 
                        placeholder='enter your shiiping address'
                        value={shippingAdress}

                        onChange={(e)=>{
                            setShippingAddress(e.target.value)
                        }}
                        />

                        < input type="radio"  
                        value ={deliverycharges} 
                        name='deliverycharges'
                        onClick={()=>{
                            setDeliveryCharges(40)
                        }}/>Normal delivery charges 

                        < input type="radio"  
                        value ={deliverycharges}
                        name='deliverycharges'

                        onClick={()=>{
                            setDeliveryCharges(100)
                        }}
                        
                        /> SuperFast delivery charges

                        <button type="button" onClick={orderPlace} className='button'>Order Now</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default BuyDetails
