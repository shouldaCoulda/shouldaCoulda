import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useChart } from "../../contexts/ChartContext";

const SelectionsContainer = () => {
  const { usersSubscriptions } = useAuth();
  const { selectedSubscriptions, setSelectedSubs, getTotal } = useChart();

  function handleChange(e, index) {
    console.log("in handle change", selectedSubscriptions);
    if (selectedSubscriptions[index] === true) {
      // selectedSubscriptions[index] = false;
      // } else selectedSubscriptions[index] = true;
      // setSelectedSubs([...isSelected]);
    }
  }
  useEffect(() => {
    // setSelectedSubs(isSelected);
    // isSelected = Array(usersSubscriptions.length).fill(true);
  }, []);

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
                    value={selectedSubscriptions[index]}
                    onChange={(e) => handleChange(e, index)}
                    defaultChecked
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
