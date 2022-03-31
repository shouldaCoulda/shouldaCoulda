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
            <Link to='/chart'>
              <Avatar
                alt='line chart'
                src='https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-Chart-business-and-marketing-bearicons-flat-bearicons.png'
              ></Avatar>
            </Link>
          }
        />
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

        <Tab
          icon={
            <Link to='/List'>
              <Avatar
                alt='list'
                src='https://img.icons8.com/ios-filled/50/000000/list.png'
              />
            </Link>
          }
        />
        <Tab label='Item Four' />
        <Tab label='Item Five' />
        <Tab label='Item Six' />
        <Tab label='Item Seven' />
      </Tabs>
    </Box>
  );
};
export default ChartTab;
