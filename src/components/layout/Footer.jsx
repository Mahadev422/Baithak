import Feedback from "./Feedback";
import { FaLinkedin, FaInstagramSquare  } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 mt-12 shadow-inner">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-6">
      <div className="flex-1 min-w-[220px] m-4">
        <h3 className="text-2xl font-extrabold mb-3 tracking-wide">Baithak</h3>
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Baithak. All rights reserved.
        </p>
      </div>
      <div className="flex-1 min-w-[170px] m-4">
        <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
        <ul className="list-none p-0 space-y-2">
          <li>
            <a href="/products" className="text-gray-200 hover:text-blue-400 transition-colors">
              Products
            </a>
          </li>
          <li>
            <a href="/contact-us" className="text-gray-200 hover:text-blue-400 transition-colors">
              Contact-us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 min-w-[220px] m-4">
        <h4 className="text-lg font-semibold mb-3">Contact</h4>
        <p className="text-sm text-gray-300">Email: <a href="mailto:project9162595119@gmail.com" className="hover:underline">support@shopname.com</a></p>
        <p className="text-sm text-gray-300">Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
      </div>
      <Feedback />
      <div className="flex-1 min-w-[170px] m-4">
        <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
        <div className="flex space-x-5">
          <a
            href="https://instagram.com"
            title="Follow us on Instagram"
            className="text-gray-200 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            title="Follow us on Instagram"
            className="text-gray-200 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagramSquare className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
      Made with <span className="text-red-500">♥</span> by Baithak Team
    </div>
  </footer>
);

export default Footer;
