// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const cartProducts = useSelector(state => state.cartSlice)
    console.log(cartProducts)
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
<nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex">
                        <Link to="/" className="text-white text-xl font-bold">Cart App</Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-auto flex items-baseline space-x-4">
                            <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link to="/products" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                            <Link to="/cart" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cart - {cartProducts.length}</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleNavbar} className="text-white hover:text-white focus:outline-none focus:text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to="/products" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</Link>
                        <Link to="/cart" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cart</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;

