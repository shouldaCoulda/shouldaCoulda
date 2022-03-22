import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  //we take in logout and current user so our navbar can display accuratley
  const { logout, currentUser } = useAuth();

  return (
    <div>
      <nav>
        <img src="/logo.png" alt="image" className="logo" />
        <div className="navOptions">
          {currentUser ? (
            <>
              <Link to="/home" className="navItem">
                HOME
              </Link>
              <Link to="/profile" className="navItem">
                PROFILE
              </Link>
              <Link to="/chart" className="navItem">
                CHART
              </Link>
              <button className="navItem" onClick={logout}>
                LOG OUT
              </button>
            </>
          ) : (
            <>
              <Link to="/home">Home</Link>
              <Link to="/login">login</Link>
              <Link to="/signUp">sign-up</Link>
            </>
          )}
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
