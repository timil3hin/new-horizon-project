import React from "react"
import { Link } from "react-router-dom"
import reactLogo from "../images/logo192.png"

export default function Header() {
    return (
        <div>
            <header>
                <nav>
                    <img src={reactLogo} alt="react-logo" width="40px" />
                    <ul className="nav-items">
                        <li ><Link to='/' className='link'>Home</Link></li>
                        <li><Link to='/about' className='link'>About</Link></li>
                        <li><Link to='/blog' className='link'>Blog</Link></li>
                        <li><Link to='/events' className='link'>Events</Link></li>
                        <li><Link to='/interest' className='link'>Interest</Link></li>
                        <li><Link to='/faq' className='link'>FAQ</Link></li>
                        <li><Link to='/qoutes' className='link'>Qoutes</Link></li>                        
                    </ul>
                </nav>
            </header>
        </div>
    )
}