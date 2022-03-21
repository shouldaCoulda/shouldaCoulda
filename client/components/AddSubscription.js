import React, { useRef } from "react";
import { useSubscription } from "../contexts/SubscriptionContext";

const AddSubscription = () => {
  const { writeSubscriptionData } = useSubscription();
  let nameRef = useRef("");
  let priceRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    writeSubscriptionData(nameRef.current.value, priceRef.current.value);
    console.log(nameRef.current.value, priceRef.current.value);
  };

  return (
    <div>
      <form>
        <h1>Add Subscription</h1>
        <div>
          <label htmlFor="name">
            <small>name</small>
          </label>
          <input type="text" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="price">
            <small>price</small>
          </label>
          <input type="price" ref={priceRef} />
        </div>
        <div>
          <button onClick={handleSubmit}>submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddSubscription;
