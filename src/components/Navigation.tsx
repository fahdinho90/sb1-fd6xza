import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">Notaire-Maroc</span>
          </Link>
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`${
                location.pathname === '/'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-200`}
            >
              Accueil
            </Link>
            <Link
              to="/faq"
              className={`${
                location.pathname === '/faq'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-200`}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className={`${
                location.pathname === '/contact'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors duration-200`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}