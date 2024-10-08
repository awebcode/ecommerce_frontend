"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin } from "lucide-react";

// Dynamic array of URLs for the navbar
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Shop", href: "/shop" },
  { name: "Accessories", href: "/accessories" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-sm">
      {/* Top section with phone and location */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 lg:px-12  flex  items-start text-gray-600 py-2 text-[8px] md:text-sm">
          <span>📞 +8806 666 -0000</span>
          <span className="mx-1">|</span>
          <div className="flex items-center space-x-2">
            <MapPin className="h-2 w-2 md:h-4 md:w-4" />
            <span>Here is your shop Location, and City Name</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#FFF7EB]">
        <div className="container mx-auto px-4 lg:px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold bg-gray-800 text-white px-4 py-1 rounded-sm">
            LOGO
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-yellow-500 border-b-2 border-yellow-500"
                      : ""
                  } hover:text-yellow-500 hover:border-b-2 border-yellow-500 text-gray-800`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-4 text-gray-800">
            <AiOutlineSearch className="w-6 h-6 cursor-pointer hover:text-yellow-500" />
            <AiOutlineShoppingCart className="w-6 h-6 cursor-pointer hover:text-yellow-500" />
            <AiOutlineUser className="w-6 h-6 cursor-pointer hover:text-yellow-500" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center text-gray-800">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <AiOutlineClose className="w-6 h-6" />
              ) : (
                <AiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#FFF7EB] backdrop-blur-lg shadow-md h-screen w-full"
          >
            <ul className="flex flex-col space-y-4 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${
                      pathname === link.href
                        ? "text-yellow-500 border-b-2 border-yellow-500"
                        : ""
                    } hover:text-yellow-500 hover:border-b-2 border-yellow-500 text-gray-800`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Mobile Icons */}
              <div className="flex space-x-4 mt-4 text-gray-800">
                <AiOutlineSearch className="w-6 h-6 cursor-pointer hover:text-yellow-500" />
                <AiOutlineShoppingCart className="w-6 h-6 cursor-pointer hover:text-yellow-500" />
                <AiOutlineUser className="w-6 h-6 cursor-pointer hover:text-yellow-500" />
              </div>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
