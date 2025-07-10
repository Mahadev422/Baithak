import { signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCartPlus, FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../../firebaseConfig";
import { CgDarkMode } from "react-icons/cg";

const RightIcons = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignout = async () => {
    await signOut(auth);
    window.location.href = "/";
    alert("Successfully sign out!");
  };
  return (
    <div className="flex items-center gap-1">
      <Link
        to="/cart"
        className={`p-2 rounded-full ${
          path === "/cart" ? "dark:bg-gray-900 bg-blue-100" : ""
        } dark:hover:bg-gray-700 hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300`}
        aria-label="Cart"
      >
        <FaCartPlus className="h-6 w-6" />
      </Link>
      <div className="relative" ref={dropdownRef}>
        <button
          className={`p-2 rounded-full ${
            path.startsWith("/account") ? "dark:bg-gray-900 bg-blue-100" : ""
          } flex items-center gap-1 dark:hover:bg-gray-700 hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300`}
          onClick={() => setDropdownOpen((open) => !open)}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          aria-label="User menu"
        >
          <FaUserCircle className="h-7 w-7" />
          <FaCaretDown className="h-4 w-4" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-3 w-44 bg-white dark:bg-gray-800 border border-blue-100 rounded-lg shadow-lg z-20 animate-fade-in">
            <ul className="py-2">
              {["Account", "Wishlists", "Contact-Us"].map((item, idx) => (
                <li key={idx}>
                  <Link
                    onClick={() => setDropdownOpen(false)}
                    to={item.toLowerCase()}
                    className={`block px-5 py-2 ${
                      path === "/" + item.toLowerCase()
                        ? "dark:bg-gray-700 bg-blue-100"
                        : ""
                    } text-gray-700 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-700 transition-colors`}
                  >
                    {item}
                  </Link>
                </li>
              ))}

              <li>
                <button
                  onClick={handleSignout}
                  className="w-full text-left px-5 py-2 text-gray-700 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightIcons;
