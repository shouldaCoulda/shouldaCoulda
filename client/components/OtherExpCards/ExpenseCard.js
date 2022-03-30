import React from "react";
import {
  Container,
  TextField,
  Box,
  Card,
  Button,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Input,
  InputAdornment,
} from "@mui/material";
import { expenseCards } from "../../../script/OtherExpenses";

export default function ExpenseCard() {
  return (
    <Box
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 2,
      }}
    >
      {expenseCards.map((expense, index) => {
        return (
          <Box key={index}>
            <Card key={index} sx={{ width: 250, height: 450, margin: 1 }}>
              <CardMedia
                component="img"
                alt="Misc"
                height="140"
                image={expense.imageUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {expense.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {expense.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}
