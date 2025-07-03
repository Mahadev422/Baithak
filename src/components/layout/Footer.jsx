import Feedback from "./Feedback";

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 mt-12 shadow-inner">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-6">
      <div className="flex-1 min-w-[220px] m-4">
        <h3 className="text-2xl font-extrabold mb-3 tracking-wide">Baithak</h3>
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} ShopName. All rights reserved.
        </p>
      </div>
      <div className="flex-1 min-w-[170px] m-4">
        <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
        <ul className="list-none p-0 space-y-2">
          <li>
            <a href="/shop" className="text-gray-200 hover:text-blue-400 transition-colors">
              Shop
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-200 hover:text-blue-400 transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-200 hover:text-blue-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 min-w-[220px] m-4">
        <h4 className="text-lg font-semibold mb-3">Contact</h4>
        <p className="text-sm text-gray-300">Email: <a href="mailto:support@shopname.com" className="hover:underline">support@shopname.com</a></p>
        <p className="text-sm text-gray-300">Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
      </div>
      <Feedback />
      <div className="flex-1 min-w-[170px] m-4">
        <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
        <div className="flex space-x-5">
          <a
            href="https://facebook.com"
            title="Follow us on Facebook"
            className="text-gray-200 hover:text-blue-500 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"></path></svg>
          </a>
          <a
            href="https://instagram.com"
            title="Follow us on Instagram"
            className="text-gray-200 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.127 4.659.334 3.678 1.316 2.697 2.297 2.49 3.409 2.433 4.69 2.375 5.97 2.363 6.379 2.363 12s.012 6.03.07 7.31c.057 1.281.264 2.393 1.245 3.374.981.981 2.093 1.188 3.374 1.245 1.28.058 1.689.07 7.31.07s6.03-.012 7.31-.07c1.281-.057 2.393-.264 3.374-1.245.981-.981 1.188-2.093 1.245-3.374.058-1.28.07-1.689.07-7.31s-.012-6.03-.07-7.31c-.057-1.281-.264-2.393-1.245-3.374C21.393.334 20.281.127 19 .07 17.72.012 17.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path></svg>
          </a>
          <a
            href="https://twitter.com"
            title="Follow us on Twitter"
            className="text-gray-200 hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"></path></svg>
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
