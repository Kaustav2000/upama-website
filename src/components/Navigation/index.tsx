import { Link, useLocation } from "react-router-dom";
import companyLogo from "../../assets/companyLogo.png";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className="bg-white/95 backdrop-blur-md shadow-lg w-full border-b border-gray-100 sticky top-0 z-50"
      style={{
        backgroundColor: "var(--white)",
        borderColor: "var(--gray-light)",
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <img
                src={companyLogo}
                alt="Upama Financial"
                className="h-24 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive("/") ? "shadow-sm" : "hover:bg-gray-50"
              }`}
              style={{
                color: isActive("/") ? "var(--primary)" : "var(--gray-dark)",
                backgroundColor: isActive("/") ? "var(--light)" : "transparent",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive("/about") ? "shadow-sm" : "hover:bg-gray-50"
              }`}
              style={{
                color: isActive("/about")
                  ? "var(--primary)"
                  : "var(--gray-dark)",
                backgroundColor: isActive("/about")
                  ? "var(--light)"
                  : "transparent",
              }}
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
