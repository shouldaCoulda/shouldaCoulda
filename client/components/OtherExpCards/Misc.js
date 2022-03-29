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

export default function MiscCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Misc"
        height="140"
        image="https://images.tech.co/wp-content/uploads/2020/01/03081100/streamingbanner-708x400.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Other / Miscellaneous
        </Typography>
        <Typography variant="body2" color="text.secondary">
          If there are any other expenses that you think you could reduce in future months, use this section. Maybe you have a gym membership that you never use? Or anything else, feel free to add it here.
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
