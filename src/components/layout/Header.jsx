import { Link } from "react-router-dom";
import RightIcons from "./RightIcons";
import { useSelector } from "react-redux";

const Header = () => {
  const { user, loading } = useSelector(state => state.auth)

  return (
    <header className="w-full fixed h-[56px] z-50 top-0 flex items-center justify-between px-2 bg-white shadow-md">
      {/* Left: App Name */}
      <Link to="/">
        <img
          className="h-[50px] rounded-full p-1"
          src="/baithak-icon.jpg"
          alt="dfs"
        />
      </Link>
      {/* Right: Icons */}
      {loading ? '...' : user ? <RightIcons /> : <Link to='/sign-in' className="p-2 bg-blue-100 rounded font-bold hover:rounded-full transition-all">Sign In</Link>}
    </header>
  );
};

export default Header;
