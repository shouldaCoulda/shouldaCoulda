import React, { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
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
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { expenseCards } from "../../../script/OtherExpenses";
import { useOtherExpenses } from "../../contexts/OtherExpContext";

export default function ExpenseCard() {
  const { writeUserData, currentUser } = useAuth();
  const { writeExpenseData } = useOtherExpenses();
  // const write = (e) => {
  //   e.preventDefault();
  //   var user = {
  //     uid: currentUser.uid,
  //     email: currentUser.email,
  //   };
  //   writeUserData(user);
  // };

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
          e.preventDefault();
          writeExpenseData(
            expense.name,
            priceRef.current.value,
            currentUser.uid
          );
        };

        const [expanded, setExpanded] = React.useState(false);
        const priceRef = useRef();
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
        const ExpandMore = styled((props) => {
          const { expand, ...other } = props;
          return <IconButton {...other} />;
        })(({ theme, expand }) => ({
          transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
          marginLeft: "auto",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
          }),
        }));

        return (
          <Box key={index}>
            <Card
              key={index}
              sx={{
                width: 250,
                minHeight: 450,
                margin: 1,
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                border: 0.3,
                borderColor: "lightgray",
                boxShadow: "5px 5px 9px  lightgray",
              }}
            >
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
                  <AddIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <FormControl>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                      aria-describedby="my-helper-text"
                      inputRef={priceRef}
                      sx={{ border: "none" }}
                    />
                    <FormHelperText>monthly</FormHelperText>
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
