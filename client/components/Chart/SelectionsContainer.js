import React, { useEffect, useState } from "react";
import { useChart } from "../../contexts/ChartContext";
import { Box, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

import { useAuth } from "../../contexts/AuthContext";
import PopupBox from "../PopupBox";

const SelectionsContainer = () => {
  const { getTotal, months } = useChart();
  const { usersTotalIncomeAndExpenses, setUsersTotalIncomeAndExpenses } =
    useAuth();
  const total = (usersTotalIncomeAndExpenses * months).toFixed(2);

  const [isOpen, setIsOpen] = useState(false);
  function togglePopup() {
    setIsOpen(!isOpen);
  }

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        padding: 1,
        alignItems: "center",
      }}
    >
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{ fontSize: { xs: 12, md: 16 }, justifyContent: "center" }}
      >
        Monthly Expenses: {getTotal().toFixed(2)}
      </Typography>
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{ position: "right", fontSize: { xs: 12, md: 16 } }}
      >
        {months} month total: {total}
      </Typography>
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{ position: "right", fontSize: { xs: 15, md: 20 } }}
      >
        <HelpIcon onClick={togglePopup} />
      </Typography>
      {isOpen && (
        <PopupBox
          content={
            <>
              <Typography type="b">
                This chart visualizes how your expenses could have performed if
                invested in assets
              </Typography>
              <Typography type="b">the duration is in months</Typography>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </Box>
  );
};

export default SelectionsContainer;
