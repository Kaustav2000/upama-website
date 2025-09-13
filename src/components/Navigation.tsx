import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg w-full border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group text-[9px]">
              <h1 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Upama Financial
              </h1>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive("/")
                  ? "text-blue-600 bg-blue-50 shadow-sm"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive("/about")
                  ? "text-blue-600 bg-blue-50 shadow-sm"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
