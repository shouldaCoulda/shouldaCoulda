import React from "react";
import { Link } from "react-router-dom";

const AddExpense = () => {
  return (
    <div>
      <h1>add your expenses here</h1>
      <Link to="/chart">
        <button>continue</button>
      </Link>
    </div>
  );
};

export default AddExpense;
