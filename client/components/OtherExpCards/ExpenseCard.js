import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  TextField,
  Box,
  Card,
  Button,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  InputAdornment,
  Collapse,
  IconButton,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { expenseCards } from "../../../script/OtherExpenses";
import { useOtherExpenses } from "../../contexts/OtherExpContext";
import { useHistory } from "react-router-dom";
export default function ExpenseCard() {
  const { writeUserData, currentUser } = useAuth();
  const { writeExpenseData } = useOtherExpenses();
  const [fourms, setfourms] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let array = [];
    for (let j = 0; j < expenseCards.length; j++) {
      array.push({
        ammount: "",
        name: expenseCards[j].name,
      });
    }
    setfourms(array);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    writeExpenseData(fourms, currentUser.uid);
    history.push("/selections");
  };
  return (
    <Box textAlign="center">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: 2,
          width: "70vw",
          justifyContent: "center",
        }}
      >
        {expenseCards.map((expense, index) => {
          function handleChange(e) {
            let array = [];
            for (let j = 0; j < expenseCards.length; j++) {
              if (j === index) {
                array.push({
                  ammount: e.target.value,
                  name: expenseCards[j].name,
                });
              } else {
                array.push(
                  fourms[j] || {
                    ammount: "",
                    name: expenseCards[j].name,
                  }
                );
              }
            }
            setfourms(array);
          }

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

                  minHeight: 490,
                  margin: 1,
                  display: "flex",
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
                        type="text"
                        value={fourms[index]?.ammount}
                        onChange={handleChange}
                        sx={{ border: "none" }}
                      />
                      <FormHelperText>monthly</FormHelperText>
                    </FormControl>
                  </CardContent>
                </Collapse>
              </Card>
            </Box>
          );
        })}
      </Box>
      <Button
        onClick={handleSubmit}
        sx={{
          justifySelf: "center",
          marginTop: 5,
          borderWidth: 0,
          boxShadow: "3px 2px 10px darkgray",
          borderCollapse: "collapse",
          color: "black",
          borderRadius: 40,
          width: 150,
        }}
      >
        Next
      </Button>
    </Box>
  );
}
