import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout.tsx";
import Landing from "./Pages/Landing.tsx";
import Auth from "./Pages/Auth.tsx";
import Home from "./Pages/Home.tsx";
import Login from "./Components/Login.tsx";
import Signup from "./Components/Signup.tsx";
import Dashboard from "./Components/Features/Dashboard.tsx";
import Expenses from "./Components/Features/Expenses.tsx";
import Income from "./Components/Features/Income.tsx";

import ProtectedRoute from "./Components/Layout/ProtectedRoutes.tsx";
import Services from "./Pages/Services.tsx";
import About from "./Pages/About.tsx";
import Error from "./Pages/Error.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />

          <Route path="/auth" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />}>
              <Route index element={<Dashboard />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="income" element={<Income />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
