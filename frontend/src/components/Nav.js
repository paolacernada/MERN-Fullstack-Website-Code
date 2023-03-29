import React from "react";
import { Link } from "react-router-dom";


function Nav() {

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/courseRegistry">Registry</Link>
            <Link to="/concepts">Concepts</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/order">Order</Link>
            <Link to="/staff">Staff</Link>
        </nav>
    );
}

export default Nav;