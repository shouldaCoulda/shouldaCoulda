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

export default function AlcoholCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Alcohol"
        height="140"
        image="https://mshanken.imgix.net/wso/Articles/2018/NS_health112817_1600.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Alcohol
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Have you thought about cutting down on drinking? Use this section to find out how much you could be saving if you were to invest some of that money.
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
