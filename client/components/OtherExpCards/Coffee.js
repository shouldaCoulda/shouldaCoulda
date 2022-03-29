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

export default function CoffeeCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Coffee"
        height="140"
        image="https://images.thestar.com/dQxi2pPwqocxfcGxOzSRrHdV-Fs=/1086x544/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/news/gta/2009/03/11/tempest_in_coffee_cup_consumes_city_hall/tempest_in_coffee_cup_consumes_cityhall.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Coffee
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Do you spend $5/day at Starbucks and could be making your own coffee at home or work? Use this section for any coffee savings you think you could produce each month.
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