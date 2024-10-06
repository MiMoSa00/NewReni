import React, { useState } from 'react';
import logo from '../assets/logo.png';
import dash from '../assets/dash.png';
import link from '../assets/link.png';
import { RiKeyLine, RiArrowRightUpLine } from 'react-icons/ri';
import { IoDocumentTextOutline, IoSettingsOutline } from 'react-icons/io5';
import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { MdLockOutline, MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = ({show, set}) => {
  const [dropdownVisible, setDropdownVisible] = useState(true);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(true);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleModal = () => {
    set(false);
  };
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  // Conditionally apply the 'bg-customBlack' class if the item is active
  const getItemClasses = (item) => 
    `flex items-center gap-2 p-2 py-5 rounded-lg transition-colors duration-300 cursor-pointer ${
      activeItem === item ? 'bg-customBlack' : 'hover:bg-customBlack'
    }`;

  return (
    <>
      {/* Hamburger Menu Icon (Visible only when modal is closed) */}
      {/* {!isModalOpen && (
        <div className="lg:hidden p-6">
          <FaBars className="text-black text-2xl cursor-pointer" onClick={toggleModal} />
        </div>
      )} */}

<div className="hidden lg:block bg-customDeepBlue w-2/4 lg:w-1/5 min-h-screen p-8">
        <div className="flex items-center gap-2 lg:gap-0">
          <img src={logo} className="h-14 w-14" />
          <p className="text-white font-bold">RENI.One</p>
        </div>
        <div className="items-center w-full text-white pl-3 py-4">
          <Link to="/dashboard">
            <div
              className={getItemClasses('Dashboard')}
              onClick={() => handleItemClick('Dashboard')}
            >
              <img src={dash} />
              <li className="list-none">Dashboard</li>
            </div>
          </Link>

          <Link to="/api">
            <div
              className={getItemClasses('Api')}
              onClick={() => handleItemClick('Api')}
            >
              <RiKeyLine className='font-bold text-2xl'/>
              <li className="list-none">Api</li>
            </div>
          </Link>

          <Link to="/webhook">
            <div
              className={getItemClasses('Webhook')}
              onClick={() => handleItemClick('Webhook')}
            >
              <img src={link} alt="" className='font-bold w-7 h-7'/>
              <li className="list-none">Webhook</li>
            </div>
          </Link>

          <div
            className={getItemClasses('Doc')}
            onClick={() => handleItemClick('Doc')}
          >
            <IoDocumentTextOutline className="flex-shrink-0 font-bold text-2xl" />
            <li className="list-none">Doc</li>
            <RiArrowRightUpLine className="ml-10 flex-shrink-0 font-bold text-2xl" />
          </div>

          <div>
            <div
              className={getItemClasses('Setting')}
              onClick={() => {
                handleItemClick('Setting');
                toggleDropdown();
              }}
            >
              <IoSettingsOutline className='font-bold text-2xl'/>
              <li className="list-none">Setting</li>
              {dropdownVisible ? <FaChevronUp className='font-bold text-lg'/> : <FaChevronDown className='font-bold text-lg'/>}
            </div>
            {dropdownVisible && (
              <div>
                <Link to="/profile">
                  <li
                    className={`flex font-normal items-center list-none gap-2 pl-3 py-2 rounded-lg transition-colors duration-300 cursor-pointer ${
                      activeItem === 'Profile' ? 'bg-customBlack' : 'hover:bg-customBlack'
                    }`}
                    onClick={() => handleItemClick('Profile')}
                  >
                    <AiOutlineUser />
                    <span className="text-sm">Profile</span>
                  </li>
                </Link>
                <Link to="/changepassword">
                  <li
                    className={`flex items-center font-normal list-none gap-2 lg:pl-3 py-2 rounded-lg transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                      activeItem === 'Change Password' ? 'bg-customBlack' : 'hover:bg-customBlack'
                    }`}
                    onClick={() => handleItemClick('Change Password')}
                  >
                    <MdLockOutline className="icon flex-shrink-0" />
                    <span className="min-w-0 text-sm">Change password</span>
                  </li>
                </Link>
              </div>
            )}
          </div>
          <Link to='/log-in'></Link>
          <div className="flex items-center gap-2 px-2 py-5 hover:bg-customBlack focus-within:bg-customBlack active:bg-customBlack rounded-lg transition-colors duration-300 cursor-pointer">
            <MdLogout />
            <li className="list-none">Logout</li>
          </div>
        </div>
      </div>

      {/* Modal (Visible on small screens when hamburger is clicked) */}
      {show && (
        <div 
        className={`fixed inset-0 w-2/3 z-50 bg-customDeepBlue text-white p-4 lg:hidden h-screen transition-transform duration-300 ${show ? 'animate-slideIn' : 'animate-slideOut'}`}
    >
          <div className="flex justify-between items-center">
            <div className='mr-2 flex items-center'>
            <img src={logo} className="h-14 w-14" />
            <p className="text-xl font-semibold">RENI.One</p>
            </div>
            <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleModal} />
          </div>
          <div className="mt-8">
            <Link to='/dashboard'>
            <div className="flex items-center gap-2 hover:bg-customBlack p-2 py-5 rounded-lg transition-colors duration-300">
              <img src={dash} />
              <li className="list-none">Dashboard</li>
            </div>
            </Link>
           <Link to='/api'>
           <div className="flex items-center gap-4 hover:bg-customBlack p-2 py-5 rounded-lg transition-colors duration-300">
              <RiKeyLine />
              <li className="list-none">Api</li>
            </div>
           </Link> 
            <Link to='/webhook'>
            <div className="flex items-center gap-2 hover:bg-customBlack p-2 py-5 rounded-lg transition-colors duration-300">
              <img src={link} alt="" />
              <li className="list-none">Webhook</li>
            </div>
            </Link>
            
            <div className="flex items-center gap-2 hover:bg-customBlack p-2 py-5 rounded-lg transition-colors duration-300">
              <IoDocumentTextOutline className="flex-shrink-0" />
              <li className="list-none">Doc</li>
              <RiArrowRightUpLine className="ml-10 flex-shrink-0" />
            </div>
            <div className="flex items-center gap-2 hover:bg-customBlack p-2 py-5 rounded-lg transition-colors duration-300">
              <IoSettingsOutline />
              <li className="list-none" onClick={toggleDropdown}>Setting</li>
              {dropdownVisible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {dropdownVisible && (
              <div className="pl-4">
                <Link to="/profile">
                  <li className="flex items-center list-none gap-2 py-5 px-3 hover:bg-customBlack rounded-lg transition-colors duration-300">
                    <AiOutlineUser className="icon" /> Profile
                  </li>
                </Link>
                <Link to="/changepassword">
                  <li className="flex items-center list-none gap-2 px-3 py-5 hover:bg-customBlack rounded-lg transition-colors duration-300">
                    <MdLockOutline className="icon" /> Change password
                  </li>
                </Link>
              </div>
            )}
            <Link to='/log-in'>
            <div className="flex items-center gap-2 px-2 py-5 hover:bg-customBlack rounded-lg transition-colors duration-300">
              <MdLogout />
              <li className="list-none">Logout</li>
            </div>
            </Link>
           
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
