import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import CourseList from "./pages/CourseList";
import ErrorElement from "./pages/ErrorElement";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<HomeLayout />}
          errorElement={<ErrorElement />}
        >
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<Outlet />}>
            <Route index element={<CourseList />} />
            <Route path=":id" element={<Outlet />}>
              <Route index element={<CourseDetail />} />
              <Route path="learn" element={<LearnDashbaord />} />
            </Route>
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
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
