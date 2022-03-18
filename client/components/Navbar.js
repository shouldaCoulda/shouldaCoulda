import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { logout, currentUser } = useAuth();

  return (
    <div>
      <h1>ShouldaCoulda</h1>
      <nav>
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/login">login</Link>
          <Link to="/signUp">sign-up</Link>
          <button onClick={logout}>Logout</button>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
