import React, { useState, useEffect, useRef } from 'react';
import { IconContext } from 'react-icons';
import logo from '../assets/logo.png';
import dash from '../assets/dash.png';
import link from '../assets/link.png';
import { RiKeyLine, RiArrowRightUpLine } from 'react-icons/ri';
import { IoDocumentTextOutline, IoSettingsOutline } from 'react-icons/io5';
import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { MdLockOutline, MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = ({ show, set }) => {
  const [dropdownVisible, setDropdownVisible] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const sidebarRef = useRef(null); // For detecting outside clicks

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleModal = () => {
    set(false);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  // Close sidebar when clicked outside (small screens only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (show && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        set(false);
      }
    };
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, set]);

  // Conditionally apply the 'bg-customBlack' class if the item is active
  const getItemClasses = (item) =>
    `flex items-center gap-2 p-2 py-5 rounded-lg transition-colors duration-300 cursor-pointer ${
      activeItem === item ? 'bg-customBlack' : 'hover:bg-customBlack'
    }`;

  return (
    <>
      {/* Sidebar for large screens */}
      <div className="hidden lg:block bg-customDeepBlue w-2/4 lg:w-1/5 min-h-screen p-8">
        <div className="flex items-center gap-2 lg:gap-0">
          <img src={logo} className="h-14 w-14" />
          <p className="text-white font-bold">RENI.One</p>
        </div>
        <div className="items-center w-full text-white pl-3 py-4">
          <Link to="/dashboard">
            <div className={getItemClasses('Dashboard')} onClick={() => handleItemClick('Dashboard')}>
              <img src={dash} className="w-6 h-6" />
              <li className="list-none">Dashboard</li>
            </div>
          </Link>

          <Link to="/api">
            <div className={getItemClasses('Api')} onClick={() => handleItemClick('Api')}>
              <IconContext.Provider value={{ size: '25px' }}>
                <RiKeyLine />
              </IconContext.Provider>
              <li className="list-none">Api</li>
            </div>
          </Link>

          <Link to="/webhook">
            <div className={getItemClasses('Webhook')} onClick={() => handleItemClick('Webhook')}>
              <img src={link} alt="" className="w-6 h-6" />
              <li className="list-none">Webhook</li>
            </div>
          </Link>

          <div className={getItemClasses('Doc')} onClick={() => handleItemClick('Doc')}>
            <IconContext.Provider value={{ size: '25px' }}>
              <IoDocumentTextOutline />
            </IconContext.Provider>
            <li className="list-none">Doc</li>
            <IconContext.Provider value={{ size: '25px' }}>
              <RiArrowRightUpLine className="ml-10" />
            </IconContext.Provider>
          </div>

          <div>
            <div className={getItemClasses('Setting')} onClick={() => {
                handleItemClick('Setting');
                toggleDropdown();
              }}>
              <IconContext.Provider value={{ size: '25px' }}>
                <IoSettingsOutline />
              </IconContext.Provider>
              <li className="list-none">Setting</li>
              {dropdownVisible ? (
                <IconContext.Provider value={{ size: '20px' }}>
                  <FaChevronUp />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ size: '20px' }}>
                  <FaChevronDown />
                </IconContext.Provider>
              )}
            </div>
            {dropdownVisible && (
              <div>
                <Link to="/profile">
                  <li
                    className={`flex items-center list-none gap-2 py-2 pl-4 rounded-lg transition-colors duration-300 cursor-pointer ${
                      activeItem === 'Profile' ? 'bg-customBlack' : 'hover:bg-customBlack'
                    }`}
                    onClick={() => handleItemClick('Profile')}
                  >
                    <IconContext.Provider value={{ size: '25px' }}>
                      <AiOutlineUser />
                    </IconContext.Provider>
                    <span className="text-sm">Profile</span>
                  </li>
                </Link>
                <Link to="/changepassword">
                  <li
                    className={`flex items-center list-none gap-2 py-2 pl-4 rounded-lg transition-colors duration-300 cursor-pointer ${
                      activeItem === 'Change Password' ? 'bg-customBlack' : 'hover:bg-customBlack'
                    }`}
                    onClick={() => handleItemClick('Change Password')}
                  >
                    <IconContext.Provider value={{ size: '25px' }}>
                      <MdLockOutline />
                    </IconContext.Provider>
                    <span className="text-sm">Change password</span>
                  </li>
                </Link>
              </div>
            )}
          </div>
          <Link to='/log-in'>
          <div className="flex items-center gap-2 px-2 py-5 hover:bg-customBlack rounded-lg transition-colors duration-300 cursor-pointer">
            <IconContext.Provider value={{ size: '25px' }}>
              <MdLogout />
            </IconContext.Provider>
            <li className="list-none">Logout</li>
          </div>
          </Link>
         
        </div>
      </div>

      {/* Modal for small screens */}
      {show && (
        <div
          ref={sidebarRef}
          className={`fixed inset-0 w-2/3 z-50 bg-customDeepBlue text-white p-4 lg:hidden h-screen transition-transform duration-300 ${show ? 'animate-slideIn' : 'animate-slideOut'}`}
        >
          <div className="flex justify-between items-center">
            <div className="mr-2 flex items-center">
              <img src={logo} className="h-14 w-14" />
              <p className="text-xl font-semibold">RENI.One</p>
            </div>
            <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleModal} />
          </div>
          <div className="mt-8">
            <Link to="/dashboard">
              <div className="flex items-center gap-2 hover:bg-customBlack p-2 py-5 rounded-lg transition-colors duration-300">
                <img src={dash} className="w-6 h-6" />
                <li className="list-none">Dashboard</li>
              </div>
            </Link>

            <Link to="/api">
              <div className="flex items-center gap-2 hover:bg-customBlack p-2 py-5 rounded-lg transition-colors duration-300">
                <IconContext.Provider value={{ size: '25px' }}>
                  <RiKeyLine />
                </IconContext.Provider>
                <li className="list-none">Api</li>
              </div>
            </Link>

            <Link to="/webhook">
              <div className="flex items-center gap-2 hover:bg-customBlack p-2 py-5 rounded-lg transition-colors duration-300">
                <img src={link} alt="" className="w-6 h-6" />
                <li className="list-none">Webhook</li>
              </div>
            </Link>

            <div className="flex items-center gap-2 hover:bg-customBlack p-2 py-5 rounded-lg transition-colors duration-300">
              <IconContext.Provider value={{ size: '25px' }}>
                <IoDocumentTextOutline />
              </IconContext.Provider>
              <li className="list-none">Doc</li>
              <IconContext.Provider value={{ size: '25px' }}>
                <RiArrowRightUpLine className="ml-10" />
              </IconContext.Provider>
            </div>

            <div className="flex items-center gap-2 hover:bg-customBlack p-2 py-5 rounded-lg transition-colors duration-300" onClick={toggleDropdown}>
              <IconContext.Provider value={{ size: '25px' }}>
                <IoSettingsOutline />
              </IconContext.Provider>
              <li className="list-none">Setting</li>
              {dropdownVisible ? (
                <IconContext.Provider value={{ size: '20px' }}>
                  <FaChevronUp />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ size: '20px' }}>
                  <FaChevronDown />
                </IconContext.Provider>
              )}
            </div>

            {dropdownVisible && (
              <div className="pl-4">
                <Link to="/profile">
                  <li className="flex items-center list-none gap-2 py-2 px-3 hover:bg-customBlack rounded-lg transition-colors duration-300">
                    <IconContext.Provider value={{ size: '25px' }}>
                      <AiOutlineUser />
                    </IconContext.Provider>
                    Profile
                  </li>
                </Link>
                <Link to="/changepassword">
                  <li className="flex items-center list-none gap-2 px-3 py-2 hover:bg-customBlack rounded-lg transition-colors duration-300">
                    <IconContext.Provider value={{ size: '25px' }}>
                      <MdLockOutline />
                    </IconContext.Provider>
                    Change password
                  </li>
                </Link>
              </div>
            )}
            <Link to='/log-in'>
            <div className="flex items-center gap-2 px-2 py-5 hover:bg-customBlack rounded-lg transition-colors duration-300">
              <IconContext.Provider value={{ size: '25px' }}>
                <MdLogout />
              </IconContext.Provider>
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
