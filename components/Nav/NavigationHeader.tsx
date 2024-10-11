import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
  const navLinks = [
    { label: 'Home', href: '#home', isVisible: true },
    { label: 'Features', href: '#feature-section', isVisible: true },
    { label: 'Testimonials', href: '#testimonials', isVisible: true }, // Added testimonials link
    { label: 'Dashboard', href: '/dashboard/user', isVisible: true },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-teal-600">
          FortuneConnect
        </h1>
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => 
              link.isVisible && (
                <li key={index}>
                  <Link href={link.href}>
                    <Button variant="link" className="text-gray-700 hover:text-teal-600 transition duration-200 ease-in-out transform hover:scale-110">
                      {link.label}
                    </Button>
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
