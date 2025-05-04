import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white p-4">
      {/* Large screens: horizontal layout */}
      <div className="hidden lg:flex justify-between items-center px-10 mx-auto">
        <Link to="/" className="text-2xl font-bold text-gray-800">MyShop</Link>
        
        <div className="w-1/2 flex items-center gap-x-2 border border-gray-300 rounded-full px-4">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 outline-none"
          />
          <button className="p-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
              className="w-6 h-6"
              alt="Search"
            />
          </button>
        </div>

        <div className="flex items-center gap-x-6">
          <Link to="#" className="text-gray-600 hover:text-gray-800">Login</Link>
          <Link to="#" className="text-gray-600 hover:text-gray-800">Register</Link>
          <Link to="/wishlist" className="text-gray-600 hover:text-gray-800">Wishlist</Link>
        </div>
      </div>

      {/* Small screens: vertical layout */}
      <div className="flex flex-col lg:hidden items-center space-y-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">MyShop</Link>

        <div className="w-full flex items-center gap-x-2 border border-gray-300 rounded-full px-4">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-3 py-2 outline-none"
          />
          <button className="p-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
              className="w-6 h-6"
              alt="Search"
            />
          </button>
        </div>

        <div className="flex items-center gap-x-4">
          <Link to="#" className="text-gray-600 hover:text-gray-800">Login</Link>
          <Link to="#" className="text-gray-600 hover:text-gray-800">Register</Link>
          <Link to="/wishlist" className="text-gray-600 hover:text-gray-800">Wishlist</Link>
        </div>
      </div>
    </nav>
  );
}
