import React, { useRef } from "react";
import { useSubscription } from "../contexts/SubscriptionContext";
import { useAuth } from "../contexts/AuthContext";

const AddSubscription = () => {
  const { writeSubscriptionData } = useSubscription();
  const { writeUserData, currentUser } = useAuth();
  let nameRef = useRef("");
  let priceRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    writeSubscriptionData(nameRef.current.value, priceRef.current.value);
  };
  const write = (e) => {
    e.preventDefault();
    var user = {
      uid: currentUser.uid,
      email: currentUser.email,
    };
    writeUserData(user);
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
        <div>
          <button onClick={write}>write</button>
        </div>
      </form>
    </div>
  );
};

export default AddSubscription;
