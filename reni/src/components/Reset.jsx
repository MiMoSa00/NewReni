import React, {useState} from 'react'

// imported images
import Background from '../assets/bgimage.png'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const Reset = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [confirm, setConfirm] = useState('');

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPassword(!confirmPassword);
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
                        <p className='text-center'>Reset Password</p>
                    </div>
                    <div className='bg-gradient-to-b from-blue-800 to-white h-full rounded-md p-3'>
                        <form className='bg-white p-3'>
                            
                            <div className=' lg:ml-0'>
                                <label className='text-lightGray font-normal mb-3 lg:mb-5'>Password</label>
                                <div className=' ring-1 px-2 py-2 mb-2 ring-lightGray rounded-md focus:ring outline-none lg:w-full relative' >
                                    <input className='border-none outline-none' type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='********' />
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} className='absolute right-2 top-3' />
                                </div>
                            </div>
                            <div className=' lg:ml-0'>
                                <label className='text-lightGray font-normal mb-3 lg:mb-5'>Confirm Password</label>
                                <div className=' ring-1 px-2 py-2 mb-2 ring-lightGray rounded-md focus:ring outline-none lg:w-full relative' >
                                    <input className='border-none outline-none ' type={confirmPassword ? 'text' : 'password'}
                                        value={confirm}
                                        onChange={(e) => setConfirm(e.target.value)}
                                        placeholder='********' />
                                    <FontAwesomeIcon icon={confirmPassword ? faEyeSlash : faEye} onClick={toggleConfirmPasswordVisibility} className='absolute right-2 top-3' />
                                </div>
                            </div>
                            <div className=''>
                               
                                <button className='border bg-customDeepBlue font-semibold rounded-md 
                                 px-6 py-2 text-white w-full'>
                                    Reset
                                </button>
                                
                              
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reset