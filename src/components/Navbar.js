import { signOut } from 'firebase/auth';
import React from 'react';
import { AiOutlineLogout } from "react-icons/ai";
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../style/Navbar.css";
import { auth } from './firebase/firebase.config';

const Navbar = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart);
  // const user = useSelector((state) => state.user?.user[0]?.profile);
  // console.log(JSON.parse(localStorage.getItem('token')));
  const name = localStorage.getItem("name");
  const token = localStorage.getItem("token");
  console.log(localStorage);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      toast.success("Logged Out Successfully");
      navigate("/");
    }).catch((error) => {
      console.log(error);
    })
  }
  
  return (
    <div className='navbar'>
      <div className="logo-user">
      <Link to="/" className='logo'>Toolkit-Shop</Link>
      {token && <h6 className='user-name'>{name}</h6>}
      </div>
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
          {token && 
            <NavLink className='nav-link' to="/abc" onClick={handleSignOut}>
            <AiOutlineLogout />
          </NavLink>
          }
      </div>
    </div>
  )
}

export default Navbar;
