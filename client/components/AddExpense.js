import React, { useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@mui/material';

const AddExpense = () => {
  const { writeExpenseData, currentUser } = useAuth();
  let nameRef = useRef('');
  let ammountRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const expense = {
      name: nameRef.current.value,
      ammount: ammountRef.current.value,
    };
    writeExpenseData(expense);
    nameRef.current.value = '';
    ammountRef.current.value = '';
  }

  return (
    <Box>
      <FormControl>
        <InputLabel htmlFor='Name'>Name</InputLabel>
        <Input aria-describedby='my-helper-text' inputRef={nameRef} />
        <FormHelperText>Name of your Expense:</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='Price'>Amount</InputLabel>
        <Input aria-describedby='my-helper-text' inputRef={ammountRef} />
        <FormHelperText>Monthly amount:</FormHelperText>
      </FormControl>
      <Button onClick={(e) => handleSubmit(e)}>submit</Button>
    </Box>
  );
};

export default AddExpense;
