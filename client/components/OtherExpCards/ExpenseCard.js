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
  console.log(expenseCards);
  return (
    <Box
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 2,
        paddingBottom: 20,
      }}
    >
      {expenseCards.map((expense, index) => {
        return (
          <Box key={index}>
            <Card key={index} sx={{ maxWidth: 200 }}>
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
              <CardActions>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  id="filled-number"
                  label="Monthly $ Cutback"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <Button size="small">Save</Button>
              </CardActions>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}
