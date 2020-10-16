import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
export default function Header(props) {
    return (
       <header className="header">
           <div style={{display:'flex'}}>
               <div className="logo">Web Messanger</div>
               <ul className="leftMenu">
                   <li><NavLink to={'/login'}>Login</NavLink></li>
                   <li><NavLink to={'/signup'}>Signup</NavLink></li>
               </ul>
           </div>
           <div>Hi Rix</div>
           <ul>
               <li>
                   <Link to={'#'} onClick={props.layout}>Logout</Link>
               </li>
           </ul>
       </header>
    )
}
