import React from 'react'
import "./Navbar.css"
import { FcSignature } from "react-icons/fc";
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div className="parent_navbar">
            <div className="navbar">
                <div className="navbar_left">
                    <Link to="/">
                        <FcSignature className='signature' />
                    </Link>
                    <span>Abstract</span>
                    <span></span>
                    <span>Help Center</span>
                </div>
                <div className="navbar_right">

                    <Link to="/addrequest">
                        <button>Submit a request</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
