import React from "react";
import { useGuestData } from "../contexts/GuestDataContext";

export const SubscriptionTier = () => {
  const guestData = useGuestData();

  console.log(guestData);
  return <h2>What the hell</h2>;
};
