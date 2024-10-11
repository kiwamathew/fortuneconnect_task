import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing React Icons

const FooterSection = () => {
  const socialLinks = [
    { href: "/linkedin", label: "LinkedIn", icon: <FaLinkedin className="h-5 w-5" /> },
    { href: "/github", label: "GitHub", icon: <FaGithub className="h-5 w-5" /> },
    { href: "/twitter", label: "Twitter", icon: <FaTwitter className="h-5 w-5" /> },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">&copy; 2024 FortuneConnect. All rights reserved.</p>
        <div className="flex space-x-8">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href} className="flex items-center space-x-1 transition duration-300 hover:text-teal-400 hover:shadow-lg hover:scale-105">
              <span>{link.icon}</span>
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
