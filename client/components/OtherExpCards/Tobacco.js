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

export default function TobaccoCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Tobacco"
        height="140"
        image="https://s.abcnews.com/images/Health/WireAP_40a3067d6b614a6fa8bd79f73c844fab_16x9_1600.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tobacco Products
        </Typography>
        <Typography variant="body2" color="text.secondary">
          If you use tobacco products and would like to analyze how much you could save by quitting, use this section to estimate how much you spend per month on these products.
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
