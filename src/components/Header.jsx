import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bug, Menu, X } from 'lucide-react';
import Button from './Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'FAQs', path: '/faq' }
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-white shadow-md transition-shadow duration-300">
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center text-xl font-semibold text-gray-800">
                        <Bug className="w-6 h-6 mr-2" />
                        <span className="tracking-tight">Toronto Pest Control</span>
                    </Link>
                </div>

                {/* Center: Navigation Links (Full Screen) */}
                <div className="hidden lg:flex items-center justify-center flex-grow">
                    <ul className="flex space-x-10"> {/* Changed to <ul> for better semantics */}
                    {navigation.map(item => (
                        <li key={item.name}> {/* Added <li> as parent for semantic correctness */}
                            <Link
                                to={item.path}
                                className="relative text-gray-700 hover:text-green-700 transition-colors duration-200 text-lg font-medium  after:content-[''] after:block after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-1/2"
                                >
                                {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Get Started Button (and mobile toggle) */}
                <div className="flex items-center space-x-4">
                    <div className="hidden lg:block">
                        <Button to="/contact" content='Get Started'/>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation (Full Screen Overlay) */}
                <div
                    className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="p-6 flex flex-col justify-center items-center h-full"> {/* Using full height and centering elements */}
                        <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-4 right-6 p-2 rounded-md hover:bg-gray-100 focus:outline-none z-50"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <ul className="flex flex-col items-center space-y-4 text-2xl">
                                 {navigation.map(item => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.path}
                                            className="block px-4 py-2 text-gray-700 hover:text-green-700 transition-colors duration-200"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;