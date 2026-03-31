import { useState } from "react";
import { Routes, Route, Link } from 'react-router';
import './css/Nav.css'

function Nav() {

 return (
    <div className="navbar">
        <div>
            <h1>Baker's Blog</h1>
        </div>
        <div className="nav-links">
            <a><Link to="/">Home</Link></a>
            <a><Link to="search">Search</Link></a>
            <a><Link to="/types">Types</Link></a>
        </div>
    </div>
 );
}

export default Nav;
