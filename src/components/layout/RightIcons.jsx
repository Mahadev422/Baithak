import { signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { FaBell, FaCaretDown, FaCartPlus, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../../../firebaseConfig";

const RightIcons = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    window.location.href = '/';
    alert('Successfully sign out!');
  }
  return (
    <div className="flex items-center gap-1">
      <Link
        to="/notifications"
        className="p-2 rounded-full hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Notifications"
      >
        <FaBell className="h-6 w-6" />
      </Link>
      <Link
        to="/cart"
        className="p-2 rounded-full hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Cart"
      >
        <FaCartPlus className="h-6 w-6" />
      </Link>
      <div className="relative" ref={dropdownRef}>
        <button
          className="p-2 rounded-full flex items-center gap-1 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => setDropdownOpen((open) => !open)}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          aria-label="User menu"
        >
          <FaUserCircle className="h-7 w-7" />
          <FaCaretDown className="h-4 w-4" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-3 w-44 bg-white border border-blue-100 rounded-lg shadow-lg z-20 animate-fade-in">
            <ul className="py-2">
              {["Account", "Wishlists", "Settings"].map((item, idx) => (
                <li key={idx}>
                  <Link
                    onClick={() => setDropdownOpen(false)}
                    to={item.toLowerCase()}
                    className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleSignout}
                  className="px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
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
