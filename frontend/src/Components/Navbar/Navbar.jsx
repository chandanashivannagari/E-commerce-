import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
    
    const [menu,setmenu]=useState("Shop");
  return (
    <div className='Navbar'>
        <div className='Nav-logo'>
            <img src={logo} alt=''/>
            <p>Shop Me</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setmenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='Nav-login-cart'>
        <Link  to='/login'>
       
        <button>Login</button>
        </Link>
            
        <Link  to='/login'> <img src={cart_icon} alt=''/></Link>
            <div className='Nav-cart-count'>0</div>
        </div>

    </div>
  )
}
 
