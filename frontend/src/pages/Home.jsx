import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { logout, user } = useAuth();
  return (
    <main className="h-screen container">
      <nav className="flex items-center justify-between w-full h-16">
        <div>logo</div>
        {user ? (
          <>
            <div className="text-lg">Welcome {user?.firstName}</div>
            <button onClick={logout} className="text-lg">
              Logout
            </button>
          </>
        ) : (
          <div className="flex gap-2">
            <Link to="login">Login</Link>
            <Link to="signup">Register</Link>
          </div>
        )}
      </nav>
    </main>
  );
};

export default Home;
