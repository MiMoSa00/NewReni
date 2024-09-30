import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// imported images
import Background  from '../../assets/bgimage.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen'>
            <div className='hidden md:block'>
                <img src={Background} className='object-cover' />
            </div>
            <div className='bg-customLightBlue py-8 min-h-screen'>
                <div className='flex items-center justify-center gap-3'>
                    <img src={logo} className='h-14 w-14' />
                    <p className='text-customDeepBlue font-bold'>RENI.One</p>
                </div>
                <div className='mt-[10%] mx-4'>
                    <div className='my-8 text-blue-900 font-bold text-lg'>
                        <p className='text-center'>Welcome Back</p>
                    </div>
                    <div className='bg-gradient-to-b from-blue-800 to-white h-full rounded-md p-3'>
                        <form className='bg-white p-3'>
                            <p className='text-lightGray'>Enter your email address, you 'll be sent an OTP to verify your email.</p>
                            <div className='my-2'>
                                <label className='mb-2 block text-lightGray'>Email</label>
                                <input className='w-full ring-1 pl-3 ring-gray-400 focus:ring outline-none h-10 rounded-md' type='email' />
                            </div>
                            <div className='my-2'>
                                <label className='mb-2 block text-lightGray'>Password</label>
                                <div className=' ring-1 px-2 py-2 mb-2 ring-gray-400 rounded-md focus:ring outline-none lg:w-full relative' >
                                    <input className='border-none outline-none' type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='********' />
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} className='absolute right-2 top-3' />
                                </div>
                            </div>
                            <Link to='forgot'>
                            <p className='text-right text-customDeepBlue font-medium mb-1'>Forgot Password?</p>
                            </Link>
                            
                           
                            <div className=''>
                                <Link to='/dashboard'>
                                <button className='border bg-customDeepBlue font-semibold rounded-md 
                                 px-6 py-2 text-white w-full'>
                                   Login
                                </button>
                                </Link>
                              
                            </div>
                            <div className='my-3'>
                                <p className='text-center text-lightGray'>Don't have an account? 
                                    <Link to='/sign-up'>
                                    <span className='text-customDeepBlue font-medium'>Signup</span>
                                    </Link>
                                   </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login