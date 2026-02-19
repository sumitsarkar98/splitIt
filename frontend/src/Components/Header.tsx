import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useAuth } from "../context/auth.context.tsx";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user from context
    setUser(null);

    // Optional: call backend logout API if you have one

    navigate("/auth");
  };

  return (
    <div className="w-full px-4 md:px-10 flex justify-between items-center py-2">
      <div className="logo">
        <Link to="/" className="text-3xl">
          SplitIt
        </Link>
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:block">
        <ul className="flex items-center md:gap-8 lg:gap-14 capitalize md:text-lg lg:text-xl lg:mr-12">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              about us
            </NavLink>
          </li>

          <li>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-1 text-sm md:text-base rounded-lg transition-all duration-300 hover:bg-red-600 hover:shadow-lg active:scale-95"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/auth"
                className="bg-[#88c417] text-white px-5 py-1 text-sm md:text-base rounded-lg transition-all duration-300 hover:bg-[#76ad14] hover:shadow-lg active:scale-95"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <nav className="md:hidden flex items-center z-100">
        <button onClick={() => setOpen((prev) => !prev)}>
          <FiMenu className="text-3xl text-[#88c417]" />
        </button>

        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-6 p-6 capitalize text-lg">
            <button className="flex justify-end" onClick={() => setOpen(false)}>
              <IoMdClose className="text-3xl text-[#88c417]" />
            </button>

            <li>
              <NavLink to="/home" onClick={() => setOpen(false)}>
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setOpen(false)}>
                services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setOpen(false)}>
                about us
              </NavLink>
            </li>

            <li>
              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="block w-full bg-red-500 text-white text-start px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/auth"
                  onClick={() => setOpen(false)}
                  className="block w-full bg-[#88c417] text-white text-start px-3 py-1 rounded-lg hover:bg-[#76ad14]"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
