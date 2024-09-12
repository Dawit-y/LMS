import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    )
  );
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
