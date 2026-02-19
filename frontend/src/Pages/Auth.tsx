import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Outlet />
      </div>

      {/* Bottom Wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full"
      >
        <path
          fill="#6fa010"
          fillOpacity="1"
          d="M0,64L120,96C240,128,480,192,720,192C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default Auth;
