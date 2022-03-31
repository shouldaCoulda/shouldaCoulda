import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Tabs, Tab, Box } from '@mui/material';

const ChartTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable auto tabs example'
      >
        <Tab
          icon={
            <Link to='/PieChart'>
              <Avatar
                alt='pie chart'
                src='https://img.icons8.com/dusk/64/000000/chart.png'
              />
            </Link>
          }
        />

        <Tab label='Item Two' />
        <Tab label='Item Three' />
        <Tab label='Item Four' />
        <Tab label='Item Five' />
        <Tab label='Item Six' />
        <Tab label='Item Seven' />
      </Tabs>
    </Box>
  );
};
export default ChartTab;
