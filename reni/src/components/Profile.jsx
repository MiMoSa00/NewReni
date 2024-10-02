import React, { useState, useRef } from 'react';
import DashboardLayout from './DashboardLayout';


// Imported icons
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { IoWarningOutline } from 'react-icons/io5';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { IoMdImage } from 'react-icons/io';




const Profile = () => {
  const [selected, setSelected] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = (type) => {
    setSelected(type === selected ? null : type);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/png') {
      console.log('File accepted:', file);
      // Handle the file upload
    } else {
      alert('Please upload a PNG file.');
      event.target.value = ''; // Clear the input value
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <DashboardLayout>
      <div className='bg-customLightBlue min-h-screen w-full overflow-x-hidden relative'>
        <div className='px-1 pb-10'>
        <div className="bg-white lg:w-[85%] w-full relative lg:left-20 top-9 rounded-md p-4">
          <h1 className='font-bold text-base'>Billing</h1>
          <div className="flex gap-12 py-2 lg:py-3 items-center">
            <p className='text-lightGray whitespace-nowrap'>Current Plan</p>
            <span className='text-customDeepBlue font-bold text-base'>Free</span>
            <button className='text-white bg-customDeepBlue rounded-lg p-2 text-sm whitespace-nowrap'>Upgrade plan</button>
          </div>

          <div className="lg:flex items-center gap-12 py-3">
            <div className='flex items-center gap-12 pb-2'>
            <p className='text-lightGray'>Current Plan</p>
            <span className=' text-customDeepBlue font-bold text-base'>Paid</span>
            </div>
            
            <div className="lg:flex lg:items-center">
            <p className='text-lightGray'>Your next bill is for <span className='text-black font-medium'>₦20,000 on June 1 2024</span> <br /> <small className='text-gray-800 font-medium text-sm'>
              Mastercard ending in 1111
            </small></p>
            <button className='text-customDeepBlue relative lg:left-3 border border-customDeepBlue rounded-lg p-2 text-sm'>Update card</button>
            </div>
            
          </div>
        </div>
        </div>
       
        <div className='px-1 py-3'>
        <div className="bg-white rounded-md p-4 lg:w-[85%] relative lg:left-20 ">
          <h2 className='font-bold text-base'>Account Information</h2>
          <div className="py-3">
            <div className="gap-6 flex">
              <label className='text-DeepGray font-medium'> Username</label>
              <input type="text" placeholder='Enter username'  className='border border-lightGray outline-none pl-3 p-1 rounded-md lg:w-1/2'/>
            </div>
            <div className="flex gap-14 py-3">
            <label className='text-DeepGray font-medium'> Email</label>
            <input type="text" placeholder='Enter email'  className='border border-lightGray outline-none pl-3 p-1 rounded-md lg:w-1/2'/>
            </div>
            <div className="flex gap-8 pt-2">
              <label className='text-DeepGray font-medium'>Password</label>
              <button className='border border-customDeepBlue text-customDeepBlue p-2 rounded-lg text-base'>Reset Password</button>
            </div>
          </div>
        </div>
        </div>

        <div className='px-1'>
        <div className="bg-white p-3 rounded-md lg:w-[85%] relative lg:left-20">
          <h2 className='font-bold text-base pb-2'>Profile Information</h2>
          <div className="py-3">
            <div className="flex gap-10">
              <label className='text-DeepGray font-medium whitespace-nowrap'>First name</label>
              <input type="text" placeholder='Enter first name'  className='border border-lightGray outline-none pl-3 p-1 rounded-md lg:w-1/2'/>
              </div>
            <div className="flex gap-10 py-3">
              <label className='text-DeepGray font-medium whitespace-nowrap'>Last name</label>
              <input type="text" placeholder='Enter last name'  className='border border-lightGray outline-none pl-3 p-1 rounded-md lg:w-1/2'/>
            </div>
            <div className="flex items-center gap-7">
              <label className='text-DeepGray font-medium whitespace-nowrap'>Account type</label>
              <div className="flex items-center gap-2" onClick={() => handleToggle('Developer')}>
                {selected === 'Developer' ? <IoIosRadioButtonOn className='newpro'/> : <IoIosRadioButtonOff className='newpros'/>}
                <p className='dev'>Developer</p>
              </div>
              <div className="flex items-center gap-2" onClick={() => handleToggle('Business')}>
                {selected === 'Business' ? <IoIosRadioButtonOn  className='newpro'/> : <IoIosRadioButtonOff className='newpros'/>}
                <p className='devs'>Business</p>
              </div>
            </div>
          </div>
        </div>
        </div>
       
        <div className='px-1 py-4'>
        <div className="bg-white p-3 rounded-md lg:w-[85%] relative lg:left-20 ">
          <h2 className='font-bold text-base'>KYC</h2>
          <div className="another-container">
            <div className="lg:flex items-center ">
              <div className="flex gap-24 py-5 lg:w-[60%]">
              <label className='text-DeepGray font-medium'> ID</label>
              <select className='border outline-none w-[63%] lg:w-[60%] border-lightGray p-2 rounded-lg'>
                <option>NIN</option>
                <option>Driver's License</option>
                <option>International passport</option>
              </select>
              </div>
             
              <div className="flex relative lg:-ml-36 xl:-ml-52 left-28 gap-5 items-center">
              <p className='text-blue-500 font-medium'>Upload</p>
        <div className="flex items-center p-2 rounded-lg gap-2 bg-blue-300" onClick={openFileDialog}>
        <span>MY NIN.png</span>
          <IoMdImage className="image-icon" />
         
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/png"
            onChange={handleFileUpload}
          />
        </div>
              </div>
             
            </div>
            <div className="flex items-center py-4 lg:py-2 gap-20">
              <label className='text-DeepGray font-medium'>BVN</label>
              <div className="flex items-center justify-between border w-[64%] lg:w-[36%] border-lightGray p-2 rounded-lg">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='xxx xxxx'
                  className='border-none outline-none pl-2'
                />
                <div className="relative right-5 lg:right-1 text-xl text-lightGray" onClick={toggleShowPassword}>
                  {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-14 py-3">
              <label className='text-DeepGray font-medium'>Address</label>
              <input type="password" placeholder='Enter Address' className='w-[65%] lg:w-[36%] relative right-1 outline-none border border-lightGray rounded-lg p-2' />
            </div>
            <div className="flex gap-16">
              <label className='text-DeepGray font-medium'>Status</label>
              <div className="flex items-center gap-4">
                <IoWarningOutline className='text-orange-500 text-3xl' />
                <p className='text-orange-500 font-medium'>Unverified</p>
                <button className='border border-customDeepBlue text-customDeepBlue px-4 py-1 rounded-md'>Verify</button>
              </div>
            </div>
          </div>
        </div>
        </div>
       
       <div className='px-1 '>
       <div className="bg-white p-4 lg:w-[85%] relative lg:left-20 rounded-md">
          <h2 className='font-bold text-base'>KYB</h2>
          <div className="py-3">
            <div className="flex items-center gap-5">
              <label  className="text-DeepGray font-medium whitespace-nowrap">CAC Certificate <br /> No</label>
            <input className="outline-none border border-lightGray rounded-md pl-2 p-2 lg:w-[35%]"  type="mail" placeholder='RC1234567' />
              {/* <p className='p-kyc'>Upload</p> */}
      
            </div>

            <div className="flex items-center gap-5 py-3">
              <label  className="text-DeepGray font-medium">Memorandum <br /> of Article</label>
              <div className="lg:flex lg:items-center lg:w-full lg:left-1 relative lg:gap-3">
              <input className="outline-none border border-lightGray rounded-md pl-2 p-2 lg:w-[44%] xl:w-[40%]"  type="mail" placeholder='My Memorandum Aritcle.png' />
              <p className='text-right text-blue-500 font-medium'>Uploaded</p>
      
              </div>
           
            </div>
            <div className="flex items-center gap-10 py-3">
      <label className="text-DeepGray font-medium">Registration <br /> Status</label>
     <div className="lg:flex lg:items-center lg:w-full lg:gap-3">
     <input className="outline-none border border-lightGray rounded-md pl-2 p-2 lg:w-[44%] xl:w-[40%]" type="mail" />
     <p className="text-right text-blue-500 font-medium">Upload</p>
     </div>
   
     
    </div>
          
    <div className="flex gap-20">
              <label className='font-medium text-DeepGray'>Status</label>
              <div className="flex items-center gap-2">
                <IoWarningOutline className='text-orange-500 text-3xl' />
                <p className='text-orange-500 font-medium'>Unverified</p>
                <button className='border border-customDeepBlue text-customDeepBlue px-4 py-1 rounded-md'>Verify</button>
              </div>
            </div>
          </div>
        </div>
       </div>
        
        <div className='px-1 py-3 pb-16'>
        <div className='bg-white rounded-md p-3 lg:w-[85%] relative lg:left-20'>
        <div className="danger">
          <h3 className='text-base font-bold py-3'>Danger Zone</h3>
          <div className="border border-red-500 p-2 rounded-md">
          <div className="text-red-500 flex">
          <IoWarningOutline  className='flex-shrink-0 text-2xl'/>
          <small className='lg:text-base'>Deleting your account is permanent 
            and cannot be undone. Your data will be
             deleted within 30 days,
              except we may retain some
               metadata and logs for
                longer where required or
                 permitted by law.</small>
          </div>
        <div className='py-2'>
        <button className='border border-red-500 p-2 rounded-md text-red-500'>Request to Delete Account</button>

        </div>
          </div>
         
        </div>
        </div>
        </div>
       
        
      </div>
    </DashboardLayout>
  );
};

export default Profile;
