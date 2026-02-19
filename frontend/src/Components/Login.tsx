import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useAuth.ts";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [loginData, setLoginData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const { mutate, isPending, error } = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(loginData);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm p-6 md:p-8 rounded-xl shadow-lg flex flex-col gap-5"
      >
        <h1 className="text-3xl font-semibold text-center text-[#88c417] hover:text-[#facc15] cursor-pointer">
          Login
        </h1>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-md text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#364153]"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-md text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#364153]"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="text-lg font-medium bg-[#88c417] text-white py-2 rounded-md hover:bg-[#facc15] transition disabled:opacity-50"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p className="text-red-500 text-sm text-center">
            Login failed. Please try again.
          </p>
        )}

        <p className="text-sm text-center text-[#364153]">
          Not registered yet?{" "}
          <Link className="text-[#88c417] hover:underline" to="/auth/signup">
            Signup now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
