import { useAuth } from '../contexts/AuthContext';
import React from 'react';
import { Box, Tabs, Tab, Typography, Card, CardMedia } from '@mui/material';

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
        <Box
          sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons
            allowScrollButtonsMobile
            aria-label='scrollable force tabs example'
          >
            <Tab label='Item One' />
            <Tab label='Item Two' />
            <Tab label='Item Three' />
            <Tab label='Item Four' />
            <Tab label='Item Five' />
            <Tab label='Item Six' />
            <Tab label='Item Seven' />
          </Tabs>
        </Box>
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
