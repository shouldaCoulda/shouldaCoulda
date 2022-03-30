import React, { useRef } from "react";
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
  Collapse,
  IconButton,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { expenseCards } from "../../../script/OtherExpenses";


export default function ExpenseCard() {


  return (
    <Box
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 2,
      }}
    >
      {expenseCards.map((expense, index) => {

        const handleSubmit = async (e) => {
          console.log("submit", expense.name, "price", priceRef.current.value);
          // e.preventDefault();
          // writeSubscriptionData(
          //   nameRef.current.value,
          //   priceRef.current.value,
          //   currentUser.uid
          // );
        };

        const [expanded, setExpanded] = React.useState(false);
        const priceRef = useRef()
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
        const ExpandMore = styled((props) => {
          const { expand, ...other } = props;
          return <IconButton {...other} />;
        })(({ theme, expand }) => ({
          transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        }));

        return (
          <Box key={index}>
            <Card key={index} sx={{ width: 250, margin: 1 }}>
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
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
       <FormControl>
        <InputLabel htmlFor="Price">Price</InputLabel>
        <Input aria-describedby="my-helper-text" inputRef={priceRef} />
        <FormHelperText>monthly cost:</FormHelperText>
      </FormControl>
      <Button onClick={handleSubmit}>submit</Button>
        </CardContent>
      </Collapse>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}
