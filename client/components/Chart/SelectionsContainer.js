import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const SelectionsContainer = () => {
  const { usersSubscriptions, getTotal } = useAuth();

  return (
    <div>
      <span>total Subscriptions: {getTotal()}</span>
      {usersSubscriptions.map((sub, index) => {
        return (
          <tr>
            <td>{sub.name}</td>

            <td>
              <button
                className="remove-button"
                onClick={(e) => handleDelete(e, sub.uid)}
              >
                show
              </button>
            </td>
          </tr>
        );
      })}
    </div>
  );
};

export default SelectionsContainer;
