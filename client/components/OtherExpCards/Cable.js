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

export default function CableCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Cable"
        height="140"
        image="https://www.bitsonbroadband.com/wp-content/uploads/2014/05/Satellite-TV.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cable/Directv
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Do you pay for a cable service, directv, or an equivalent service that you lower your cost of or cut out completely? Check your account statements and estimate potential savings below.
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
