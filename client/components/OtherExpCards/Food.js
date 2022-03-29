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
  InputAdornment
} from "@mui/material";

export default function FoodCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Food Delivery"
        height="140"
        image="https://technofaq.org/wp-content/uploads/2019/10/whereyatcom_521663620.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Food Delivery/Pick-Up
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Check your order history on food delivery services such as uberEats and Doordash.
          Now fill in how much $ you think you could save in future months by cutting back on food services.
        </Typography>
      </CardContent>
      <CardActions>
        <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
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
  )
}
