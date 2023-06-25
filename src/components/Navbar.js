import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "../style/Navbar.css";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className='navbar'>
      <span className='logo'>Toolkit-Shop</span>
      <div className='navbar-nav'>
          <NavLink className='nav-link' to="/">
            <BiHomeAlt2 />
          </NavLink>
          <NavLink className='nav-link cart-icon' to="/cart">
            <BsCart2 /><span className='cart-length'>{items.uniqueQuantity > 0 ? items.uniqueQuantity : ""}</span>
          </NavLink>
          <NavLink className='nav-link' to="/profile">
            <HiOutlineUserCircle />
          </NavLink>
      </div>
    </div>
  )
}

export default Navbar;

// 50: 00 the video will be resume in shaa allah 