import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Nopage from '../Pages/Nopage/Nopage';
import About from '../Pages/About/About';
import Addcard from '../Pages/Addcard/Addcard';
import Navbar from '../Pages/Navbar/Navbar';

export default function AllRoutes() {
    return (
        <div className="routes">
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/addrequest" element={<Addcard />} />
                <Route path="*" element={<Nopage />} />
            </Routes>
        </div>
    )
}
