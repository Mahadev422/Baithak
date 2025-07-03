const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 mt-8">
    <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
      <div className="flex-1 min-w-[200px] m-4">
        <h3 className="text-xl font-bold mb-2">Baithak</h3>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ShopName. All rights reserved.
        </p>
      </div>
      <div className="flex-1 min-w-[150px] m-4">
        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
        <ul className="list-none p-0 space-y-1">
          <li>
            <a href="/shop" className="text-white hover:underline">
              Shop
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 min-w-[200px] m-4">
        <h4 className="text-lg font-semibold mb-2">Contact</h4>
        <p className="text-sm">Email: support@shopname.com</p>
        <p className="text-sm">Phone: +1 234 567 890</p>
      </div>
      <div className="flex-1 min-w-[150px] m-4">
        <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="text-white hover:text-blue-400"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            className="text-white hover:text-pink-400"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            className="text-white hover:text-blue-300"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
