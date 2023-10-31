import React, { useState } from 'react'
import axios from 'axios'
import './Signup.css'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('female');

    const signup = async () => {

        if (!name) {
            alert("name is required")
            return;
        }
        if (!email) {
            alert("email is required")
            return;
        }
        if (!password) {
            alert("password is required")
            return;
        }
        if (!mobile) {
            alert("mobile is required")
            return;
        }
        if (!address) {
            alert("address is required")
            return;
        }

        const response = await axios.post('/signup', {
            name,
            email,
            password,
            address,
            mobile,
            gender
        })

        alert(response?.data?.message)

        if(response?.data?.success){
            window.location.href = "/login"
        }
    }
    return (
        <div className='main-container'>

            <form className='sign-form-container'>
                <h1 className='text-center text-light'>Signup</h1>

                <div class="mb-2">
                    <label htmlFor="name" className="form-label text-light fs-4">Name:</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        value={name}

                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>

                <div class="mb-2">
                    <label htmlFor="email" className="form-label text-light fs-4">Email:</label>
                    <input type="email" className="form-control" id="email" value={email}

                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                </div>

                <div class="mb-2">
                    <label htmlFor="password" className="form-label text-light fs-4">Password:</label>
                    <input type="password" className="form-control" id="password" value={password}

                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                </div>

                <div class="mb-2">
                    <label htmlFor="mobile" className="form-label text-light fs-4">Mobile:</label>
                    <input type="text"
                        className="form-control"
                        id="mobile"
                        value={mobile}

                        onChange={(e) => {
                            setMobile(e.target.value)
                        }}
                    />
                </div>

                <div class="mb-2">
                    <label htmlFor="address" className="form-label text-light fs-4">Address:</label>
                    <input type="text"
                        className="form-control"
                        id="address"
                        value={address}

                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                    />
                </div>

                <div>
                    <input
                        type='radio'
                        id='male'
                        name='gender'
                        checked={gender === 'male'}
                        onClick={() => setGender('male')}
                    />
                    <label className='text-white ms-2 fs-4' htmlFor='male'>
                        Male
                    </label>

                    <input
                        type='radio'
                        id='female'
                        name='gender'
                        checked={gender === 'female'}
                        onClick={() => setGender('female')}
                        className='ms-4'
                    />
                    <label className='text-white ms-2 fs-4' htmlFor='female'>
                        Female
                    </label>
                </div>

                <button type="button" 
                className=' button sign-up-btn fs-4 ' 
                onClick={signup}>Sign up</button>


            </form>
            
        </div>
    )
}

export default Signup
