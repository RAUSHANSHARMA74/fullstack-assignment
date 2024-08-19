import React from 'react'
import "./Footer.css"
import { FcSignature } from "react-icons/fc";

export default function Footer() {
    return (
        <div className="footer">
            <div className="abstract">
                <h1>Abstract</h1>
                <span>Branches</span>
            </div>

            <div className="resources">
                <h1>Resources</h1>
                <span>Blog</span>
                <span>Help Center</span>
                <span>Release Notes</span>
                <span>Status</span>
            </div>


            <div className="community">
                <h1>Community</h1>
                <span>Twitter</span>
                <span>Linkedin</span>
                <span>Facebook</span>
                <span>Dribbble</span>
                <span>Prodcast</span>
            </div>


            <div className="company">
                <h1>Company</h1>
                <span>About Us</span>
                <span>Careers</span>
                <span>Legal</span>

                <h2>Contact Us</h2>
                <span>About Us</span>

            </div>

            <div className="copyright">
                <FcSignature className='signature' />
                <span>@ Copyright 2022</span>
                <span>Abstract Studio Design, Inc.</span>
                <span>All rights reserved</span>
            </div>


        </div>
    )
}
