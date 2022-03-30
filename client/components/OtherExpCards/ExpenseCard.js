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
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        paddingBottom: 20,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          padding: 2,
          paddingBottom: 20,
        }}
      >
        {expenseCards.map((expense, index) => {
          return (
            <Box key={index}>
              <Card key={index} sx={{ width: 200, height: 650, margin: 4 }}>
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
      
    </Box>
  );
}
