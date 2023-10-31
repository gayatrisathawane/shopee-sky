import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Signup.css'
import signupimg from './signupimg.png'
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

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

        if (response?.data?.success) {
            window.location.href = "/login"
        }
    }
    useEffect(() => {
        const storeUser = JSON.parse(localStorage.getItem('user') || '{}')

        if (storeUser?.email) {
            alert('you alredy SignUp.....')
            window.location.href = '/'
        }
    }, [])
    return (
        <div className='main-container'>
            <Navbar />

            <div className='container signup-container mt-4 '>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='ps-5 pt-2'>

                            <img src={signupimg}  alt="signimg" />

                        </div>

                    </div>

                    <div className='col-md-6'>
                        <div>

                            <form >
                                <h1 className='text-center'>Signup</h1>

                                <div class="mb-2">
                                    {/* <label htmlFor="name" className="form-label">Name:</label> */}
                                    <input type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}

                                        placeholder='Enter your name'

                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }}
                                    />
                                </div>

                                <div class="mb-2">
                                    {/* <label htmlFor="email" className="form-label">Email:</label> */}
                                    <input type="email" className="form-control" id="email" value={email}
                                        placeholder='Enter your email'
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                </div>

                                <div class="mb-2">
                                    {/* <label htmlFor="password" className="form-label">Password:</label> */}
                                    <input type="password" className="form-control" id="password" value={password}
                                        placeholder='Enter your password'
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} />
                                </div>

                                <div class="mb-2">
                                    {/* <label htmlFor="mobile" className="form-label">Mobile:</label> */}
                                    <input type="text"
                                        className="form-control"
                                        id="mobile"
                                        value={mobile}
                                        placeholder='Enter your mobile'

                                        onChange={(e) => {
                                            setMobile(e.target.value)
                                        }}
                                    />
                                </div>

                                <div class="mb-2">
                                    {/* <label htmlFor="address" className="form-label">Address:</label> */}
                                    <input type="text"
                                        className="form-control"
                                        id="address"
                                        value={address}
                                        placeholder='Enter your address'

                                        onChange={(e) => {
                                            setAddress(e.target.value)
                                        }}
                                    />
                                </div>

                                <div>

                                    <span>Gender :-</span>
                                    <input
                                        type='radio'
                                        id='male'
                                        name='gender'

                                        checked={gender === 'male'}
                                        onClick={() => setGender('male')}
                                    />
                                    <label className='ms-2 fs-5' htmlFor='male'>
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
                                    <label className=' ms-2 fs-5' htmlFor='female'>
                                        Female
                                    </label>
                                </div>

                                <button type="button"
                                    className=' button sign-up-btn fs-4 '
                                    onClick={signup}>Sign up</button>

                                <p className='text-white text-center'><Link to='/login' className='text-decoration-none'> Already have an account ?</Link></p>


                            </form>

                        </div>

                    </div>


                </div>

            </div>



        </div>
    )
}

export default Signup
