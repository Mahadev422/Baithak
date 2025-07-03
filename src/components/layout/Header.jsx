import { FaBell, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const Header = () => {
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

  return (
    <header className="w-full static top-0 flex items-center justify-between px-6 py-4 bg-white shadow">
      {/* Left: App Name */}
      <h1 className="text-xl font-bold text-gray-800">Baithak</h1>
      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
          <FaBell className="h-6 w-6 text-gray-600" />
        </button>
        <div className="relative" ref={dropdownRef}>
          <button
            className="p-2 rounded-full flex items-center hover:bg-gray-100 focus:outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <FaUserCircle className="h-7 w-7 text-gray-600" />
            <FaCaretDown className="h-4 w-4 text-gray-600 ml-1" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
              <ul>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Order
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Cart
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Setting
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
