import React from "react";
import { useSubscription } from "../contexts/SubscriptionContext";

const AllSubscriptions = () => {
  const { defualtSubscriptions } = useSubscription();


  return (
    <div>
      {defualtSubscriptions.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AllSubscriptions;
