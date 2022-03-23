import React from "react";
import { Link } from "react-router-dom";
const AddButton = () => {
  return (
    <Link to="/home">
      <button className="moreSubsButton hover">+</button>
    </Link>
  );
};

export default AddButton;
