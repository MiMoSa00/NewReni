import React, { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import small from '../assets/smallz.png';
import { FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';
import { createPortal } from 'react-dom';

const TopBar = ({ show, set }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleModal = () => {
    set(!show);
    console.log(show);
  };

  return (
<div className="bg-white w-full top-0 sticky flex h-16 items-center gap-10 p-2"> {/* Ensure full width and padding */}
  {/* Hamburger Icon */}
  <div className="w-10 flex justify-center lg:hidden"> {/* Fixed width to avoid shifting */}
    {!show && (
      <FaBars className="text-black text-2xl cursor-pointer" onClick={toggleModal} />
    )}
  </div>
  <div className="flex items-center lg:w-full w-4/5 justify-end gap-4 relative">
    <div className="flex items-center gap-4"> {/* flex-grow to ensure full width */}
      <AiOutlineBell className="font-bold text-lightGray" />
      <img src={small} className="lg:w-7 lg:h-7 w-5 h-5 max-w-full" alt="small logo" /> {/* Added max-w-full */}
      <div className="text-black -ml-3">
        <h2 className="lg:font-medium font-normal text-sm">Fireswitch Technologies</h2>
        <p className="text-xs">Developer</p>
      </div>
    </div>

    {/* Dropdown Section */}
    <div onClick={toggleDropdown} className="relative cursor-pointer">
      {dropdownVisible ? <FaChevronUp className="text-lightGray" /> : <FaChevronDown className="text-lightGray" />}
      {dropdownVisible && createPortal (
        <ul className="bg-white absolute right-8 lg:top-16 lg:right-20 xl:right-[5.6%] top-14 z-[99] w-48 shadow-md p-2 rounded-md">
          <li className="flex items-center gap-2 p-1 hover:bg-gray-200">
            <img src={small} className="w-5 h-5 lg:w-7 lg:h-7 max-w-full" alt="small logo" />
            Sheda House
          </li>
          <p className="text-xs pl-6 relative left-2 text-gray-500 lg:left-4">shedahouse.com</p>
          <li className="flex items-center gap-2 p-1 hover:bg-gray-200">
            <img src={small} className="w-5 h-5 lg:w-7 lg:h-7 max-w-full" alt="small logo" />
            Renitechnologies
          </li>
          <p className="text-xs pl-6 text-gray-500 relative left-2 lg:left-4">renitechnologies.com</p>
        </ul>,
        document.body
      )}
    </div>

    {/* Grid Icon (Visible on large screens) */}
    <TfiLayoutGrid3Alt className="text-gray-500 hidden lg:flex" />
  </div>
</div>

  );
};

export default TopBar;
