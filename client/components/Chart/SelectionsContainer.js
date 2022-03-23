import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useChart } from "../../contexts/ChartContext";

const SelectionsContainer = () => {
  const { usersSubscriptions } = useAuth();
  const { selectedSubscriptions, setSelectedSubs, getTotal } = useChart();

  function handleChange(e, index) {
    console.log("in handle change", selectedSubscriptions);
    const data = [];
    for (let i = 0; i < selectedSubscriptions.length; i++) {
      if (i === index) {
        data[i] = !selectedSubscriptions[i];
      } else {
        data[i] = selectedSubscriptions[i];
      }
    }
    setSelectedSubs(data);
    console.log(data);
  }
  useEffect(() => {
    // setSelectedSubs(isSelected);
    console.log("in the hook", selectedSubscriptions);
    for (const sub of usersSubscriptions) {
      setSelectedSubs([...selectedSubscriptions, true]);
    }
    console.log("end hook", selectedSubscriptions);
  }, [usersSubscriptions]);

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
