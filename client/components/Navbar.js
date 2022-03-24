import { Button } from "@mui/material";
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
              <Link to="/home" className="navItem ">
                HOME
              </Link>
              <Link to="/profile" className="navItem ">
                PROFILE
              </Link>
              <Link to="/chart" className="navItem ">
                CHART
              </Link>
              <button className="logoutButton" onClick={logout}>
                LOG OUT
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="navItem ">
                login
              </Link>
              <Link to="/signUp" className="navItem ">
                sign-up
              </Link>
            </>
          )}
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
