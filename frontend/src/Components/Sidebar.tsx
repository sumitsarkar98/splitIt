import Avatar from "./UI/Avatar.tsx";
import { NavLink } from "react-router-dom";
import { FiHome, FiFileText, FiDollarSign, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const activeClass = "bg-[#88c417] text-white font-semibold shadow-md";
  const baseClass =
    "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300";
  const hoverClass = "hover:bg-[#88c417]/10 hover:text-[#88c417]";

  return (
    <div className="h-full bg-white border-r">
      {/* Profile Section */}
      <section className="flex justify-start md:justify-center items-center pt-6 p-3">
        <Avatar />
      </section>

      {/* Navigation */}
      <nav className="mt-6 px-4">
        <ul className="space-y-3 text-gray-600">
          <li>
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : hoverClass}`
              }
            >
              <FiHome size={18} />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="expenses"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : hoverClass}`
              }
            >
              <FiFileText size={18} />
              <span>Expenses</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="income"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : hoverClass}`
              }
            >
              <FiDollarSign size={18} />
              <span>Income</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="settings"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : hoverClass}`
              }
            >
              <FiSettings size={18} />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
