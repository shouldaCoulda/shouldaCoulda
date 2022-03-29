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

export default function StreamingOtherCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Streaming"
        height="140"
        image="https://images.tech.co/wp-content/uploads/2020/01/03081100/streamingbanner-708x400.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Other Streaming Services
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Please use this section to add any addition streaming services that you pay for. Just add them up and put the total below.
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
