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

export default function CoffeeOtherCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Coffee"
        height="140"
        image="https://mshanken.imgix.net/wso/Articles/2018/NS_health112817_1600.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Other / Coffee
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Use this section to total up any other expenses you would like to add to your chart. A good example would be that you spend $5/day at Starbucks and could reduce that monthly expense by making your own coffee at home or work.
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
