import { Link } from "react-router-dom";
import RightIcons from "./RightIcons";
import { useSelector } from "react-redux";
import DarkMode from "./DarkMode";

const Header = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <header className="w-full fixed h-[56px] z-50 top-0 flex items-center px-2 bg-white dark:bg-gray-800 shadow-md">
      {/* Left: App Name */}
      <Link to="/">
        <img
          className="h-[50px] rounded-full p-1"
          src="/baithak-icon.jpg"
          alt="dfs"
        />
      </Link>
      {/* Right: DarkMode and Icons */}
      <div className="ml-auto flex items-center space-x-1">
        <DarkMode />
        {loading ? (
          <span className="ml-2">...</span>
        ) : user ? (
          <RightIcons />
        ) : (
          <Link
            to="/sign-in"
            className="p-2 bg-blue-100 dark:bg-gray-900 dark:text-white rounded font-bold hover:rounded-full transition-all"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
