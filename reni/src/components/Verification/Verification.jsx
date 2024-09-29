import React, {useState} from 'react'

// imported images
import Background from '../../assets/bgimage.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Verification = () => {

    const [otp, setOtp] = useState(new Array(6).fill(""))


  function handleChange(e, index) {
    if (isNaN(e.target.value)) return false

    const updatedOtp = [...otp]
    updatedOtp[index] = e.target.value

    setOtp(updatedOtp)

    if (e.target.value && index < 5) {
      e.target.nextSibling.focus()
    } else if (!e.target.value && index > 0) {
      e.target.previousSibling.focus()
    }
  }

  function handleBackspace(e, index) {
    if (e.key === 'Backspace' && !e.target.value) {
      const updatedOtp = [...otp]
      updatedOtp[index] = ''
      setOtp(updatedOtp)

      if (index > 0) {
        e.target.previousSibling.focus()
      }
    }
  }
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
                        <p className='text-center'>Sign up</p>
                    </div>
                    <div className='bg-gradient-to-b from-blue-800 to-white h-full rounded-md p-3'>
                        <form className='bg-white p-3'>
                            <p className='text-lightGray'>Enter your email address, you 'll be sent an OTP to verify your email.</p>
                            <div className='my-2'>
                                <label className='mb-2 block text-lightGray'>Email</label>
                                <input className='w-full ring-1 ring-gray-400 h-10 rounded-md' type='email' />
                            </div>
                            <div>
                                <button className='border rounded-md bg-customDeepBlue px-6 py-2 text-white'>
                                    Start Verification
                                </button>
                            </div>
                            <div className='my-6'>
                                <p className='mb-2'>OTP</p>
                                <div className='grid grid-cols-6 gap-3'>

                                    {
                                        otp.map((data, i) => {
                                            return  <input type='otp' className='h-10 text-center  ring-1 ring-gray-400 focus:ring-4 outline-none rounded-md' value={data} maxLength={1} onChange={(e) => handleChange(e, i)} onKeyDown={(e) => handleBackspace (e, i)} /> 
                                        })
                                    
                                       
                                    }
                                    {/* <input type='number' className='h-10  ring-1 ring-gray-400  rounded-md' />
                                    <input type='number' className='h-10  ring-1 ring-gray-400  rounded-md' />
                                    <input type='number' className='h-10  ring-1 ring-gray-400  rounded-md' />
                                    <input type='number' className='h-10  ring-1 ring-gray-400 rounded-md' />
                                    <input type='number' className='h-10  ring-1 ring-gray-400 rounded-md' /> */}
                                </div>
                            </div>
                            <div className=''>
                                <Link to='/sign-up'>
                                <button className='border border-customDeepBlue font-semibold rounded-md 
                                 px-6 py-2 text-customDeepBlue w-full'>
                                    Complete Verification
                                </button>
                                </Link>
                              
                            </div>
                            <div className='my-3'>
                                <p className='text-center text-lightGray'>Already have an account? 
                                    <Link to='/log-in'>
                                    <span className='text-customDeepBlue'>Login</span>
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

export default Verification