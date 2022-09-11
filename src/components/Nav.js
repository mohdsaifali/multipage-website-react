import React from 'react'
import { Link } from "react-router-dom"
function Nav() {
    return (
        <>
        <div>
            <ul className='nav-ul'>
                <li> <Link to="/">Home</Link></li>
                <li className="nav-item dropdown ">
                    <Link className="nav-link dropdown-toggle" to="/cat0" role="button" data-bs-toggle="dropdown"> Category</Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="/cat1">Category 1</Link></li>
                        <li><Link className="dropdown-item" to="/cat2">Category 2</Link></li>
                        <li><Link className="dropdown-item" to="/cat3">Category 3</Link></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/product0" role="button" data-bs-toggle="dropdown"> Products</Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link className="dropdown-item" to="/product1">Product 1</Link></li>
                        <li><Link className="dropdown-item" to="/product2">Product 2</Link></li>
                        <li><Link className="dropdown-item" to="/product3">Product 3</Link></li>
                    </ul>
                </li>
                <li> <Link to="/other">Others</Link></li>
                <li> <Link to="/signup">Sign Up</Link></li>
                <li> <Link to="/login">Log In</Link></li>
            </ul>
        </div>

        
        </> 


    )
}

export default Nav