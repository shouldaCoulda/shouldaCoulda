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
        image="https://media.istockphoto.com/photos/anything-else-picture-id471941335?k=20&m=471941335&s=612x612&w=0&h=3sqLPaqFhLRmMyQC5MBACpwf_d-3zP6tvGslPYblWrU="
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Other / Miscellaneous
        </Typography>
        <Typography variant="body2" color="text.secondary">
          If there are any other expenses that you think you could reduce in future months, use this section. Maybe you have a gym membership that you never use? Or anything else, add it here.
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
