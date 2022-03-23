import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useChart } from "../../contexts/ChartContext";

const SelectionsContainer = () => {
  const { usersSubscriptions, getTotal } = useAuth();
  const { selectedSubscriptions, setSelectedSubs } = useChart();
  const isSelected = Array(usersSubscriptions.length).fill(true);

  function handleChange(e, index) {
    isSelected[index] = !isSelected[index];

    // console.log(isSelected);
    setSelectedSubs(isSelected);
    console.log(selectedSubscriptions);
  }
  return (
    <div>
      <span>total Subscriptions: {getTotal()}</span>
      {usersSubscriptions.map((sub, index) => {
        return (
          <tr>
            <td>{sub.name}</td>

            <td>
              <input
                type="checkbox"
                // value={index}
                onChange={(e) => handleChange(e, index)}
                checked="false"
              />
            </td>
          </tr>
        );
      })}
    </div>
  );
};

export default SelectionsContainer;
