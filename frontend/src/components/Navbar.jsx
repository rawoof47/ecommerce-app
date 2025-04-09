import React, { useState, useEffect, useRef, useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef(null);
  const {setShowSearch, getCartCount} = useContext(ShopContext);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      {/* Logo */}
      <Link to='/'> <img src={assets.logo} className="w-36" alt="Logo" /></Link>

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/collection" className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/about" className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/contact" className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* Search, Profile, Cart & Menu Icons */}
      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />

        {/* Profile Icon with Clickable Dropdown */}
        <div className='relative' ref={dropdownRef}>
          <Link to='/login' ><img 
            className='w-5 cursor-pointer' 
            src={assets.profile_icon} 
            alt="Profile" 
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          </Link>

          {dropdownOpen && (
            <div 
              className='absolute right-0 mt-2 w-36 bg-slate-100 text-gray-500 rounded shadow-lg py-3'
            >
              <p className='cursor-pointer px-4 py-2 hover:text-black hover:bg-gray-200'>My Profile</p>
              <p className='cursor-pointer px-4 py-2 hover:text-black hover:bg-gray-200'>Orders</p>
              <p className='cursor-pointer px-4 py-2 hover:text-black hover:bg-gray-200'>Logout</p>
            </div>
          )}
        </div>

        {/* Cart Icon with Count */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>

        {/* Mobile Menu Icon */}
        <img 
          onClick={() => setVisible(!visible)} 
          src={assets.menu_icon} 
          className='w-5 cursor-pointer sm:hidden' 
          alt="Menu" 
        />
      </div>
      
      {/* Mobile Menu */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        {/* Add mobile menu content here */}
        <div className='flex flex-col text-grey-600'>
          <div onClick={()=> setVisible(false)} className='flex item-center gap-4 p-3'>
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/Collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/About'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/Contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
