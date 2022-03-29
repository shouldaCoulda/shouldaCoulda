import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useChart } from "../../contexts/ChartContext";
import AddButton from "./AddButton";
import { Box, Container, Typography } from "@mui/material";

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
    <>
      <Box sx={{ padding: 1 }}>
        <Typography gutterBottom variant="p" component="div">
          monthly: {getTotal()}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {months}: months: {total}
        </Typography>

        <AddButton />
      </Box>
    </>
  );
};

export default SelectionsContainer;
