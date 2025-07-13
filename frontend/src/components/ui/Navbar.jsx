import { Link } from "react-router-dom";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import "../../index.css";
import { useState } from "react";
import { navLinks } from "@/constants/navlinks";
import { profileNavigation } from "@/constants/profileNavigation";

const staticCartItems = [{ id: 1 }, { id: 2 }];
const staticUser = { name: "Mostakem" };

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentUser = staticUser;
  const cartItems = staticCartItems;

  const handleLogOut = () => {
    console.log("Logging out...");
  };

  return (
    <header className="shadow-md bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="text-3xl font-bold tracking-wide text-primary animate-pulse"
            >
              <span className="text-yellow-500 text-4xl animate-spin-slow">
                R
              </span>
              <span className="text-gray-800">eadora</span>
            </Link>

            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-bold transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>

            <button className="hidden sm:block hover:text-yellow-500 transition">
              <HiOutlineHeart className="size-6" />
            </button>

            <Link
              to="/cart"
              className="relative bg-yellow-500 text-white p-3 px-3 flex items-center rounded-md hover:opacity-90 transition"
            >
              <HiOutlineShoppingCart />
              <span className="text-xs font-semibold ml-1">
                {cartItems.length}
              </span>
            </Link>

            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="focus:outline-none"
                >
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-2 border-yellow-500"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50 animate-fadeIn">
                    <ul className="py-2 text-sm text-gray-700">
                      {profileNavigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className="block px-4 py-2 hover:bg-gray-100 transition"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6 text-gray-600 hover:text-primary transition" />
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
