import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>ShouldaCoulda</h1>
    <nav>
      <div>
        {/* The navbar will show these links after you log in */}
        <Link to="/home">Home</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </div>
    </nav>
    <hr />
  </div>
);

export default Navbar;
