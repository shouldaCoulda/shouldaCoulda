import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useChart } from "../../contexts/ChartContext";

const SelectionsContainer = () => {
  const { usersSubscriptions, getTotal } = useAuth();
  const { selectedSubscriptions, setSelectedSubs } = useChart();

  const isSelected = Array(usersSubscriptions.length).fill(true);

  function handleChange(e, index) {
    isSelected[index] = !isSelected[index];

    console.log(e.target);
    // setSelectedSubs(isSelected);
    console.log(isSelected);
  }
  return (
    <div>
      <span>total Subscriptions: {getTotal()}</span>
      <table>
        <tbody>
          {usersSubscriptions.map((sub, index) => {
            return (
              <tr key={index}>
                <td>{sub.name}</td>

                <td>
                  <input
                    type="checkbox"
                    value={isSelected[index]}
                    onChange={(e) => handleChange(e, index)}
                    defaultChecked
                    // checked={isSelected[index]}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SelectionsContainer;
