import React, { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useChart } from "../../contexts/ChartContext";

const FinancialContainer = () => {
  const { usersSubscriptions } = useAuth();
  const { selectedApr, setSelectedApr } = useChart();
  const returnRef = useRef(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("in handle submit", returnRef.current.value);
    setSelectedApr(returnRef.current.value);
    // console.log(selectedApr);
  }
  return (
    <div>
      <form>
        <h4>Finance</h4>
        <h5>apr : {selectedApr}</h5>
        <div>
          <label htmlFor="return">
            <small>APR</small>
          </label>
          <input type="text" ref={returnRef} />
        </div>

        <div>
          <button onClick={handleSubmit}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default FinancialContainer;
