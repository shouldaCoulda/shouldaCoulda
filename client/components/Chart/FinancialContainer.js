import React, { useRef, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useChart } from "../../contexts/ChartContext";

const FinancialContainer = () => {
  const { usersSubscriptions } = useAuth();
  const {
    selectedApr,
    setSelectedApr,
    lines,
    selectedLines,
    setSelectedLines,
  } = useChart();
  const returnRef = useRef(1);

  function handleSubmit(e) {
    e.preventDefault();
    setSelectedApr(returnRef.current.value);
  }

  function handleChange(e, index) {
    const data = [];
    for (let i = 0; i < selectedLines.length; i++) {
      if (i === index) {
        data[i] = !selectedLines[i];
      } else {
        data[i] = selectedLines[i];
      }
    }
    setSelectedLines(data);
  }
  useEffect(() => {
    for (const line of lines) {
      setSelectedLines([...selectedLines, true]);
    }
  }, [usersSubscriptions]);

  return (
    <div>
      <form>
        <h5>display data:</h5>
        <table>
          <tbody>
            {lines.map((line, index) => {
              return (
                <tr key={index}>
                  <td>{line.name}</td>

                  <td>
                    <input
                      type="checkbox"
                      value={selectedLines[index]}
                      onChange={(e) => handleChange(e, index)}
                      defaultChecked
                      className="hover"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <span>
          <div className="square blue" />
          -subscriptions
        </span>
        <div>
          <div className="square red" />
          -apr
        </div> */}
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
