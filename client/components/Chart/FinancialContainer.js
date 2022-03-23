import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const FinancialContainer = () => {
  const { usersSubscriptions } = useAuth();

  return (
    <div>
      <h2>Finance</h2>
    </div>
  );
};

export default FinancialContainer;
