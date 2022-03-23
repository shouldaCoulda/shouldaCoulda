import React, { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useChart } from "../../contexts/ChartContext";

const FinancialContainer = () => {
  const { usersSubscriptions } = useAuth();
  const { selectedApr, setSelectedApr } = useChart();
  const returnRef = useRef(1);

  function handleSubmit(e) {
    e.preventDefault();
    setSelectedApr(returnRef.current.value);
  }
  return (
    <div>
      <form>
        <h5>display data:</h5>
        <span>
          <div className="square blue" />
          -subscriptions
        </span>
        <div>
          <div className="square red" />
          -apr
        </div>
        <h5>apr : {selectedApr}</h5>
        <div>
          <label>
            <small>APR</small>
          </label>
          <input type="text" ref={returnRef} />
        </div>

        <div>
          <button className="logoutButton" onClick={handleSubmit}>
            view
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinancialContainer;
