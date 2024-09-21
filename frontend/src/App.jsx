import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";

import HomeLayout from "./layouts/HomeLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import LearnDashbaord from "./pages/LearnDashboard";
import CreatorDashboard from "./pages/CreatorDashboard";
import { AuthProvider } from "./context/AuthContext";
import CourseDetail from "./pages/CourseDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="learn" element={<Outlet />}>
            <Route index element={<LearnDashbaord />} />
            <Route path=":id" element={<CourseDetail />} />
          </Route>
          <Route path="create" element={<CreatorDashboard />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </>
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
