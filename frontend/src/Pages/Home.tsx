import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname.split("/").pop();

    switch (path) {
      case "":
        return "Dashboard";
      case "expenses":
        return "Expenses";
      case "income":
        return "Income";
      case "settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="min-h-screen flex relative bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block lg:w-1/5 border-r bg-white">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />

        {/* Slide Sidebar */}
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar />
        </div>
      </div>

      {/* Content Section */}
      <main className="flex-1 h-screen overflow-y-auto p-4">
        {/* Mobile Top Bar */}
        <div className="lg:hidden flex items-center mb-4">
          <button onClick={() => setOpen(true)}>
            <BsBoxArrowRight className="text-2xl text-[#1f2937]" />
          </button>
          <h1 className="ml-4 font-semibold text-lg">
            <p className="ml-4 font-semibold text-lg">{getTitle()}</p>
          </h1>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
