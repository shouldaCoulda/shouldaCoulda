import { useAuth } from '../contexts/AuthContext';
import React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';
import ChartTab from './ChartTab';

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();

  return (
    <Box>
      <Typography variant='h3'>select from the options </Typography>
      <Card
        sx={{
          maxWidth: 900,
          margin: 0,
          padding: 0,
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <ChartTab />
        <CardMedia
          component='img'
          src={
            'https://image.shutterstock.com/image-vector/set-colourful-business-charts-diagram-260nw-1388414240.jpg'
          }
          alt='green iguana'
          sx={{
            width: 600,
            marginTop: 5,
          }}
        />
      </Card>
    </Box>
  );
};

export default Home;
