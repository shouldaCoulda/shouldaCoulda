import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useChart } from "../../contexts/ChartContext";
import AddButton from "./AddButton";

const SelectionsContainer = () => {
  const { usersSubscriptions } = useAuth();
  const { selectedSubscriptions, setSelectedSubs, getTotal, months } =
    useChart();
  const total = (getTotal() * months).toFixed(2);

  function handleChange(e, index) {
    const data = [];
    for (let i = 0; i < selectedSubscriptions.length; i++) {
      if (i === index) {
        data[i] = !selectedSubscriptions[i];
      } else {
        data[i] = selectedSubscriptions[i];
      }
    }
    setSelectedSubs(data);
  }

  useEffect(() => {
    for (const sub of usersSubscriptions) {
      setSelectedSubs([...selectedSubscriptions, true]);
    }
  }, [usersSubscriptions]);

  return (
    <div>
      <p>monthly: {getTotal()}</p>
      <p>
        {months}: months: {total}
      </p>
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
                    className="hover"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AddButton />
    </div>
  );
};

export default SelectionsContainer;
