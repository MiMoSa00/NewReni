import React, { useState } from 'react';
import '../App.css';

// imported images
import Background from '../assets/bgimage.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
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
    const [checked, setChecked] = useState(false);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen'>
            {/* Background image side */}
            <div className='hidden md:block relative'>
                <img 
                    src={Background} 
                    className='object-cover h-screen w-full fixed left-0 top-0 md:w-1/2'
                    alt="Background"
                />
            </div>

            {/* Form side */}
            <div className='bg-customLightBlue py-2 min-h-full overflow-y-auto md:w-full sm:w-full  ml-auto'>
                <div className='flex lg:mt-6 xl:mt-8 items-center justify-center gap-3'>
                    <img src={logo} className='h-14 w-14' alt="Logo" />
                    <p className='text-customDeepBlue font-bold'>RENI.One</p>
                </div>
                <div className='mt-[20%] mx-4'>
                    <div className='my-2 text-blue-900 font-bold text-lg'>
                        <p className='text-center'>Let's get started</p>
                    </div>
                    <div className='bg-gradient-to-b from-customDeepBlue to-white h-full rounded-md p-3'>
                        <form className='bg-white p-3 gap-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>
                                <div>
                                    <label className='mb-2  text-lightGray'>First name</label>
                                    <input className='w-[100%] px-3 block ring-1 ring-gray-400 focus:ring outline-none h-10 rounded-md' type='text' />
                                </div>
                                <div>
                                    <label className='mb-2 block text-lightGray'>Last name</label>
                                    <input className='w-full ring-1 px-3 ring-gray-400 focus:ring outline-none h-10 rounded-md' type='text' />
                                </div>
                            </div>

                            <div className='my-2'>
                                <label className='text-lightGray font-normal mb-3 lg:mb-5'>Phone number</label>
                                <input className='w-[100%] ring-1 px-3 py-2 mb-2 ring-lightGray rounded-md focus:ring outline-none lg:w-full ' type='text' placeholder='0918876568' />
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                <div>
                                    <label className='text-lightGray'>Username</label>
                                    <input className='w-[100%] px-3 block ring-1 ring-gray-400 h-10 focus:ring outline-none rounded-md' type='text' />
                                </div>
                                <div className='w-full lg:ml-0 '>
                                    <label className='block text-lightGray'>Gender</label>
                                    <select className='w-full ring-1  ring-gray-400 focus:ring outline-none h-10 rounded-md'>
                                        <option value="Male/Female">Male/Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Prefer Not to say">Prefer Not To Say</option>
                                    </select>
                                </div>
                            </div>

                            <div className='lg:ml-0'>
                                <label className='text-lightGray font-normal mb-3 lg:mb-5'>Password</label>
                                <div className='ring-1 px-3 py-2 mb-2 ring-lightGray rounded-md focus:ring outline-none lg:w-full relative'>
                                    <input
                                        className='border-none outline-none w-full'
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='********'
                                    />
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} className='absolute right-2 top-3 cursor-pointer' />
                                </div>
                            </div>

                            <div className='lg:ml-0'>
                                <label className='text-lightGray font-normal mb-3 lg:mb-5'>Confirm Password</label>
                                <div className='ring-1 px-3 py-2 mb-2 ring-lightGray rounded-md focus:ring outline-none lg:w-full relative'>
                                    <input
                                        className='border-none outline-none w-full'
                                        type={confirmPassword ? 'text' : 'password'}
                                        value={confirm}
                                        onChange={(e) => setConfirm(e.target.value)}
                                        placeholder='********'
                                    />
                                    <FontAwesomeIcon icon={confirmPassword ? faEyeSlash : faEye} onClick={toggleConfirmPasswordVisibility} className='absolute right-2 top-3 cursor-pointer' />
                                </div>
                            </div>

                            <div className='flex gap-2 my-3 items-center'>
                                <input
                                    type="checkbox"
                                    className={`custom-checkbox h-6 w-6 cursor-pointer appearance-none bg-gray-300 flex items-center justify-center ${checked ? 'bg-green-500' : ''}`}
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                />
                                {checked && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="absolute text-white text-lg pointer-events-none"
                                    />
                                )}
                                <div>
                                    <p className='text-lightGray'>I agree to the <span className='text-customDeepBlue font-medium'>Terms and Conditions</span> and <span className='text-customDeepBlue font-medium'>Privacy Policy</span></p>
                                </div>
                            </div>

                            <div className=''>
                                <Link to='/dashboard'>
                                    <button className='border bg-customDeepBlue font-semibold rounded-md px-6 py-2 text-white w-full'>
                                        Create account
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
